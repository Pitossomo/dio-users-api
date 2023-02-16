// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

type Skill = {
  imgUrl: string;
  name: string;
  exp: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`https://web.dio.me/user/${name}?tab=skills`, {
      timeout: 120000,
    });

    const skills = await page.evaluate(() => {
      return document.body.innerHTML;
    });

    browser.close();

    res.status(200).send(skills);
  })();
}

/*
    const skills: Skill[] = await page.evaluate(() => {
      let parsedSkill: Skill[] = [];
      document.querySelectorAll(".sc-bsVkav").forEach((el) => {
        parsedSkill.push({
          name: el.querySelectorAll(".sc-eHAsqE")[0]?.textContent ?? "MissngNo",
          exp:
            el.querySelectorAll(".sc-eHAsqE")[1]?.textContent ?? " ????/????",
          imgUrl:
            el.querySelector("sc-gnyVkE")?.getAttribute("src") ??
            "public\vercel.svg",
        });
      });
      return parsedSkill;
    });

    */
