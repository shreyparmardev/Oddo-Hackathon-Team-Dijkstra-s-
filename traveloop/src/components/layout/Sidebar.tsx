"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Discover", href: "/dashboard/discover", icon: "explore" },
  { name: "My Trips", href: "/dashboard/trips", icon: "travel_explore" },
  { name: "Trip Planner", href: "/dashboard/planner", icon: "auto_awesome" },
  { name: "Map View", href: "/dashboard/map", icon: "map" },
  { name: "Profile", href: "/dashboard/profile", icon: "person" },
];

const sidebarVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, staggerChildren: 0.07 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.aside
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
      className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-white/70 dark:bg-primary-container/70 backdrop-blur-xl border-r border-white/50 dark:border-outline-variant/20 shadow-2xl shadow-primary/5 z-50 flex-col py-8 px-4"
    >
      {/* Brand / Header */}
      <motion.div variants={itemVariant} className="mb-12 px-4 flex flex-col gap-2">
        <Link href="/dashboard" className="font-heading text-2xl text-primary dark:text-primary-fixed hover:opacity-80 transition-opacity">
          Traveloop
        </Link>
        <span className="font-sans text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">AI Travel Concierge</span>
      </motion.div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col gap-1.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith('/dashboard/itinerary') && item.href === '/dashboard/trips');

          return (
            <motion.div key={item.name} variants={itemVariant}>
              <Link
                href={item.href}
                className={`relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? "text-primary dark:text-secondary-fixed-dim font-semibold bg-surface-container-low/80"
                    : "text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-low/50 dark:hover:bg-surface-container-highest/20"
                }`}
                style={item.name === "Profile" ? { marginTop: "auto", marginBottom: "1rem" } : {}}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-secondary rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span
                  className={`material-symbols-outlined transition-transform duration-200 group-hover:scale-110 ${isActive ? '' : 'group-hover:text-secondary'}`}
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {item.icon}
                </span>
                <span className="font-sans text-sm">{item.name}</span>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* CTA */}
      <motion.div variants={itemVariant}>
        <Link
          href="/create-trip"
          className="w-full bg-primary text-on-primary font-sans text-sm py-4 rounded-xl hover:shadow-[0_8px_20px_rgba(4,22,39,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex justify-center items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
          Plan New Trip
        </Link>
      </motion.div>
    </motion.aside>
  );
}
