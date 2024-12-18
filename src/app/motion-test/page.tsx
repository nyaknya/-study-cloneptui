"use client";

import { motion, useSpring, useScroll, useTransform } from "framer-motion";

export default function MotionTestExample() {
  const { scrollYProgress } = useScroll();

  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const textTranslateY = useTransform(scrollYProgress, [0.95, 1], [200, 0]);

  return (
    <div className="h-[2000px] bg-gray-900">
      <motion.div
        style={{
          scale,
          transformOrigin: "center",
        }}
        className="bg-red-500 w-[145vw] h-[300vh] fixed -top-[100%] -left-[25%] rounded-full overflow-hidden"
      ></motion.div>

      <motion.div className="fixed left-40 top-40 h-20 overflow-hidden">
        <motion.div
          style={{
            translateY: textTranslateY,
          }}
          className="text-4xl font-bold text-blue-800 h-9 overflow-hidden"
        >
          Aha!
        </motion.div>
        <motion.div
          style={{
            translateY: textTranslateY,
          }}
          className="text-4xl font-bold text-blue-800 h-9 overflow-hidden"
        >
          You Found Me!
        </motion.div>
      </motion.div>
    </div>
  );
}
