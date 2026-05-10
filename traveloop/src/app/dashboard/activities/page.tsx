import Image from "next/image";
import { TripSubNav } from "@/components/layout/TripSubNav";

export default function ActivitiesPage() {
  return (
    <>
      <TripSubNav />
      <div className="w-full">
        <header className="mb-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">EXPERIENCES & TOURS</p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">Curated Activities</h2>
          <p className="font-sans text-lg text-on-surface-variant max-w-2xl">
            Discover hand-picked experiences for your Amalfi Coast escape. From private boat charters to local cooking classes.
          </p>
        </header>

        {/* Categories / Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-sans text-xs uppercase tracking-widest shadow-lg transition-all font-semibold">
            ALL
          </button>
          <button className="px-6 py-2.5 rounded-full bg-surface-container-low border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container hover:text-primary font-sans text-xs uppercase tracking-widest transition-all font-semibold">
            CULTURE
          </button>
          <button className="px-6 py-2.5 rounded-full bg-surface-container-low border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container hover:text-primary font-sans text-xs uppercase tracking-widest transition-all font-semibold">
            CULINARY
          </button>
          <button className="px-6 py-2.5 rounded-full bg-surface-container-low border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container hover:text-primary font-sans text-xs uppercase tracking-widest transition-all font-semibold">
            ADVENTURE
          </button>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Activity 1 */}
          <article className="glass-panel p-5 rounded-2xl flex flex-col gap-4 border border-surface-variant hover:shadow-xl transition-all duration-300 bg-surface">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuiePLxzau_rs-9lvsxFPDfgV2fPM4PS2b_UPb7RYOu64R_OcV8RfAAplKOtjq_BepcJhg9OejILvuita8vX-s1B6eLbenaDwRUa2VjVP61Yd-81ulK8BmVZX1_ccdOFTGOrcS-m7L_hqqIPyLWTGtVpyftbHKwZGxu3g7L_kMScRkUpGPA2cKrT0uaf9ySI9TdjuIAjCcdGWQAem74DRfVbxe0juiVdMlLZaaK1mLKGXPGNam5ulWgneKSPIj-tNf5S0Yvf0_qYA" 
                alt="Cooking Class"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3 glass-panel p-2 rounded-full cursor-pointer hover:bg-primary hover:text-on-primary transition-colors text-primary border-none shadow-sm">
                <span className="material-symbols-outlined text-[18px]">favorite</span>
              </div>
              <div className="absolute bottom-3 left-3 px-2 py-1 bg-surface/80 backdrop-blur-md rounded text-primary font-sans text-[10px] font-semibold uppercase tracking-wider">
                CULINARY
              </div>
            </div>
            
            <div className="flex-1 flex flex-col">
              <h3 className="font-heading text-2xl text-primary mb-1">Amalfitana Cooking Class</h3>
              <p className="font-sans text-sm text-on-surface-variant mb-4 line-clamp-2">Learn the secrets of authentic coastal Italian cuisine in a local family's organic lemon grove.</p>
              
              <div className="mt-auto flex items-center justify-between border-t border-surface-variant pt-4">
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] uppercase font-semibold tracking-wider text-outline">From</span>
                  <span className="font-heading text-xl text-primary">$125 <span className="font-sans text-xs text-on-surface-variant font-normal">/ person</span></span>
                </div>
                <button className="px-4 py-2 bg-primary-container text-primary font-sans text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-primary hover:text-on-primary transition-colors">
                  Add to Plan
                </button>
              </div>
            </div>
          </article>

          {/* Activity 2 */}
          <article className="glass-panel p-5 rounded-2xl flex flex-col gap-4 border border-surface-variant hover:shadow-xl transition-all duration-300 bg-surface">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuiePLxzau_rs-9lvsxFPDfgV2fPM4PS2b_UPb7RYOu64R_OcV8RfAAplKOtjq_BepcJhg9OejILvuita8vX-s1B6eLbenaDwRUa2VjVP61Yd-81ulK8BmVZX1_ccdOFTGOrcS-m7L_hqqIPyLWTGtVpyftbHKwZGxu3g7L_kMScRkUpGPA2cKrT0uaf9ySI9TdjuIAjCcdGWQAem74DRfVbxe0juiVdMlLZaaK1mLKGXPGNam5ulWgneKSPIj-tNf5S0Yvf0_qYA" 
                alt="Boat Tour"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3 glass-panel p-2 rounded-full cursor-pointer bg-primary text-on-primary border-none shadow-sm">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </div>
              <div className="absolute bottom-3 left-3 px-2 py-1 bg-surface/80 backdrop-blur-md rounded text-primary font-sans text-[10px] font-semibold uppercase tracking-wider">
                ADVENTURE
              </div>
            </div>
            
            <div className="flex-1 flex flex-col">
              <h3 className="font-heading text-2xl text-primary mb-1">Private Capri Boat Charter</h3>
              <p className="font-sans text-sm text-on-surface-variant mb-4 line-clamp-2">Sail along the dramatic coastline to Capri on a luxury gozzo boat. Includes prosecco and snorkeling gear.</p>
              
              <div className="mt-auto flex items-center justify-between border-t border-surface-variant pt-4">
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] uppercase font-semibold tracking-wider text-outline">From</span>
                  <span className="font-heading text-xl text-primary">$850 <span className="font-sans text-xs text-on-surface-variant font-normal">/ group</span></span>
                </div>
                <button className="px-4 py-2 bg-surface-container-low text-primary font-sans text-xs font-semibold uppercase tracking-wider rounded-lg border border-primary hover:bg-primary-container transition-colors">
                  In Itinerary
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
