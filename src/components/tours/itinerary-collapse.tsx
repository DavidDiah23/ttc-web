"use client";

import { ItineraryDay } from "@/lib/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Utensils, Bed } from "lucide-react";

export function ItineraryCollapse({ itinerary }: { itinerary: ItineraryDay[] }) {
  return (
    <div className="space-y-8">
      <h2 className="font-heading text-3xl md:text-4xl font-medium text-[#1C0F06]">Day-by-Day Itinerary</h2>
      
      <Accordion className="w-full space-y-4">
        {itinerary.map((day, index) => (
          <AccordionItem 
            key={index} 
            value={`day-${day.day}`} 
            className="border border-[#e6d8c8] bg-[#FFF8F2] px-6 py-2 rounded-none data-[state=open]:border-[#81491B] transition-colors duration-300"
          >
            <AccordionTrigger className="hover:no-underline text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 w-full pr-4">
                <span className="text-[#81491B] font-heading font-semibold text-lg min-w-[80px]">
                  Day {day.day}
                </span>
                <span className="font-medium text-[#1C0F06] text-lg leading-tight flex-1">
                  {day.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6 text-[#4A2910] font-light">
              <p className="leading-relaxed mb-6 text-base">{day.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#e6d8c8] pt-4">
                <div className="flex items-center gap-3">
                  <Bed className="w-5 h-5 text-[#C4783A]" />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-[#7A5A42] font-semibold mb-0.5">Accommodation</span>
                    <span className="font-medium text-[#1C0F06]">{day.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Utensils className="w-5 h-5 text-[#C4783A]" />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-[#7A5A42] font-semibold mb-0.5">Meals Included</span>
                    <span className="font-medium text-[#1C0F06]">{day.meals.join(", ")}</span>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
