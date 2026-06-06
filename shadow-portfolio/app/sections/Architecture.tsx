"use client";
import Reveal from "@/app/components/Reveal";
import SectionLabel from "@/app/components/SectionLabel";
import { motion } from "framer-motion";

const pipelineNodes = [
  { label: "Source Channel", sub: "MTProto", accent: true },
  { label: "Msg Listener", sub: "Pyrogram" },
  { label: "Queue Manager", sub: "3s debounce" },
  { label: "MongoDB", sub: "Persistent queue" },
  { label: "Scheduler", sub: "APScheduler" },
  { label: "Posting Worker", sub: "Atomic dequeue" },
  { label: "Target Channel", sub: "No Forwarded", accent: true },
];

const NodeBox = ({ label, sub, accent }: { label: string; sub: string; accent?: boolean }) => (
  <div
    className={`flex-shrink-0 rounded px-3.5 py-2.5 text-center min-w-[100px] border transition-all duration-200 hover:-translate-y-0.5 ${
      accent
        ? "border-[rgba(200,16,46,0.35)] bg-[rgba(200,16,46,0.06)]"
        : "border-white/10 bg-[#17171e] hover:border-white/20"
    }`}
  >
    <div className={`font-mono text-[11px] font-semibold mb-0.5 ${accent ? "text-[#c8102e]" : "text-[#f0f0f2]"}`}>{label}</div>
    <div className="font-mono text-[9px] text-[#444455]">{sub}</div>
  </div>
);

export default function Architecture() {
  return (
    <section id="arch" className="py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal><SectionLabel>04 — Architecture</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono font-bold tracking-tight text-[#f0f0f2] mb-4"
            style={{ fontSize: "clamp(24px,3.5vw,40px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            How It's Built.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[#8a8a99] text-[15px] leading-[1.75] max-w-xl mb-14">
            Every platform follows a strict message → queue → worker → delivery
            pattern with full observability at each stage.
          </p>
        </Reveal>

        {/* Pipeline diagram */}
        <Reveal>
          <div className="bg-[#0b0b0e] border border-white/[0.06] rounded-xl overflow-hidden mb-5">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#111116] border-b border-white/[0.06]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="font-mono text-[11px] text-[#444455] ml-2 tracking-[0.05em]">content-distribution-pipeline.arch</span>
            </div>
            <div className="p-8 overflow-x-auto">
              <div className="flex items-center justify-center gap-0 min-w-[620px]">
                {pipelineNodes.map((node, i) => (
                  <div key={node.label} className="flex items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" as const }}
                    >
                      <NodeBox {...node} />
                    </motion.div>
                    {i < pipelineNodes.length - 1 && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + 0.1 }}
                        className="font-mono text-sm text-[#444455] px-1.5 flex-shrink-0"
                      >
                        →
                      </motion.span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Code terminals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Reveal delay={0.05}>
            <div className="bg-[#08080f] border border-white/[0.06] rounded-xl overflow-hidden font-mono text-[12px]">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#111116] border-b border-white/[0.06]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="font-mono text-[10px] text-[#444455] ml-2">queue_fsm.py</span>
              </div>
              <div className="p-5 leading-[1.9] space-y-0">
                <p><span className="text-[#444455]"># State Machine</span></p>
                <p><span className="text-[#61afef]">class</span> <span className="text-[#f0f0f2]">QueueStatus</span><span className="text-[#c8102e]">:</span></p>
                <p>&nbsp;&nbsp;<span className="text-[#e5c07b]">PENDING</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#444455]"># waiting</span></p>
                <p>&nbsp;&nbsp;<span className="text-[#e5c07b]">PROCESSING</span>&nbsp;<span className="text-[#444455]"># atomic lock</span></p>
                <p>&nbsp;&nbsp;<span className="text-[#e5c07b]">SENT</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#444455]"># delivered</span></p>
                <p>&nbsp;&nbsp;<span className="text-[#e5c07b]">FAILED</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#444455]"># permanent</span></p>
                <p>&nbsp;</p>
                <p><span className="text-[#444455]"># Transitions</span></p>
                <p><span className="text-[#22c55e]">PENDING → PROCESSING</span></p>
                <p><span className="text-[#22c55e]">PROCESSING → SENT</span></p>
                <p><span className="text-[#22c55e]">PROCESSING → PENDING</span></p>
                <p><span className="text-[#444455]">&nbsp;&nbsp;# FloodWait retry</span></p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-[#08080f] border border-white/[0.06] rounded-xl overflow-hidden font-mono text-[12px]">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#111116] border-b border-white/[0.06]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="font-mono text-[10px] text-[#444455] ml-2">startup_recovery.py</span>
              </div>
              <div className="p-5 leading-[1.9]">
                <p><span className="text-[#444455]"># Zero data loss on restart</span></p>
                <p><span className="text-[#61afef]">async def</span> <span className="text-[#f0f0f2]">recover_on_startup</span><span className="text-[#c8102e]">():</span></p>
                <p>&nbsp;&nbsp;<span className="text-[#444455]"># Reset stale locks</span></p>
                <p>&nbsp;&nbsp;<span className="text-[#61afef]">await</span> <span className="text-[#f0f0f2]">db.queue.update_many(</span></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#f0f0f2]">{"{"}</span><span className="text-[#e5c07b]">"status"</span><span className="text-[#f0f0f2]">:</span> <span className="text-[#22c55e]">"PROCESSING"</span><span className="text-[#f0f0f2]">{"}"}</span><span className="text-[#f0f0f2]">,</span></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#f0f0f2]">{"{"}</span><span className="text-[#e5c07b]">"$set"</span><span className="text-[#f0f0f2]">:</span> <span className="text-[#f0f0f2]">{"{"}</span></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#e5c07b]">"status"</span><span className="text-[#f0f0f2]">:</span> <span className="text-[#22c55e]">"PENDING"</span></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#f0f0f2]">{"}"}{"}"}</span></p>
                <p>&nbsp;&nbsp;<span className="text-[#f0f0f2]">)</span></p>
                <p><span className="text-[#444455]"># Runs automatically on every boot</span></p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
