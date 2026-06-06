"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.22}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center pt-14 overflow-hidden"
    >
      {/* LEFT */}
      <div className="flex flex-col justify-center px-6 md:px-14 lg:px-20 py-20 md:py-0 relative z-10">
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-7">
          <span className="w-8 h-px bg-[#c8102e] opacity-60" />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#c8102e]">
            Backend Systems &amp; Telegram Infrastructure
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="font-mono font-bold leading-[1.05] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(32px,4.5vw,58px)" }}
        >
          Infrastructure<br />
          <span className="text-[#c8102e]">That Operates</span><br />
          <span className="text-[#444455]">In Silence.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-[#8a8a99] leading-[1.8] max-w-md mb-10"
          style={{ fontSize: "clamp(14px,1.4vw,16px)" }}
        >
          I design and build production-grade Telegram platforms,
          automation pipelines, and distributed backend systems —
          engineered for reliability, not just functionality.
          Based in Ontario, Canada.
        </motion.p>

        <motion.div {...fadeUp(0.35)} className="flex items-center gap-4 flex-wrap mb-10">
          <span className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] text-[#444455]">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="4" stroke="#c8102e" strokeWidth="1"/>
              <circle cx="5" cy="5" r="2" fill="#c8102e"/>
            </svg>
            Ontario, Canada
          </span>
          <span className="text-[#2a2a38]">·</span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] text-[#444455]">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_6px_#22c55e]" />
            Available for Projects
          </span>
          <span className="text-[#2a2a38]">·</span>
          <span className="font-mono text-[11px] tracking-[0.06em] text-[#444455]">MTProto Specialist</span>
        </motion.div>

        <motion.div {...fadeUp(0.4)} className="flex gap-3 flex-wrap mb-12">
          <button
            onClick={() => document.querySelector("#cases")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 font-mono text-sm font-medium text-white bg-[#c8102e] px-6 py-3 rounded hover:bg-[#e0122f] transition-all duration-200 hover:-translate-y-px shadow-[0_0_24px_rgba(200,16,46,0.2)] hover:shadow-[0_4px_28px_rgba(200,16,46,0.35)]"
          >
            View Case Studies →
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 font-mono text-sm text-[#f0f0f2] bg-[#111116] border border-white/10 px-6 py-3 rounded hover:bg-[#17171e] hover:border-white/20 transition-all duration-200 hover:-translate-y-px"
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          {...fadeUp(0.45)}
          className="flex gap-8 pt-10 border-t border-white/[0.06]"
        >
          {[
            { n: "7+", l: "Production Systems" },
            { n: "13", l: "Subsystems in Largest Build" },
            { n: "100%", l: "Async Architecture" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-mono text-[28px] font-bold text-[#f0f0f2] leading-none mb-1">
                {s.n.endsWith("%") ? <>{s.n.slice(0,-1)}<span className="text-[#c8102e]">%</span></> :
                 s.n.endsWith("+") ? <>{s.n.slice(0,-1)}<span className="text-[#c8102e]">+</span></> :
                 s.n}
              </div>
              <div className="font-mono text-[10px] text-[#444455] tracking-[0.05em]">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* RIGHT — IMAGE */}
      <div className="relative h-full min-h-[500px] md:min-h-screen overflow-hidden order-first md:order-last">
        <div ref={bgRef} className="absolute inset-0 will-change-transform">
          <Image
            src="/hero-artwork.png"
            alt="SH4D0W — Backend Engineer"
            fill
            priority
            className="object-cover object-top"
            style={{ filter: "brightness(0.52) saturate(0.8)" }}
          />
        </div>

        {/* Vignettes */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(to right,#060608 0%,transparent 32%),linear-gradient(to top,#060608 0%,transparent 22%),linear-gradient(to bottom,rgba(6,6,8,0.3) 0%,transparent 20%)",
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 50% at 60% 40%,rgba(200,16,46,0.12) 0%,transparent 60%)",
        }} />

        {/* Frame */}
        <div className="absolute pointer-events-none rounded-xl" style={{
          top:"clamp(30px,5%,60px)", right:"clamp(20px,4%,50px)",
          bottom:"clamp(30px,5%,60px)", left:"clamp(20px,4%,50px)",
          border:"1px solid rgba(200,16,46,0.18)",
          boxShadow:"inset 0 0 60px rgba(200,16,46,0.04),0 0 0 1px rgba(255,255,255,0.03)",
        }}>
          <span className="absolute -top-px left-8 right-8 h-px" style={{ background:"linear-gradient(to right,transparent,rgba(200,16,46,0.6),transparent)" }} />
          <span className="absolute -bottom-px left-8 right-8 h-px" style={{ background:"linear-gradient(to right,transparent,rgba(200,16,46,0.3),transparent)" }} />
        </div>

        {/* Scan line */}
        <div className="absolute left-0 right-0 h-px pointer-events-none animate-[scan_4s_ease-in-out_infinite]" style={{
          background:"linear-gradient(to right,transparent 0%,rgba(200,16,46,0.5) 50%,transparent 100%)",
        }} />

        {/* Status badge */}
        <div className="absolute bottom-[8%] left-[7%] rounded p-3.5 pointer-events-none" style={{
          background:"rgba(6,6,8,0.88)", backdropFilter:"blur(20px)",
          border:"1px solid rgba(200,16,46,0.25)", boxShadow:"0 8px 32px rgba(0,0,0,0.5)",
        }}>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#f0f0f2] font-medium mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e] animate-[pulse-dot_2s_ease_infinite]" />
            SYSTEM ONLINE
          </div>
          {[
            { k: "LOCATION", v: "Ontario, CA", green: false },
            { k: "SPECIALITY", v: "Telegram Infra", green: false },
            { k: "AVAILABILITY", v: "OPEN", green: true },
          ].map((r) => (
            <div key={r.k} className="flex gap-2.5 font-mono text-[10px] text-[#444455] leading-6">
              <span className="min-w-[76px]">{r.k}</span>
              <span className={r.green ? "text-[#22c55e]" : "text-[#c8102e]"}>{r.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
