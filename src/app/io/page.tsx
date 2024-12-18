"use client";

import { NextPage } from "next";
import { useEffect, useRef } from "react";

const IO: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "001", bgColor: "bg-slate-100" },
    { id: "002", bgColor: "bg-slate-200" },
    { id: "003", bgColor: "bg-slate-300" },
    { id: "004", bgColor: "bg-slate-400" },
    { id: "005", bgColor: "bg-slate-500" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-20");
          } else {
            entry.target.classList.add("opacity-0", "translate-y-20");
            entry.target.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

    if (ref.current) {
      const elements = ref.current.querySelectorAll(".observe");
      elements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {sections.map((section) => (
        <div
          key={section.id}
          className={`w-full h-screen flex justify-center items-center text-6xl font-bold ${section.bgColor}`}
        >
          <span className="observe opacity-0 translate-y-20 transition-all duration-700">
            {section.id}
          </span>
        </div>
      ))}
    </div>
  );
};

export default IO;
