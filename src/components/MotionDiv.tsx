"use client";

import { motion, MotionProps } from "framer-motion";

interface MotionDivProps extends MotionProps {
  children: React.ReactNode;
}

export default function MotionDiv({
  children,
  ...motionProps
}: MotionDivProps) {
  return <motion.div {...motionProps}>{children}</motion.div>;
}
