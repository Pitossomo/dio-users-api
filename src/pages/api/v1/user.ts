// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import request from "request";
import cheerio from "cheerio";

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

  request(
    `https://web.dio.me/user/${name}?tab=skills`,
    (error, response, html) => {
      if (!error) {
        const $ = cheerio.load(html);
        /*
        TODO - get dynamic content
        let skills: string[] = ["a", "b", "c"];
        $(".sc-bsVkav").each((i, el) => {
          skills.push("z");
        });
        */
        res.status(200).send($("title").text());
      }
    }
  );
}
