"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export function AnimatedContainer({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
