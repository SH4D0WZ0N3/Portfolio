import Reveal from "@/app/components/Reveal";
import SectionLabel from "@/app/components/SectionLabel";

const P = [
  { n:"01", icon:"🔒", name:"Reliability",   desc:"Systems restart without losing state. Every critical operation is written to the database before it executes. FloodWait, network drops, and container restarts are expected, not edge cases." },
  { n:"02", icon:"👁",  name:"Observability", desc:"Every action generates a log. Every state transition is recorded. Admin audit trails capture who did what, when, and why — permanently. I don't build black boxes." },
  { n:"03", icon:"♻️", name:"Recovery",      desc:"On startup, stale processing locks automatically recover to pending. No manual database intervention. The system heals itself within seconds of coming back online." },
  { n:"04", icon:"⚖️", name:"Idempotency",   desc:"Running the same operation twice produces the same result. Duplicate submissions, payments, double-clicks — none of these corrupt data. Atomic find-and-modify throughout." },
  { n:"05", icon:"📈", name:"Scalability",   desc:"Architecture decisions account for growth. Queue-based workers, atomic locking, and stateless handlers mean scaling is additive, not a rewrite." },
  { n:"06", icon:"🛡",  name:"Security",      desc:"No hardcoded credentials. ENV-based config only. Session files in protected volumes. Bot IDs explicitly whitelisted. Zero-trust between components." },
];

export default function Philosophy() {
  return (
    <section id="philosophy" style={{ padding:"clamp(80px,10vw,120px) 0", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 clamp(20px,4vw,60px)" }}>
        <Reveal><SectionLabel>03 — Infrastructure Philosophy</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mono" style={{ fontSize:"clamp(26px,3.5vw,42px)",fontWeight:700,letterSpacing:"-0.03em",lineHeight:1.08,color:"#f0f0f2",marginBottom:14 }}>
            How I Think<br/>About Systems.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontSize:15,color:"#8a8a99",lineHeight:1.78,maxWidth:520,marginBottom:56 }}>
            Six principles I apply to every system. Not best practices for show — operational requirements.
          </p>
        </Reveal>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:16 }}>
          {P.map((p,i) => (
            <Reveal key={p.name} delay={i*0.05}>
              <div
                className="card-hover card-shine"
                style={{ background:"#0b0b0e",border:"1px solid rgba(255,255,255,0.06)",borderRadius:14,padding:"28px",height:"100%",cursor:"default" }}
              >
                <div className="mono" style={{ fontSize:11,color:"#c8102e",opacity:0.7,marginBottom:14 }}>{p.n}</div>
                <div style={{ fontSize:24,marginBottom:12 }}>{p.icon}</div>
                <h3 className="mono" style={{ fontSize:14,fontWeight:600,color:"#f0f0f2",marginBottom:10 }}>{p.name}</h3>
                <p style={{ fontSize:13,color:"#8a8a99",lineHeight:1.65 }}>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
