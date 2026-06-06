"use client";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Footer() {
  return (
    <footer style={{
      borderTop:"1px solid rgba(255,255,255,0.06)",
      padding:"26px clamp(20px,4vw,60px)",
      display:"flex",flexWrap:"wrap",
      alignItems:"center",justifyContent:"space-between",
      gap:12, position:"relative", zIndex:10,
    }}>
      <p className="mono" style={{ fontSize:11,color:"#444455" }}>
        © 2026 <span style={{ color:"#c8102e" }}>SH4D0W</span> — Backend &amp; Telegram Infrastructure Engineer — Ontario, Canada
      </p>
      <ul style={{ display:"flex",gap:22,listStyle:"none" }}>
        {[["build","Build"],["cases","Cases"],["arch","Architecture"],["contact","Contact"]].map(([id,label]) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className="mono"
              style={{ fontSize:11,color:"#444455",background:"none",border:"none",cursor:"pointer",letterSpacing:"0.06em",textTransform:"uppercase",transition:"color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color="#8a8a99"}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color="#444455"}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </footer>
  );
}
