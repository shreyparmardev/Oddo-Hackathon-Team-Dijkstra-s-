"use server";

export async function generateAITripItinerary(prompt: string) {
  // Simulate network delay for AI processing
  await new Promise(resolve => setTimeout(resolve, 3000));

  return {
    title: "Enchanting Amalfi Coast",
    destination: "Amalfi Coast, Italy",
    duration: 5,
    budget: "$2,400",
    highlights: ["Positano sunsets", "Capri boat tour", "Authentic limoncello tasting"],
    days: [
      {
        day: 1,
        title: "Arrival & Positano Exploration",
        activities: [
          { time: "10:00 AM", title: "Arrive in Naples, transfer to Positano", cost: 120 },
          { time: "02:00 PM", title: "Check-in at Hotel Sirenuse", cost: 0 },
          { time: "05:30 PM", title: "Sunset drinks at Franco's Bar", cost: 45 },
        ]
      },
      {
        day: 2,
        title: "Path of the Gods",
        activities: [
          { time: "08:00 AM", title: "Hike the Path of the Gods (Il Sentiero degli Dei)", cost: 0 },
          { time: "01:00 PM", title: "Lunch at La Tagliata", cost: 65 },
          { time: "04:00 PM", title: "Relax at Spiaggia Grande", cost: 30 },
        ]
      },
      {
        day: 3,
        title: "Capri Island Tour",
        activities: [
          { time: "09:00 AM", title: "Private boat tour to Capri", cost: 250 },
          { time: "12:00 PM", title: "Visit the Blue Grotto", cost: 35 },
          { time: "07:00 PM", title: "Dinner at Ristorante Michel'angelo", cost: 90 },
        ]
      }
    ],
    tips: [
      "Book ferries in advance during peak season.",
      "Wear comfortable walking shoes; lots of stairs!",
      "Try the local sfogliatella pastry."
    ]
  };
}

export async function generateAIPackingList(destination: string, duration: number) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  return [
    { category: "Essentials", items: ["Passport", "Travel Insurance", "Universal Adapter", "Euros"] },
    { category: "Clothing", items: ["Light linen shirts", "Swimwear", "Comfortable walking shoes", "Evening attire"] },
    { category: "Toiletries", items: ["Sunscreen (SPF 50)", "Aloe vera", "Basic first-aid kit", "Motion sickness pills"] },
    { category: "Beach/Boat", items: ["Microfiber towel", "Waterproof phone case", "Sunglasses", "Wide-brimmed hat"] }
  ];
}
