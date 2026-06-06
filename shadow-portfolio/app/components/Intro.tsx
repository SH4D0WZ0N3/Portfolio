"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  { text: "SHADOW CORE v2.5.1", accent: false, delay: 0.2 },
  { text: "SYSTEM: INITIALIZING", accent: false, delay: 0.7 },
  { text: "BUILDING INFRASTRUCTURE IN SILENCE", accent: true, delay: 1.3 },
  { text: "Ontario, Canada — STATUS: OPERATIONAL", accent: false, delay: 2.0 },
];

export default function Intro({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 800);
    }, 3200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] bg-[#060608] flex flex-col items-center justify-center gap-5"
          aria-live="polite"
        >
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: line.delay, duration: 0.5 }}
              className={`font-mono text-xs tracking-[0.2em] uppercase ${
                line.accent ? "text-[#c8102e] font-medium" : "text-[#444455]"
              }`}
            >
              {line.text}
            </motion.p>
          ))}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-48 h-px origin-left"
            style={{
              background:
                "linear-gradient(to right,transparent,#c8102e,transparent)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
