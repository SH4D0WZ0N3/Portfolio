import Reveal from "@/app/components/Reveal";
import SectionLabel from "@/app/components/SectionLabel";

const cases = [
  {
    name: "ContentVault Platform",
    concept: "Premium Telegram SaaS · 13 Subsystems",
    badges: [
      { label: "Flagship Build", type: "red" },
      { label: "Production", type: "green" },
      { label: "Python · MongoDB", type: "dim" },
    ],
    challenge: "Client needed a complete Telegram content monetization platform — subscription management, anonymous submission, content moderation, vault distribution, and a referral system — all in one bot, restart-safe with zero data loss.",
    architecture: "13 tightly integrated subsystems on a MongoDB-only truth model. Permanent per-user topic routing, async FSM, idempotent payment flows, watermark pipeline, and FloodWait protection throughout. Database is sole source of truth.",
    outcome: "Zero downtime on restart. Fraud-resistant referral system. Full audit trail on every admin action. Subscription lifecycle fully automated from first payment to expiry.",
    stack: ["Python", "Pyrogram", "MongoDB", "Redis", "APScheduler"],
  },
  {
    name: "CommandRelay",
    concept: "Admin Control Infrastructure · Webhook Mode",
    badges: [
      { label: "Production", type: "green" },
      { label: "Python · AI-Powered", type: "dim" },
    ],
    challenge: "Client's support team needed a robust admin bot with intelligent FAQ routing, ticket management, ban controls, and reliable webhook delivery — handling 8 concurrent admin connections without dropped messages.",
    architecture: "Webhook-mode bot with 8-worker connection pool, AI FAQ handler (OpenAI integration), structured handler registration, ban middleware, ticket routing, and custom timeout configuration per connection type.",
    outcome: "80% reduction in repetitive admin responses via AI FAQ. Zero message drops under concurrent load. Full modular design allows the client to swap handlers without touching core infrastructure.",
    stack: ["Python", "python-telegram-bot", "OpenAI", "MongoDB"],
  },
  {
    name: "BotOrchestra",
    concept: "Multi-Bot Management Dashboard",
    badges: [
      { label: "Production", type: "green" },
      { label: "React · Node.js", type: "dim" },
    ],
    challenge: "Client managed multiple Telegram bots manually via SSH. Needed a centralized dashboard to start/stop bots, monitor activity in real time, broadcast messages, and control auto-start behavior — no terminal required.",
    architecture: "React + Vite frontend with Zustand state management, connected to a Node.js backend over WebSocket. Real-time log streaming categorized by level (info/warn/error/system). Full bot lifecycle API with per-bot activity feeds.",
    outcome: "Client reduced operational overhead by 70%. Non-technical staff can now manage bot operations entirely through the dashboard with zero command-line exposure.",
    stack: ["TypeScript", "React", "Node.js", "WebSocket", "Zustand"],
  },
];

const smallCases = [
  {
    name: "VerifyGate",
    concept: "Hybrid Verification Gateway",
    desc: "Routes user proof submissions simultaneously to all admin IDs and a group control panel. Supports approve/reject, rule acknowledgement, and clean resubmission flow. Verified-only group access.",
    stack: ["Python", "Pyrogram", "MongoDB"],
  },
  {
    name: "MessengerBridge",
    concept: "Multi-Device WhatsApp Bot",
    desc: "Feature-rich WhatsApp multi-device automation using Baileys with pairing code auth, group management, media/sticker handling. Ships with a full React admin dashboard and one-click Railway/Koyeb deploy.",
    stack: ["Node.js", "Baileys", "React", "MongoDB"],
  },
  {
    name: "GroupShield",
    concept: "Group Management Suite",
    desc: "Full Telegram group management platform with moderation commands, anti-spam filters, admin tooling, welcome flows, and member tracking. Feature-complete GroupHelp-class system.",
    stack: ["Python", "Pyrogram", "MongoDB"],
  },
];

const badgeClass: Record<string, string> = {
  red: "text-[#c8102e] bg-[rgba(200,16,46,0.1)] border border-[rgba(200,16,46,0.25)]",
  green: "text-[#22c55e] bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.25)]",
  dim: "text-[#8a8a99] bg-[#17171e] border border-white/[0.06]",
};

export default function Cases() {
  return (
    <section id="cases" className="py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal><SectionLabel>02 — Case Studies</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono font-bold tracking-tight text-[#f0f0f2] mb-4"
            style={{ fontSize: "clamp(24px,3.5vw,40px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            Client Work.<br />Real Problems Solved.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[#8a8a99] text-[15px] leading-[1.75] max-w-xl mb-14">
            Every project below was built for a real client. Names have been replaced
            with concept titles to protect client confidentiality.
          </p>
        </Reveal>

        <div className="flex flex-col gap-5">
          {cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <div className="bg-[#0b0b0e] border border-white/[0.06] rounded-xl overflow-hidden hover:border-[rgba(200,16,46,0.2)] transition-colors duration-300">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 px-7 py-6 border-b border-white/[0.06]">
                  <div>
                    <h3 className="font-mono text-lg font-bold text-[#f0f0f2] mb-1">{c.name}</h3>
                    <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#444455]">{c.concept}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 self-center">
                    {c.badges.map((b) => (
                      <span key={b.label} className={`font-mono text-[10px] px-3 py-1 rounded-full tracking-[0.05em] ${badgeClass[b.type]}`}>
                        {b.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
                  {[
                    { label: "Challenge", text: c.challenge },
                    { label: "Architecture", text: c.architecture },
                    { label: "Outcome", text: c.outcome },
                  ].map((block) => (
                    <div key={block.label} className="px-6 py-5">
                      <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-[#444455] mb-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] flex-shrink-0" />
                        {block.label}
                      </div>
                      <p className="text-[13px] text-[#8a8a99] leading-[1.65]">{block.text}</p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex flex-wrap items-center gap-2 px-7 py-4 border-t border-white/[0.06]">
                  <span className="font-mono text-[10px] text-[#444455] tracking-[0.08em] uppercase mr-1">Stack:</span>
                  {c.stack.map((t) => (
                    <span key={t} className="font-mono text-[10px] text-[#8a8a99] bg-[#17171e] border border-white/[0.06] px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          {/* Small cases grid */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1">
              {smallCases.map((c) => (
                <div key={c.name} className="bg-[#0b0b0e] border border-white/[0.06] rounded-xl overflow-hidden hover:border-[rgba(200,16,46,0.2)] transition-colors duration-300">
                  <div className="px-5 py-5 border-b border-white/[0.06]">
                    <h3 className="font-mono text-[15px] font-bold text-[#f0f0f2] mb-1">{c.name}</h3>
                    <p className="font-mono text-[10px] tracking-[0.08em] uppercase text-[#444455]">{c.concept}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-[12px] text-[#8a8a99] leading-[1.65] mb-4">{c.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.stack.map((t) => (
                        <span key={t} className="font-mono text-[10px] text-[#8a8a99] bg-[#17171e] border border-white/[0.06] px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
