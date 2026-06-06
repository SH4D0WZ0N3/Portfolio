
"use client";
import { useEffect, useRef } from "react";
import { HERO_IMAGE_DATA } from "@/app/heroData";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.20}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{ minHeight: "100vh", position: "relative", overflow: "hidden", paddingTop: "56px" }}
    >
      {/* IMAGE RIGHT HALF */}
      <div
        style={{
          position: "absolute",
          top: 0, right: 0,
          width: "52%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* Parallax image layer */}
        <div
          ref={bgRef}
          style={{
            position: "absolute",
            inset: "-10% 0",
            backgroundImage: `url(${HERO_IMAGE_DATA})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            filter: "brightness(0.52) saturate(0.82)",
            willChange: "transform",
          }}
        />
        {/* Left vignette into bg */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, #060608 0%, rgba(6,6,8,0.65) 25%, transparent 55%)",
          pointerEvents: "none",
        }} />
        {/* Bottom vignette */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #060608 0%, transparent 30%)",
          pointerEvents: "none",
        }} />
        {/* Top vignette */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(6,6,8,0.45) 0%, transparent 18%)",
          pointerEvents: "none",
        }} />
        {/* Red atmosphere glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 55% 50% at 65% 38%, rgba(200,16,46,0.14) 0%, transparent 60%)",
        }} />
        {/* Cinematic frame */}
        <div style={{
          position: "absolute",
          top: "clamp(28px,4%,52px)", right: "clamp(18px,3.5%,44px)",
          bottom: "clamp(28px,4%,52px)", left: "clamp(18px,3.5%,44px)",
          border: "1px solid rgba(200,16,46,0.18)",
          borderRadius: "12px",
          boxShadow: "inset 0 0 70px rgba(200,16,46,0.04), 0 0 0 1px rgba(255,255,255,0.025)",
          pointerEvents: "none",
        }}>
          <span style={{
            position: "absolute", top: -1, left: 32, right: 32, height: 1,
            background: "linear-gradient(to right, transparent, rgba(200,16,46,0.65), transparent)",
          }} />
          <span style={{
            position: "absolute", bottom: -1, left: 32, right: 32, height: 1,
            background: "linear-gradient(to right, transparent, rgba(200,16,46,0.32), transparent)",
          }} />
          {/* Corner accents */}
          {["top-0 left-0","top-0 right-0","bottom-0 left-0","bottom-0 right-0"].map((pos,i) => (
            <span key={i} style={{
              position: "absolute",
              ...(pos.includes("top-0") ? { top: 8 } : { bottom: 8 }),
              ...(pos.includes("left-0") ? { left: 8 } : { right: 8 }),
              width: 16, height: 16,
              borderTop: pos.includes("top-0") ? "1px solid rgba(200,16,46,0.5)" : "none",
              borderBottom: pos.includes("bottom-0") ? "1px solid rgba(200,16,46,0.5)" : "none",
              borderLeft: pos.includes("left-0") ? "1px solid rgba(200,16,46,0.5)" : "none",
              borderRight: pos.includes("right-0") ? "1px solid rgba(200,16,46,0.5)" : "none",
            }} />
          ))}
        </div>
        {/* Scan line */}
        <div
          className="scan-anim"
          style={{
            position: "absolute", left: 0, right: 0, height: 1, pointerEvents: "none",
            background: "linear-gradient(to right, transparent 0%, rgba(200,16,46,0.55) 50%, transparent 100%)",
          }}
        />
        {/* Status badge */}
        <div style={{
          position: "absolute",
          bottom: "clamp(36px,6%,64px)",
          left: "clamp(28px,5%,56px)",
          background: "rgba(6,6,8,0.9)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(200,16,46,0.28)",
          borderRadius: "8px",
          padding: "14px 18px",
          boxShadow: "0 8px 36px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.03)",
          pointerEvents: "none",
        }}>
          <div className="mono" style={{ display:"flex", alignItems:"center", gap:7, fontSize:11, color:"#f0f0f2", fontWeight:500, marginBottom:10 }}>
            <span className="pulse-dot-fast" style={{ width:6, height:6, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px #22c55e", display:"inline-block" }} />
            SYSTEM ONLINE
          </div>
          {[
            { k:"LOCATION",     v:"Ontario, CA",     green:false },
            { k:"SPECIALITY",   v:"Telegram Infra",  green:false },
            { k:"AVAILABILITY", v:"OPEN",             green:true },
          ].map(r => (
            <div key={r.k} className="mono" style={{ display:"flex", gap:10, fontSize:10, color:"#444455", lineHeight:"1.9" }}>
              <span style={{ minWidth:82 }}>{r.k}</span>
              <span style={{ color: r.green ? "#22c55e" : "#c8102e" }}>{r.v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* LEFT CONTENT */}
      <div style={{
        position: "relative", zIndex: 10,
        width: "55%",
        minHeight: "calc(100vh - 56px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(60px,8vw,100px) clamp(20px,5vw,80px) clamp(60px,8vw,100px) clamp(20px,5vw,80px)",
      }}>
        {/* Eyebrow */}
        <div className="mono" style={{ display:"flex", alignItems:"center", gap:10, marginBottom:28, fontSize:11, letterSpacing:"0.2em", textTransform:"uppercase", color:"#c8102e" }}>
          <span style={{ width:28, height:1, background:"#c8102e", opacity:0.6, display:"inline-block" }} />
          Backend Systems &amp; Telegram Infrastructure
        </div>

        {/* H1 */}
        <h1
          className="mono"
          style={{
            fontSize: "clamp(36px,4.8vw,64px)",
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: "-0.04em",
            marginBottom: 24,
          }}
        >
          Infrastructure<br/>
          <span className="text-gradient-red">That Operates</span><br/>
          <span style={{ color:"#444455" }}>In Silence.</span>
        </h1>

        {/* Sub */}
        <p style={{
          fontSize: "clamp(14px,1.35vw,16px)",
          color: "#8a8a99",
          lineHeight: 1.82,
          maxWidth: 440,
          marginBottom: 36,
        }}>
          I design and build production-grade Telegram platforms,
          automation pipelines, and distributed backend systems —
          engineered for reliability, not just functionality.
          Based in Ontario, Canada.
        </p>

        {/* Meta pills */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:38 }}>
          {[
            { dot:"#c8102e", text:"Ontario, Canada" },
            { dot:"#22c55e", text:"Available for Projects" },
            { dot:null,      text:"MTProto Specialist" },
          ].map((m,i) => (
            <span key={i} className="mono" style={{
              display:"flex", alignItems:"center", gap:6,
              fontSize:11, color:"#444455", letterSpacing:"0.06em",
            }}>
              {i > 0 && <span style={{ color:"#2a2a38", margin:"0 4px" }}>·</span>}
              {m.dot && <span style={{ width:7, height:7, borderRadius:"50%", background:m.dot, boxShadow:`0 0 6px ${m.dot}`, display:"inline-block" }} />}
              {m.text}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:48 }}>
          <button
            onClick={() => document.getElementById("cases")?.scrollIntoView({ behavior:"smooth" })}
            className="mono"
            style={{
              fontSize:13, fontWeight:500, color:"#fff",
              background:"#c8102e", border:"none",
              padding:"13px 28px", borderRadius:"6px", cursor:"pointer",
              boxShadow:"0 0 28px rgba(200,16,46,0.22), 0 2px 12px rgba(200,16,46,0.18)",
              transition:"all 0.2s",
            }}
            onMouseEnter={e => { const b = e.currentTarget; b.style.background="#e0122f"; b.style.transform="translateY(-2px)"; b.style.boxShadow="0 6px 32px rgba(200,16,46,0.38)"; }}
            onMouseLeave={e => { const b = e.currentTarget; b.style.background="#c8102e"; b.style.transform="translateY(0)"; b.style.boxShadow="0 0 28px rgba(200,16,46,0.22)"; }}
          >
            View Case Studies →
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" })}
            className="mono"
            style={{
              fontSize:13, color:"#f0f0f2",
              background:"#111116", border:"1px solid rgba(255,255,255,0.1)",
              padding:"13px 28px", borderRadius:"6px", cursor:"pointer",
              transition:"all 0.2s",
            }}
            onMouseEnter={e => { const b = e.currentTarget; b.style.background="#17171e"; b.style.borderColor="rgba(255,255,255,0.2)"; b.style.transform="translateY(-2px)"; }}
            onMouseLeave={e => { const b = e.currentTarget; b.style.background="#111116"; b.style.borderColor="rgba(255,255,255,0.1)"; b.style.transform="translateY(0)"; }}
          >
            Get In Touch
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display:"flex", gap:36,
          paddingTop:36,
          borderTop:"1px solid rgba(255,255,255,0.06)",
          flexWrap:"wrap",
        }}>
          {[
            { n:"7", suffix:"+", l:"Production Systems" },
            { n:"13", suffix:"", l:"Subsystems in Largest Build" },
            { n:"100", suffix:"%", l:"Async Architecture" },
          ].map(s => (
            <div key={s.l}>
              <div className="mono" style={{ fontSize:30, fontWeight:700, color:"#f0f0f2", lineHeight:1, marginBottom:5 }}>
                {s.n}<span style={{ color:"#c8102e" }}>{s.suffix}</span>
              </div>
              <div className="mono" style={{ fontSize:10, color:"#444455", letterSpacing:"0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: image behind full section */}
      <style>{`
        @media (max-width: 767px) {
          #hero > div:first-child {
            position: absolute !important;
            width: 100% !important;
            top: 0; left: 0; right: 0; bottom: 0;
          }
          #hero > div:last-child {
            width: 100% !important;
            padding: 80px 24px 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
