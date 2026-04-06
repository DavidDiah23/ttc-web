import { destinations } from "@/data/destinations";
import { tours } from "@/data/tours";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Compass, Sun, Map } from "lucide-react";
import { RelatedTours } from "@/components/tours/related-tours";

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const dest = destinations.find((d) => d.slug === resolvedParams.slug);

  if (!dest) {
    notFound();
  }

  // Find tours that include this destination
  const associatedTours = tours.filter((t) => 
    t.destinations.some(d => d.toLowerCase().includes(dest.name.toLowerCase()))
  );

  return (
    <div className="bg-[#FAF3EB] min-h-screen text-[#2E1A0E] pt-20">
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-[#1C0F06]">
        <div className="absolute inset-0 bg-[#81491B]/20 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F06] via-[#1C0F06]/40 to-transparent z-10" />
        <Image 
          src={dest.heroImage} 
          alt={dest.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 container mx-auto px-4 md:px-6 flex flex-col justify-end pb-16">
          <Link href="/destinations" className="text-[#C4783A] hover:text-[#FFF8F2] flex items-center gap-2 mb-6 transition-colors w-fit text-sm uppercase tracking-widest font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Destinations
          </Link>
          <div className="flex items-center gap-3 text-[#FAF3EB] mb-4 opacity-80 uppercase tracking-widest text-sm font-medium">
            <MapPin className="w-5 h-5 text-[#C4783A]" /> Region Directory
          </div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-[#FFF8F2] leading-tight max-w-4xl">
            {dest.name}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col xl:flex-row gap-16">
          
          <div className="w-full xl:w-2/3 space-y-16">
            {/* Overview */}
            <div>
              <h2 className="font-heading text-3xl font-medium text-[#1C0F06] mb-6">Overview</h2>
              <p className="text-[#4A2910] text-lg leading-relaxed font-light mb-8">
                {dest.description}
                <br /><br />
                {/* Dummy additional content */}
                Whether you're looking for abundant wildlife, rich cultural heritage, or simply a place to disconnect from the modern world, {dest.name} offers an unparalleled experience. It remains one of the few places on Earth where nature dictates the rhythm of life.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border border-[#e6d8c8] bg-[#FFF8F2] p-8 md:p-10">
              <div className="flex items-start gap-4">
                <Sun className="w-6 h-6 text-[#C4783A] mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="font-heading text-xl font-medium text-[#1C0F06] mb-2">Best Time to Visit</h4>
                  <p className="text-[#4A2910] text-sm leading-relaxed">{dest.keyFacts?.bestTimeToVisit}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Compass className="w-6 h-6 text-[#C4783A] mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="font-heading text-xl font-medium text-[#1C0F06] mb-2">Activities</h4>
                  <p className="text-[#4A2910] text-sm leading-relaxed">Game drives, cultural walks</p>
                </div>
              </div>
            </div>

            {/* Region Highlights */}
            {dest.highlights && dest.highlights.length > 0 && (
              <div>
                <h2 className="font-heading text-3xl font-medium text-[#1C0F06] mb-8">Not to Miss</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dest.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-4 p-6 border border-[#e6d8c8] bg-white">
                      <div className="text-[#C4783A] font-heading text-2xl font-medium opacity-50">0{i+1}</div>
                      <p className="text-[#4A2910] font-medium mt-1.5">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="w-full xl:w-1/3">
            <div className="sticky top-32 border border-[#e6d8c8] bg-[#FFF8F2] p-8 relative overflow-hidden">
               <Map className="absolute -bottom-10 -right-10 w-48 h-48 text-[#e6d8c8] opacity-30 pointer-events-none" />
               <h3 className="font-heading text-2xl font-medium text-[#1C0F06] mb-6 relative z-10">Region Map & Logistics</h3>
               <p className="text-[#4A2910] text-sm leading-relaxed font-light mb-8 relative z-10">
                 All our {dest.name} itineraries start with an airport transfer from Kilimanjaro International Airport (JRO) or local airstrips. We handle all park fees, permits, and internal transit.
               </p>
               <Link href="/contact" className="block w-full text-center bg-[#81491B] hover:bg-[#C4783A] text-[#FFF8F2] py-4 uppercase tracking-widest text-xs font-semibold transition-colors relative z-10">
                 Enquire About {dest.name}
               </Link>
            </div>
          </div>
        </div>
      </div>

      {associatedTours.length > 0 && (
        <div className="border-t border-[#e6d8c8] bg-[#1C0F06]">
          <div className="container mx-auto pt-24">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-medium text-[#FFF8F2] mb-4">
                Safaris Featuring {dest.name}
              </h2>
              <div className="w-12 h-0.5 bg-[#81491B] mx-auto"></div>
            </div>
          </div>
          {/* We reuse the RelatedTours component but maybe apply some padding adjustments to fit context */}
          <div className="pb-12">
            <RelatedTours tours={associatedTours.slice(0, 3)} />
          </div>
        </div>
      )}
    </div>
  );
}
