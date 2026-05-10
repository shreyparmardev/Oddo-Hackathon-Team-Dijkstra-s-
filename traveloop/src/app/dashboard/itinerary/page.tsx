"use client";

import Image from "next/image";
import { TripSubNav } from "@/components/layout/TripSubNav";
import { DayBlock, TransportCard, HotelCard, ActivityCard } from "@/components/planner/ItineraryBlocks";
import { motion } from "framer-motion";

import { useTripStore } from "@/store/useTripStore";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function ItineraryBuilderPage() {
  const { lastGeneratedTrip } = useTripStore();
  
  const tripName = lastGeneratedTrip?.name || "Amalfi Coast Escape";
  const tripDays = lastGeneratedTrip?.days || [
    { day: 1, title: "Arrival & Acclimation", activities: ["Private Transfer from Naples (NAP)", "Check-in at Le Sirenuse"] },
    { day: 2, title: "The Path of the Gods", activities: ["Guided Hike & Gourmet Picnic"] },
    { day: 3, title: "Island of Capri", activities: ["Private Speedboat to Capri", "Blue Grotto & Limoncello Tasting"] }
  ];

  return (
    <>
      <TripSubNav />
      <div className="flex flex-col xl:flex-row gap-8 w-full">
      {/* Itinerary Builder Section */}
      <div className="flex-1 overflow-y-auto pr-0 xl:pr-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 font-sans text-xs font-semibold uppercase tracking-wider text-secondary flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              AI Generated
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container-low border border-surface-variant font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              UPCOMING
            </span>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-secondary">
              DATES TBD
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">{tripName}</h2>
          <p className="font-sans text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            A curated journey prepared exclusively for you by our AI concierge based on your unique preferences and style.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-10 max-w-4xl">
          {/* Timeline Vertical Line */}
          <div className="absolute left-6 md:left-[39px] top-4 bottom-0 w-0.5 bg-secondary-fixed-dim -z-10"></div>

          {tripDays.map((day, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <DayBlock dayNum={day.day} title={day.title} subtitle={`Day ${day.day} Highlights`} isSecondaryDot={idx % 2 !== 0}>
                {day.activities.map((activity, actIdx) => (
                  <ActivityCard 
                    key={actIdx}
                    image={lastGeneratedTrip?.image || "/amalfi-luxury.png"}
                    title={activity}
                    time="Flexible"
                    description={`Curated experience: ${activity}`}
                    tags={["CURATED"]}
                  />
                ))}
              </DayBlock>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sticky Map Preview (Desktop/Tablet) */}
      <aside className="hidden xl:block w-[400px] 2xl:w-[500px] shrink-0">
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="sticky top-32 flex flex-col gap-6 p-6 bg-surface-container-lowest/50 dark:bg-primary-container/20 rounded-2xl border border-surface-variant"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-heading text-xl text-primary">Route Overview</h3>
            <div className="flex gap-2">
              <button className="p-2 rounded bg-surface-container-low hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">layers</span></button>
              <button className="p-2 rounded bg-surface-container-low hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">fullscreen</span></button>
            </div>
          </div>

          {/* Custom Map Area */}
          <div className="w-full h-[500px] rounded-2xl overflow-hidden relative shadow-inner bg-[#E5DED1]/30 dark:bg-primary-container">
            {/* High-Res Map Background */}
            <Image 
              src="/amalfi-map.png" 
              alt="Map view"
              fill
              className="object-cover opacity-80 mix-blend-multiply dark:mix-blend-screen"
            />
            {/* Faux Glowing Route & Markers */}
            <svg className="absolute inset-0 w-full h-full z-10" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 600">
              <path className="opacity-80" d="M 100 150 Q 200 250 150 400 T 250 500" fill="none" stroke="#9acee2" strokeDasharray="6,6" strokeWidth="3"></path>
              <circle cx="100" cy="150" fill="#1a2b3c" r="6" stroke="#ffffff" strokeWidth="2"></circle>
              <circle cx="150" cy="400" fill="#306576" r="8" stroke="#ffffff" strokeWidth="2"></circle>
              <circle cx="250" cy="500" fill="#1a2b3c" r="6" stroke="#ffffff" strokeWidth="2"></circle>
            </svg>
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/80 z-20 pointer-events-none"></div>
            
            {/* Map Info Card */}
            <div className="absolute bottom-6 left-6 right-6 z-30 glass-panel p-4 rounded-xl dark:bg-black/40">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>directions_car</span>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-medium text-primary">Current Segment</h4>
                  <p className="font-sans text-xs text-on-surface-variant">Naples to Positano • 1h 20m</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trip Summary */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Duration", value: "7 Days", icon: "calendar_month" },
              { label: "Budget", value: "$4,500", icon: "payments" },
              { label: "Stops", value: "4 Cities", icon: "pin_drop" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3 rounded-xl bg-surface-container-low border border-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[18px] mb-1 block">{stat.icon}</span>
                <p className="font-heading text-lg text-primary">{stat.value}</p>
                <p className="font-sans text-[10px] text-on-surface-variant uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <button className="py-3 rounded-lg border border-surface-variant text-primary font-sans font-semibold text-sm hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">add</span> Add Note
            </button>
            <button className="py-3 rounded-lg border border-surface-variant text-primary font-sans font-semibold text-sm hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">share</span> Share
            </button>
          </div>
        </motion.div>
      </aside>
    </div>
    </>
  );
}
