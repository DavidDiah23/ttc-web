export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Expert";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  location: string;
  meals: string[]; // e.g. ["Breakfast", "Lunch", "Dinner"]
}

export interface Tour {
  id: string;
  title: string;
  slug: string;
  category: "Wildlife Safaris" | "Kilimanjaro" | "Zanzibar" | "Gorilla Trekking" | "Custom";
  duration: number; // in days
  price: number; // starting price in USD
  difficulty?: Difficulty;
  highlights: string[];
  itinerary: ItineraryDay[];
  images: string[];
  included: string[];
  excluded: string[];
  shortDescription: string;
  destinations: string[];
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  description: string;
  heroImage: string;
  keyFacts: {
    bestTimeToVisit: string;
    currency: string;
    languages: string[];
  };
  highlights: string[];
}

export interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  body: string;
  verified: boolean;
  avatarUrl?: string;
}
