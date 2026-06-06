import Reveal from "@/app/components/Reveal";
import SectionLabel from "@/app/components/SectionLabel";

const groups = [
  {
    title: "Core Languages",
    items: [
      { name: "Python", pct: 95 },
      { name: "TypeScript", pct: 78 },
      { name: "JavaScript", pct: 80 },
      { name: "Bash", pct: 70 },
    ],
  },
  {
    title: "Telegram / MTProto",
    items: [
      { name: "Pyrogram", pct: 94 },
      { name: "python-telegram-bot", pct: 88 },
      { name: "Telethon", pct: 72 },
      { name: "MTProto Layer", pct: 85 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "FastAPI", pct: 82 },
      { name: "Node.js", pct: 79 },
      { name: "Async Python", pct: 93 },
      { name: "APScheduler", pct: 88 },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", pct: 93 },
      { name: "Motor (Async)", pct: 90 },
      { name: "Redis", pct: 76 },
      { name: "Mongoose", pct: 72 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", pct: 83 },
      { name: "Next.js", pct: 76 },
      { name: "Tailwind CSS", pct: 87 },
      { name: "Vite", pct: 80 },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { name: "Railway", pct: 90 },
      { name: "Docker", pct: 74 },
      { name: "Koyeb / Heroku", pct: 78 },
      { name: "Loguru", pct: 86 },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal><SectionLabel>05 — Technology Stack</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono font-bold tracking-tight text-[#f0f0f2] mb-4"
            style={{ fontSize: "clamp(24px,3.5vw,40px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            Tools of the Trade.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[#8a8a99] text-[15px] leading-[1.75] max-w-xl mb-14">
            The complete technical stack across all client projects — chosen for
            reliability and production track record, not trends.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.05}>
              <div className="bg-[#0b0b0e] border border-white/[0.06] rounded-xl p-6 h-full">
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#444455] mb-4 pb-3 border-b border-white/[0.06]">
                  {g.title}
                </div>
                <div className="flex flex-col gap-3">
                  {g.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[12px] text-[#f0f0f2]">{item.name}</span>
                      <div className="w-14 h-0.5 bg-[#1e1e28] rounded-full overflow-hidden flex-shrink-0">
                        <div
                          className="h-full bg-[#c8102e] rounded-full"
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
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
