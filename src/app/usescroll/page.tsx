"use client";
import { animated, useScroll, to } from "@react-spring/web";

export default function UseScrollExample() {
  const { scrollYProgress } = useScroll();

  const scrollPercentage = to(
    scrollYProgress,
    (value) => (value * 100).toFixed(2) + "%"
  );

  return (
    <div>
      <animated.div
        className="fixed top-0 left-0 h-2 bg-red-500"
        style={{ width: scrollPercentage }}
      ></animated.div>
      <div className="h-[2000px] text-center bg-gray-200 flex justify-center items-center">
        <animated.div className="fixed left-1/2 top-1/2">
          {scrollPercentage.to((p) => `${p}`)}
        </animated.div>
      </div>
    </div>
  );
}
