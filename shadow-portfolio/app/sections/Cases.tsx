import Reveal from "@/app/components/Reveal";
import SectionLabel from "@/app/components/SectionLabel";

const MAIN_CASES = [
  {
    name: "ContentVault Platform",
    concept: "Premium Telegram SaaS · 13 Subsystems",
    badges: [{ l:"Flagship Build",type:"r"},{ l:"Production",type:"g"},{ l:"Python · MongoDB",type:"d"}],
    challenge: "Client needed a complete Telegram content monetization platform — subscription management, anonymous submission, content moderation, vault distribution, and a referral system — all in one bot, restart-safe with zero data loss.",
    architecture: "13 tightly integrated subsystems on a MongoDB-only truth model. Permanent per-user topic routing, async FSM, idempotent payment flows, watermark pipeline, and FloodWait protection throughout.",
    outcome: "Zero downtime on restart. Fraud-resistant referral system. Full audit trail on every admin action. Subscription lifecycle fully automated from first payment to expiry.",
    stack: ["Python","Pyrogram","MongoDB","Redis","APScheduler"],
  },
  {
    name: "CommandRelay",
    concept: "Admin Control Infrastructure · Webhook Mode",
    badges: [{ l:"Production",type:"g"},{ l:"Python · AI-Powered",type:"d"}],
    challenge: "Client needed a robust admin bot with intelligent FAQ routing, ticket management, ban controls, and reliable webhook delivery — handling 8 concurrent admin connections without dropped messages.",
    architecture: "Webhook-mode bot with 8-worker connection pool, AI FAQ handler via OpenAI integration, structured handler registration, ban middleware, ticket routing, and custom timeout configuration per connection type.",
    outcome: "80% reduction in repetitive admin responses via AI FAQ. Zero message drops under concurrent load. Fully modular — swap handlers without touching core infrastructure.",
    stack: ["Python","python-telegram-bot","OpenAI","MongoDB"],
  },
  {
    name: "BotOrchestra",
    concept: "Multi-Bot Management Dashboard",
    badges: [{ l:"Production",type:"g"},{ l:"React · Node.js",type:"d"}],
    challenge: "Client managed multiple Telegram bots manually via SSH. Needed a centralized dashboard to start/stop bots, monitor activity in real time, broadcast messages, and control auto-start — no terminal required.",
    architecture: "React + Vite frontend with Zustand state, connected to a Node.js backend over WebSocket. Real-time log streaming by level. Full bot lifecycle API with per-bot activity feeds.",
    outcome: "Operational overhead reduced 70%. Non-technical staff now manage all bot operations through the dashboard with zero command-line exposure.",
    stack: ["TypeScript","React","Node.js","WebSocket","Zustand"],
  },
];

const SMALL_CASES = [
  {
    name:"VerifyGate",    concept:"Hybrid Verification Gateway",
    desc:"Routes user proof submissions simultaneously to all admin IDs and a group control panel. Supports approve/reject, rule acknowledgement, and clean resubmission flow.",
    stack:["Python","Pyrogram","MongoDB"],
  },
  {
    name:"MessengerBridge", concept:"Multi-Device WhatsApp Bot",
    desc:"WhatsApp multi-device automation using Baileys with pairing code auth, group management, and media handling. Ships with a full React admin dashboard and one-click Railway/Koyeb deploy.",
    stack:["Node.js","Baileys","React","MongoDB"],
  },
  {
    name:"GroupShield",   concept:"Group Management Suite",
    desc:"Full Telegram group management with moderation commands, anti-spam filters, admin tooling, welcome flows, and member tracking. Feature-complete GroupHelp-class system.",
    stack:["Python","Pyrogram","MongoDB"],
  },
];

const BADGE: Record<string, React.CSSProperties> = {
  r: { color:"#c8102e", background:"rgba(200,16,46,0.1)", border:"1px solid rgba(200,16,46,0.28)" },
  g: { color:"#22c55e", background:"rgba(34,197,94,0.1)", border:"1px solid rgba(34,197,94,0.28)" },
  d: { color:"#8a8a99", background:"#17171e", border:"1px solid rgba(255,255,255,0.06)" },
};
const BADGE_BASE: React.CSSProperties = {
  fontFamily:"inherit", fontSize:10, padding:"5px 12px",
  borderRadius:100, letterSpacing:"0.05em",
};
const TAG_S: React.CSSProperties = {
  fontFamily:"inherit",fontSize:10,color:"#8a8a99",
  background:"#17171e",border:"1px solid rgba(255,255,255,0.06)",
  padding:"3px 9px",borderRadius:100,
};

export default function Cases() {
  return (
    <section id="cases" style={{ padding:"clamp(80px,10vw,120px) 0", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 clamp(20px,4vw,60px)" }}>
        <Reveal><SectionLabel>02 — Case Studies</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mono" style={{ fontSize:"clamp(26px,3.5vw,42px)",fontWeight:700,letterSpacing:"-0.03em",lineHeight:1.08,color:"#f0f0f2",marginBottom:14 }}>
            Client Work.<br/>Real Problems Solved.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontSize:15,color:"#8a8a99",lineHeight:1.78,maxWidth:520,marginBottom:56 }}>
            Every project below was built for a real client. Names replaced with concept titles
            to protect client confidentiality.
          </p>
        </Reveal>

        <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
          {MAIN_CASES.map((c,i) => (
            <Reveal key={c.name} delay={i*0.06}>
              <div
                style={{
                  background:"#0b0b0e",
                  border:"1px solid rgba(255,255,255,0.06)",
                  borderRadius:14, overflow:"hidden",
                  transition:"border-color 0.25s, background 0.25s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor="rgba(200,16,46,0.22)"; (e.currentTarget as HTMLDivElement).style.background="#0f0f13"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,255,255,0.06)"; (e.currentTarget as HTMLDivElement).style.background="#0b0b0e"; }}
              >
                {/* Header */}
                <div style={{
                  display:"flex",flexWrap:"wrap",alignItems:"flex-start",
                  justifyContent:"space-between",gap:16,
                  padding:"24px 28px 20px",
                  borderBottom:"1px solid rgba(255,255,255,0.06)",
                }}>
                  <div>
                    <h3 className="mono" style={{ fontSize:18,fontWeight:700,color:"#f0f0f2",marginBottom:4 }}>{c.name}</h3>
                    <p className="mono" style={{ fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"#444455" }}>{c.concept}</p>
                  </div>
                  <div style={{ display:"flex",flexWrap:"wrap",gap:8,alignSelf:"center" }}>
                    {c.badges.map(b => (
                      <span key={b.l} className="mono" style={{ ...BADGE_BASE, ...BADGE[b.type] }}>{b.l}</span>
                    ))}
                  </div>
                </div>
                {/* Body */}
                <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)" }}>
                  {[
                    { label:"Challenge",    text:c.challenge },
                    { label:"Architecture", text:c.architecture },
                    { label:"Outcome",      text:c.outcome },
                  ].map((block,bi) => (
                    <div key={block.label} style={{
                      padding:"20px 24px",
                      borderRight: bi < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}>
                      <div className="mono" style={{ display:"flex",alignItems:"center",gap:8,fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"#444455",marginBottom:10 }}>
                        <span style={{ width:4,height:4,borderRadius:"50%",background:"#c8102e",flexShrink:0,display:"inline-block" }} />
                        {block.label}
                      </div>
                      <p style={{ fontSize:13,color:"#8a8a99",lineHeight:1.65 }}>{block.text}</p>
                    </div>
                  ))}
                </div>
                {/* Footer */}
                <div style={{ display:"flex",flexWrap:"wrap",alignItems:"center",gap:8,padding:"14px 28px",borderTop:"1px solid rgba(255,255,255,0.06)" }}>
                  <span className="mono" style={{ fontSize:10,color:"#444455",letterSpacing:"0.08em",textTransform:"uppercase",marginRight:4 }}>Stack:</span>
                  {c.stack.map(t => <span key={t} className="mono" style={TAG_S}>{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}

          {/* Small cards */}
          <Reveal delay={0.1}>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16 }}>
              {SMALL_CASES.map(c => (
                <div
                  key={c.name}
                  style={{ background:"#0b0b0e",border:"1px solid rgba(255,255,255,0.06)",borderRadius:14,overflow:"hidden",transition:"border-color 0.25s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor="rgba(200,16,46,0.22)"}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,255,255,0.06)"}
                >
                  <div style={{ padding:"20px 22px 16px",borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                    <h3 className="mono" style={{ fontSize:15,fontWeight:700,color:"#f0f0f2",marginBottom:3 }}>{c.name}</h3>
                    <p className="mono" style={{ fontSize:10,letterSpacing:"0.08em",textTransform:"uppercase",color:"#444455" }}>{c.concept}</p>
                  </div>
                  <div style={{ padding:"16px 22px" }}>
                    <p style={{ fontSize:13,color:"#8a8a99",lineHeight:1.65,marginBottom:14 }}>{c.desc}</p>
                    <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>
                      {c.stack.map(t => <span key={t} className="mono" style={TAG_S}>{t}</span>)}
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
