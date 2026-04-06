"use client";

import { reviews } from "@/data/reviews";
import { Star, CheckCircle, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { useRef } from "react";

export function TestimonialsSection() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-24 md:py-32 bg-[#FFF8F2] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FAF3EB] transform -skew-x-12 translate-x-20 z-0 opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#C4783A] uppercase tracking-[0.2em] text-sm font-semibold block mb-4">
              Guest Stories
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-[#1C0F06]">
              Words from the Wild
            </h2>
          </div>
          
          <div className="flex flex-col items-start md:items-end p-4 border border-[#e6d8c8] bg-[#FAF3EB]/80 backdrop-blur-sm shadow-sm rounded-sm max-w-xs w-full md:w-auto">
            <div className="flex space-x-1 text-[#C4783A] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="font-heading text-lg font-medium text-[#1C0F06]">Excellent 4.9/5</div>
            <div className="text-xs text-[#7A5A42] uppercase tracking-wider">Based on 53 reviews</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-transparent border-[#e6d8c8] rounded-none shadow-none p-2 h-[350px]">
                    <CardContent className="p-8 flex flex-col h-full bg-[#FAF3EB] relative z-10">
                      <Quote className="absolute top-6 right-6 w-12 h-12 text-[#e6d8c8] opacity-50 z-0" />
                      
                      <div className="flex space-x-1 text-[#C4783A] mb-6 relative z-10">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>

                      <p className="text-[#4A2910] text-sm md:text-base leading-relaxed mb-6 font-light italic relative z-10 flex-grow">
                        "{review.body}"
                      </p>

                      <div className="mt-auto pt-6 border-t border-[#e6d8c8] relative z-10">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-heading text-lg font-medium text-[#1C0F06]">{review.name}</h4>
                          {review.verified && (
                            <CheckCircle className="w-3.5 h-3.5 text-[#81491B] mt-0.5" />
                          )}
                        </div>
                        <p className="text-xs text-[#7A5A42] uppercase tracking-wider">{review.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-12 gap-4">
              <CarouselPrevious className="position-static transform-none bg-transparent border-[#e6d8c8] text-[#4A2910] hover:bg-[#81491B] hover:text-[#FFF8F2] hover:border-[#81491B] rounded-none w-12 h-12 transition-all duration-500" />
              <CarouselNext className="position-static transform-none bg-transparent border-[#e6d8c8] text-[#4A2910] hover:bg-[#81491B] hover:text-[#FFF8F2] hover:border-[#81491B] rounded-none w-12 h-12 transition-all duration-500" />
            </div>
          </Carousel>
        </motion.div>

      </div>
    </section>
  );
}
