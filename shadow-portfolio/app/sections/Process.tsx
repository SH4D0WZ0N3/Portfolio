import Reveal from "@/app/components/Reveal";
import SectionLabel from "@/app/components/SectionLabel";

const STEPS = [
  { n:"01", icon:"🔍", name:"Discovery",   desc:"Deep dive into your requirements. I map every user journey, admin flow, and edge case before a single line of code is written." },
  { n:"02", icon:"📐", name:"Architecture",desc:"Database schema, state machines, API contracts, and system boundaries documented and approved before the build begins." },
  { n:"03", icon:"⚒",  name:"Build",       desc:"Async-first development with regular check-ins. Each subsystem tested independently. No spaghetti code, no shortcuts." },
  { n:"04", icon:"🚀", name:"Deploy",      desc:"Production deployment with environment hardening, persistent volume setup, monitoring, and a full handover document." },
  { n:"05", icon:"🔧", name:"Maintain",    desc:"Post-launch support, Telegram API updates, feature additions, and priority response for production incidents." },
];

export default function Process() {
  return (
    <section id="process" style={{ padding:"clamp(80px,10vw,120px) 0", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 clamp(20px,4vw,60px)" }}>
        <Reveal><SectionLabel>06 — Work Process</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mono" style={{ fontSize:"clamp(26px,3.5vw,42px)",fontWeight:700,letterSpacing:"-0.03em",lineHeight:1.08,color:"#f0f0f2",marginBottom:14 }}>
            How We Work Together.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontSize:15,color:"#8a8a99",lineHeight:1.78,maxWidth:520,marginBottom:56 }}>
            A structured five-stage process — from requirement to running production system.
          </p>
        </Reveal>

        <Reveal>
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(5,1fr)",
            gap:1,
            background:"rgba(255,255,255,0.055)",
            border:"1px solid rgba(255,255,255,0.055)",
            borderRadius:14,
            overflow:"hidden",
          }}>
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="card-shine"
                style={{ background:"#0b0b0e",padding:"26px 20px",transition:"background 0.2s",cursor:"default" }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background="#111116"}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background="#0b0b0e"}
              >
                <div className="mono" style={{ fontSize:11,color:"#c8102e",opacity:0.7,marginBottom:14 }}>{s.n}</div>
                <div style={{ fontSize:22,marginBottom:12 }}>{s.icon}</div>
                <h3 className="mono" style={{ fontSize:13,fontWeight:600,color:"#f0f0f2",marginBottom:8 }}>{s.name}</h3>
                <p style={{ fontSize:12,color:"#8a8a99",lineHeight:1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile responsive */}
        <style>{`
          @media (max-width: 640px) {
            #process > div > div:last-child > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
