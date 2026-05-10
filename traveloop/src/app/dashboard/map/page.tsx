"use client";

import { TripSubNav } from "@/components/layout/TripSubNav";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MapViewPage() {
  const [selectedPoint, setSelectedPoint] = useState(4);

  const mapPoints = [
    { id: 1, top: '30%', left: '25%', label: 'Naples', desc: 'Starting point — Private transfer arranged', cost: '+$0' },
    { id: 2, top: '42%', left: '40%', label: 'Sorrento', desc: 'Limoncello tasting & cliff-walk experience', cost: '+$120' },
    { id: 3, top: '55%', left: '55%', label: 'Positano', desc: 'Le Sirenuse check-in, sunset dinner at La Sponda', cost: '+$450' },
    { id: 4, top: '68%', left: '72%', label: 'Capri', desc: 'Private yacht route around the Blue Grotto', cost: '+$250' },
  ];

  const selected = mapPoints.find(p => p.id === selectedPoint);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Top Navigation */}
      <div className="absolute top-6 w-full z-50 pointer-events-auto pl-64">
        <TripSubNav />
      </div>

      {/* Embedded Map */}
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=13.8%2C40.5%2C14.8%2C40.9&layer=mapnik"
        className="absolute inset-0 w-full h-full border-0"
        style={{ filter: 'saturate(0.7) contrast(1.1)' }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/60 pointer-events-none z-[5]" />

      {/* Interactive Map Markers */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {mapPoints.map((point) => (
          <motion.div
            key={point.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: point.id * 0.3, type: "spring", stiffness: 200, damping: 15 }}
            className="absolute z-20 cursor-pointer pointer-events-auto flex items-center justify-center"
            style={{ top: point.top, left: point.left, transform: 'translate(-50%, -50%)' }}
            onClick={() => setSelectedPoint(point.id)}
          >
            <motion.div 
              whileHover={{ scale: 1.2 }}
              className={`w-6 h-6 border-4 rounded-full shadow-2xl transition-all duration-500 ${
                selectedPoint === point.id 
                  ? 'bg-secondary border-white w-10 h-10 shadow-[0_0_30px_rgba(48,101,118,0.8)]' 
                  : 'bg-primary border-white'
              }`}
            />
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: point.id * 0.3 + 0.3 }}
              className={`absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full shadow-2xl whitespace-nowrap font-sans text-[11px] font-bold uppercase tracking-widest border transition-all duration-500 ${
                selectedPoint === point.id 
                  ? 'bg-secondary text-white border-secondary' 
                  : 'bg-white/80 text-primary border-white/50 backdrop-blur-md'
              }`}
            >
              {point.label}
            </motion.div>
            {selectedPoint === point.id && (
              <motion.div 
                className="absolute inset-0 bg-secondary rounded-full -z-10"
                animate={{ scale: [1, 3.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* UI Overlays */}
      <div className="absolute inset-0 z-20 pointer-events-none p-8 md:p-12 flex flex-col justify-between pt-32">
        <div className="flex justify-between items-start">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="pointer-events-auto glass-panel rounded-full px-8 py-4 flex items-center gap-4 w-full max-w-lg shadow-2xl border border-white/20 bg-white/60 backdrop-blur-2xl"
          >
            <span className="material-symbols-outlined text-secondary text-2xl">explore</span>
            <input 
              className="bg-transparent border-none outline-none font-sans text-lg text-primary w-full placeholder:text-primary/30 focus:ring-0 font-medium" 
              placeholder="Search location..." 
              type="text"
            />
            <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
          </motion.div>

          <div className="flex flex-col gap-3 pointer-events-auto">
            <button className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">add</span>
            </button>
            <button className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">remove</span>
            </button>
            <button className="w-14 h-14 rounded-2xl bg-secondary text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-all">
              <span className="material-symbols-outlined">my_location</span>
            </button>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="pointer-events-auto flex justify-end items-end w-full pb-20 md:pb-0">
          <AnimatePresence mode="wait">
            {selected && (
              <motion.div 
                key={`panel-${selected.id}`}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="glass-panel rounded-[2.5rem] p-10 max-w-md w-full relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.15)] bg-white/90 backdrop-blur-3xl border border-white"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-4 py-1.5 bg-secondary text-white rounded-full font-sans text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg flex items-center gap-2">
                      <motion.span 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="material-symbols-outlined text-[14px]"
                      >
                        auto_awesome
                      </motion.span>
                      Intelligence Detected
                    </span>
                  </div>
                  <h2 className="font-heading text-5xl text-primary mb-2 tracking-tight leading-tight">{selected.label} <span className="text-secondary italic">Stop</span></h2>
                  <p className="font-sans text-lg text-on-surface-variant mb-10 leading-relaxed font-medium">{selected.desc}</p>
                  <div className="flex items-center justify-between border-t border-secondary/10 pt-8">
                    <div className="flex flex-col">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mb-1">Impact</span>
                      <span className="font-heading text-3xl text-secondary">{selected.cost}</span>
                    </div>
                    <button className="bg-primary text-white px-8 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:shadow-2xl hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px]">add_task</span>
                      Integrate Route
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
