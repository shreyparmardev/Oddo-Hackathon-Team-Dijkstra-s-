"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  recommendations?: any[];
}

export default function AIPlannerPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "A discerning choice. Dramatic cliffs and quiet coastal air suggest a move away from the Amalfi Coast towards the raw beauty of the Balearic edge or the hidden coves of the Peloponnese. Here are three curated escapes that align with your vision.",
      recommendations: [
        { name: "Mani Peninsula", location: "Greece", price: "$850/nt", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuiePLxzau_rs-9lvsxFPDfgV2fPM4PS2b_UPb7RYOu64R_OcV8RfAAplKOtjq_BepcJhg9OejILvuita8vX-s1B6eLbenaDwRUa2VjVP61Yd-81ulK8BmVZX1_ccdOFTGOrcS-m7L_hqqIPyLWTGtVpyftbHKwZGxu3g7L_kMScRkUpGPA2cKrT0uaf9ySI9TdjuIAjCcdGWQAem74DRfVbxe0juiVdMlLZaaK1mLKGXPGNam5ulWgneKSPIj-tNf5S0Yvf0_qYA" },
        { name: "Cap de Formentor", location: "Mallorca", price: "$1,200/nt", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuiePLxzau_rs-9lvsxFPDfgV2fPM4PS2b_UPb7RYOu64R_OcV8RfAAplKOtjq_BepcJhg9OejILvuita8vX-s1B6eLbenaDwRUa2VjVP61Yd-81ulK8BmVZX1_ccdOFTGOrcS-m7L_hqqIPyLWTGtVpyftbHKwZGxu3g7L_kMScRkUpGPA2cKrT0uaf9ySI9TdjuIAjCcdGWQAem74DRfVbxe0juiVdMlLZaaK1mLKGXPGNam5ulWgneKSPIj-tNf5S0Yvf0_qYA" },
        { name: "Costa Vicentina", location: "Portugal", price: "$600/nt", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuiePLxzau_rs-9lvsxFPDfgV2fPM4PS2b_UPb7RYOu64R_OcV8RfAAplKOtjq_BepcJhg9OejILvuita8vX-s1B6eLbenaDwRUa2VjVP61Yd-81ulK8BmVZX1_ccdOFTGOrcS-m7L_hqqIPyLWTGtVpyftbHKwZGxu3g7L_kMScRkUpGPA2cKrT0uaf9ySI9TdjuIAjCcdGWQAem74DRfVbxe0juiVdMlLZaaK1mLKGXPGNam5ulWgneKSPIj-tNf5S0Yvf0_qYA" }
      ]
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;
    
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      setIsTyping(false);
      const aiMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: "assistant", 
        content: `I've analyzed your preference for "${text}". I recommend exploring some quiet coastal gems that match this vibe. Shall I refine the search further?` 
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 2000);
  };

  const vibeChips = [
    "Coastal Retreats",
    "Historic Rhythm",
    "Alpine Isolation"
  ];

  return (
    <div className="flex flex-col relative h-[calc(100vh-160px)] -mt-16 overflow-hidden">
      {/* Ambient Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-surface-container-high -z-10 rounded-2xl"></div>
      
      {/* Chat Flow Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-5 py-12 flex flex-col gap-12 w-full max-w-5xl mx-auto pb-48 no-scrollbar scroll-smooth"
      >
        
        {/* Intro / Concierge Greeting */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center text-center space-y-6 max-w-2xl mx-auto my-12"
        >
          <div className="w-16 h-16 rounded-full bg-primary-fixed/30 flex items-center justify-center mb-4 text-primary shadow-inner border border-white/50">
            <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-primary tracking-tight">Good morning, Eleanor.</h2>
          <p className="font-sans text-lg text-on-surface-variant max-w-lg leading-relaxed">
            I am your personal concierge. The world is quiet today, perfect for planning your next escape. Are we seeking the tranquility of the coast or the rhythm of a historic city?
          </p>

          {/* Vibe Chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {vibeChips.map(vibe => (
              <button 
                key={vibe}
                onClick={() => handleSend(vibe)}
                className="px-6 py-2 rounded-full bg-surface-container-lowest border border-outline-variant text-primary font-sans text-base hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-all shadow-sm active:scale-95"
              >
                {vibe}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Message Thread */}
        <AnimatePresence mode="popLayout">
          {messages.map((msg) => (
            <motion.div 
              key={msg.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex flex-col gap-8 w-full ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className={`flex items-end gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 shadow-lg">
                    <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                  </div>
                )}
                <div className={`glass-panel rounded-2xl p-6 ${
                  msg.role === 'user' 
                    ? 'rounded-tr-sm bg-primary text-on-primary shadow-primary/20' 
                    : 'rounded-tl-sm bg-surface-container-lowest/80 border-l-4 border-l-secondary'
                } shadow-xl border border-white/20`}>
                  <p className="font-sans text-base leading-relaxed">{msg.content}</p>
                </div>
              </div>

              {msg.recommendations && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pl-11">
                  {msg.recommendations.map((rec, i) => (
                    <motion.div 
                      key={rec.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="glass-panel rounded-xl overflow-hidden group cursor-pointer relative aspect-[4/5] flex flex-col justify-end shadow-2xl border border-white/10"
                    >
                      <Image 
                        src={rec.image} 
                        alt={rec.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                      <div className="relative z-10 p-6">
                        <h3 className="font-heading text-2xl text-on-primary mb-1">{rec.name}</h3>
                        <p className="font-sans text-xs text-primary-fixed-dim uppercase tracking-wider mb-3">{rec.location}</p>
                        <div className="flex justify-between items-center text-on-primary">
                          <span className="font-sans text-base text-white/80">From {rec.price}</span>
                          <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 pl-11"
          >
            <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: "0s" }} />
            <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: "0.2s" }} />
            <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: "0.4s" }} />
          </motion.div>
        )}
      </div>

      {/* Sticky Input Area */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-surface via-surface/90 to-transparent pt-12 pb-8 px-5 z-20">
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-2xl rounded-full shadow-2xl border border-white/60 dark:border-white/20"></div>
          <div className="relative flex items-center p-2 pl-6">
            <span className="material-symbols-outlined text-outline mr-3">edit_square</span>
            <input 
              className="flex-1 bg-transparent border-none focus:ring-0 font-sans text-lg text-on-surface placeholder-on-surface-variant/50 outline-none w-full" 
              placeholder="Tell me more about your dream escape..." 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-secondary hover:scale-105 active:scale-95 transition-all shadow-lg ml-4 shrink-0 disabled:opacity-50 disabled:scale-100"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
