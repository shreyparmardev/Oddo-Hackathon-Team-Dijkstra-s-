"use client";

import Image from "next/image";
import { TripCard } from "@/components/trips/TripCard";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const allTrips = [
  {
    id: "1",
    image: "/amalfi-luxury.png",
    title: <>Amalfi Coast<br/>Retreat</>,
    subtitle: "Sept 12 - Sept 19 • Coastal Luxury",
    status: "upcoming",
    statusText: "IN 14 DAYS",
    timeline: [
      { text: "Arrive in Positano, Villa Check-in", isDotVariant: false },
      { text: "Private Yacht Charter to Capri", isDotVariant: true }
    ]
  },
  {
    id: "2",
    image: "/kyoto-luxury.png",
    title: <>Kyoto Autumn<br/>Awakening</>,
    subtitle: "Nov 02 - Nov 14 • Culture & Wellness",
    status: "upcoming",
    statusText: "IN 45 DAYS",
    timeline: [
      { text: "Ryokan Check-in, Tea Ceremony", isDotVariant: false },
      { text: "Arashiyama Bamboo Grove Walk", isDotVariant: true }
    ]
  },
  {
    id: "3",
    image: "/amalfi-map.png",
    title: <>Zermatt Winter<br/>Escape</>,
    subtitle: "Dates TBD • Alpine Adventure",
    status: "draft",
    statusText: "PLANNING",
    progress: 45
  },
  {
    id: "4",
    image: "/dubai-luxury.png",
    title: <>Parisian Summer<br/>Soirée</>,
    subtitle: "June 15 - June 22, 2023",
    status: "past",
    statusText: "COMPLETED",
    timeline: [
      { text: "Louvre Private Tour", isDotVariant: false },
      { text: "Seine Dinner Cruise", isDotVariant: true }
    ]
  }
];

import { useTripStore } from "@/store/useTripStore";

export default function MyTripsPage() {
  const [filter, setFilter] = useState("UPCOMING");
  const { trips } = useTripStore();

  const filteredTrips = trips.filter(trip => {
    if (filter === "DRAFTS") return trip.status === "draft";
    return trip.status.toUpperCase() === filter;
  });

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="w-full relative"
    >
      {/* Ambient Header Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-secondary/5 via-transparent to-transparent -z-10"></div>
      
      {/* Page Header */}
      <header className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.div variants={fadeInUp} className="max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4"
          >
            Your Portfolio
          </motion.p>
          <h1 className="font-heading text-5xl md:text-7xl text-primary mb-4 tracking-tight leading-[0.95]">
            My Journeys
          </h1>
          <p className="font-sans text-lg md:text-xl text-on-surface-variant leading-relaxed">
            Your curated collection of past adventures and upcoming escapes. Every journey is a masterpiece in the making.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Link href="/dashboard/planner">
            <button className="bg-primary text-on-primary font-sans text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group">
              <span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform duration-500">auto_awesome</span>
              Plan New Journey
            </button>
          </Link>
        </motion.div>
      </header>

      {/* Filters */}
      <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-12">
        {["UPCOMING", "PAST", "DRAFTS"].map((f) => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`px-8 py-3 rounded-full font-sans text-xs uppercase tracking-[0.2em] transition-all font-bold ${
              filter === f 
                ? "bg-primary text-on-primary shadow-xl scale-105" 
                : "bg-surface/50 border border-surface-variant text-on-surface-variant hover:bg-surface hover:text-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredTrips.map((trip) => (
            <motion.div 
              key={trip.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <TripCard
                href="/dashboard/itinerary"
                image={trip.image}
                title={<>{trip.title.split(",")[0]}</>}
                subtitle={`${trip.startDate} - ${trip.endDate} • ${trip.destination}`}
                status={trip.status as any}
                statusText={trip.status === "draft" ? "PLANNING" : trip.status === "upcoming" ? "UPCOMING" : "COMPLETED"}
                timeline={trip.generatedTrip ? [
                  { text: trip.generatedTrip.days[0]?.activities[0] || "Arrival & Check-in", isDotVariant: false },
                  { text: trip.generatedTrip.days[1]?.title || "Exploration", isDotVariant: true }
                ] : undefined}
                progress={trip.progress}
              />
            </motion.div>
          ))}
        </AnimatePresence>
        {filteredTrips.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="col-span-full py-20 text-center"
          >
            <p className="font-sans text-on-surface-variant text-lg">No {filter.toLowerCase()} journeys found.</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
