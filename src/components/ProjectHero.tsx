"use client";

import { motion } from "framer-motion";

export default function ProjectHero({
  src,
  title,
}: {
  src?: string;
  title: string;
}) {
  if (!src) {
    return (
      <div className="h-48 rounded-2xl border flex items-center justify-center opacity-60">
        No screenshots yet
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={title} className="w-full h-auto" />
    </motion.div>
  );
}
