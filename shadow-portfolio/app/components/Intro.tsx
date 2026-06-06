"use client";
import { useEffect, useState } from "react";

const LINES = [
  { text: "SHADOW CORE v2.5.1", accent: false, delay: 220 },
  { text: "SYSTEM: INITIALIZING", accent: false, delay: 680 },
  { text: "BUILDING INFRASTRUCTURE IN SILENCE", accent: true, delay: 1250 },
  { text: "Ontario, Canada — STATUS: OPERATIONAL", accent: false, delay: 1950 },
];

export default function Intro({ onDone }: { onDone: () => void }) {
  const [shown, setShown] = useState<number[]>([]);
  const [bar1, setBar1] = useState(false);
  const [bar2, setBar2] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    LINES.forEach((l, i) => {
      setTimeout(() => setShown((p) => [...p, i]), l.delay);
    });
    setTimeout(() => setBar1(true), 550);
    setTimeout(() => setBar2(true), 1800);
    setTimeout(() => setExiting(true), 3100);
    setTimeout(() => { setGone(true); onDone(); }, 3900);
  }, [onDone]);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-5"
      style={{
        background: "#060608",
        opacity: exiting ? 0 : 1,
        transition: "opacity 0.8s ease",
        pointerEvents: exiting ? "none" : "all",
      }}
    >
      {LINES.map((l, i) => (
        <p
          key={i}
          className="mono text-[12px] tracking-[0.22em] uppercase"
          style={{
            color: l.accent ? "#c8102e" : "#444455",
            fontWeight: l.accent ? 500 : 400,
            opacity: shown.includes(i) ? 1 : 0,
            transform: shown.includes(i) ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.55s ease, transform 0.55s ease",
          }}
        >
          {l.text}
        </p>
      ))}
      <div
        style={{
          width: "200px", height: "1px",
          background: "linear-gradient(to right,transparent,#c8102e,transparent)",
          opacity: bar1 ? 1 : 0,
          transform: bar1 ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          position: "absolute",
          top: "calc(50% - 40px)",
        }}
      />
      <div
        style={{
          width: "120px", height: "1px",
          background: "linear-gradient(to right,transparent,rgba(200,16,46,0.4),transparent)",
          opacity: bar2 ? 1 : 0,
          transition: "opacity 0.6s ease",
          position: "absolute",
          top: "calc(50% + 40px)",
        }}
      />
    </div>
  );
}
