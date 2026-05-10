"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

const imageHover = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function DiscoverPage() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!search.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setSearch("");
      alert(`Searching for: ${search}`);
    }, 800);
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="w-full"
    >
      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="mb-24 md:mb-32">
        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1 }}
          className="font-sans text-xs font-semibold uppercase text-secondary mb-4"
        >
          Curated Experiences
        </motion.p>
        <h1 className="font-heading text-5xl md:text-7xl text-primary mb-6 max-w-4xl tracking-tight leading-[0.95]">
          Curate Your Next <br />
          <span className="text-secondary">Extraordinary Moment</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
          Discover hand-picked experiences designed for the discerning traveler. From hidden culinary gems to breathtaking natural wonders, your next story begins here.
        </p>

        {/* Search & Filters */}
        <div className="glass-panel bg-surface/50 rounded-full p-2 flex flex-col md:flex-row gap-2 items-center max-w-4xl relative z-10 border border-surface-variant shadow-2xl">
          <div className="flex-1 w-full relative">
            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-secondary">
              {isSearching ? "hourglass_empty" : "search"}
            </span>
            <input 
              className="w-full pl-14 pr-4 py-4 bg-transparent border-none focus:ring-0 text-primary font-sans text-base placeholder:text-on-surface-variant/50 outline-none" 
              placeholder="Search destinations, experiences, vibes..." 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto px-4 md:px-0">
            <button 
              onClick={handleSearch}
              className="px-8 py-3.5 rounded-full bg-primary text-on-primary font-sans text-xs font-bold uppercase tracking-widest hover:bg-secondary hover:shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
            >
              {isSearching ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </motion.section>
      
      {/* Bento Grid Layout */}
      <motion.section variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 md:mb-32">
        
        {/* Featured Large Card */}
        <motion.div 
          variants={fadeInUp}
          whileHover="hover"
          className="md:col-span-8 rounded-[2rem] overflow-hidden relative group h-[550px] shadow-2xl border border-white dark:border-surface-variant cursor-pointer"
        >
          <motion.div variants={imageHover} className="absolute inset-0">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVFBn8oMHejN2K7_ayFN7zmHVaIFsLR1S8k7BvEPYu9tXoATnrHxtl3BvwDN4eTwS8U0zXX9Bh7pgkvFG82tvoBOLHxwICKUV9zLf8V0tHT5_68JFT4XVs3e0gQ2cF69K9cStBYyT2LGI8ILfC8Cb6hiGOzjw_lL3S8Mza0TR7If6SWqWbPk13IK4oQSU4lL_4bfsNfU4I6-zJ3dcsa1FtyIayn6rB9L_5-orcuP2yqX6QDg4KN51wdf5Ab2KbVApst-n15vhUubo" 
              alt="Ancient ruins in a vibrant green landscape"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent group-hover:via-primary/40 transition-all duration-500"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-secondary text-white font-sans text-[10px] font-bold uppercase tracking-[0.2em]">Culture</span>
                <span className="text-white/80 text-sm flex items-center gap-1.5 font-medium">
                  <span className="material-symbols-outlined text-[18px]">location_on</span> Kyoto, Japan
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4 leading-tight">Private Zen Garden Ceremony</h2>
              <p className="font-sans text-lg text-white/70 mb-8 leading-relaxed">
                Experience the profound tranquility of an exclusive tea ceremony led by a master monk in a hidden temple. A journey into the soul of Kyoto.
              </p>
              <div className="flex items-center gap-6">
                <button className="bg-white text-primary px-8 py-3.5 rounded-full font-sans font-bold hover:shadow-[0_8px_30px_rgb(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-widest">
                  View Experience
                </button>
                <span className="font-heading text-2xl text-white">From $350</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tall Side Card */}
        <motion.div 
          variants={fadeInUp}
          whileHover="hover"
          className="md:col-span-4 rounded-[2rem] overflow-hidden relative group h-[550px] shadow-2xl border border-white dark:border-surface-variant cursor-pointer"
        >
          <motion.div variants={imageHover} className="absolute inset-0">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX7xRAoHXy1qnh5VADK0dzJFmKmKar81Ov9IrD-zBxCmBT-YmqOPk__IJmysTylYJ70jsvXWO90pkJdyjHBCybJHgKRA_3La6z0N02qmGjYDUUxpmlr-V6cC9vhP6MCtFKsgqp66_zzxl7m9utlQ2neBVQsvM3GfEKECqR5HrDlZF8NUzzbPg8pWGwox0NdYJDpbf56mJU_spIf87u3PfezVrPQBWjN6ZAbKbtgronUGx0jiWsZIlnAsDjN6DgfnqAyIHhls_tPwQ" 
              alt="Gourmet dining experience"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <span className="px-3 py-1 rounded-full bg-secondary text-white font-sans text-[10px] font-bold uppercase tracking-[0.2em] mb-4 inline-block">Dining</span>
            <h3 className="font-heading text-3xl text-white mb-2 leading-tight">Gastronomic Journey</h3>
            <p className="text-white/70 text-base mb-6 font-medium">San Sebastian, Spain</p>
            <div className="flex justify-between items-center">
              <span className="font-heading text-2xl text-white">From $200</span>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-white group-hover:text-primary transition-all">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid for smaller cards */}
        <motion.div variants={fadeInUp} className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Alpine Summit Trek", 
              loc: "Swiss Alps", 
              cat: "Adventure", 
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXn3CS-vod0X5xiDGllh4x02fr8yXQlMb3GqPuE2doBhuxqGpbt0_xbxNsgncsDI0LCgqGudZWjxouEk4ae-2S-6wYooJtJq6BWgQjQKtCNLc89unyAOj8VqRkX3PBJGl8_vE7hxd2MarIB9tkyDI_iOQO6pqFuMIAjb6C5ZGjYSpwBfKrQ4lJmr66bKkO8b7lH5wgjt6eX6F4ry5C2_2GmZ2eweqWMe5a8W7bGsQb-E2eUUPl6t4BqeqsEyjHOWoJhuQt2FHBEiM" 
            },
            { 
              title: "Pottery Masterclass", 
              loc: "Tuscany, Italy", 
              cat: "Culture", 
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPVEpH9pwLRmZXitS3BjJwffHVsU8XhpoCGd4zNgEkuY30fSm1lHHGPVHKHwVQsi0s4JEzWEvusA7HO7HJYzNbI1PIq5kZ-BvKESZoIqz42Vk0jjFzrpPC2UJaJKrMV8ItTcSxbvYYrMU3zqsVJTMXyruj0OjsVc20HURBC8RxKzuPZeTGnsmvJgQMaQumHI5qsEP433V0BJmNlHFXK16RszNt6Qm7xhBURKCQRzKFL8S1NVRW6Ooa0HT4BylWpA7ENFCAx6LrXbs" 
            },
            { 
              title: "Chef's Table Exclusive", 
              loc: "Paris, France", 
              cat: "Dining", 
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgz40hmLyEC_RkdBWx4B8oDVPwxsocqho1w4ARO3Nx-n8hrSqPrL8QpnYbEhRzbZiS3dwxf5pwiJRf--qbERmH4uVmfzkfaxTJNThZaV7gvhmf8Xwq4pR1PE8qU4_fx2oEgs1RucidgY-nKLB6CpKgqKkjYIoj3jy0W1KbPkFiHuIosyHObe5QVZiqz1sYVwMM7BDE85zjXy_V6HDKPZ9mtDuisafkmF-88qU0EcNeA-9MKNXi_eIsLLxB9FKuQZx2_o2JxU-v_Bg" 
            },
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              whileHover="hover"
              className="rounded-3xl overflow-hidden relative h-[350px] shadow-xl border border-white dark:border-surface-variant group cursor-pointer"
            >
              <motion.div variants={imageHover} className="absolute inset-0">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <span className="px-2 py-1 rounded-full bg-surface-container-high text-primary font-sans text-[9px] font-bold uppercase tracking-widest mb-3 inline-block">
                  {item.cat}
                </span>
                <h3 className="font-heading text-white text-2xl leading-tight mb-1">{item.title}</h3>
                <p className="text-white/60 text-sm font-medium">{item.loc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
