export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3.5">
      <span
        className="mono text-[11px] tracking-[0.18em] uppercase"
        style={{ color: "#c8102e" }}
      >
        {children}
      </span>
      <span
        style={{
          display: "inline-block",
          height: 1,
          width: 80,
          background: "linear-gradient(to right,rgba(200,16,46,0.55),transparent)",
        }}
      />
    </div>
  );
}
