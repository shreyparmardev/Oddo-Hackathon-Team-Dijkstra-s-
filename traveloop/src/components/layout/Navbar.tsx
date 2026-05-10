"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/MobileNav";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-0 w-full z-50 bg-white/50 dark:bg-black/50 backdrop-blur-2xl border-b border-white/20"
    >
      <div className="flex justify-between items-center h-24 px-8 md:px-16 max-w-[1400px] mx-auto">
        <Link href="/" className="group flex items-center gap-2">
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[20px]">infinite</span>
          </motion.div>
          <span className="font-heading text-2xl text-primary dark:text-white tracking-tighter group-hover:opacity-70 transition-opacity">
            Traveloop
          </span>
        </Link>
        
        <nav className="hidden md:flex gap-12">
          {[
            { label: "Destinations", href: "/dashboard/discover" },
            { label: "Experiences", href: "/dashboard/trips" },
            { label: "Journal", href: "/dashboard/journal" },
          ].map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              className="font-sans text-[10px] uppercase font-bold tracking-[0.3em] text-on-surface-variant hover:text-secondary transition-all relative group"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 items-center">
            <Link href="/dashboard" className="group">
              <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-all duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>
                dashboard
              </span>
            </Link>
            <Link href="/login" className="group">
              <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-all duration-300">
                account_circle
              </span>
            </Link>
          </div>
          
          <Link href="/create-trip" className="hidden md:block">
            <Button className="bg-primary text-white font-sans text-[10px] font-bold uppercase tracking-widest rounded-full hover:shadow-[0_10px_30px_rgba(4,22,39,0.3)] hover:scale-105 active:scale-95 transition-all px-8 py-3 h-auto">
              Plan Journey
            </Button>
          </Link>
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
