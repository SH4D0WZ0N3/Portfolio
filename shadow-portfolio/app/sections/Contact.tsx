import Reveal from "@/app/components/Reveal";
import SectionLabel from "@/app/components/SectionLabel";

const LINKS = [
  { icon:"✈", label:"TELEGRAM — Preferred", value:"@SH4D0WZ0N3", href:"https://t.me/SH4D0WZ0N3" },
  { icon:"✈", label:"TELEGRAM — ID", value:"@SH4D0W_D3V", href:"https://t.me/SH4D0W_D3V" },
  { icon:"✉", label:"EMAIL — Encrypted",    value:"sh4d0wz0n3@proton.me", href:"mailto:sh4d0wz0n3@proton.me" },
  { icon:"⌥", label:"GITHUB",               value:"github.com/SH4D0WZ0N3", href:"https://github.com/SH4D0WZ0N3" },
];

const SPECS = [
  "Telegram Bot & SaaS Platforms",
  "Content Automation Infrastructure",
  "Admin Dashboards & Control Panels",
  "Multi-Platform Messaging Systems",
  "Backend API & Database Architecture",
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding:"clamp(80px,10vw,120px) 0", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 clamp(20px,4vw,60px)" }}>
        <Reveal><SectionLabel>07 — Contact</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mono" style={{ fontSize:"clamp(26px,3.5vw,42px)",fontWeight:700,letterSpacing:"-0.03em",lineHeight:1.08,color:"#f0f0f2",marginBottom:14 }}>
            Let&apos;s Build<br/>Something Serious.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontSize:15,color:"#8a8a99",lineHeight:1.78,maxWidth:520,marginBottom:56 }}>
            I take on a limited number of projects at a time. If you need a Telegram platform,
            automation system, or backend architecture built right — reach out.
          </p>
        </Reveal>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(24px,4vw,56px)", alignItems:"start" }}>
          <Reveal delay={0.05}>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {LINKS.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:"flex",alignItems:"center",gap:14,
                    padding:"16px 20px",
                    background:"#0b0b0e",
                    border:"1px solid rgba(255,255,255,0.06)",
                    borderRadius:12,
                    textDecoration:"none",color:"#f0f0f2",
                    transition:"all 0.2s",
                  }}
                  onMouseEnter={e => {
                    const a = e.currentTarget;
                    a.style.borderColor="rgba(200,16,46,0.28)";
                    a.style.background="#0f0f13";
                    a.style.transform="translateX(5px)";
                  }}
                  onMouseLeave={e => {
                    const a = e.currentTarget;
                    a.style.borderColor="rgba(255,255,255,0.06)";
                    a.style.background="#0b0b0e";
                    a.style.transform="translateX(0)";
                  }}
                >
                  <div style={{
                    width:38,height:38,borderRadius:8,flexShrink:0,
                    background:"rgba(200,16,46,0.1)",
                    border:"1px solid rgba(200,16,46,0.22)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:16,
                  }}>{l.icon}</div>
                  <div style={{ flex:1,minWidth:0 }}>
                    <div className="mono" style={{ fontSize:10,color:"#444455",letterSpacing:"0.08em",marginBottom:2 }}>{l.label}</div>
                    <div className="mono" style={{ fontSize:13,color:"#f0f0f2",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{l.value}</div>
                  </div>
                  <span className="mono" style={{ color:"#444455",fontSize:16,flexShrink:0,transition:"color 0.2s" }}>→</span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{
              background:"#0b0b0e",
              border:"1px solid rgba(200,16,46,0.22)",
              borderRadius:14,padding:"28px 28px 32px",
              boxShadow:"0 0 60px rgba(200,16,46,0.04)",
            }}>
              <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:16 }}>
                <span className="pulse-dot-fast" style={{ width:8,height:8,borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 10px #22c55e",display:"inline-block" }} />
                <span className="mono" style={{ fontSize:13,fontWeight:500,color:"#22c55e" }}>Available for New Projects</span>
              </div>
              <p style={{ fontSize:14,color:"#8a8a99",lineHeight:1.78,marginBottom:24 }}>
                I specialize in Telegram infrastructure. If you need a subscription platform,
                content pipeline, admin system, or custom bot built to production standards —
                this is the right conversation to have.
              </p>
              <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                {SPECS.map(s => (
                  <div key={s} style={{ display:"flex",alignItems:"center",gap:10 }}>
                    <span style={{ width:4,height:4,borderRadius:"50%",background:"#c8102e",flexShrink:0,display:"inline-block" }} />
                    <span className="mono" style={{ fontSize:12,color:"#8a8a99" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Mobile contact grid */}
      <style>{`
        @media (max-width: 640px) {
          #contact > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
