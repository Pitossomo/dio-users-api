type AnimatedBarProps = {
  xLength: number;
  index: number;
};

const COLORS = [
  "forestgreen",
  "tomato",
  "goldenrod",
  "dodgerblue",
  "deeppink",
  "teal",
];

export default function ExperienceBar({ xLength, index }: AnimatedBarProps) {
  const y = (index + 1) * 32 + 12;
  return `
    <line
      x1="8" x2="${xLength}" 
      y1="${y}" y2="${y}"
      stroke-width="6px" stroke="${COLORS[index]}"
      stroke-linecap="round"
    >
      <animate
        attributeName="x2"
        values="0;${xLength}"
        dur="1s"
      />
    </line>
  `;
}
