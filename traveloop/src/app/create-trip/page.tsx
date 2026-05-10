"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTripStore } from "@/store/useTripStore";

interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

// AI trip generation data keyed by destination keywords
const tripDatabase: Record<string, { name: string; days: ItineraryDay[]; budget: string; weather: string; image: string }> = {
  amalfi: {
    name: "Amalfi Coast, Italy", image: "/amalfi-luxury.png",
    budget: "$4,500", weather: "Sunny, 72°F",
    days: [
      { day: 1, title: "Arrival in Naples & Transfer", activities: ["Private airport transfer to Positano via coastal road", "Check-in at Le Sirenuse — Sea View Suite", "Welcome champagne & handwritten concierge note"] },
      { day: 2, title: "Path of the Gods Hike", activities: ["Guided sunrise hike along Sentiero degli Dei", "Gourmet cliff-side picnic with local wine pairing", "Afternoon spa & infinity pool at hotel"] },
      { day: 3, title: "Capri Island Excursion", activities: ["Private speedboat to Capri (30 min scenic ride)", "Blue Grotto cave tour by traditional rowboat", "Limoncello tasting at family-owned lemon grove"] },
      { day: 4, title: "Ravello & Culture Day", activities: ["Visit Villa Rufolo's Moorish gardens", "Private ceramic workshop with local artisan", "Dinner at Rossellinis — 2 Michelin stars"] },
      { day: 5, title: "Coastal Leisure & Departure", activities: ["Morning swim at Fornillo Beach", "Shopping in Positano — handmade sandals & linen", "Private transfer to Naples Capodichino airport"] },
    ]
  },
  paris: {
    name: "Paris, France", image: "/dubai-luxury.png",
    budget: "$5,200", weather: "Mild, 65°F",
    days: [
      { day: 1, title: "Arrival & Montmartre", activities: ["CDG airport → Le Meurice via private chauffeur", "Suite check-in overlooking Tuileries Garden", "Sunset stroll through Montmartre to Sacré-Cœur"] },
      { day: 2, title: "Art & Culture", activities: ["Private Louvre tour — Mona Lisa & Venus de Milo", "Lunch at Café de Flore in Saint-Germain", "Musée d'Orsay impressionist collection"] },
      { day: 3, title: "Versailles Day Trip", activities: ["Chauffeured ride to Palace of Versailles", "Hall of Mirrors & Marie Antoinette's Estate", "Evening Seine dinner cruise past Eiffel Tower"] },
      { day: 4, title: "Gastronomy & Shopping", activities: ["Cooking class with Michelin-starred Chef Pierre", "Le Marais boutique shopping & patisserie tour", "Rooftop cocktails at Le Perchoir at golden hour"] },
      { day: 5, title: "Eiffel & Departure", activities: ["Sunrise photography at Trocadéro esplanade", "Champagne breakfast on Eiffel Tower 2nd floor", "Private transfer to CDG airport"] },
    ]
  },
  tokyo: {
    name: "Tokyo & Kyoto, Japan", image: "/kyoto-luxury.png",
    budget: "$6,800", weather: "Pleasant, 68°F",
    days: [
      { day: 1, title: "Tokyo Arrival", activities: ["Narita Express → Aman Tokyo in Otemachi", "Executive Suite check-in with Mt. Fuji views", "Evening walk through neon-lit Shibuya & Shinjuku"] },
      { day: 2, title: "Traditional Tokyo", activities: ["5am Tsukiji outer market sushi breakfast", "Meiji Shrine meditation & Harajuku street fashion", "TeamLab Borderless immersive digital art museum"] },
      { day: 3, title: "Bullet Train to Kyoto", activities: ["Shinkansen first-class to Kyoto (2h 15m)", "Fushimi Inari — walk through 10,000 vermilion torii", "Check-in at 300-year-old Ryokan with onsen bath"] },
      { day: 4, title: "Zen Kyoto", activities: ["Private tea ceremony with Zen Buddhist monk", "Morning walk through Arashiyama bamboo grove", "Kinkaku-ji Golden Pavilion & Zen garden"] },
      { day: 5, title: "Osaka & Departure", activities: ["Nishiki Market 'Kyoto's Kitchen' food tour", "Quick stop at Osaka Dotonbori for street food", "Transfer to Kansai International airport"] },
    ]
  },
  dubai: {
    name: "Dubai, UAE", image: "/dubai-luxury.png",
    budget: "$7,500", weather: "Hot & Sunny, 95°F",
    days: [
      { day: 1, title: "Arrival & Downtown", activities: ["VIP airport lounge → Rolls Royce transfer", "Check-in at Burj Al Arab Royal Suite", "Burj Khalifa At The Top sunset observation (148th floor)"] },
      { day: 2, title: "Desert Adventure", activities: ["Dawn hot air balloon flight over red dunes", "Private desert safari with falconry demonstration", "Bedouin camp dinner with belly dancing under stars"] },
      { day: 3, title: "Luxury & Heritage", activities: ["Dubai Mall aquarium & underwater zoo", "Abra boat ride to Gold & Spice Souks in Old Deira", "Dhow cruise dinner along Dubai Creek"] },
      { day: 4, title: "Beach & Farewell", activities: ["Private yacht tour around Palm Jumeirah", "Spa day at Talise Ottoman in Jumeirah Zabeel", "Farewell omakase dinner at Nobu Dubai"] },
    ]
  },
  bali: {
    name: "Bali, Indonesia", image: "/amalfi-map.png",
    budget: "$3,200", weather: "Tropical, 82°F",
    days: [
      { day: 1, title: "Arrival in Ubud", activities: ["Airport transfer through rice paddies to Ubud", "Check-in at Four Seasons Sayan — river valley suite", "Traditional Balinese welcome & blessing ceremony"] },
      { day: 2, title: "Rice Terraces & Culture", activities: ["Tegallalang rice terrace sunrise trek", "Hands-on Balinese cooking class with local family", "Sacred Monkey Forest Sanctuary walk"] },
      { day: 3, title: "Temple & Waterfall", activities: ["Tirta Empul holy water temple purification ritual", "Swim in Tegenungan Waterfall natural pool", "Evening Kecak fire dance performance at Uluwatu"] },
      { day: 4, title: "Beach & Surf", activities: ["Transfer to Seminyak beach coast", "Private surf lesson with championship instructor", "Sunset cocktails at Potato Head Beach Club"] },
      { day: 5, title: "Wellness & Departure", activities: ["Morning yoga & meditation at cliff-edge pavilion", "Farewell brunch at La Lucciola oceanfront", "Transfer to Ngurah Rai International airport"] },
    ]
  },
  london: {
    name: "London, England", image: "/dubai-luxury.png",
    budget: "$5,800", weather: "Cool & Crisp, 58°F",
    days: [
      { day: 1, title: "Arrival & Mayfair", activities: ["Heathrow → Claridge's via Bentley transfer", "Art Deco suite check-in with afternoon tea", "Evening walk along South Bank to Tower Bridge"] },
      { day: 2, title: "Royal London", activities: ["Buckingham Palace & Changing of the Guard", "Private guided tour of the Tower of London", "West End theatre — Les Misérables matinée"] },
      { day: 3, title: "Culture & Markets", activities: ["British Museum — Rosetta Stone & Parthenon", "Borough Market gourmet food walk", "Cocktails in a speakeasy in Shoreditch"] },
      { day: 4, title: "Departure", activities: ["Harrods & Liberty shopping morning", "High tea at The Ritz", "Heathrow transfer & departure"] },
    ]
  },
  maldives: {
    name: "Maldives", image: "/amalfi-luxury.png",
    budget: "$9,200", weather: "Tropical, 86°F",
    days: [
      { day: 1, title: "Arrival in Paradise", activities: ["Seaplane transfer from Malé to private atoll", "Overwater villa check-in at Soneva Fushi", "Sunset champagne on private deck"] },
      { day: 2, title: "Ocean Adventure", activities: ["Sunrise dolphin watching cruise", "Private guided snorkeling at coral reef", "Underwater restaurant dinner at Ithaa"] },
      { day: 3, title: "Relaxation", activities: ["Overwater spa couples treatment", "Private sandbank picnic & island hopping", "Stargazing session with observatory telescope"] },
      { day: 4, title: "Farewell", activities: ["Sunrise yoga on the beach", "Final lagoon kayaking session", "Seaplane transfer to Malé for departure"] },
    ]
  },
  switzerland: {
    name: "Swiss Alps, Switzerland", image: "/amalfi-map.png",
    budget: "$6,500", weather: "Alpine, 50°F",
    days: [
      { day: 1, title: "Arrival in Zermatt", activities: ["Zurich → Zermatt via Glacier Express panoramic train", "Check-in at The Omnia with Matterhorn views", "Welcome fondue dinner & Swiss wine"] },
      { day: 2, title: "Matterhorn Day", activities: ["Gornergrat railway to 3,089m viewpoint", "Alpine meadow picnic with cheese & charcuterie", "Afternoon at Riffelberg spa with glacier views"] },
      { day: 3, title: "Interlaken & Adventure", activities: ["Transfer to Interlaken lakeside town", "Paragliding over Lake Brienz & Thun", "Dinner cruise on turquoise Lake Thun"] },
      { day: 4, title: "Lucerne & Departure", activities: ["Morning walk across Chapel Bridge", "Lake Lucerne steamer cruise", "Transfer to Zurich airport"] },
    ]
  }
};

const defaultTrip = {
  name: "Custom Destination",
  budget: "$4,000",
  weather: "Varies",
  image: "/amalfi-luxury.png",
  days: [
    { day: 1, title: "Arrival & Check-in", activities: ["Airport transfer to luxury hotel", "Suite check-in with welcome amenities", "Evening city exploration & local dinner"] },
    { day: 2, title: "Cultural Immersion", activities: ["Guided tour of iconic landmarks", "Traditional cuisine tasting with local chef", "Museum or gallery private tour"] },
    { day: 3, title: "Adventure Day", activities: ["Outdoor excursion tailored to destination", "Nature hike, boat tour, or safari", "Local market shopping & artisan crafts"] },
    { day: 4, title: "Relaxation & Farewell", activities: ["Morning spa treatment at hotel", "Farewell lunch at top-rated restaurant", "Airport transfer & departure"] },
  ]
};

const aiSteps = [
  { icon: "psychology", text: "Analyzing your travel preferences..." },
  { icon: "cloud", text: "Checking weather patterns for your dates..." },
  { icon: "restaurant", text: "Cross-referencing top restaurants..." },
  { icon: "hotel", text: "Evaluating boutique hotels..." },
  { icon: "route", text: "Optimizing scenic routes..." },
  { icon: "auto_awesome", text: "Building your personalized itinerary..." },
];

function TypewriterText({ text, speed = 30 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <>{displayed}<span className="animate-pulse">|</span></>;
}

function findTripData(prompt: string) {
  const lower = prompt.toLowerCase();
  for (const key of Object.keys(tripDatabase)) {
    if (lower.includes(key)) return tripDatabase[key];
  }
  // Broader keyword matching
  const aliases: Record<string, string> = {
    italy: "amalfi", positano: "amalfi", naples: "amalfi", sorrento: "amalfi", "italian coast": "amalfi",
    france: "paris", eiffel: "paris", louvre: "paris", montmartre: "paris", french: "paris",
    japan: "tokyo", kyoto: "tokyo", osaka: "tokyo", japanese: "tokyo", sakura: "tokyo",
    uae: "dubai", burj: "dubai", "abu dhabi": "dubai", desert: "dubai", arabic: "dubai",
    indonesia: "bali", ubud: "bali", balinese: "bali", surf: "bali",
    england: "london", british: "london", uk: "london", "united kingdom": "london", thames: "london",
    maldive: "maldives", overwater: "maldives", atoll: "maldives", "private island": "maldives",
    swiss: "switzerland", alps: "switzerland", zurich: "switzerland", zermatt: "switzerland", matterhorn: "switzerland",
    goa: "bali", thailand: "bali", phuket: "bali", beach: "bali",
    rome: "amalfi", venice: "amalfi", florence: "amalfi",
    "new york": "london", manhattan: "london",
    santorini: "maldives", greece: "maldives", mykonos: "maldives",
    barcelona: "paris", spain: "paris", lisbon: "paris",
    mumbai: "dubai", delhi: "dubai", india: "dubai", jaipur: "dubai", rajasthan: "dubai",
  };
  for (const [keyword, dest] of Object.entries(aliases)) {
    if (lower.includes(keyword)) return tripDatabase[dest];
  }
  return null;
}

export default function CreateTripWizard() {
  const router = useRouter();
  const { addTrip, setLastGeneratedTrip } = useTripStore();
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [generatedTrip, setGeneratedTrip] = useState<typeof defaultTrip | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setCurrentStep(0);
    setProgress(0);
    setGeneratedTrip(null);

    for (let i = 0; i < aiSteps.length; i++) {
      setCurrentStep(i);
      setProgress(((i + 1) / aiSteps.length) * 100);
      await new Promise((r) => setTimeout(r, 900));
    }

    await new Promise((r) => setTimeout(r, 400));
    const data = findTripData(prompt) || defaultTrip;
    setGeneratedTrip(data);
    setIsGenerating(false);
  };

  const quickPrompts = [
    { label: "🏖️ Romantic Amalfi Coast", text: "A 5-day romantic getaway to the Amalfi Coast in October, focusing on authentic food, boat tours, and luxury cliff-side stays." },
    { label: "🎌 Cultural Japan", text: "10 days exploring traditional and modern Japan — Tokyo, Kyoto, Osaka. Interested in temples, street food, cherry blossoms." },
    { label: "🏔️ Bali Retreat", text: "A 5-day wellness retreat in Bali. Focus on yoga, rice terraces, and beach relaxation." },
    { label: "🌆 Paris Escape", text: "A romantic 5-day trip to Paris with fine dining, art museums, and the Eiffel Tower." },
    { label: "🏙️ Dubai Luxury", text: "A 4-day luxury trip to Dubai with desert safari, yacht tours, and the Burj Khalifa." },
  ];

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary-fixed/15 rounded-full blur-[150px]"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <AnimatePresence mode="wait">
        {!isGenerating && !generatedTrip ? (
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30, transition: { duration: 0.4 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl w-full z-10"
          >
            <div className="text-center mb-12">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
                AI Concierge
              </motion.p>
              <h1 className="font-heading text-4xl md:text-6xl text-primary mb-4 leading-tight">Where to next?</h1>
              <p className="font-sans text-lg text-on-surface-variant max-w-lg mx-auto">
                Describe your dream trip in your own words. Our AI will craft a bespoke itinerary in seconds.
              </p>
            </div>

            <div className="relative glass-panel rounded-3xl p-2 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. A 5-day romantic getaway to the Amalfi Coast..."
                className="w-full bg-transparent border-none resize-none p-6 text-lg text-on-surface placeholder:text-outline font-sans focus:outline-none min-h-[160px]"
              />
              <div className="flex items-center justify-between px-4 pb-4">
                <span className="font-sans text-xs text-outline">{prompt.length > 0 ? `${prompt.length} chars` : "Natural language"}</span>
                <Button onClick={handleGenerate} disabled={!prompt.trim()} className="bg-primary text-on-primary rounded-full px-8 py-6 flex items-center gap-2 hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all disabled:opacity-40">
                  <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                  <span className="font-sans font-medium text-base">Generate Trip</span>
                </Button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              {quickPrompts.map((qp) => (
                <button key={qp.label} onClick={() => setPrompt(qp.text)} className="px-4 py-2.5 rounded-full border border-surface-variant text-sm text-on-surface-variant hover:bg-surface-variant hover:border-secondary/30 hover:text-primary transition-all font-sans">
                  {qp.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : isGenerating ? (
          <motion.div key="loading" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col items-center justify-center z-10 max-w-lg w-full">
            <div className="relative w-28 h-28 mb-10">
              <motion.div className="absolute inset-0 border-[3px] border-primary/20 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
              <motion.div className="absolute inset-2 border-[3px] border-secondary/40 rounded-full border-t-transparent" animate={{ rotate: -360 }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} />
              <motion.div className="absolute inset-4 border-[3px] border-primary/30 rounded-full border-b-transparent" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span className="material-symbols-outlined text-3xl text-primary" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>auto_awesome</motion.span>
              </div>
            </div>
            <div className="w-full bg-surface-variant/50 rounded-full h-1.5 mb-8 overflow-hidden">
              <motion.div className="bg-secondary h-full rounded-full" animate={{ width: `${progress}%` }} transition={{ duration: 0.5, ease: "easeOut" }} />
            </div>
            <div className="w-full space-y-3">
              {aiSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: i <= currentStep ? 1 : 0.2, x: i <= currentStep ? 0 : -20 }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${i === currentStep ? "bg-surface-container-low border border-secondary/20" : i < currentStep ? "opacity-60" : ""}`}>
                  <span className={`material-symbols-outlined text-[18px] ${i < currentStep ? "text-secondary" : i === currentStep ? "text-primary" : "text-outline"}`}>
                    {i < currentStep ? "check_circle" : step.icon}
                  </span>
                  <span className="font-sans text-sm text-on-surface">
                    {i === currentStep ? <TypewriterText text={step.text} speed={25} /> : step.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : generatedTrip ? (
          <motion.div key="result" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl w-full z-10">
            <div className="text-center mb-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-3">Your AI-Crafted Itinerary</p>
              <h1 className="font-heading text-4xl md:text-5xl text-primary mb-2">{generatedTrip.name}</h1>
              <div className="flex justify-center gap-6 mt-4">
                <span className="flex items-center gap-2 font-sans text-sm text-on-surface-variant"><span className="material-symbols-outlined text-secondary text-[18px]">payments</span>{generatedTrip.budget}</span>
                <span className="flex items-center gap-2 font-sans text-sm text-on-surface-variant"><span className="material-symbols-outlined text-secondary text-[18px]">thermostat</span>{generatedTrip.weather}</span>
                <span className="flex items-center gap-2 font-sans text-sm text-on-surface-variant"><span className="material-symbols-outlined text-secondary text-[18px]">calendar_month</span>{generatedTrip.days.length} Days</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {generatedTrip.days.map((day, i) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="glass-panel rounded-2xl p-6 border border-surface-variant bg-white/80 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center font-sans text-sm font-bold shadow-lg">
                      D{day.day}
                    </div>
                    <h3 className="font-heading text-xl text-primary">{day.title}</h3>
                  </div>
                  <ul className="space-y-2 pl-14">
                    {day.activities.map((act, j) => (
                      <li key={j} className="flex items-start gap-2 font-sans text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-secondary text-[14px] mt-0.5">check_circle</span>
                        {act}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <button onClick={() => { setGeneratedTrip(null); setPrompt(""); }} className="px-8 py-4 rounded-full border-2 border-surface-variant text-primary font-sans text-sm font-bold uppercase tracking-widest hover:bg-surface-container-low transition-all">
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">refresh</span> Start Over</span>
              </button>
              <button 
                onClick={() => {
                  const newTripId = `trip_${Date.now()}`;
                  setLastGeneratedTrip(generatedTrip);
                  addTrip({
                    id: newTripId,
                    title: generatedTrip.name,
                    destination: generatedTrip.name.split(",")[0],
                    startDate: "TBD",
                    endDate: "TBD",
                    status: "upcoming",
                    image: generatedTrip.image,
                    progress: 10,
                    generatedTrip: generatedTrip
                  });
                  router.push("/dashboard");
                }} 
                className="px-8 py-4 rounded-full bg-primary text-white font-sans text-sm font-bold uppercase tracking-widest hover:shadow-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">bookmark</span> Save & View Itinerary</span>
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
