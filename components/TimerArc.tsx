type TimerArcProps = {
  progress: number;
  radius: number;
  strokeWidth: number;
  stroke: string;
  viewBoxSize: number;
  className?: string;
};

function TimerArc({
  progress,
  radius,
  strokeWidth,
  stroke,
  viewBoxSize,
  className,
}: TimerArcProps) {
  const center = viewBoxSize / 2;
  const clampedProgress = Math.max(0, Math.min(1, progress));
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference * (1 - clampedProgress);

  return (
    <svg
      className={["timer-circle-container", className].filter(Boolean).join(" ")}
      width={viewBoxSize}
      height={viewBoxSize}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
    >
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform={`rotate(-90 ${center} ${center})`}
      />
    </svg>
  );
}

export default TimerArc;
