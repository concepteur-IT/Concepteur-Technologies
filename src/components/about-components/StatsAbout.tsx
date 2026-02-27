"use client";

import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 45, suffix: "+", label: "Projects Completed" },
  { value: 38, suffix: "+", label: "Happy Clients" },
  { value: 11, suffix: "+", label: "Team Members" },
  { value: 9, suffix: "+", label: "Active Projects" },
];

function StatItem({
  value,
  suffix,
  label,
  show,
  withBorder,
}: {
  value: number;
  suffix: string;
  label: string;
  show: boolean;
  withBorder: boolean;
  delay?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!show) return;

    let startTime: number | null = null;
    const duration = 2000; // slower (was 1200)

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);

      // smoother easeOutExpo
      const eased = percent === 1 ? 1 : 1 - Math.pow(2, -10 * percent);

      const current = Math.round(eased * value);

      setCount(current);

      if (percent < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [show, value]);

  return (
    <div
      className={`
        group space-y-3 relative transition-all duration-300
        hover:-translate-y-1
        ${withBorder ? "md:border-l md:border-black/10 md:pl-12" : ""}
      `}
    >
      <h3 className="text-4xl md:text-5xl font-light tracking-tight text-black">
        {count}
        {suffix}
      </h3>

      <p className="text-sm uppercase tracking-wider text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
        {label}
      </p>
    </div>
  );
}

const StatsAbout = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-0">
      <div className="max-w-7xl mx-auto px-8">
        <div
          ref={sectionRef}
          className="bg-[#f3f3f3]/80 backdrop-blur-md rounded-3xl py-16 px-8 md:px-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                show={visible}
                withBorder={index !== 0}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsAbout;
