import { Tour } from "../lib/types";

export const tours: Tour[] = [
  {
    id: "ts-1",
    title: "7-Day Signature Serengeti Migration Safari",
    slug: "7-day-signature-serengeti-migration-safari",
    category: "Wildlife Safaris",
    duration: 7,
    price: 3450,
    difficulty: "Easy",
    highlights: ["Witness the Great Migration", "Ngorongoro Crater Game Drive", "Luxury Tented Camps", "Big Five Spotting"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description: "Welcome to Tanzania. You will be picked up at Kilimanjaro International Airport and transferred to your lodge in Arusha.",
        location: "Arusha Safari Lodge",
        meals: ["Dinner"]
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description: "Morning departure to Tarangire, famous for its large elephant herds and iconic baobab trees. Enjoy a full day game drive.",
        location: "Tarangire Tented Camp",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 3,
        title: "Ngorongoro Crater",
        description: "Descend into the Ngorongoro Crater, the world's largest inactive volcanic caldera, for a spectacular wildlife viewing experience.",
        location: "Ngorongoro Serena Safari Lodge",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 4,
        title: "Central Serengeti",
        description: "Drive to the Serengeti National Park. Afternoon game drive exploring the endless plains.",
        location: "Serengeti Luxury Camp",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 5,
        title: "Serengeti (Great Migration)",
        description: "Full day following the Great Migration (location depends on the season).",
        location: "Serengeti Luxury Camp",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 6,
        title: "Serengeti to Lake Manyara",
        description: "Morning game drive in Serengeti, then depart for Lake Manyara, famous for tree-climbing lions.",
        location: "Lake Manyara Lodge",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 7,
        title: "Lake Manyara Game Drive & Departure",
        description: "Morning game drive in Lake Manyara. Afternoon transfer back to Arusha or JRO airport.",
        location: "Departure",
        meals: ["Breakfast", "Lunch"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2572&auto=format&fit=crop", // Serengeti
      "https://images.unsplash.com/photo-1547471080-7fc2caa6cb17?q=80&w=2670&auto=format&fit=crop", // Elephant
      "https://images.unsplash.com/photo-1504944983086-4ef3519d0a6c?q=80&w=2574&auto=format&fit=crop" // Cheetah
    ],
    included: ["All Park Fees", "Luxury Accommodation", "4x4 Safari Land Cruiser", "Professional English-speaking Guide", "All Meals"],
    excluded: ["International Flights", "Visa Fees", "Tips and Gratuities", "Travel Insurance"],
    shortDescription: "Experience the magic of Tanzania's northern circuit with our signature 7-day safari following the Great Migration.",
    destinations: ["Serengeti", "Ngorongoro", "Tarangire"]
  },
  {
    id: "ts-2",
    title: "Kilimanjaro Climb: 8-Day Lemosho Route",
    slug: "kilimanjaro-climb-8-day-lemosho-route",
    category: "Kilimanjaro",
    duration: 8,
    price: 2450,
    difficulty: "Expert",
    highlights: ["High Summit Success Rate", "Scenic Lemosho Route", "Expert Mountain Guides", "Premium Camping Gear"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Moshi",
        description: "Arrival at JRO, transfer to Moshi for briefing and gear check.",
        location: "Moshi Town Hotel",
        meals: ["Dinner"]
      },
      {
        day: 2,
        title: "Londorossi Gate to Mti Mkubwa",
        description: "Trek through the lush rainforest to the first camp.",
        location: "Mti Mkubwa Camp (2,650m)",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 3,
        title: "Mti Mkubwa to Shira 1 Camp",
        description: "Leave the forest behind and enter the moorland zone.",
        location: "Shira 1 Camp (3,500m)",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 4,
        title: "Shira 1 to Shira 2 Camp",
        description: "A gentle trek across the Shira Plateau with spectacular views of Kibo peak.",
        location: "Shira 2 Camp (3,850m)",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 5,
        title: "Shira 2 to Barranco Camp via Lava Tower",
        description: "Hike high to Lava Tower for acclimatization, then descend to Barranco.",
        location: "Barranco Camp (3,900m)",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 6,
        title: "Barranco Camp to Karanga Camp",
        description: "Climb the Great Barranco Wall and trek to Karanga.",
        location: "Karanga Camp (3,995m)",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 7,
        title: "Karanga to Barafu to Summit to Mweka",
        description: "Midnight summit attempt to Uhuru Peak, then long descent down to Mweka Camp.",
        location: "Mweka Camp (3,100m)",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 8,
        title: "Mweka Camp to Moshi",
        description: "Short descent to the gate to collect your certificate, then transfer to Moshi.",
        location: "Moshi Town Hotel",
        meals: ["Breakfast", "Lunch"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=2671&auto=format&fit=crop", // Kili
      "https://images.unsplash.com/photo-1542640244-7e672d6cb466?q=80&w=2670&auto=format&fit=crop" // Trekking
    ],
    included: ["All Park Fees", "Mountain Guides & Porters", "Camping Equipment", "All Meals on the Mountain", "Rescue Fees"],
    excluded: ["International Flights", "Sleeping Bags", "Tips for Crew", "Personal Trekking Gear"],
    shortDescription: "Conquer the Roof of Africa via the scenic and high-success Lemosho route over 8 days.",
    destinations: ["Mount Kilimanjaro"]
  },
  {
    id: "ts-3",
    title: "5-Day Zanzibar Beach Retreat",
    slug: "5-day-zanzibar-beach-retreat",
    category: "Zanzibar",
    duration: 5,
    price: 1150,
    difficulty: "Easy",
    highlights: ["Pristine Beaches", "Stone Town Tour", "Spice Farm Visit", "Dhow Cruise"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Zanzibar",
        description: "Transfer to your beach resort in Nungwi or Kendwa.",
        location: "Zanzibar Beach Resort",
        meals: ["Dinner"]
      },
      {
        day: 2,
        title: "Beach Day & Sunset Cruise",
        description: "Relax on the beach. Evening traditional Dhow cruise.",
        location: "Zanzibar Beach Resort",
        meals: ["Breakfast", "Dinner"]
      },
      {
        day: 3,
        title: "Safari Blue Excursion",
        description: "Full day boat trip cruising, snorkeling, and seafood BBQ.",
        location: "Zanzibar Beach Resort",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 4,
        title: "Stone Town & Spice Tour",
        description: "Explore the historical alleys of Stone Town and a fragrant spice plantation.",
        location: "Stone Town Hotel",
        meals: ["Breakfast", "Dinner"]
      },
      {
        day: 5,
        title: "Departure",
        description: "Transfer to Zanzibar Airport for your onward flight.",
        location: "Departure",
        meals: ["Breakfast"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=2574&auto=format&fit=crop", // Beach
      "https://images.unsplash.com/photo-1621245084949-8e6b185672ab?q=80&w=2670&auto=format&fit=crop" // Stone town
    ],
    included: ["Transfers", "Resort Accommodation", "Breakfast & Dinner", "Safari Blue Tour", "Stone Town Tour"],
    excluded: ["International Flights", "Lunches (unless specified)", "Drinks", "Gratuities"],
    shortDescription: "Relax on the white sand beaches of Zanzibar after your thrilling safari or Kilimanjaro climb.",
    destinations: ["Zanzibar"]
  },
  {
    id: "ts-4",
    title: "4-Day Uganda Gorilla Trekking",
    slug: "4-day-uganda-gorilla-trekking",
    category: "Gorilla Trekking",
    duration: 4,
    price: 3200,
    difficulty: "Challenging",
    highlights: ["Mountain Gorilla Encounter", "Bwindi Impenetrable Forest", "Batwa Cultural Experience"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Entebbe & Transfer",
        description: "Arrival and transfer to Bwindi.",
        location: "Bwindi Lodge",
        meals: ["Dinner"]
      },
      {
        day: 2,
        title: "Gorilla Trekking",
        description: "Full day trekking through the dense forest to encounter a gorilla family.",
        location: "Bwindi Lodge",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 3,
        title: "Batwa Community Visit",
        description: "Learn about the traditions and forest life of the Batwa pygmies.",
        location: "Bwindi Lodge",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 4,
        title: "Departure",
        description: "Transfer back to Entebbe for departure.",
        location: "Departure",
        meals: ["Breakfast"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1564750975191-4948a30cc813?q=80&w=2670&auto=format&fit=crop" // Gorilla
    ],
    included: ["Gorilla Permit ($700 value)", "Lodge Accommodation", "All Meals", "Transfers"],
    excluded: ["Flights", "Visas", "Gratuities"],
    shortDescription: "An unforgettable encounter with the majestic mountain gorillas in the misty forests of Uganda.",
    destinations: ["Bwindi National Park"]
  }
];
