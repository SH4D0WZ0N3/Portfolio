import Reveal from "@/app/components/Reveal";
import SectionLabel from "@/app/components/SectionLabel";

const SERVICES = [
  { icon:"⚡", title:"Telegram Infrastructure",   desc:"Full-stack Telegram platforms built on MTProto via Pyrogram — subscription systems, payment flows, content moderation, vault archives, and admin control. Production-hardened with FloodWait recovery built in.", tags:["Pyrogram","MTProto","Webhooks","FloodWait"] },
  { icon:"🔄", title:"Automation Systems",         desc:"Content pipelines that run without manual intervention. Scheduled workers, media group buffers, queue-based distribution, and watermark rendering. Zero downtime in production, every time.", tags:["APScheduler","Queue Systems","Media Pipelines","Debouncing"] },
  { icon:"🗄", title:"Backend Architecture",        desc:"Async Python and Node.js backends with MongoDB atomic state machines, idempotent operations, and permanent audit trails. Every critical path is restart-safe by design — not as an afterthought.", tags:["FastAPI","MongoDB","Redis","Motor Async"] },
  { icon:"🛡", title:"Custom Admin Platforms",     desc:"Multi-admin panels with role-based access, AI-powered FAQ routing, ban and ticket systems, permanent per-user topic CRMs, and full audit logging built for operational teams.", tags:["RBAC","AI FAQ","Audit Logs","Tickets"] },
  { icon:"📡", title:"Content Distribution",       desc:"Source-to-target delivery without Telegram's Forwarded metadata. Native-feel pipelines with posting schedules, daily limit enforcement, media group buffering, and caption injection.", tags:["Content Queue","Rate Limits","Scheduling","Media Groups"] },
  { icon:"🌐", title:"Internal Business Tools",    desc:"React and Node.js dashboards with real-time WebSocket log streaming, multi-bot lifecycle management, broadcast tooling, and cross-platform WhatsApp automation with full admin UIs.", tags:["React","Node.js","WebSocket","Vite"] },
];

const TAG_S: React.CSSProperties = {
  fontFamily:"inherit",fontSize:10,color:"#444455",
  background:"#17171e",border:"1px solid rgba(255,255,255,0.06)",
  padding:"3px 9px",borderRadius:100,letterSpacing:"0.04em",
};

export default function Build() {
  return (
    <section id="build" style={{ padding:"clamp(80px,10vw,120px) 0", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth:1100,margin:"0 auto",padding:"0 clamp(20px,4vw,60px)" }}>
        <Reveal><SectionLabel>01 — What I Build</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mono" style={{ fontSize:"clamp(26px,3.5vw,42px)",fontWeight:700,letterSpacing:"-0.03em",lineHeight:1.08,color:"#f0f0f2",marginBottom:14 }}>
            Systems That Scale.<br/>Platforms That Deliver.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontSize:15,color:"#8a8a99",lineHeight:1.78,maxWidth:520,marginBottom:56 }}>
            I don&apos;t write code that needs babysitting. Every system I build is restart-safe,
            observable, and designed to run unsupervised at production scale.
          </p>
        </Reveal>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
          gap:1,
          background:"rgba(255,255,255,0.055)",
          border:"1px solid rgba(255,255,255,0.055)",
          borderRadius:14,
          overflow:"hidden",
        }}>
          {SERVICES.map((s,i) => (
            <Reveal key={s.title} delay={i*0.04}>
              <div
                className="card-hover card-shine"
                style={{
                  background:"#0b0b0e",padding:"28px 26px",height:"100%",
                  cursor:"default",
                }}
              >
                <div style={{
                  width:44,height:44,borderRadius:8,
                  background:"rgba(200,16,46,0.10)",
                  border:"1px solid rgba(200,16,46,0.22)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:18,marginBottom:20,
                }}>{s.icon}</div>
                <h3 className="mono" style={{ fontSize:14,fontWeight:600,color:"#f0f0f2",marginBottom:10 }}>{s.title}</h3>
                <p style={{ fontSize:13,color:"#8a8a99",lineHeight:1.65,marginBottom:18 }}>{s.desc}</p>
                <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>
                  {s.tags.map(t => <span key={t} className="mono" style={TAG_S}>{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
