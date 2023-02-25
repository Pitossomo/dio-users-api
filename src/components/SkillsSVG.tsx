import { Skill } from "@/types/Skill";

type SkillSVGProps = {
  skills: Skill[];
};

export default function SkillsSVG({ skills }: SkillSVGProps): string {
  return `
    <svg xmlns="http://www.w3.org/2000/svg"
      viewbox="0 0 300 300"
      width="300" height="300"
      style="background-color:darkgray"
    >
      <style>
        text { 
          font: normal 8px monospace;
          fill: white;
        }
      </style>
      ${
        skills.length > 0
          ? `<text x="0" y="15">Skills</text>` +
            skills
              .map(
                (skill, i) => `
              <g>
                <image x="150" y="${i * 30 + 15}" href="${
                  skill.imgUrl
                }" height="30" width="30" />
                <text x="0" y="${(i + 1) * 30}">${skill.name}</text>
                <text x="70" y="${(i + 1) * 30}">${skill.exp}</text>
              </g>
            `
              )
              .join()
          : `<text>😢 No skill yet 😢</text>`
      }
    </svg>`;
}
