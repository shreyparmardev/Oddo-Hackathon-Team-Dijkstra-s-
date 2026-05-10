"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Discover", href: "/dashboard/discover", icon: "explore" },
    { name: "My Trips", href: "/dashboard/trips", icon: "travel_explore" },
    { name: "Trip Planner", href: "/dashboard/planner", icon: "auto_awesome" },
    { name: "Map View", href: "/dashboard/map", icon: "map" },
    { name: "Profile", href: "/dashboard/profile", icon: "person" },
  ];

  return (
    <>
      <button 
        className="md:hidden p-2 text-primary dark:text-primary-fixed z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined text-3xl">
          {isOpen ? "close" : "menu"}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-40 bg-surface/95 dark:bg-primary-container/95 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8 h-[100dvh]"
          >
            <div className="flex-1 flex flex-col gap-4">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href || (pathname.startsWith('/dashboard/itinerary') && item.href === '/dashboard/trips');
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-xl transition-all ${
                        isActive 
                          ? "bg-primary text-on-primary font-semibold shadow-lg" 
                          : "text-on-surface-variant hover:bg-surface-container-low"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[28px]" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
                        {item.icon}
                      </span>
                      <span className="font-heading">{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-auto pt-6"
            >
              <Link 
                href="/create-trip"
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary-container text-primary font-sans text-lg font-semibold py-4 rounded-xl flex justify-center items-center gap-2"
              >
                Book New Trip
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
