import Reveal from "@/app/components/Reveal";
import SectionLabel from "@/app/components/SectionLabel";

const GROUPS = [
  { title:"Core Languages",    items:[{n:"Python",p:95},{n:"TypeScript",p:78},{n:"JavaScript",p:80},{n:"Bash",p:70}] },
  { title:"Telegram / MTProto",items:[{n:"Pyrogram",p:94},{n:"python-telegram-bot",p:88},{n:"Telethon",p:72},{n:"MTProto Layer",p:85}] },
  { title:"Backend",           items:[{n:"FastAPI",p:82},{n:"Node.js",p:79},{n:"Async Python",p:93},{n:"APScheduler",p:88}] },
  { title:"Database",          items:[{n:"MongoDB",p:93},{n:"Motor (Async)",p:90},{n:"Redis",p:76},{n:"Mongoose",p:72}] },
  { title:"Frontend",          items:[{n:"React",p:83},{n:"Next.js",p:76},{n:"Tailwind CSS",p:87},{n:"Vite",p:80}] },
  { title:"Infrastructure",    items:[{n:"Railway",p:90},{n:"Docker",p:74},{n:"Koyeb / Heroku",p:78},{n:"Loguru",p:86}] },
];

export default function Stack() {
  return (
    <section id="stack" style={{ padding:"clamp(80px,10vw,120px) 0", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 clamp(20px,4vw,60px)" }}>
        <Reveal><SectionLabel>05 — Technology Stack</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mono" style={{ fontSize:"clamp(26px,3.5vw,42px)",fontWeight:700,letterSpacing:"-0.03em",lineHeight:1.08,color:"#f0f0f2",marginBottom:14 }}>
            Tools of the Trade.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontSize:15,color:"#8a8a99",lineHeight:1.78,maxWidth:520,marginBottom:56 }}>
            The complete stack across all client projects — chosen for reliability
            and production track record, not trends.
          </p>
        </Reveal>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:16 }}>
          {GROUPS.map((g,gi) => (
            <Reveal key={g.title} delay={gi*0.05}>
              <div
                className="card-hover"
                style={{ background:"#0b0b0e",border:"1px solid rgba(255,255,255,0.06)",borderRadius:14,padding:"24px",height:"100%" }}
              >
                <div className="mono" style={{ fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"#444455",marginBottom:16,paddingBottom:12,borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                  {g.title}
                </div>
                <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
                  {g.items.map(item => (
                    <div key={item.n} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",gap:10 }}>
                      <span className="mono" style={{ fontSize:12,color:"#f0f0f2" }}>{item.n}</span>
                      <div style={{ width:56,height:2,background:"#1e1e28",borderRadius:1,overflow:"hidden",flexShrink:0 }}>
                        <div style={{ width:`${item.p}%`,height:"100%",background:"linear-gradient(to right,#8b0000,#c8102e)",borderRadius:1 }} />
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
