"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfilePage() {
  const [firstName, setFirstName] = useState("Alex");
  const [lastName, setLastName] = useState("Mercer");
  const [email, setEmail] = useState("alex.mercer@example.com");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <>
      <div className="w-full max-w-5xl mx-auto">
        {/* Header Cover */}
        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden mb-16">
          <Image 
            src="/amalfi-luxury.png" 
            alt="Profile Cover"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          
          {/* Avatar & Basic Info */}
          <div className="absolute bottom-0 left-8 translate-y-1/2 flex items-end gap-6">
            <div className="w-32 h-32 rounded-full border-4 border-background overflow-hidden relative bg-primary shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-white font-heading text-4xl">AM</div>
            </div>
            <div className="mb-4">
              <h1 className="font-heading text-3xl md:text-4xl text-primary">Alex Mercer</h1>
              <p className="font-sans text-base text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">location_on</span> New York, USA
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="glass-panel p-6 rounded-2xl bg-surface border border-surface-variant">
              <h3 className="font-heading text-xl text-primary mb-6">Travel Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-surface-container-lowest">
                  <span className="block font-heading text-3xl text-secondary mb-1">12</span>
                  <span className="font-sans text-xs uppercase tracking-wider text-outline-variant font-semibold">Countries</span>
                </div>
                <div className="text-center p-4 rounded-xl bg-surface-container-lowest">
                  <span className="block font-heading text-3xl text-primary mb-1">45</span>
                  <span className="font-sans text-xs uppercase tracking-wider text-outline-variant font-semibold">Cities</span>
                </div>
                <div className="text-center p-4 rounded-xl bg-surface-container-lowest col-span-2">
                  <span className="block font-heading text-3xl text-tertiary mb-1">8</span>
                  <span className="font-sans text-xs uppercase tracking-wider text-outline-variant font-semibold">Journeys Designed</span>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl bg-surface border border-surface-variant">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-heading text-xl text-primary">Preferences</h3>
                <button className="text-secondary hover:text-primary transition-colors text-sm font-semibold">Edit</button>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-outline-variant font-semibold mb-2">Vibe</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary-container text-primary font-sans text-xs font-semibold">Luxury</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-sans text-xs font-semibold">Boutique</span>
                  </div>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-outline-variant font-semibold mb-2">Pace</p>
                  <span className="px-3 py-1 rounded-full bg-secondary-container text-secondary font-sans text-xs font-semibold">Relaxed</span>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-outline-variant font-semibold mb-2">Interests</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-sans text-xs font-semibold">Culinary</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-sans text-xs font-semibold">History</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-sans text-xs font-semibold">Wellness</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="glass-panel p-8 rounded-2xl bg-surface border border-surface-variant">
              <h2 className="font-heading text-2xl text-primary mb-8 border-b border-surface-variant pb-4">Account Settings</h2>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2">First Name</label>
                    <input type="text" className="w-full bg-surface-container-low border border-surface-variant rounded-lg p-3 font-sans text-primary focus:outline-none focus:border-primary" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  </div>
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2">Last Name</label>
                    <input type="text" className="w-full bg-surface-container-low border border-surface-variant rounded-lg p-3 font-sans text-primary focus:outline-none focus:border-primary" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2">Email Address</label>
                    <input type="email" className="w-full bg-surface-container-low border border-surface-variant rounded-lg p-3 font-sans text-primary focus:outline-none focus:border-primary" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>

                <div className="pt-6 border-t border-surface-variant">
                  <h3 className="font-heading text-xl text-primary mb-4">Saved Documents</h3>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-container text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined">badge</span>
                      </div>
                      <div>
                        <p className="font-sans font-medium text-primary">US Passport</p>
                        <p className="font-sans text-xs text-on-surface-variant">Expires: Oct 2030</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
                  </div>
                </div>
                
                <div className="flex justify-end pt-4">
                  <button 
                    onClick={handleSave}
                    className={`px-8 py-3 rounded-full font-sans text-sm uppercase tracking-widest font-semibold transition-all active:scale-95 ${saved ? "bg-secondary text-white shadow-lg" : "bg-primary text-on-primary hover:shadow-lg"}`}
                  >
                    {saved ? "✓ Saved!" : "Save Changes"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
