"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns effect class via tailwind or framer motion */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2572&auto=format&fit=crop')" }} 
        />
        {/* Warm photographic overlay tinting landscape back toward Burnt Sienna as requested */}
        <div className="absolute inset-0 bg-[#81491B]/25 mix-blend-multiply" />
        {/* Additional gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F06]/80 via-transparent to-[#1C0F06]/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#C4783A] uppercase tracking-[0.2em] text-xl md:text-3xl font-semibold mb-6 block"
        >
          Tanzania Travel Company
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#FFF8F2] font-medium leading-tight mb-8 max-w-4xl"
        >
          Plan Something <br className="hidden md:block" /> Extraordinary
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-[#FAF3EB] text-lg md:text-xl max-w-2xl font-light mb-12 opacity-90"
        >
          We know this land intimately. Trust our local experts to guide you through classical safaris, Kilimanjaro summits, and Zanzibar escapes.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Link 
            href="/tours?category=Wildlife Safaris"
            className={buttonVariants({ variant: "default", className: "bg-primary hover:bg-[#4A2910] text-[#FFF8F2] px-8 py-7 rounded-none text-sm tracking-widest uppercase transition-all duration-500 w-full sm:w-auto" })}
          >
            Explore Safaris
          </Link>
          <Link 
            href="/contact"
            className={buttonVariants({ variant: "outline", className: "bg-transparent border border-[#FAF3EB]/50 text-[#FAF3EB] hover:bg-[#FAF3EB] hover:text-[#1C0F06] px-8 py-7 rounded-none text-sm tracking-widest uppercase transition-all duration-500 w-full sm:w-auto" })}
          >
            Plan Custom Trip
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 z-10 flex justify-center w-full"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-8 h-8 text-[#C4783A] opacity-80" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
