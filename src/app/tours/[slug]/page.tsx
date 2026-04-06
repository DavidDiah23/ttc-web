import { tours } from "@/data/tours";
import { notFound } from "next/navigation";
import { TourHero } from "@/components/tours/tour-hero";
import { TourOverview } from "@/components/tours/tour-overview";
import { ItineraryCollapse } from "@/components/tours/itinerary-collapse";
import { IncludesExcludes } from "@/components/tours/includes-excludes";
import { RelatedTours } from "@/components/tours/related-tours";

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const tour = tours.find((t) => t.slug === resolvedParams.slug);

  if (!tour) {
    notFound();
  }

  const related = tours.filter((t) => t.id !== tour.id && t.category === tour.category).slice(0, 3);
  // If not enough related by category, just pad with others
  if (related.length < 3) {
    const others = tours.filter((t) => t.id !== tour.id && !related.find(r => r.id === t.id));
    related.push(...others.slice(0, 3 - related.length));
  }

  return (
    <div className="bg-[#FAF3EB] min-h-screen text-[#2E1A0E] pt-20">
      <TourHero tour={tour} />
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          <div className="w-full lg:w-2/3 space-y-16">
            <TourOverview tour={tour} />
            <ItineraryCollapse itinerary={tour.itinerary} />
            <IncludesExcludes included={tour.included} excluded={tour.excluded} />
          </div>

          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              <div className="bg-[#FFF8F2] border border-[#e6d8c8] p-8 shadow-sm">
                <h3 className="font-heading text-2xl font-medium text-[#1C0F06] mb-6">Book this Safari</h3>
                
                <div className="flex justify-between items-baseline mb-8 pb-6 border-b border-[#e6d8c8]">
                  <span className="text-[#7A5A42] uppercase tracking-widest text-xs">Starting from</span>
                  <div className="text-right">
                    <div className="font-heading text-3xl font-semibold text-[#81491B]">${tour.price}</div>
                    <div className="text-xs text-[#7A5A42]">per person</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {/* Dummy Booking Widget Form Elements */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#7A5A42] mb-2">Travel Date</label>
                    <input type="date" className="w-full bg-[#FAF3EB] border border-[#e6d8c8] p-3 text-sm focus:outline-none focus:border-[#C4783A] text-[#4A2910]" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#7A5A42] mb-2">Travelers</label>
                    <select className="w-full bg-[#FAF3EB] border border-[#e6d8c8] p-3 text-sm focus:outline-none focus:border-[#C4783A] text-[#4A2910]">
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4+ People</option>
                    </select>
                  </div>
                </div>

                <button className="w-full bg-[#81491B] hover:bg-[#C4783A] text-[#FFF8F2] py-4 uppercase tracking-widest text-sm transition-colors duration-500 font-medium">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedTours tours={related} />
    </div>
  );
}
