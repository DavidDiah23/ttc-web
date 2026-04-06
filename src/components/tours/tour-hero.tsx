import Image from "next/image";
import { Tour } from "@/lib/types";
import { Clock, MapPin, Share2, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function TourHero({ tour }: { tour: Tour }) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-6 pt-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[#7A5A42] text-sm uppercase tracking-widest font-semibold flex-wrap">
            <span className="hover:text-[#C4783A] cursor-pointer transition-colors">Tours</span>
            <span className="w-1 h-1 rounded-full bg-[#e6d8c8]"></span>
            <span className="hover:text-[#C4783A] cursor-pointer transition-colors">{tour.category}</span>
            <span className="w-1 h-1 rounded-full bg-[#e6d8c8]"></span>
            <span className="text-[#1C0F06]">{tour.title}</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 mt-4">
            <div className="max-w-4xl">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-[#1C0F06] mb-6 leading-tight">
                {tour.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-[#4A2910] text-sm md:text-base border-t border-b border-[#e6d8c8] py-4 w-fit">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#C4783A]" />
                  <span className="font-medium">{tour.duration} Days</span>
                </div>
                {tour.difficulty && (
                  <>
                    <span className="w-px h-6 bg-[#e6d8c8]"></span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Difficulty:</span>
                      <Badge className="bg-[#81491B] text-[#FFF8F2] hover:bg-[#81491B] rounded-none px-3 py-1 uppercase tracking-widest text-[10px]">
                        {tour.difficulty}
                      </Badge>
                    </div>
                  </>
                )}
                <span className="w-px h-6 bg-[#e6d8c8]"></span>
                <div className="flex items-center gap-2 text-[#7A5A42]">
                  <MapPin className="w-5 h-5 text-[#C4783A]" />
                  <span>{tour.destinations.join(", ")}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 lg:mb-4">
              <button className="p-3 border border-[#e6d8c8] text-[#7A5A42] hover:text-[#1C0F06] hover:border-[#81491B] hover:bg-[#FFF8F2] transition-colors bg-transparent group flex items-center justify-center">
                <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button className="p-3 border border-[#e6d8c8] text-[#7A5A42] hover:text-[#1C0F06] hover:border-[#81491B] hover:bg-[#FFF8F2] transition-colors bg-transparent flex items-center gap-2 font-medium tracking-wide text-xs uppercase group">
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>PDF Itinerary</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 h-[400px] md:h-[600px] gap-1 md:gap-2">
          {/* Main Hero Image */}
          <div className="relative col-span-1 md:col-span-2 md:row-span-2 group overflow-hidden bg-[#1C0F06]">
            <div className="absolute inset-0 bg-[#81491B]/20 mix-blend-multiply z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-1000"></div>
            <Image 
              src={tour.images[0]} 
              alt={tour.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
          </div>
          
          {/* Secondary Images */}
          {tour.images.slice(1, 3).map((img, i) => (
            <div key={i} className="hidden md:block relative md:col-span-2 md:row-span-1 group overflow-hidden bg-[#1C0F06]">
              <div className="absolute inset-0 bg-[#81491B]/20 mix-blend-multiply z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-1000"></div>
              <Image 
                src={img} 
                alt={`${tour.title} Gallery ${i+1}`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          ))}
          {tour.images.length < 3 && (
            <div className="hidden md:flex relative md:col-span-2 md:row-span-1 border border-[#e6d8c8] items-center justify-center bg-[#FFF8F2]">
              <span className="text-[#81491B] font-heading text-xl italic opacity-50">Tanzania Travel Company</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
