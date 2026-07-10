"use client";

import { useEffect, useState } from "react";
import TimerArc from "@/components/TimerArc";

export function AnimatedTimerArcBackground() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(Math.random());
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 m-auto opacity-50">
      <TimerArc
        className="blur-3xl animate-pulse"
        progress={progress}
        radius={400}
        strokeWidth={700}
        stroke="#E1FF00"
        viewBoxSize={1500}
      />
    </div>
  );
}
