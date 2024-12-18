"use client";

import {
  motion,
  useSpring,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

export default function MotionTestExample() {
  const { scrollYProgress } = useScroll();

  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useSpring(100);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.7) {
      y.set(0);
    } else {
      y.set(100);
    }
  });

  const textStyle = useTransform(y, () => `${y.get()}%`);

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
            y: textStyle,
          }}
          className="text-4xl font-bold text-blue-800 h-9 overflow-hidden"
        >
          Aha!
        </motion.div>
        <motion.div
          style={{
            y: textStyle,
          }}
          className="text-4xl font-bold text-blue-800 h-9 overflow-hidden"
        >
          You Found Me!
        </motion.div>
      </motion.div>
    </div>
  );
}
