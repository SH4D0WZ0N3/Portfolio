"use client";
import { useEffect, useRef } from "react";

export default function BgLayers() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const onMove = (e: MouseEvent) => {
      glow.style.opacity = "1";
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    const onLeave = () => { glow.style.opacity = "0"; };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      {/* Grid */}
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%,black 40%,transparent 100%)",
        }}
      />
      {/* Noise */}
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Top glow */}
      <div
        aria-hidden
        className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle,rgba(200,16,46,0.07) 0%,transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Mouse glow */}
      <div
        ref={glowRef}
        aria-hidden
        className="fixed pointer-events-none z-0 w-[480px] h-[480px] rounded-full opacity-0 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle,rgba(200,16,46,0.045) 0%,transparent 65%)",
          filter: "blur(20px)",
        }}
      />
    </>
  );
}
