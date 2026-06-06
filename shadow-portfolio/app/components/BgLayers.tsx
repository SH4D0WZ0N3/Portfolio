"use client";
import { useEffect, useRef } from "react";

export default function BgLayers() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    let raf: number;
    let mx = 0, my = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        glow.style.opacity = "1";
        glow.style.left = mx + "px";
        glow.style.top = my + "px";
      });
    };
    const leave = () => { glow.style.opacity = "0"; };
    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      {/* Grid */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.024) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(255,255,255,0.024) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(ellipse 90% 65% at 50% 0%,black 30%,transparent 100%)",
        }}
      />
      {/* Noise */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none select-none opacity-[0.032]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Top radial glow */}
      <div
        aria-hidden="true"
        className="fixed pointer-events-none z-0 select-none"
        style={{
          top: "-260px", left: "50%", transform: "translateX(-50%)",
          width: "900px", height: "900px", borderRadius: "50%",
          background: "radial-gradient(circle,rgba(200,16,46,0.065) 0%,transparent 68%)",
          filter: "blur(70px)",
        }}
      />
      {/* Mouse glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="fixed pointer-events-none z-0 select-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          width: "520px", height: "520px", borderRadius: "50%", opacity: 0,
          background: "radial-gradient(circle,rgba(200,16,46,0.042) 0%,transparent 65%)",
          filter: "blur(24px)",
        }}
      />
    </>
  );
}
