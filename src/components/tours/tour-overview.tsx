import { Tour } from "@/lib/types";
import { Check } from "lucide-react";

export function TourOverview({ tour }: { tour: Tour }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-3xl md:text-4xl font-medium text-[#1C0F06] mb-6">Overview</h2>
        <p className="text-[#4A2910] text-lg leading-relaxed font-light mb-8">
          {tour.shortDescription}
          {/* Injecting some dummy long text since we only have shortDescription in mock data */}
          {" "}A truly meticulously crafted itinerary that captures the very essence of East Africa. Throughout this journey, you will experience the breathtaking landscapes, incredible wildlife encounters, and the warm hospitality of the local communities. Our expert guides will ensure every moment is memorable, providing deep insights into the ecosystem and culture.
        </p>
      </div>

      <div className="bg-[#FFF8F2] border border-[#e6d8c8] p-8 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF3EB] -mr-16 -mt-16 rounded-full opacity-50"></div>
        <h3 className="font-heading text-2xl font-medium text-[#1C0F06] mb-8 relative z-10">Tour Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
          {tour.highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#FAF3EB] border border-[#C4783A] flex items-center justify-center group-hover:bg-[#81491B] group-hover:border-[#81491B] transition-colors duration-300">
                <Check className="w-3.5 h-3.5 text-[#C4783A] group-hover:text-[#FFF8F2] transition-colors duration-300" strokeWidth={3} />
              </div>
              <span className="text-[#4A2910] font-medium leading-relaxed">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
