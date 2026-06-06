import Reveal from "@/app/components/Reveal";
import SectionLabel from "@/app/components/SectionLabel";

const principles = [
  { num: "01", icon: "🔒", name: "Reliability", desc: "Systems restart without losing state. Every critical operation is written to the database before it executes. FloodWait, network drops, and restarts are not edge cases — they're expected." },
  { num: "02", icon: "👁", name: "Observability", desc: "Every action generates a log. Every state transition is recorded. Admin audit trails capture who did what, when, and why — permanently. I don't build black boxes." },
  { num: "03", icon: "♻️", name: "Recovery", desc: "On startup, stale processing locks are automatically recovered to pending. No manual database intervention. The system heals itself within seconds of coming back online." },
  { num: "04", icon: "⚖️", name: "Idempotency", desc: "Running the same operation twice produces the same result. Duplicate submissions, payments, double-clicks — none of these corrupt data. Atomic find-and-modify throughout." },
  { num: "05", icon: "📈", name: "Scalability", desc: "Architecture decisions account for growth. Single-instance today, horizontal tomorrow. Queue-based workers, atomic locking, and stateless handlers mean scaling is additive, not a rewrite." },
  { num: "06", icon: "🛡", name: "Security", desc: "No hardcoded credentials. ENV-based config only. Session files in protected volumes. Bot IDs explicitly whitelisted. Zero-trust between components. Security is the foundation, not a layer." },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal><SectionLabel>03 — Infrastructure Philosophy</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono font-bold tracking-tight text-[#f0f0f2] mb-4"
            style={{ fontSize: "clamp(24px,3.5vw,40px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            How I Think<br />About Systems.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[#8a8a99] text-[15px] leading-[1.75] max-w-xl mb-14">
            Six principles I apply to every system I build.
            Not best practices for show — operational requirements.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <div className="group bg-[#0b0b0e] border border-white/[0.06] rounded-xl p-7 h-full hover:border-[rgba(200,16,46,0.2)] hover:bg-[#111116] hover:-translate-y-0.5 transition-all duration-250">
                <div className="font-mono text-[11px] text-[#c8102e] opacity-70 mb-4">{p.num}</div>
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="font-mono text-sm font-semibold text-[#f0f0f2] mb-2.5">{p.name}</h3>
                <p className="text-[13px] text-[#8a8a99] leading-[1.65]">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
