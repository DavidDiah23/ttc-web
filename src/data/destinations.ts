import { Destination } from "../lib/types";

export const destinations: Destination[] = [
  {
    id: "dest-1",
    name: "Tanzania",
    slug: "tanzania",
    description: "Home to the Great Migration, the Serengeti, and Ngorongoro Crater. Tanzania offers the quintessential African safari experience with vast wilderness and abundant wildlife.",
    heroImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2572&auto=format&fit=crop",
    keyFacts: {
      bestTimeToVisit: "June to October (Dry Season)",
      currency: "Tanzanian Shilling (TZS), USD widely accepted",
      languages: ["Swahili", "English"]
    },
    highlights: ["Serengeti National Park", "Ngorongoro Crater", "Mount Kilimanjaro", "Tarangire National Park"]
  },
  {
    id: "dest-2",
    name: "Zanzibar",
    slug: "zanzibar",
    description: "A tropical paradise featuring pristine white sand beaches, crystal clear coral-filled waters, and the historic alleys of Stone Town.",
    heroImage: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=2574&auto=format&fit=crop",
    keyFacts: {
      bestTimeToVisit: "June to October, December to February",
      currency: "Tanzanian Shilling (TZS)",
      languages: ["Swahili", "English", "Arabic"]
    },
    highlights: ["Stone Town", "Nungwi Beach", "Prison Island", "Jozani Forest"]
  },
  {
    id: "dest-3",
    name: "Kenya",
    slug: "kenya",
    description: "Experience the Masai Mara, stunning rift valley lakes, and vibrant cultures. Kenya is a classic destination for incredible big cat viewings.",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop",
    keyFacts: {
      bestTimeToVisit: "July to October (Migration)",
      currency: "Kenyan Shilling (KES)",
      languages: ["Swahili", "English"]
    },
    highlights: ["Masai Mara", "Lake Nakuru", "Amboseli National Park", "Tsavo"]
  },
  {
    id: "dest-4",
    name: "Rwanda",
    slug: "rwanda",
    description: "Known as the Land of a Thousand Hills, Rwanda is famous for its misty mountains and unforgettable mountain gorilla trekking.",
    heroImage: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=2670&auto=format&fit=crop",
    keyFacts: {
      bestTimeToVisit: "June to mid-September",
      currency: "Rwandan Franc (RWF)",
      languages: ["Kinyarwanda", "French", "English"]
    },
    highlights: ["Volcanoes National Park", "Kigali Genocide Memorial", "Nyungwe Forest"]
  },
  {
    id: "dest-5",
    name: "Uganda",
    slug: "uganda",
    description: "The Pearl of Africa offers diverse landscapes ranging from the snow-capped Rwenzori Mountains to the immense Lake Victoria and lush gorilla habitats.",
    heroImage: "https://images.unsplash.com/photo-1564750975191-4948a30cc813?q=80&w=2670&auto=format&fit=crop",
    keyFacts: {
      bestTimeToVisit: "June to August, December to February",
      currency: "Ugandan Shilling (UGX)",
      languages: ["English", "Swahili", "Luganda"]
    },
    highlights: ["Bwindi Impenetrable Forest", "Queen Elizabeth National Park", "Murchison Falls"]
  }
];
