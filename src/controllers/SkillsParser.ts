import SkillsSVG from "@/components/SkillsSVG";
import { Skill } from "@/types/Skill";
import puppeteer from "puppeteer";

export default async function parseSkills(username: string) {
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
  return SkillsSVG({ skills });
}
