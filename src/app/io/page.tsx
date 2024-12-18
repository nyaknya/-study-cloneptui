"use client";

import { NextPage } from "next";
import { useInView } from "react-intersection-observer";

const Section: React.FC<{ id: string; bgColor: string }> = ({
  id,
  bgColor,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: false,
  });

  return (
    <div
      className={`w-full h-screen flex justify-center items-center text-6xl font-bold ${bgColor}`}
    >
      <span
        ref={ref}
        className={` transition-all duration-700
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      >
        {id}
      </span>
    </div>
  );
};

const IO: NextPage = () => {
  const sections = [
    { id: "Don't", bgColor: "bg-slate-100" },
    { id: "you", bgColor: "bg-slate-200" },
    { id: "just", bgColor: "bg-slate-300" },
    { id: "hate", bgColor: "bg-slate-400" },
    { id: "popus?", bgColor: "bg-slate-500" },
  ];

  return (
    <div>
      {sections.map(({ id, bgColor }) => (
        <Section key={id} id={id} bgColor={bgColor} />
      ))}
    </div>
  );
};

export default IO;
