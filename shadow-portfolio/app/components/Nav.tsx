"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "build", label: "Build" },
  { href: "cases", label: "Cases" },
  { href: "philosophy", label: "Philosophy" },
  { href: "arch", label: "Architecture" },
  { href: "stack", label: "Stack" },
  { href: "contact", label: "Contact" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Nav({ show }: { show: boolean }) {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 120;
      document.querySelectorAll<HTMLElement>("section[id]").forEach((s) => {
        if (s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) setActive(s.id);
      });
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 md:px-10"
      style={{
        background: "rgba(6,6,8,0.82)",
        backdropFilter: "blur(22px) saturate(1.4)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        transform: show ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2.5 mono text-sm font-semibold tracking-widest"
        style={{ color: "#f0f0f2" }}
      >
        <span
          className="pulse-dot"
          style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "#c8102e",
            boxShadow: "0 0 12px #c8102e, 0 0 4px #c8102e",
            display: "inline-block",
          }}
        />
        SH4D0W
      </button>

      <ul className="hidden md:flex items-center gap-7 list-none">
        {LINKS.map((l) => (
          <li key={l.href}>
            <button
              onClick={() => scrollTo(l.href)}
              className="mono text-[11px] tracking-[0.08em] uppercase transition-colors duration-200"
              style={{ color: active === l.href ? "#f0f0f2" : "#444455" }}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollTo("contact")}
        className="mono text-[12px] tracking-[0.06em] transition-all duration-200"
        style={{
          color: "#c8102e",
          border: "1px solid rgba(200,16,46,0.4)",
          padding: "7px 18px",
          borderRadius: "6px",
          background: "rgba(200,16,46,0.06)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(200,16,46,0.14)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#c8102e";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(200,16,46,0.06)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(200,16,46,0.4)";
        }}
      >
        Contact Me →
      </button>
    </nav>
  );
}
