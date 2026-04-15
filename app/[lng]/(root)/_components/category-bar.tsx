"use client";

import { ChildProps } from "@/types";
import { motion, useScroll, useTransform } from "framer-motion";

//   const { scrollY } = useScroll();

//   // 🔥 0 → 20px oralig‘ida 1 dan 0 ga o‘tadi
//   const opacity = useTransform(scrollY, [0, 20], [1, 0]);
//   const y = useTransform(scrollY, [0, 20], [0, -20]);
//   const height = useTransform(scrollY, [0, 20], [120, 0]);

//   return (
//     <motion.div
//       style={{
//         opacity,
//         y,
//         height,
//       }}
//       className="overflow-hidden border-t border-neutral-100 bg-white/50 backdrop-blur-sm"
//     >
//       {children}
//     </motion.div>
//   );
// }
export default function CategoryBar({ children }: ChildProps) {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 50], [1, 0]);
  const y = useTransform(scrollY, [0, 50], [0, -30]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="overflow-hidden border-t border-neutral-100 bg-white/50 backdrop-blur-sm"
    >
      <div className="py-3">{children}</div>
    </motion.div>
  );
}
