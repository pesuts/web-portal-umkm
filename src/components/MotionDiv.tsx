"use client";

import { motion, MotionProps } from "framer-motion";

interface MotionDivProps extends MotionProps {
  children: React.ReactNode;
}

export default function MotionDiv({
  children,
  ...motionProps
}: // initial,
// whileInView,
// viewport,
// animate,
// whileHover,
// whileTap,
// transition,
MotionDivProps) // {
// children: React.ReactNode;
// initial?: object;
// whileInView?: object;
// viewport?: object;
// animate?: object;
// whileHover?: object;
// whileTap?: object;
// transition?: object;
// }
{
  return (
    <motion.div
      {...motionProps}
      // initial={initial}
      // whileInView={whileInView}
      // viewport={viewport}
      // transition={transition}
      // animate={animate}
      // whileHover={whileHover}
      // whileTap={whileTap}
    >
      {children}
    </motion.div>
  );
}
