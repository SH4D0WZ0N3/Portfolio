"use client";
import Reveal from "@/app/components/Reveal";
import SectionLabel from "@/app/components/SectionLabel";
import { useEffect, useRef } from "react";

const NODES = [
  { label:"Source Channel", sub:"MTProto", acc:true },
  { label:"Msg Listener",   sub:"Pyrogram" },
  { label:"Queue Manager",  sub:"3s debounce" },
  { label:"MongoDB",        sub:"Persistent queue" },
  { label:"Scheduler",      sub:"APScheduler" },
  { label:"Posting Worker", sub:"Atomic dequeue" },
  { label:"Target Channel", sub:"No Forwarded", acc:true },
];

function ArchNode({ label, sub, acc }: { label:string; sub:string; acc?:boolean }) {
  const base: React.CSSProperties = {
    flexShrink:0, borderRadius:6, padding:"11px 14px", textAlign:"center",
    minWidth:100, border:"1px solid", transition:"all 0.2s", cursor:"default",
  };
  const s: React.CSSProperties = acc
    ? { ...base, borderColor:"rgba(200,16,46,0.38)", background:"rgba(200,16,46,0.07)" }
    : { ...base, borderColor:"rgba(255,255,255,0.1)", background:"#17171e" };
  return (
    <div style={s}
      onMouseEnter={e => { const d=e.currentTarget; d.style.transform="translateY(-3px)"; d.style.boxShadow="0 8px 24px rgba(0,0,0,0.4)"; }}
      onMouseLeave={e => { const d=e.currentTarget; d.style.transform="translateY(0)"; d.style.boxShadow="none"; }}
    >
      <div className="mono" style={{ fontSize:11,fontWeight:600,color:acc?"#c8102e":"#f0f0f2",marginBottom:3 }}>{label}</div>
      <div className="mono" style={{ fontSize:9,color:"#444455" }}>{sub}</div>
    </div>
  );
}

// Animated connection line
function ConnLine() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let p = 0;
    const tick = () => {
      p = (p + 0.8) % 100;
      el.style.backgroundPosition = `${p}% 0`;
      requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div ref={ref} style={{
      flexShrink:0, width:20, height:2, margin:"0 3px",
      backgroundImage:"repeating-linear-gradient(90deg,#c8102e 0px,#c8102e 6px,transparent 6px,transparent 12px)",
      backgroundSize:"24px 2px",
      opacity:0.55,
    }} />
  );
}

export default function Architecture() {
  return (
    <section id="arch" style={{ padding:"clamp(80px,10vw,120px) 0", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 clamp(20px,4vw,60px)" }}>
        <Reveal><SectionLabel>04 — Architecture</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mono" style={{ fontSize:"clamp(26px,3.5vw,42px)",fontWeight:700,letterSpacing:"-0.03em",lineHeight:1.08,color:"#f0f0f2",marginBottom:14 }}>
            How It&apos;s Built.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontSize:15,color:"#8a8a99",lineHeight:1.78,maxWidth:520,marginBottom:56 }}>
            Every platform follows a strict message → queue → worker → delivery
            pattern with full observability at each stage.
          </p>
        </Reveal>

        {/* Pipeline diagram */}
        <Reveal>
          <div style={{ background:"#0b0b0e",border:"1px solid rgba(255,255,255,0.06)",borderRadius:14,overflow:"hidden",marginBottom:20 }}>
            <div style={{ display:"flex",alignItems:"center",gap:6,padding:"10px 18px",background:"#111116",borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ width:11,height:11,borderRadius:"50%",background:"#ff5f57",display:"inline-block" }} />
              <span style={{ width:11,height:11,borderRadius:"50%",background:"#febc2e",display:"inline-block" }} />
              <span style={{ width:11,height:11,borderRadius:"50%",background:"#28c840",display:"inline-block" }} />
              <span className="mono" style={{ fontSize:11,color:"#444455",marginLeft:8,letterSpacing:"0.05em" }}>content-distribution-pipeline.arch</span>
            </div>
            <div style={{ padding:"clamp(24px,4%,44px)",overflowX:"auto" }}>
              <div style={{ display:"flex",alignItems:"center",justifyContent:"center",minWidth:640,flexWrap:"nowrap" }}>
                {NODES.map((n,i) => (
                  <div key={n.label} style={{ display:"flex",alignItems:"center" }}>
                    <ArchNode {...n} />
                    {i < NODES.length-1 && <ConnLine />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Code terminals */}
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:16 }}>
          <Reveal delay={0.05}>
            <div style={{ background:"#08080f",border:"1px solid rgba(255,255,255,0.06)",borderRadius:14,overflow:"hidden" }}>
              <div style={{ display:"flex",alignItems:"center",gap:6,padding:"10px 16px",background:"#111116",borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ width:10,height:10,borderRadius:"50%",background:"#ff5f57",display:"inline-block" }} />
                <span style={{ width:10,height:10,borderRadius:"50%",background:"#febc2e",display:"inline-block" }} />
                <span style={{ width:10,height:10,borderRadius:"50%",background:"#28c840",display:"inline-block" }} />
                <span className="mono" style={{ fontSize:10,color:"#444455",marginLeft:8 }}>queue_fsm.py</span>
              </div>
              <div className="mono" style={{ padding:"20px 22px",fontSize:12,lineHeight:"1.9" }}>
                <p style={{ color:"#444455" }}># State Machine</p>
                <p><span style={{ color:"#61afef" }}>class</span> <span style={{ color:"#f0f0f2" }}>QueueStatus</span><span style={{ color:"#c8102e" }}>:</span></p>
                <p>&nbsp;&nbsp;<span style={{ color:"#e5c07b" }}>PENDING</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color:"#444455" }}># waiting</span></p>
                <p>&nbsp;&nbsp;<span style={{ color:"#e5c07b" }}>PROCESSING</span>&nbsp;<span style={{ color:"#444455" }}># atomic lock</span></p>
                <p>&nbsp;&nbsp;<span style={{ color:"#e5c07b" }}>SENT</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color:"#444455" }}># delivered</span></p>
                <p>&nbsp;&nbsp;<span style={{ color:"#e5c07b" }}>FAILED</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color:"#444455" }}># permanent</span></p>
                <br/>
                <p style={{ color:"#444455" }}># Transitions</p>
                <p><span style={{ color:"#22c55e" }}>PENDING → PROCESSING</span></p>
                <p><span style={{ color:"#22c55e" }}>PROCESSING → SENT</span></p>
                <p><span style={{ color:"#22c55e" }}>PROCESSING → PENDING</span></p>
                <p style={{ color:"#444455" }}>&nbsp;&nbsp;# FloodWait retry</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ background:"#08080f",border:"1px solid rgba(255,255,255,0.06)",borderRadius:14,overflow:"hidden" }}>
              <div style={{ display:"flex",alignItems:"center",gap:6,padding:"10px 16px",background:"#111116",borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ width:10,height:10,borderRadius:"50%",background:"#ff5f57",display:"inline-block" }} />
                <span style={{ width:10,height:10,borderRadius:"50%",background:"#febc2e",display:"inline-block" }} />
                <span style={{ width:10,height:10,borderRadius:"50%",background:"#28c840",display:"inline-block" }} />
                <span className="mono" style={{ fontSize:10,color:"#444455",marginLeft:8 }}>startup_recovery.py</span>
              </div>
              <div className="mono" style={{ padding:"20px 22px",fontSize:12,lineHeight:"1.9" }}>
                <p style={{ color:"#444455" }}># Zero data loss on restart</p>
                <p><span style={{ color:"#61afef" }}>async def</span> <span style={{ color:"#f0f0f2" }}>recover_on_startup</span><span style={{ color:"#c8102e" }}>();</span></p>
                <p>&nbsp;&nbsp;<span style={{ color:"#444455" }}># Reset stale locks</span></p>
                <p>&nbsp;&nbsp;<span style={{ color:"#61afef" }}>await</span> <span style={{ color:"#f0f0f2" }}>db.queue.update_many(</span></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color:"#f0f0f2" }}>{"{"}</span><span style={{ color:"#e5c07b" }}>&quot;status&quot;</span><span style={{ color:"#f0f0f2" }}>: </span><span style={{ color:"#22c55e" }}>&quot;PROCESSING&quot;</span><span style={{ color:"#f0f0f2" }}>{"},"}</span></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color:"#f0f0f2" }}>{"{"}</span><span style={{ color:"#e5c07b" }}>&quot;$set&quot;</span><span style={{ color:"#f0f0f2" }}>: {"{"}</span></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color:"#e5c07b" }}>&quot;status&quot;</span><span style={{ color:"#f0f0f2" }}>: </span><span style={{ color:"#22c55e" }}>&quot;PENDING&quot;</span></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color:"#f0f0f2" }}>{"}}"}</span></p>
                <p>&nbsp;&nbsp;<span style={{ color:"#f0f0f2" }}>)</span></p>
                <p style={{ color:"#444455" }}># Runs on every boot automatically</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
