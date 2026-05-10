"use client";

import Image from "next/image";
import { TripSubNav } from "@/components/layout/TripSubNav";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function TravelJournalPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <TripSubNav />
      <motion.div 
        ref={containerRef}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="w-full relative"
      >
        {/* Subtle Paper Texture Overlay Simulation */}
        <div 
          className="fixed inset-0 pointer-events-none z-[-1] opacity-40 dark:opacity-10" 
          style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(227, 226, 223, 0.3) 100%), url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}
        ></div>

        {/* Hero Title Section */}
        <motion.section variants={fadeInUp} className="mb-32 flex flex-col items-center text-center">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1 }}
            className="font-sans text-xs font-bold uppercase text-secondary mb-6 block"
          >
            October 2023 — Volume IV
          </motion.p>
          <h1 className="font-heading text-6xl md:text-8xl text-primary mb-8 max-w-4xl tracking-tight leading-[0.9]">
            Kyoto Autumn <br />
            <span className="text-secondary italic">Reflections</span>
          </h1>
          <p className="font-sans text-xl md:text-2xl text-on-surface-variant max-w-2xl italic leading-relaxed opacity-80">
            &quot;Wandering through the vermilion gates, the air smelled of wet stone and toasted hojicha. A temporary departure from the noise of the world.&quot;
          </p>
        </motion.section>

        {/* Vertical Timeline Story */}
        <div className="relative max-w-6xl mx-auto">
          {/* Animated Timeline Stem */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[1px] bg-secondary/10 hidden md:block">
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full bg-secondary shadow-[0_0_15px_rgba(48,101,118,0.3)]"
            />
          </div>

          {/* Story Entry 1: Left Aligned */}
          <motion.article 
            variants={fadeInUp}
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex flex-col md:flex-row items-center gap-12 mb-48 group"
          >
            {/* Timeline Marker */}
            <div className="absolute left-[-5px] md:left-[calc(50%-6px)] top-[40px] w-3 h-3 rounded-full bg-secondary ring-8 ring-background/50 z-10 hidden md:block"></div>

            {/* Content Left (Polaroid Image) */}
            <div className="w-full md:w-1/2 md:pr-16 flex justify-end">
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="bg-white dark:bg-surface p-5 pb-16 shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-surface-variant/30 rounded-sm transform -rotate-3 transition-all duration-700 max-w-[450px] cursor-pointer"
              >
                <div className="aspect-[4/5] bg-surface-container w-full overflow-hidden relative">
                  <Image 
                    className="object-cover" 
                    alt="Zen garden in Kyoto"
                    fill
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCWwsfJ4nUa842T0OTlJrkfnSBasGWxdqNlg_7UziJkUejcOZFl_U77eluQ0kb4-scjWrYwi4iJfT29EbiSbAtOmqHJzD_ucIyjyuRoJOIuBsFle-w0Bl_KASF7N-P22wU_zuie3GfqkXVdlR0JByUhdGakcw8bQxpz-IrE-s41_vaBSx9xA2mombWOFIG30qQ_ZzlN-E9_dCMR9mAur34TbccnhtdWUh7olr3C2oSMYi-YMrUaA9XVQCDzF_7Y72723MDXeY5QcM"
                  />
                </div>
                <p className="font-heading text-2xl text-primary mt-6 text-center italic opacity-60 font-medium">Ryoan-ji stillness.</p>
              </motion.div>
            </div>

            {/* Content Right (Text/Notes) */}
            <div className="w-full md:w-1/2 md:pl-16 pt-8 md:pt-0">
              <div className="glass-panel p-10 rounded-[2.5rem] border border-white dark:border-white/10 bg-white/40 backdrop-blur-2xl shadow-2xl">
                <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-secondary mb-4 block">Day 01 · Arrival</span>
                <h2 className="font-heading text-4xl text-primary mb-6 tracking-tight leading-tight">Finding Ground</h2>
                <p className="font-sans text-lg text-on-surface-variant mb-8 leading-relaxed font-medium">
                  The bullet train from Tokyo felt like a time machine, slowing down the frantic pace of the capital into the deliberate, measured heartbeat of Kyoto. The air here feels thicker, heavier with history. Dropped my bags at the ryokan and immediately walked to the nearest temple before the light faded.
                </p>
                <div className="flex gap-3">
                  <span className="px-4 py-1.5 bg-secondary/5 rounded-full border border-secondary/10 font-sans text-[10px] font-bold uppercase tracking-widest text-secondary">Zen Rituals</span>
                  <span className="px-4 py-1.5 bg-secondary/5 rounded-full border border-secondary/10 font-sans text-[10px] font-bold uppercase tracking-widest text-secondary">Mindful Walking</span>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Story Entry 2: Right Aligned Bento Gallery */}
          <motion.article 
            variants={fadeInUp}
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex flex-col md:flex-row-reverse items-center gap-12 mb-48"
          >
            {/* Timeline Marker */}
            <div className="absolute left-[-5px] md:left-[calc(50%-6px)] top-[40px] w-3 h-3 rounded-full bg-secondary ring-8 ring-background/50 z-10 hidden md:block"></div>

            {/* Content Right (Gallery) */}
            <div className="w-full md:w-1/2 md:pl-16">
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -5 }} className="aspect-square bg-surface-variant overflow-hidden rounded-[2rem] relative shadow-xl">
                  <Image 
                    className="object-cover transition-transform duration-1000 hover:scale-110" 
                    alt="Matcha tea"
                    fill
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjUSaXTwWG1V--PXGMSaJZQVjg3fDzQ5TxTESAYlqCPwquTjHlONcMbRRI8Q6wEzd0ltbpNcJx8c2oEI6tD0AnwS6Eu_5ExhWBfLPaW4pVWtw7EVwO0Ted5UJ7g_SZ5ctt65_GzrSXRe3sZXlGQn3iz4UIlZ8mC2anI-gkFwvUqwuNfawamn_S-Ck4C-gc-qkk5dS5qmqg_PlRbWNIdY6kBSxDZnAwYHOfNZplOGT_Z0CZwqQnsWlWmWlPmxnLy_Q5za1EtzXV9Ak"
                  />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="aspect-square bg-surface-variant overflow-hidden rounded-[2rem] relative shadow-xl">
                  <Image 
                    className="object-cover transition-transform duration-1000 hover:scale-110" 
                    alt="Japanese maple leaves"
                    fill
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjpZcSbi3_lhY2JiIQsQMmSzTByTTvEQFKgQ1R2yVS-VabPY__vM_T_UEhJhM7X7fmo3wFzXGb2U5J7tw9XPZo5DKysKTy3fBlD4Y51PWKG3Qy1wYzI2iXDyWsg12fzx6BqML-_oykSIb1kHgNF-eo-CiGG8LOJXNbMVQDmMfOc18sMCwAgmN6-95L4JZ3wj_YseoE8FGwZkB2-VHt1XJS_S4rq9FB-KIOLapMQZe20y5p80b1rUbmnLbYsfQNYMLDTotrcJ8tdKI"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 0.98 }} className="col-span-2 aspect-[2/1] bg-surface-variant overflow-hidden rounded-[2rem] relative group shadow-2xl">
                  <Image 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                    alt="Gion at dusk"
                    fill
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQPCpyEbfpUBBYITFlGmLLO3eeNwcUtus31jK18G1rB2z0yHjsckqJ8zF0hTTZthTemuT3eMt1QS90kvSm1YE8rxWup-GszM44-qegJSPv7JSrKFBGL17oCHI6aV-Mpdf2Q46WnigKSIFcQdJpANayJdqXrBUWMnngrmTkQyQHNqyn1cHPUR28YicV1Mj_wNCUk1zrvKa2zbczSKoxdbL1sWYjd_vlRDlOLR4XNVMU4CqTlSdGMemF8_lKROwGnc4tuEw_mpdw7Gs"
                  />
                  <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-sm">
                    <span className="font-heading text-4xl text-white tracking-tight">Gion at Dusk</span>
                    <p className="text-white/70 font-sans text-xs uppercase tracking-widest mt-2 font-bold">Atmospheric Capture</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Content Left (Text/Notes) */}
            <div className="w-full md:w-1/2 md:pr-16 pt-8 md:pt-0 flex flex-col justify-center text-left md:text-right">
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-secondary mb-4 block">Day 02 · Senses</span>
              <h2 className="font-heading text-4xl text-primary mb-6 tracking-tight leading-tight">Matcha &amp; Maple</h2>
              <p className="font-sans text-lg text-on-surface-variant mb-8 leading-relaxed font-medium">
                Spent the morning in Arashiyama, avoiding the bamboo groves and seeking out smaller tea houses. The bitter, grassy notes of hand-whisked matcha perfectly balance the cloying sweetness of wagashi. Everywhere you look, nature is curating a masterclass in color theory.
              </p>
            </div>
          </motion.article>

          {/* Story Entry 3: Centered Focus */}
          <motion.article 
            variants={fadeInUp}
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center mt-64 mb-32"
          >
            <div className="w-24 h-[1px] bg-secondary/20 mb-16"></div>
            <div className="max-w-3xl bg-white/50 dark:bg-black/40 backdrop-blur-2xl p-16 rounded-[3rem] shadow-2xl border border-white dark:border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              {/* Decorative Tape element */}
              <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-32 h-10 bg-secondary/10 rotate-2 opacity-50 backdrop-blur-md border border-white/20"></div>
              
              <motion.span 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="material-symbols-outlined text-secondary text-[48px] mb-8 block opacity-40"
              >
                edit_note
              </motion.span>
              <p className="font-heading text-3xl md:text-4xl text-primary italic leading-relaxed tracking-tight">
                &quot;Travel isn&apos;t always about the destination; sometimes it&apos;s about the <span className="text-secondary">blank pages</span> you fill along the way. Kyoto doesn&apos;t just offer sights, it demands reflection.&quot;
              </p>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </>
  );
}
