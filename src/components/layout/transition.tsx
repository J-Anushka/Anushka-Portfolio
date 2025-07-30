
"use client";

import { motion } from "framer-motion";

type TransitionProps = {
  children: React.ReactNode;
};

export default function Transition({ children }: TransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
