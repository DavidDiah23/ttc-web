"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function TripPlannerCTA() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop')" }} 
      />
      <div className="absolute inset-0 bg-[#1C0F06]/70 mix-blend-multiply z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F06] to-transparent z-10 opacity-80" />

      <div className="container mx-auto px-4 md:px-6 relative z-20 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#C4783A] uppercase tracking-[0.2em] text-sm font-semibold mb-6 block"
        >
          Your Adventure Awaits
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-5xl md:text-6xl text-[#FFF8F2] font-medium leading-tight mb-8 max-w-3xl"
        >
          Ready to embark on the journey of a lifetime?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-[#FAF3EB] text-lg max-w-2xl font-light mb-12 opacity-90"
        >
          Speak with our local experts today. We'll help you craft an itinerary tailored perfectly to your pace, interests, and budget.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Link 
            href="/contact"
            className={buttonVariants({ variant: "default", className: "bg-[#81491B] hover:bg-[#C4783A] text-[#FFF8F2] px-10 py-8 rounded-none text-sm tracking-widest uppercase transition-all duration-500 shadow-lg shadow-[#81491B]/20 hover:shadow-[#C4783A]/40" })}
          >
            Start Planning
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
