export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 md:px-10 py-7 flex flex-wrap items-center justify-between gap-3 relative z-10">
      <p className="font-mono text-[11px] text-[#444455]">
        © 2026 <span className="text-[#c8102e]">SH4D0W</span> — Backend &amp; Telegram Infrastructure Engineer — Ontario, Canada
      </p>
      <ul className="flex gap-6 list-none">
        {["Build", "Cases", "Architecture", "Contact"].map((item) => (
          <li key={item}>
            <button
              onClick={() =>
                document
                  .querySelector(`#${item.toLowerCase()}`)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-mono text-[11px] text-[#444455] hover:text-[#8a8a99] uppercase tracking-[0.06em] transition-colors duration-200"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </footer>
  );
}
