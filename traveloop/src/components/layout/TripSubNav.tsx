"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function TripSubNav() {
  const pathname = usePathname();

  const links = [
    { name: "Itinerary", href: "/dashboard/itinerary", icon: "view_timeline" },
    { name: "Map", href: "/dashboard/map", icon: "map" },
    { name: "Activities", href: "/dashboard/activities", icon: "explore" },
    { name: "Budget", href: "/dashboard/budget", icon: "account_balance_wallet" },
    { name: "Packing", href: "/dashboard/packing", icon: "luggage" },
    { name: "Journal", href: "/dashboard/journal", icon: "auto_stories" },
  ];

  return (
    <div className="w-full flex justify-center mb-8 sticky top-6 z-30">
      <nav className="glass-panel rounded-full px-2 py-2 flex gap-1 shadow-lg border border-surface-variant max-w-full overflow-x-auto no-scrollbar">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap ${
                isActive
                  ? "bg-primary text-on-primary shadow-md"
                  : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
              }`}
            >
              <span 
                className="material-symbols-outlined text-[18px]"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {link.icon}
              </span>
              <span className="font-sans text-xs uppercase tracking-widest font-semibold">{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
