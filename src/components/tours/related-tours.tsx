"use client";

import { Tour } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

export function RelatedTours({ tours }: { tours: Tour[] }) {
  if (!tours || tours.length === 0) return null;

  return (
    <section className="bg-[#1C0F06] py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-heading text-4xl font-medium text-[#FFF8F2] mb-4">
            Similar Journeys
          </h2>
          <div className="w-12 h-0.5 bg-[#81491B]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Link key={tour.id} href={`/tours/${tour.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-[#81491B]/20 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-0" />
                <Image 
                  src={tour.images[0]} 
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-[#C4783A] text-sm uppercase tracking-widest font-semibold">
                  <span>{tour.category}</span>
                </div>
                <h3 className="font-heading text-2xl font-medium text-[#FFF8F2] group-hover:text-[#C4783A] transition-colors duration-300">
                  {tour.title}
                </h3>
                <div className="flex items-center justify-between pt-2 border-t border-[#4A2910]">
                  <div className="flex items-center gap-2 text-[#FAF3EB] opacity-80">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{tour.duration} Days</span>
                  </div>
                  <span className="text-sm font-semibold text-[#81491B] uppercase tracking-widest">
                    From ${tour.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
