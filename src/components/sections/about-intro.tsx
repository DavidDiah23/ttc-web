"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function AboutIntro() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF3EB] text-[#2E1A0E] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <span className="text-[#C4783A] uppercase tracking-[0.2em] text-sm font-semibold block">
              100% Locally Owned
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-[#1C0F06]">
              A journey guided by those who call this land home.
            </h2>
            <div className="w-12 h-0.5 bg-[#81491B]"></div>
            <p className="text-lg text-[#4A2910] font-light leading-relaxed">
              Founded by Sam, born and raised under the shadow of Kilimanjaro, Tanzania Travel Company isn’t just about showing you the Big Five—it’s about sharing our home. 
            </p>
            <p className="text-lg text-[#4A2910] font-light leading-relaxed">
              We bypass the overseas middleman, ensuring your investment goes directly back into local communities, conservation efforts, and the guides who make your adventure extraordinary. 
            </p>
            
            <div className="pt-4">
              <Link 
                href="/about" 
                className={buttonVariants({ variant: "outline", className: "border-[#81491B] text-[#81491B] hover:bg-[#81491B] hover:text-[#FFF8F2] px-8 py-6 rounded-none text-sm tracking-widest uppercase transition-all duration-500" })}
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-[#81491B]/10 mix-blend-multiply z-10 rounded-sm"></div>
              <Image 
                src="https://images.unsplash.com/photo-1542640244-7e672d6cb466?q=80&w=2670&auto=format&fit=crop" 
                alt="Sam, founder of Tanzania Travel Company" 
                fill
                className="object-cover rounded-sm grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-[#C4783A] z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-[#C4783A] z-0"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
