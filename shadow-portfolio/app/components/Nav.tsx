"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#build", label: "Build" },
  { href: "#cases", label: "Cases" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#arch", label: "Architecture" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ show }: { show: boolean }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY + 100;
      sections.forEach((s) => {
        const el = s as HTMLElement;
        if (
          el.offsetTop <= scrollY &&
          el.offsetTop + el.offsetHeight > scrollY
        ) {
          setActive(el.id);
        }
      });
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 h-14 z-50 flex items-center justify-between px-6 md:px-10 border-b border-white/[0.06]"
      style={{ background: "rgba(6,6,8,0.8)", backdropFilter: "blur(20px)" }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-widest text-[#f0f0f2]"
      >
        <span className="w-2 h-2 rounded-full bg-[#c8102e] shadow-[0_0_10px_#c8102e] animate-[pulse-dot_2.5s_ease_infinite]" />
        SH4D0W
      </button>

      <ul className="hidden md:flex items-center gap-7">
        {links.map((l) => (
          <li key={l.href}>
            <button
              onClick={() => scrollTo(l.href)}
              className={`font-mono text-[11px] tracking-[0.08em] uppercase transition-colors duration-200 ${
                active === l.href.slice(1) ? "text-[#f0f0f2]" : "text-[#444455] hover:text-[#8a8a99]"
              }`}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollTo("#contact")}
        className="font-mono text-xs tracking-[0.06em] text-[#c8102e] border border-[#c8102e]/40 px-5 py-2 rounded hover:border-[#c8102e] hover:bg-[#c8102e]/10 transition-all duration-200"
      >
        Hire Me →
      </button>
    </motion.nav>
  );
}
