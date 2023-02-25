import { Skill } from "@/types/Skill";

type SkillSVGProps = {
  skills: Skill[];
};

export default function SkillsSVG({ skills }: SkillSVGProps): string {
  return `
    <svg xmlns="http://www.w3.org/2000/svg"
      viewbox="0 0 300 300"
      width="300" height="300"
      style="background-color:#333"
    >
      <style>
        text { 
          font-family: monospace;
          fill: white;
        }
      </style>
      ${
        skills.length > 0
          ? `<text x="8" y="16" font-size="1.5em">Skills</text>` +
            skills
              .map(
                (skill, i) => `
              <g>
                <image x="8" y="${i * 32 + 20}" href="${
                  skill.imgUrl
                }" height="28" width="28" />
                <text x="48" y="${(i + 1) * 32}">${skill.name}</text>
                <text x="48" y="${(i + 1) * 32 + 16}">${skill.exp}</text>
              </g>
            `
              )
              .join()
          : `<text>😢 No skill yet 😢</text>`
      }
    </svg>`;
}
