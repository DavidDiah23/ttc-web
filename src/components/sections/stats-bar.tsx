"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Safaris Completed", value: "500+" },
  { label: "Years Experience", value: "15+" },
  { label: "TripAdvisor Rating", value: "4.9★" },
  { label: "Locally Owned", value: "100%" },
];

export function StatsBar() {
  return (
    <section className="bg-[#1C0F06] border-y border-[#4A2910] py-10 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <div className="font-heading text-4xl md:text-5xl font-medium text-[#C4783A] mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[#FAF3EB] text-sm md:text-base tracking-widest uppercase font-sans">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
