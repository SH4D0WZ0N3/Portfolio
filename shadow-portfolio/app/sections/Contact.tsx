import Reveal from "@/app/components/Reveal";
import SectionLabel from "@/app/components/SectionLabel";

const links = [
  { icon: "✈", label: "TELEGRAM — Preferred", value: "@SH4D0WZ0N3", href: "https://t.me/SH4D0WZ0N3" },
  { icon: "✉", label: "EMAIL — Encrypted", value: "sh4d0wz0n3@proton.me", href: "mailto:sh4d0wz0n3@proton.me" },
  { icon: "⌥", label: "GITHUB", value: "github.com/SH4D0WZ0N3", href: "https://github.com/SH4D0WZ0N3" },
];

const specialties = [
  "Telegram Bot & SaaS Platforms",
  "Content Automation Infrastructure",
  "Admin Dashboards & Control Panels",
  "Multi-Platform Messaging Systems",
  "Backend API & Database Architecture",
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal><SectionLabel>07 — Contact</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono font-bold tracking-tight text-[#f0f0f2] mb-4"
            style={{ fontSize: "clamp(24px,3.5vw,40px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            Let's Build<br />Something Serious.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[#8a8a99] text-[15px] leading-[1.75] max-w-xl mb-14">
            I take on a limited number of projects at a time. If you need a
            Telegram platform, automation system, or backend architecture
            built right — reach out.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <Reveal delay={0.05}>
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 p-4 bg-[#0b0b0e] border border-white/[0.06] rounded-xl text-[#f0f0f2] hover:border-[rgba(200,16,46,0.25)] hover:bg-[#111116] hover:translate-x-1 transition-all duration-200"
                >
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: "rgba(200,16,46,0.1)", border: "1px solid rgba(200,16,46,0.2)" }}
                  >
                    {l.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[10px] text-[#444455] tracking-[0.08em] mb-0.5">{l.label}</div>
                    <div className="font-mono text-[13px] text-[#f0f0f2] truncate">{l.value}</div>
                  </div>
                  <span className="font-mono text-[#444455] group-hover:text-[#c8102e] group-hover:translate-x-0.5 transition-all duration-200">→</span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="rounded-xl p-7"
              style={{ background: "#0b0b0e", border: "1px solid rgba(200,16,46,0.2)" }}
            >
              <div className="flex items-center gap-2.5 mb-4 font-mono text-[13px] font-medium text-[#22c55e]">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_10px_#22c55e] animate-[pulse-dot_2s_ease_infinite]" />
                Available for New Projects
              </div>
              <p className="text-[14px] text-[#8a8a99] leading-[1.75] mb-6">
                I specialize in Telegram infrastructure. If you need a subscription
                platform, content pipeline, admin system, or custom bot built to
                production standards — this is the right conversation to have.
              </p>
              <div className="flex flex-col gap-2.5">
                {specialties.map((s) => (
                  <div key={s} className="flex items-center gap-2.5 font-mono text-[12px] text-[#8a8a99]">
                    <span className="w-1 h-1 rounded-full bg-[#c8102e] flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
