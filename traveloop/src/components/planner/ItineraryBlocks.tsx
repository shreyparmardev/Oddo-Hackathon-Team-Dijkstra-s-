"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export function DayBlock({
  dayNum,
  title,
  subtitle,
  children,
  isSecondaryDot = false,
}: {
  dayNum: number;
  title: string;
  subtitle: string;
  children: ReactNode;
  isSecondaryDot?: boolean;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative z-10 mb-20"
    >
      <div
        className={`absolute -left-6 md:-left-[26px] w-5 h-5 rounded-full border-4 border-background mt-2 shadow-sm ${
          isSecondaryDot ? "bg-surface-container-high" : "bg-secondary shadow-[0_0_15px_rgba(48,101,118,0.4)]"
        }`}
      ></div>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">Chapter {dayNum}</span>
          <div className="h-px w-8 bg-secondary/20" />
        </div>
        <h3 className="font-heading text-3xl md:text-4xl text-primary tracking-tight leading-tight mb-2">{title}</h3>
        <p className="font-sans text-lg text-on-surface-variant font-medium italic opacity-70">{subtitle}</p>
      </div>
      <div className="space-y-8">{children}</div>
    </motion.div>
  );
}

export function TransportCard({
  icon,
  title,
  time,
  description,
}: {
  icon: string;
  title: string;
  time: string;
  description: string;
}) {
  return (
    <motion.div 
      whileHover={{ y: -5, x: 5 }}
      className="glass-panel p-8 rounded-3xl flex flex-col sm:flex-row gap-8 items-start sm:items-center cursor-default border border-surface-variant/30 shadow-sm hover:shadow-xl hover:border-secondary/20 transition-all duration-500"
    >
      <div className="w-14 h-14 rounded-2xl bg-secondary/5 text-secondary flex items-center justify-center shrink-0 shadow-inner">
        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          {icon}
        </span>
      </div>
      <div className="flex-1 w-full">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-heading text-xl font-bold text-primary tracking-tight">{title}</h4>
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">
            {time}
          </span>
        </div>
        <p className="font-sans text-base text-on-surface-variant/80 leading-relaxed font-medium">{description}</p>
      </div>
      <div className="hidden sm:flex flex-col gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
        <span className="w-1 h-1 rounded-full bg-primary" />
        <span className="w-1 h-1 rounded-full bg-primary" />
        <span className="w-1 h-1 rounded-full bg-primary" />
      </div>
    </motion.div>
  );
}

export function HotelCard({
  image,
  tag,
  name,
  time,
  description,
  amenities,
}: {
  image: string;
  tag: string;
  name: string;
  time: string;
  description: string;
  amenities: { icon: string; name: string }[];
}) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="glass-panel rounded-[2rem] overflow-hidden cursor-default shadow-sm hover:shadow-2xl hover:border-secondary/20 transition-all duration-700 flex flex-col md:flex-row border border-surface-variant/30"
    >
      <div className="h-64 md:h-auto md:w-[45%] relative overflow-hidden group">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image src={image} alt={name} fill className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6">
          <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-sans text-[10px] font-bold uppercase tracking-[0.2em] border border-white/30 shadow-lg">
            {tag}
          </span>
        </div>
      </div>
      <div className="p-8 md:p-10 flex-1 flex flex-col justify-between bg-white/40 dark:bg-black/20">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h4 className="font-heading text-3xl md:text-4xl text-primary tracking-tight leading-tight">{name}</h4>
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-50 mt-2">
              {time}
            </span>
          </div>
          <p className="font-sans text-base text-on-surface-variant/80 mb-8 leading-relaxed font-medium">{description}</p>
        </div>
        {amenities && amenities.length > 0 && (
          <div className="flex flex-wrap gap-6 text-secondary border-t border-secondary/10 pt-6">
            {amenities.map((amenity, idx) => (
              <span key={idx} className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
                <span className="material-symbols-outlined text-[20px]">{amenity.icon}</span> {amenity.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function ActivityCard({
  image,
  title,
  time,
  description,
  tags,
}: {
  image: string;
  title: string;
  time: string;
  description: string;
  tags?: string[];
}) {
  return (
    <motion.div 
      whileHover={{ x: 8 }}
      className="glass-panel p-8 rounded-[2rem] flex flex-col sm:flex-row gap-8 items-start sm:items-center cursor-default shadow-sm hover:shadow-xl hover:border-secondary/20 transition-all duration-500 border-l-[6px] border-l-secondary border-y border-r border-surface-variant/30"
    >
      <div className="w-24 h-24 rounded-[1.5rem] overflow-hidden shrink-0 relative shadow-xl">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex-1 w-full">
        <div className="flex justify-between items-start mb-3">
          <h4 className="font-heading text-2xl text-primary tracking-tight leading-tight">{title}</h4>
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/5 px-3 py-1 rounded-full border border-secondary/10">
            {time}
          </span>
        </div>
        <p className="font-sans text-base text-on-surface-variant/80 mb-6 leading-relaxed font-medium">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-surface-container-low/50 border border-surface-variant/30 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
