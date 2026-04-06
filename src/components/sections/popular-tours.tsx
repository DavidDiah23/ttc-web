"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { tours } from "@/data/tours";
import { Clock, MapPin } from "lucide-react";

const categories = ["All", "Wildlife Safaris", "Kilimanjaro", "Zanzibar", "Gorilla Trekking"];

export function PopularTours() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredTours = activeTab === "All" 
    ? tours 
    : tours.filter(tour => tour.category === activeTab);

  return (
    <section className="py-24 md:py-32 bg-[#FFF8F2] text-[#2E1A0E]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <span className="text-[#C4783A] uppercase tracking-[0.2em] text-sm font-semibold block mb-4">
            Curated Experiences
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-[#1C0F06] mb-8">
            Popular Journeys
          </h2>
          
          {/* Tab Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-3xl mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 text-sm tracking-widest uppercase transition-all duration-500 rounded-none border ${
                  activeTab === category 
                    ? "bg-[#81491B] text-[#FFF8F2] border-[#81491B]" 
                    : "bg-transparent text-[#7A5A42] border-[#e6d8c8] hover:border-[#81491B] hover:text-[#1C0F06]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tour Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredTours.map((tour) => (
              <motion.div
                layout
                key={tour.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="group"
              >
                <Link href={`/tours/${tour.slug}`}>
                  <Card className="rounded-none border-none shadow-none bg-[#FAF3EB] h-full overflow-hidden transition-all duration-700 hover:shadow-[0_20px_40px_rgba(28,15,6,0.1)] hover:-translate-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-[#81491B]/10 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-0" />
                      <Image 
                        src={tour.images[0]} 
                        alt={tour.title}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                        <Badge className="bg-[#1C0F06]/80 text-[#FFF8F2] hover:bg-[#1C0F06] rounded-none px-3 py-1 font-medium tracking-wide uppercase text-[10px]">
                          {tour.category}
                        </Badge>
                        {tour.difficulty && (
                          <Badge className="bg-[#81491B]/90 text-[#FFF8F2] hover:bg-[#81491B] rounded-none px-3 py-1 font-medium tracking-wide uppercase text-[10px] w-fit">
                            {tour.difficulty}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6 md:p-8 flex flex-col h-[calc(100%-75%)]">
                      <div className="flex items-center gap-4 text-[#7A5A42] text-sm mb-4 font-medium tracking-wide">
                        <div className="flex items-center gap-1.5 mt-2">
                          <Clock className="w-4 h-4 text-[#C4783A]" />
                          <span>{tour.duration} Days</span>
                        </div>
                      </div>
                      <h3 className="font-heading text-2xl font-medium text-[#1C0F06] mb-3 line-clamp-2 group-hover:text-[#81491B] transition-colors duration-500">
                        {tour.title}
                      </h3>
                      <p className="text-[#4A2910] text-sm leading-relaxed mb-6 line-clamp-3 font-light mb-auto">
                        {tour.shortDescription}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#e6d8c8]">
                        <div className="flex flex-col">
                          <span className="text-xs text-[#7A5A42] uppercase tracking-widest">From</span>
                          <span className="font-heading text-xl font-semibold text-[#81491B]">${tour.price}</span>
                        </div>
                        <span className="text-[#81491B] text-sm font-semibold tracking-widest uppercase flex items-center group-hover:text-[#C4783A] transition-colors">
                          View Tour <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
