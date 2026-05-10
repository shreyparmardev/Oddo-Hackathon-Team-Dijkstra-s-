"use client";

import Image from "next/image";
import { TripSubNav } from "@/components/layout/TripSubNav";
import { motion, AnimatePresence } from "framer-motion";
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

interface PackingItem {
  id: string;
  name: string;
  desc: string;
  checked: boolean;
  ai?: boolean;
}

export default function PackingChecklistPage() {
  const [items, setItems] = useState<Record<string, PackingItem[]>>({
    Apparel: [
      { id: "1", name: "Linen Trousers", desc: "2 pairs", checked: false },
      { id: "2", name: "Swimwear", desc: "3 pieces", checked: true },
      { id: "3", name: "Light Sweaters", desc: "For breezy evenings", checked: false },
      { id: "4", name: "Evening Dress", desc: "Smart-casual required", checked: false, ai: true },
    ],
    Toiletries: [
      { id: "5", name: "Sunscreen (SPF 50+)", desc: "Essential protection", checked: false },
      { id: "6", name: "Travel Moisturizer", desc: "Hydration recovery", checked: false },
      { id: "7", name: "Sea Salt Spray", desc: "Coastal aesthetics", checked: false, ai: true },
    ],
    Documents: [
      { id: "8", name: "Passport", desc: "Valid for 6+ months", checked: true },
      { id: "9", name: "Insurance Copy", desc: "Digital & Physical", checked: true },
    ]
  });

  const toggleItem = (category: string, id: string) => {
    setItems(prev => ({
      ...prev,
      [category]: prev[category].map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    }));
  };

  const addItem = (category: string) => {
    const name = prompt(`Add new item to ${category}:`);
    if (!name) return;
    
    const newItem: PackingItem = {
      id: Date.now().toString(),
      name,
      desc: "Added manually",
      checked: false
    };
    
    setItems(prev => ({
      ...prev,
      [category]: [...prev[category], newItem]
    }));
  };

  const scrollToStyle = () => {
    const el = document.getElementById("style-guide");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <TripSubNav />
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="w-full relative"
      >
        {/* Header Section */}
        <header className="mb-16">
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4"
          >
            Preparation Intelligence
          </motion.p>
          <motion.h1 variants={fadeInUp} className="font-heading text-5xl md:text-7xl text-primary mb-4 tracking-tight leading-[0.95]">
            Packing Portfolio
          </motion.h1>
          <motion.p variants={fadeInUp} className="font-sans text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Curated for your upcoming 7-day coastal retreat. The predicted weather is sunny and mild—intelligence suggests light layers and breathable fabrics.
          </motion.p>
        </header>

        {/* AI Recommendation Banner */}
        <motion.div 
          variants={fadeInUp}
          whileHover={{ scale: 1.01 }}
          className="bg-primary-container/10 rounded-[2rem] p-8 md:p-12 mb-16 flex flex-col md:flex-row gap-8 items-start border border-primary/5 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] group-hover:bg-secondary/20 transition-all duration-700" />
          
          <div className="bg-primary text-white p-4 rounded-2xl shadow-xl relative z-10">
            <motion.span 
              animate={{ rotate: [0, 15, 0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="material-symbols-outlined text-[32px]"
            >
              auto_awesome
            </motion.span>
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <h3 className="font-heading text-3xl text-primary mb-3">Style Intelligence</h3>
            <p className="font-sans text-lg text-primary/80 mb-6 leading-relaxed font-medium">
              Based on regional trends in <span className="text-secondary font-bold">Positano</span>, evening social cycles often call for refined smart-casual attire. We&apos;ve calibrated your list to include luxury linens and versatile evening layers.
            </p>
            <button 
              onClick={scrollToStyle}
              className="bg-primary text-white px-8 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:shadow-2xl transition-all shadow-lg flex items-center gap-3 active:scale-95"
            >
              Explore Style Guide <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </button>
          </div>
        </motion.div>

        {/* Grid Layout for Lists */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {Object.entries(items).map(([category, categoryItems]) => (
            <motion.div key={category} variants={fadeInUp} className="space-y-8">
              <div className="glass-panel rounded-[2rem] p-10 shadow-2xl border border-white dark:border-white/10 bg-white/50 backdrop-blur-xl relative h-full flex flex-col">
                <div className="flex justify-between items-center mb-10">
                  <h2 className="font-heading text-3xl text-primary tracking-tight">{category}</h2>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20">
                    {categoryItems.filter(i => i.checked).length} / {categoryItems.length}
                  </span>
                </div>
                <ul className="space-y-6 flex-1">
                  <AnimatePresence mode="popLayout">
                    {categoryItems.map((item) => (
                      <motion.li 
                        key={item.id} 
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => toggleItem(category, item.id)}
                        className="flex items-start gap-4 group cursor-pointer"
                      >
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center mt-1 transition-all duration-300 ${item.checked ? "bg-secondary border-secondary shadow-lg shadow-secondary/20" : "border-secondary/20 group-hover:border-secondary"}`}>
                          {item.checked && <span className="material-symbols-outlined text-white text-[16px] font-bold">check</span>}
                        </div>
                        <div>
                          <span className={`font-sans text-lg font-bold transition-all flex items-center gap-2 ${item.checked ? "text-on-surface-variant/40 line-through" : "text-primary group-hover:text-secondary"}`}>
                            {item.name}
                            {item.ai && <span className="material-symbols-outlined text-[18px] text-secondary animate-pulse">auto_awesome</span>}
                          </span>
                          <p className={`text-sm font-medium ${item.checked ? "text-on-surface-variant/30 line-through" : "text-on-surface-variant/60"}`}>{item.desc}</p>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
                <button 
                  onClick={() => addItem(category)}
                  className="mt-10 w-full py-4 border-2 border-dashed border-secondary/10 rounded-2xl text-secondary font-bold uppercase tracking-widest text-xs hover:bg-secondary/5 hover:border-secondary/30 transition-all flex justify-center items-center gap-3 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]">add_circle</span> Add Essential
                </button>
              </div>
            </motion.div>
          ))}

          {/* Vibe/Image Column (Style Guide target) */}
          <motion.div 
            id="style-guide"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="hidden lg:block relative rounded-[2.5rem] overflow-hidden shadow-2xl h-full min-h-[500px] border border-white dark:border-white/10 group"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI3mCOP_YKA1x4igGte7-NE44tHMt5M6kIXdqZE9DqHs9qu83N96CYQjhUacSeQGFouukX_Ogqw205sEPR-XurhnYCGMaWG6NF7feSR2g1JGvIN5_-lU-CHML66bbkHDpieUxetnaRItcB53E6SBXUP4TDrGQzfdBZVtsOsalmRb7BzTvem7JIcSMNiQgvjSAZ5zwSD9pQm9PBgwvlbogMKz5jT15ffYH-5N_9Kt7XI3jgWR9WWRDYwIoK_GsvwDDcXSas3vGzDxg" 
                alt="Amalfi Coast scenery"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-12">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-4"
              >
                Destination Vibe
              </motion.p>
              <h3 className="font-heading text-5xl text-white mb-6 tracking-tight leading-tight">Positano <br /> <span className="text-secondary-container">Aesthetics</span></h3>
              <div className="flex gap-3">
                <span className="bg-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">Coastal Luxe</span>
                <span className="bg-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">Mediterranean</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
