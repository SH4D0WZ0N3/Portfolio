import Reveal from "@/app/components/Reveal";
import SectionLabel from "@/app/components/SectionLabel";

const services = [
  {
    icon: "⚡",
    title: "Telegram Infrastructure",
    desc: "Full-stack Telegram platforms — subscription management, payment verification, content moderation, vault systems, and admin control — built on MTProto via Pyrogram.",
    tags: ["Pyrogram", "MTProto", "Webhooks", "FloodWait"],
  },
  {
    icon: "🔄",
    title: "Automation Systems",
    desc: "Content pipelines that run without manual intervention. Scheduled workers, media group buffers, queue-based distribution, and watermark rendering — zero downtime in production.",
    tags: ["APScheduler", "Queue Systems", "Media Pipelines"],
  },
  {
    icon: "🗄",
    title: "Backend Architecture",
    desc: "Async Python and Node.js backends with MongoDB, atomic state machines, idempotent operations, and full audit trails. Every critical path is restart-safe by design.",
    tags: ["FastAPI", "MongoDB", "Redis", "Motor"],
  },
  {
    icon: "🛡",
    title: "Custom Admin Platforms",
    desc: "Multi-admin control panels with role-based access, AI-powered FAQ routing, ban and ticket systems, permanent user topic CRMs, and full audit logging for ops teams.",
    tags: ["RBAC", "AI FAQ", "Audit Logs", "Tickets"],
  },
  {
    icon: "📡",
    title: "Content Distribution",
    desc: "Source-to-target delivery without Telegram's \"Forwarded\" metadata. Native-feel pipelines with scheduling, daily limit enforcement, and per-account rate protection.",
    tags: ["Content Queuing", "Rate Limits", "Scheduling"],
  },
  {
    icon: "🌐",
    title: "Internal Business Tools",
    desc: "React + Node.js dashboards with real-time WebSocket feeds, multi-bot lifecycle management, broadcast tooling, and cross-platform WhatsApp automation.",
    tags: ["React", "Node.js", "WebSocket", "Vite"],
  },
];

export default function Build() {
  return (
    <section id="build" className="py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal><SectionLabel>01 — What I Build</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono font-bold tracking-tight text-[#f0f0f2] mb-4"
            style={{ fontSize: "clamp(24px,3.5vw,40px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            Systems That Scale.<br />Platforms That Deliver.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[#8a8a99] text-[15px] leading-[1.75] max-w-xl mb-14">
            I don't write code that needs babysitting. Every system I build is restart-safe,
            observable, and designed to run unsupervised at production scale.
          </p>
        </Reveal>

        <div
          className="grid gap-px rounded-xl overflow-hidden"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="group bg-[#0b0b0e] p-7 h-full transition-colors duration-200 hover:bg-[#111116] relative overflow-hidden">
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c8102e] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div
                  className="w-11 h-11 rounded flex items-center justify-center text-lg mb-5 transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(200,16,46,0.2)]"
                  style={{ background: "rgba(200,16,46,0.1)", border: "1px solid rgba(200,16,46,0.2)" }}
                >
                  {s.icon}
                </div>
                <h3 className="font-mono text-sm font-semibold text-[#f0f0f2] mb-2.5">{s.title}</h3>
                <p className="text-[13px] text-[#8a8a99] leading-[1.65] mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] text-[#444455] bg-[#17171e] border border-white/[0.06] px-2.5 py-1 rounded-full tracking-[0.04em]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
