"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { destinations } from "@/data/destinations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

export function DestinationsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#1C0F06] text-[#FFF8F2] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#C4783A] uppercase tracking-[0.2em] text-sm font-semibold block mb-4">
              Explore By Region
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">
              Iconic Destinations
            </h2>
            <p className="text-[#FAF3EB]/80 text-lg font-light leading-relaxed">
              From the endless plains of the Serengeti to the misty mountains of Rwanda, discover the diverse landscapes that make East Africa truly unforgettable.
            </p>
          </div>
          <Link 
            href="/destinations"
            className="text-[#C4783A] hover:text-[#FAF3EB] text-sm uppercase tracking-widest font-semibold flex items-center transition-colors duration-500 w-fit"
          >
            View All Destinations <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {destinations.map((dest) => (
                <CarouselItem key={dest.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <Link href={`/destinations/${dest.slug}`} className="block group w-full h-[500px] relative overflow-hidden rounded-none">
                    {/* Warm Overlay */}
                    <div className="absolute inset-0 bg-[#81491B]/20 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-10" />
                    {/* Dark gradient for text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F06] via-[#1C0F06]/40 to-transparent z-10 opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
                    
                    <Image 
                      src={dest.heroImage} 
                      alt={`Explore ${dest.name}`} 
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0"
                    />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-heading text-3xl font-medium text-[#FFF8F2] mb-3">
                        {dest.name}
                      </h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto">
                        <p className="text-[#FAF3EB] text-sm line-clamp-2 mb-6 font-light">
                          {dest.description}
                        </p>
                        <span className="text-[#C4783A] text-xs tracking-widest uppercase font-semibold flex items-center">
                          Explore Region <ArrowRight className="ml-2 w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex gap-4 mt-12 justify-end pr-4">
              <CarouselPrevious className="position-static transform-none bg-transparent border-[#4A2910] text-[#FAF3EB] hover:bg-[#81491B] hover:text-[#FFF8F2] hover:border-[#81491B] rounded-none w-12 h-12 transition-all duration-500" />
              <CarouselNext className="position-static transform-none bg-transparent border-[#4A2910] text-[#FAF3EB] hover:bg-[#81491B] hover:text-[#FFF8F2] hover:border-[#81491B] rounded-none w-12 h-12 transition-all duration-500" />
            </div>
          </Carousel>
        </motion.div>

      </div>
    </section>
  );
}
