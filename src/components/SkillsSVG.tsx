import { Skill } from "@/types/Skill";

type SkillSVGProps = {
  skills: Skill[];
};

export default function SkillsSVG({ skills }: SkillSVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      {skills.length > 0 ? (
        skills.map((skill) => (
          <>
            <text>{skill.name}</text>
            <text>{skill.exp}</text>
            <image xlinkHref={skill.imgUrl}></image>
          </>
        ))
      ) : (
        <text>😢 No skill yet 😢</text>
      )}
    </svg>
  );
}
