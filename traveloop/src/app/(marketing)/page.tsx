"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { DestinationCard } from "@/components/ui/DestinationCard";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Parallax Background */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <Image
            src="/hero-city.png"
            alt="Cinematic aerial view of Paris at sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/20 to-surface" />
        </motion.div>

        {/* Floating Memory Cards (decorative, behind hero text) */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: -6 }}
          animate={{ opacity: 0.15, y: 0, rotate: -6 }}
          transition={{ delay: 1.2, duration: 1.6, ease: "easeOut" }}
          className="absolute top-[18%] left-[8%] w-52 h-32 rounded-2xl bg-secondary-fixed-dim/30 backdrop-blur-md border border-white/20 shadow-lg z-[1] hidden lg:block"
        />
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: 4 }}
          animate={{ opacity: 0.12, y: 0, rotate: 4 }}
          transition={{ delay: 1.5, duration: 1.6, ease: "easeOut" }}
          className="absolute top-[25%] right-[10%] w-44 h-28 rounded-2xl bg-primary-fixed-dim/30 backdrop-blur-md border border-white/20 shadow-lg z-[1] hidden lg:block"
        />

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-4xl px-5"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-6"
          >
            AI-Powered Travel Intelligence
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary mb-6 tracking-tight leading-[0.95]"
          >
            Your next adventure,
            <br />
            <span className="text-secondary">curated by intelligence.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="font-sans text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Describe your dream journey in natural language. Our AI concierge
            builds a bespoke day-by-day itinerary with hotels, activities, and
            local experiences — in seconds.
          </motion.p>

          {/* Floating Search Bar */}
          <motion.div variants={fadeUp} className="glass-panel rounded-full p-2 flex items-center max-w-2xl mx-auto w-full shadow-2xl">
            <span className="material-symbols-outlined text-secondary ml-4 mr-2">auto_awesome</span>
            <input
              className="flex-grow bg-transparent border-none focus:ring-0 focus:outline-none font-sans text-primary placeholder:text-on-surface-variant px-4"
              placeholder="e.g. 5-day romantic getaway on the Amalfi Coast..."
              type="text"
            />
            <Link href="/create-trip">
              <Button className="bg-primary text-on-primary font-sans px-8 py-6 rounded-full hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
                <span>Plan Trip</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Button>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={fadeUp} className="mt-8 flex items-center justify-center gap-6 text-on-surface-variant/60">
            <span className="font-sans text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
              AI-Generated Itineraries
            </span>
            <span className="hidden sm:inline text-outline-variant">•</span>
            <span className="hidden sm:inline font-sans text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
              Enterprise-Grade Security
            </span>
            <span className="hidden md:inline text-outline-variant">•</span>
            <span className="hidden md:inline font-sans text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-secondary">speed</span>
              Real-Time Optimization
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-8 z-10 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/50">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="material-symbols-outlined text-on-surface-variant/40">expand_more</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-32 px-5 md:px-16 max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.p variants={fadeUp} className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
            How it works
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl text-primary mb-6">
            Three steps to your perfect journey
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-lg text-on-surface-variant max-w-xl mx-auto">
            From a simple prompt to a fully planned itinerary — powered by advanced AI that understands travel like a seasoned concierge.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: "chat",
              step: "01",
              title: "Describe Your Dream",
              desc: "Tell our AI where you want to go, your budget, travel style, and interests. Use natural language — no forms to fill.",
            },
            {
              icon: "auto_awesome",
              step: "02",
              title: "AI Crafts Your Itinerary",
              desc: "Our engine analyzes thousands of data points — weather, local events, pricing trends — to build a personalized day-by-day plan.",
            },
            {
              icon: "flight_takeoff",
              step: "03",
              title: "Refine & Embark",
              desc: "Edit activities, adjust budgets, share with travel companions, and export. Your trip is always in your control.",
            },
          ].map((item) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              className="group relative glass-panel rounded-2xl p-8 border border-surface-variant hover:border-secondary/30 hover:shadow-xl transition-all duration-500 cursor-default"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors duration-300">
                    {item.icon}
                  </span>
                </div>
                <span className="font-sans text-xs font-bold text-outline tracking-widest uppercase">
                  Step {item.step}
                </span>
              </div>
              <h3 className="font-heading text-2xl text-primary mb-3">{item.title}</h3>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── DESTINATION SHOWCASE ─── */}
      <section className="py-24 px-5 md:px-16 max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
            <motion.p variants={fadeUp} className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-3">
              Featured Destinations
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl text-primary mb-4">Curated Horizons</motion.h2>
            <motion.p variants={fadeUp} className="font-sans text-lg text-on-surface-variant max-w-lg">
              Hand-selected locales that blend natural majesty with refined comfort.
            </motion.p>
          </div>
          <motion.button variants={fadeUp} className="text-primary font-sans text-xs uppercase font-semibold tracking-widest flex items-center gap-2 mt-4 md:mt-0 hover:text-secondary transition-colors">
            VIEW ALL DESTINATIONS <span className="material-symbols-outlined">arrow_right_alt</span>
          </motion.button>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <motion.div variants={fadeUp} className="md:col-span-8">
            <DestinationCard
              image="/amalfi-luxury.png"
              title="Amalfi Coast, Italy"
              size="large"
              tags={["COASTAL", "ROMANCE"]}
              price="$4,500"
            />
          </motion.div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <motion.div variants={fadeUp}>
              <DestinationCard
                image="/kyoto-luxury.png"
                title="Kyoto, Japan"
                size="small"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <DestinationCard
                image="/dubai-luxury.png"
                title="Dubai, UAE"
                size="small"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── TESTIMONIAL / EMOTIONAL SECTION ─── */}
      <section className="py-32 px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-secondary-fixed-dim mb-6">
            Why Traveloop
          </motion.p>
          <motion.blockquote variants={fadeUp} className="font-heading text-3xl md:text-5xl text-on-primary leading-snug mb-8">
            &ldquo;Travel is the only thing you buy that makes you richer.&rdquo;
          </motion.blockquote>
          <motion.p variants={fadeUp} className="font-sans text-base text-on-primary/60 mb-12 max-w-xl mx-auto">
            Traveloop combines the soul of a seasoned traveler with the precision of artificial intelligence.
            Every itinerary we generate is a story waiting to be lived.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/create-trip">
              <Button className="bg-white text-primary font-sans px-10 py-6 rounded-full hover:bg-white/90 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all text-base flex items-center gap-2 mx-auto">
                <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                Start Planning for Free
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── STATS SECTION ─── */}
      <section className="py-24 px-5 md:px-16 max-w-5xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { num: "12K+", label: "Trips Generated" },
            { num: "98%", label: "Satisfaction Rate" },
            { num: "140+", label: "Countries Covered" },
            { num: "4.9★", label: "User Rating" },
          ].map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <p className="font-heading text-4xl md:text-5xl text-primary mb-2">{stat.num}</p>
              <p className="font-sans text-sm text-on-surface-variant uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
