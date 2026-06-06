import Reveal from "@/app/components/Reveal";
import SectionLabel from "@/app/components/SectionLabel";

const steps = [
  { num: "01", icon: "🔍", name: "Discovery", desc: "Deep dive into your requirements. I map every user journey, admin flow, and edge case before a single line of code is written." },
  { num: "02", icon: "📐", name: "Architecture", desc: "Database schema, state machines, API contracts, and system boundaries documented and approved before the build begins." },
  { num: "03", icon: "⚒", name: "Build", desc: "Async-first development with regular check-ins. Each subsystem tested independently. No spaghetti code, no shortcuts." },
  { num: "04", icon: "🚀", name: "Deploy", desc: "Production deployment with environment hardening, persistent volume setup, monitoring, and a full handover document." },
  { num: "05", icon: "🔧", name: "Maintain", desc: "Post-launch support, Telegram API updates, feature additions, and priority response for production incidents." },
];

export default function Process() {
  return (
    <section id="process" className="py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal><SectionLabel>06 — Work Process</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono font-bold tracking-tight text-[#f0f0f2] mb-4"
            style={{ fontSize: "clamp(24px,3.5vw,40px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            How We Work Together.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[#8a8a99] text-[15px] leading-[1.75] max-w-xl mb-14">
            A structured five-stage process that takes your idea from requirement
            to a running production system.
          </p>
        </Reveal>

        <Reveal>
          <div
            className="grid grid-cols-1 md:grid-cols-5 gap-px rounded-xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {steps.map((s) => (
              <div key={s.num} className="bg-[#0b0b0e] p-6 hover:bg-[#111116] transition-colors duration-200 relative group">
                <div className="font-mono text-[11px] text-[#c8102e] opacity-70 mb-4">{s.num}</div>
                <div className="text-[22px] mb-3">{s.icon}</div>
                <h3 className="font-mono text-[13px] font-semibold text-[#f0f0f2] mb-2">{s.name}</h3>
                <p className="text-[12px] text-[#8a8a99] leading-[1.6]">{s.desc}</p>
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c8102e] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
