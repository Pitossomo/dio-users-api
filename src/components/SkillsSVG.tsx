import { Skill } from "@/types/Skill";
import ExperienceBar from "./ExperienceBar";

type SkillSVGProps = {
  skills: Skill[];
};

export default function SkillsSVG({ skills }: SkillSVGProps): string {
  const maxExp = skills.reduce((max, skill) => Math.max(max, skill.exp), 0);
  const maxLengthFactor = 284 / maxExp;
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
                <text x="8" text-anchor="start" y="${(i + 1) * 32}">${
                  skill.name
                }</text>
                <text x="284" text-anchor="end" y="${(i + 1) * 32}">${
                  skill.exp
                }</text>
                ${ExperienceBar({
                  xLength: skill.exp * maxLengthFactor,
                  index: i,
                })}
              </g>
            `
              )
              .join()
          : `<text>😢 No skill yet 😢</text>`
      }
    </svg>`;
}
