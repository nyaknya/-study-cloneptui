"use client";

import { motion, useSpring, useScroll } from "framer-motion";

export default function MotionTestExample() {
  const { scrollYProgress } = useScroll();

  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="h-[2000px] bg-gray-900">
      <motion.div
        style={{
          scale,
          transformOrigin: "center",
        }}
        className="bg-red-500  w-[145vw] h-[300vh]  fixed -top-[100%] -left-[25%]  rounded-full"
      ></motion.div>
    </div>
  );
}
