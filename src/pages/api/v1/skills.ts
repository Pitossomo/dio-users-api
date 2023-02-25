import type { NextApiRequest, NextApiResponse } from "next";
import cache from "memory-cache";
import parseSkills from "@/controllers/SkillsParser";

const CACHE_PERIOD = 7 * 24 * 60 * 60 * 1000;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { username } = req.query;
  if (typeof username !== "string") return;
  const cachedResponse = cache.get(username);
  if (cachedResponse) {
    res
      .status(200)
      .setHeader("Content-type", "image/svg+xml")
      .send(cachedResponse);
    return;
  }

  const skillsImage = await parseSkills(username);
  cache.put(username, skillsImage, CACHE_PERIOD);

  res.status(200).setHeader("Content-type", "image/svg+xml").send(skillsImage);
}
