export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#c8102e]">
        {children}
      </span>
      <span
        className="h-px w-20"
        style={{
          background:
            "linear-gradient(to right,rgba(200,16,46,0.5),transparent)",
        }}
      />
    </div>
  );
}
