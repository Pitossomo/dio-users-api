// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import request from "request";

type Data = {
  name: string | string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query;

  request(
    `https://web.dio.me/user/${name}?tab=skills`,
    (error, response, html) => {
      if (!error) {
        res.status(200).json(html);
      }
    }
  );
}
