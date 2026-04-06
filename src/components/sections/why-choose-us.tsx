"use client";

import { motion } from "framer-motion";
import { Compass, Users, Car, Leaf } from "lucide-react";

const features = [
  {
    icon: <Compass className="w-8 h-8 text-[#C4783A] stroke-[1.5]" />,
    title: "Tailored Itineraries",
    description: "Every journey is customized. We don't believe in one-size-fits-all safaris."
  },
  {
    icon: <Users className="w-8 h-8 text-[#C4783A] stroke-[1.5]" />,
    title: "Expert Local Guides",
    description: "Born and raised in Tanzania, our guides know the land, the wildlife, and the stories."
  },
  {
    icon: <Car className="w-8 h-8 text-[#C4783A] stroke-[1.5]" />,
    title: "Premium 4x4 Fleet",
    description: "Custom-built Land Cruisers with pop-up roofs, charging ports, and window seats for everyone."
  },
  {
    icon: <Leaf className="w-8 h-8 text-[#C4783A] stroke-[1.5]" />,
    title: "Sustainable Tourism",
    description: "We are committed to conservation and ensuring local communities benefit directly."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF3EB] text-[#2E1A0E] border-t border-[#e6d8c8]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[#C4783A] uppercase tracking-[0.2em] text-sm font-semibold block mb-4">
            The TTC Difference
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-[#1C0F06] max-w-3xl mx-auto">
            Why travel with us?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full border border-[#e6d8c8] flex items-center justify-center bg-[#FFF8F2] mb-6 group-hover:border-[#C4783A] group-hover:bg-[#FFF8F2] transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-medium text-[#1C0F06] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#7A5A42] leading-relaxed font-light text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
