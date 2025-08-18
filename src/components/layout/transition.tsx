
"use client";

import { useRef } from 'react';
import { motion, useInView } from "framer-motion";

type TransitionProps = {
  children: React.ReactNode;
};

export default function Transition({ children }: TransitionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
