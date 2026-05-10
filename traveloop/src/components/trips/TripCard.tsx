"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type TripStatus = "upcoming" | "past" | "draft";

interface TimelineItem {
  text: string;
  isDotVariant?: boolean;
}

interface TripCardProps {
  href: string;
  image: string;
  title: ReactNode;
  subtitle: string;
  status: TripStatus;
  statusText?: string;
  timeline?: TimelineItem[];
  progress?: number;
}

export function TripCard({
  href,
  image,
  title,
  subtitle,
  status,
  statusText,
  timeline,
  progress,
}: TripCardProps) {
  const isDraft = status === "draft";

  return (
    <Link href={href} className="group h-full block">
      <motion.article
        whileHover={{ y: -12 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        className={`relative p-5 rounded-[2rem] transition-all duration-500 flex flex-col gap-6 h-full ${
          isDraft
            ? "bg-surface-container/50 border border-surface-variant/50 backdrop-blur-sm"
            : "bg-white dark:bg-primary-container/20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white dark:border-white/5 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]"
        }`}
      >
        <div
          className={`relative w-full aspect-[4/5] overflow-hidden rounded-2xl flex items-center justify-center ${
            isDraft ? "bg-surface-variant/30" : "bg-primary/5"
          }`}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt="Trip cover"
              fill
              className={`object-cover transition-all duration-700 ${
                isDraft ? "opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80" : ""
              }`}
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Status Pill */}
          <div
            className={`absolute top-5 left-5 flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-md border ${
              isDraft 
                ? "bg-surface/80 border-surface-variant/50" 
                : "bg-white/90 border-white/20 shadow-lg"
            }`}
          >
            {isDraft ? (
              <span className="material-symbols-outlined text-[14px] text-secondary">edit_note</span>
            ) : (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-2 h-2 rounded-full ${
                  statusText?.includes("14") ? "bg-secondary" : "bg-tertiary-fixed-dim"
                }`}
              />
            )}
            <span
              className={`font-sans text-[11px] uppercase font-bold tracking-widest ${
                isDraft ? "text-on-surface-variant" : "text-primary"
              }`}
            >
              {statusText}
            </span>
          </div>

          {/* Draft Hover Overlay */}
          {isDraft && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <button className="bg-white text-primary font-sans text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
                Resume Plan <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          )}
          
          {/* Upcoming Hover Reveal */}
          {!isDraft && (
            <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
               <button className="bg-primary text-white font-sans text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 transition-all">
                View Journey <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 px-2">
          <div className="flex justify-between items-start mb-3">
            <h2 className="font-heading text-3xl text-primary leading-[1.1] tracking-tight">{title}</h2>
            {!isDraft && (
              <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-[20px]">more_vert</span>
              </button>
            )}
          </div>
          <p className="font-sans text-base text-on-surface-variant/70 mb-8 font-medium italic">{subtitle}</p>

          {/* Timeline */}
          {timeline && timeline.length > 0 && (
            <div className="mt-auto border-t border-surface-variant/30 pt-6 relative">
              <div className="absolute left-[7px] top-8 bottom-6 w-0.5 bg-secondary/10"></div>
              {timeline.map((item, idx) => (
                <div key={idx} className={`flex items-start gap-4 relative z-10 ${idx === 0 ? "mb-4" : ""}`}>
                  <div className={`mt-1.5 w-3.5 h-3.5 rounded-full border-2 shrink-0 ${
                    item.isDotVariant 
                      ? "bg-white border-surface-variant" 
                      : "bg-secondary border-secondary shadow-[0_0_10px_rgba(48,101,118,0.3)]"
                  }`}></div>
                  <span
                    className={`font-sans text-sm leading-snug ${
                      item.isDotVariant ? "text-on-surface-variant/50" : "text-on-surface-variant font-medium"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Progress */}
          {isDraft && progress !== undefined && (
            <div className="mt-auto">
              <div className="flex justify-between items-center mb-3">
                <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Planning Depth</span>
                <span className="font-sans text-xs font-bold text-primary">{progress}%</span>
              </div>
              <div className="w-full bg-surface-variant/30 rounded-full h-2 mb-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-secondary h-full rounded-full"
                />
              </div>
            </div>
          )}
        </div>
      </motion.article>
    </Link>
  );
}
