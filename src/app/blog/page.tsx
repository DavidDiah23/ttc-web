import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Understanding the Great Migration: When and Where to Go",
    category: "Wildlife Guide",
    date: "August 12, 2025",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop",
    excerpt: "The Great Migration is one of the most spectacular wildlife events on the planet. Here's our insider guide on how to position yourself for the best view.",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 2,
    title: "What to Pack for a Kilimanjaro Climb",
    category: "Expedition Prep",
    date: "July 28, 2025",
    image: "https://images.unsplash.com/photo-1542640244-7e672d6cb466?q=80&w=2670&auto=format&fit=crop",
    excerpt: "A comprehensive packing list for summiting the Roof of Africa, tested by our expert mountain guides.",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 3,
    title: "Hidden Gems of Stone Town, Zanzibar",
    category: "Culture & History",
    date: "June 15, 2025",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2572&auto=format&fit=crop",
    excerpt: "Beyond the beaches lies a labyrinth of history. Discover the best cafes, markets, and architecture in Stone Town.",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 4,
    title: "Conservation First: How Your Safari Supports Local Communities",
    category: "Sustainability",
    date: "May 02, 2025",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop",
    excerpt: "We believe in travel that gives back. Learn about the community projects entirely funded by TTC expeditions.",
    colSpan: "col-span-1 md:col-span-3",
    rowSpan: "row-span-1",
  }
];

export default function BlogPage() {
  return (
    <div className="bg-[#FAF3EB] min-h-screen text-[#2E1A0E] pt-20">
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="text-[#C4783A] uppercase tracking-[0.2em] text-sm font-semibold block mb-4">
            Field Notes
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-medium text-[#1C0F06] mb-6">
            The TTC Journal
          </h1>
          <p className="text-[#4A2910] text-lg font-light max-w-2xl mx-auto">
            Stories, guides, and insights from the savanna, the summit, and the sea. Written by our guides and local experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto auto-rows-[300px]">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`} 
              className={`group relative overflow-hidden bg-[#1C0F06] ${post.colSpan} ${post.rowSpan} flex flex-col justify-end`}
            >
              <div className="absolute inset-0 bg-[#81491B]/20 mix-blend-multiply z-10 opacity-80 group-hover:opacity-10 transition-opacity duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F06] via-[#1C0F06]/50 to-transparent z-10" />
              <Image 
                src={post.image} 
                alt={post.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="relative z-20 p-8 pt-24">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#81491B] text-[#FFF8F2] text-[10px] uppercase tracking-widest px-2 py-1 font-semibold">
                    {post.category}
                  </span>
                  <span className="text-[#FAF3EB] text-xs opacity-70 uppercase tracking-widest">
                    {post.date}
                  </span>
                </div>
                <h2 className={`font-heading font-medium text-[#FFF8F2] mb-3 group-hover:text-[#C4783A] transition-colors ${post.rowSpan === 'row-span-2' ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                  {post.title}
                </h2>
                {post.rowSpan === 'row-span-2' && (
                  <p className="text-[#FAF3EB]/80 font-light text-sm md:text-base leading-relaxed mb-6 hidden md:block">
                    {post.excerpt}
                  </p>
                )}
                <div className="text-[#C4783A] text-xs tracking-widest uppercase font-semibold flex items-center group-hover:text-[#FFF8F2] transition-colors">
                  Read Article <ArrowRight className="ml-2 w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
