import SkillsSVG from "@/components/SkillsSVG";
import { Skill } from "@/types/Skill";
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import cache from "memory-cache";

const CACHE_PERIOD = 7 * 24 * 60 * 60 * 1000;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { username } = req.query;
  const cachedResponse = cache.get(username);
  if (cachedResponse) {
    res
      .status(200)
      .setHeader("Content-type", "image/svg+xml")
      .send(cachedResponse);
      return;
  }    

  (async () => {
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();

    await page.goto(`https://www.dio.me/sign-in`, {
      waitUntil: "networkidle0",
    });

    await page.type("#username", process.env.DIO_USERNAME as string);
    await page.type("#password", process.env.DIO_PASSWORD as string);
    await page.click("#kc-login");

    await page.waitForNavigation();

    await page.goto(`https://web.dio.me/users/${username}?tab=skills`, {
      waitUntil: "networkidle0",
    });

    const skills: Skill[] = await page.evaluate(() => {
      let parsedSkill: Skill[] = [];
      document.querySelectorAll(".ifSrgQ").forEach((el) => {
        parsedSkill.push({
          name: el.querySelectorAll(".fHfqGg")[0]?.innerHTML ?? "MissngNo",
          exp: el.querySelectorAll(".fHfqGg")[1]?.innerHTML ?? " ????/????",
          imgUrl:
            el.querySelector(".evmWdO")?.getAttribute("src") ??
            "public/vercel.svg",
        });
      });
      return parsedSkill;
    });

    browser.close();
    const skillsImage = SkillsSVG({ skills });
    cache.put(username, skillsImage, CACHE_PERIOD);

    res
      .status(200)
      .setHeader("Content-type", "image/svg+xml")
      .send(skillsImage);
  })();
}
