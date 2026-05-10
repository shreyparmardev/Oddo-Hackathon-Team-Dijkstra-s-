"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

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

export default function DashboardPage() {
  const [aiMessage, setAiMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = () => {
    if (!aiMessage.trim()) return;
    setIsSending(true);
    // Simulate sending
    setTimeout(() => {
      setAiMessage("");
      setIsSending(false);
    }, 1500);
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="space-y-12"
    >
      {/* Welcome Header */}
      <motion.section variants={fadeInUp} className="space-y-4">
        <motion.p 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-2"
        >
          Concierge Dashboard
        </motion.p>
        <h1 className="font-heading text-5xl md:text-7xl text-primary tracking-tight leading-tight">
          Welcome back, <span className="text-secondary">Eleanor.</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          Your upcoming journey to the Amalfi Coast is 14 days away. The weather is currently a pristine 72°F. Shall we finalize your dining reservations?
        </p>
      </motion.section>

      {/* Bento Grid Layout */}
      <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Featured Trip Card (Hero Image) */}
        <motion.article 
          variants={fadeInUp}
          whileHover={{ y: -8 }}
          className="col-span-1 md:col-span-12 lg:col-span-8 relative rounded-[2.5rem] overflow-hidden shadow-2xl group h-[450px] md:h-[550px] border border-white dark:border-white/10"
        >
          <motion.div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('/amalfi-luxury.png')" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent group-hover:via-primary/20 transition-all duration-500" />
          
          {/* Glassmorphic Overlay */}
          <div className="absolute bottom-8 left-8 right-8 bg-white/40 dark:bg-black/30 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <div className="space-y-2">
              <span className="inline-block px-4 py-1.5 bg-secondary text-white rounded-full font-sans text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg mb-2">Upcoming Journey</span>
              <h2 className="font-heading text-4xl md:text-5xl text-primary dark:text-white leading-[1.1] tracking-tight">Amalfi Coast Retreat</h2>
              <p className="font-sans text-base text-on-surface-variant dark:text-gray-300 flex items-center gap-3 font-medium">
                <span className="material-symbols-outlined text-[20px] text-secondary">calendar_today</span>
                Oct 12 — Oct 20, 2024
              </p>
            </div>
            <Link href="/dashboard/itinerary">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-sans text-sm font-bold uppercase tracking-widest hover:shadow-2xl hover:scale-105 active:scale-95 transition-all shadow-xl whitespace-nowrap">
                View Itinerary
              </button>
            </Link>
          </div>
        </motion.article>

        {/* Interactive Weather Widget */}
        <motion.article 
          variants={fadeInUp}
          whileHover={{ y: -8 }}
          className="col-span-1 md:col-span-6 lg:col-span-4 bg-gradient-to-br from-surface via-white to-secondary/10 rounded-[2.5rem] p-10 border border-white shadow-2xl relative overflow-hidden flex flex-col justify-between h-[450px] md:h-[550px]"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <h3 className="font-heading text-3xl text-primary mb-1">Positano, IT</h3>
              <p className="font-sans text-sm text-on-surface-variant font-medium">Current Local Time: 4:15 PM</p>
            </div>
            <motion.span 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="material-symbols-outlined text-5xl text-secondary" 
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              light_mode
            </motion.span>
          </div>
          
          <div className="relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="font-heading text-[100px] text-primary tracking-tighter leading-none block"
            >
              72°
            </motion.span>
            <span className="font-sans text-xl text-secondary font-bold tracking-widest uppercase mt-2 block">Pristine & Clear</span>
          </div>
          
          <div className="relative z-10 grid grid-cols-3 gap-4 border-t border-secondary/10 pt-8 mt-6">
            <div className="text-center">
              <span className="block font-sans text-[10px] text-on-surface-variant uppercase mb-2 font-bold tracking-widest">Wind</span>
              <span className="font-sans text-lg text-primary font-bold">8 mph</span>
            </div>
            <div className="text-center border-x border-secondary/10">
              <span className="block font-sans text-[10px] text-on-surface-variant uppercase mb-2 font-bold tracking-widest">Humidity</span>
              <span className="font-sans text-lg text-primary font-bold">45%</span>
            </div>
            <div className="text-center">
              <span className="block font-sans text-[10px] text-on-surface-variant uppercase mb-2 font-bold tracking-widest">High</span>
              <span className="font-sans text-lg text-primary font-bold">76°</span>
            </div>
          </div>
        </motion.article>

        {/* AI Travel Assistant Widget */}
        <motion.article 
          variants={fadeInUp}
          whileHover={{ y: -8 }}
          className="col-span-1 md:col-span-6 lg:col-span-6 bg-surface-container-low/50 backdrop-blur-xl border border-white dark:border-white/10 rounded-[2.5rem] p-10 shadow-2xl flex flex-col h-[400px] relative overflow-hidden"
        >
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
          
          <div className="flex items-center gap-5 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xl">
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="material-symbols-outlined text-2xl" 
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </motion.span>
            </div>
            <div>
              <h3 className="font-heading text-2xl text-primary">Concierge AI</h3>
              <p className="font-sans text-[10px] text-secondary uppercase tracking-[0.2em] font-bold">Deep Intelligence Active</p>
            </div>
          </div>
          
          <div className="flex-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white dark:bg-black/20 rounded-[1.5rem] rounded-tl-none p-6 shadow-sm border border-secondary/5 max-w-[85%]"
            >
              <p className="font-sans text-base text-primary leading-relaxed font-medium">
                I&apos;ve noticed you have a free evening on Day 3 in Positano. Would you like me to book a table at <span className="text-secondary font-bold">La Sponda</span>? Sunset is at 7:12 PM.
              </p>
            </motion.div>
            
            {(isSending || aiMessage) && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, repeat: Infinity, repeatType: "reverse", duration: 1 }}
                className="flex gap-1.5 ml-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
              </motion.div>
            )}
          </div>
          
          <div className="mt-8 relative">
            <input 
              className="w-full bg-white/80 py-5 pl-8 pr-16 rounded-full border border-secondary/10 focus:border-secondary focus:ring-1 focus:ring-secondary/20 font-sans text-base text-primary placeholder:text-on-surface-variant/50 transition-all outline-none shadow-inner" 
              placeholder="Message your concierge..." 
              type="text"
              value={aiMessage}
              onChange={(e) => setAiMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button 
              onClick={handleSendMessage}
              disabled={isSending}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                {isSending ? "hourglass_empty" : "send"}
              </span>
            </button>
          </div>
        </motion.article>

        {/* Budget Analytics */}
        <motion.article 
          variants={fadeInUp}
          whileHover={{ y: -8 }}
          className="col-span-1 md:col-span-12 lg:col-span-6 bg-white dark:bg-primary-container/10 rounded-[2.5rem] p-10 border border-white shadow-2xl flex flex-col h-[400px] relative overflow-hidden"
        >
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-heading text-2xl text-primary">Financial Landscape</h3>
            <div className="flex gap-2">
              <div className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-sans text-[10px] font-bold uppercase tracking-widest border border-secondary/20">Optimized</div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-end gap-3 mb-4">
              <span className="font-heading text-6xl text-primary leading-none tracking-tighter">$14,250</span>
              <span className="font-sans text-lg text-on-surface-variant/50 mb-2 font-medium">/ $18,000</span>
            </div>
            <p className="font-sans text-base text-secondary mb-10 font-medium">
              Intelligence verified: <span className="font-bold">$3,750 surplus</span> detected for spontaneous curation.
            </p>
            
            {/* Minimalist Progress Bar */}
            <div className="w-full h-4 bg-surface-container-high/50 rounded-full overflow-hidden flex shadow-inner">
              <motion.div initial={{ width: 0 }} animate={{ width: "45%" }} transition={{ duration: 1.5, ease: "circOut" }} className="h-full bg-primary" title="Accommodation" />
              <motion.div initial={{ width: 0 }} animate={{ width: "20%" }} transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }} className="h-full bg-secondary" title="Flights" />
              <motion.div initial={{ width: 0 }} animate={{ width: "15%" }} transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }} className="h-full bg-secondary/30" title="Dining" />
            </div>
            
            {/* Legend */}
            <div className="flex gap-8 mt-10 pt-10 border-t border-secondary/5">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/20"></span>
                <span className="font-sans text-[11px] text-on-surface-variant uppercase font-bold tracking-widest">Sanctuaries</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-secondary shadow-lg shadow-secondary/20"></span>
                <span className="font-sans text-[11px] text-on-surface-variant uppercase font-bold tracking-widest">Airways</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-secondary/30"></span>
                <span className="font-sans text-[11px] text-on-surface-variant uppercase font-bold tracking-widest">Gastronomy</span>
              </div>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </motion.div>
  );
}
