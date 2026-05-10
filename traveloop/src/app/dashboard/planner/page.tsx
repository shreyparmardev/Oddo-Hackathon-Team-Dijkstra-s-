import { TripSubNav } from "@/components/layout/TripSubNav";

export default function PlannerPage() {
  return (
    <>
      <div className="w-full">
        <header className="mb-12 max-w-3xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
            AI CONCIERGE
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">
            Design Your Journey
          </h2>
          <p className="font-sans text-lg text-on-surface-variant">
            Collaborate with your AI travel concierge to craft a bespoke itinerary tailored to your exact preferences.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Planner Chat / Input Area */}
          <div className="flex-1 glass-panel rounded-2xl p-6 md:p-8 border border-surface-variant shadow-lg flex flex-col min-h-[600px] bg-surface relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img src="/planner-bg.png" alt="Planner Background" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center text-center max-w-md mx-auto opacity-70 mb-8">
              <span className="material-symbols-outlined text-6xl text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_awesome
              </span>
              <h3 className="font-heading text-2xl text-primary mb-2">Where to next?</h3>
              <p className="font-sans text-base text-on-surface-variant">
                Describe your dream vacation. Mention destinations, dates, pace, and specific interests like food, art, or adventure.
              </p>
            </div>

            {/* Suggested Prompts */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button className="px-4 py-2 rounded-full border border-surface-variant bg-surface-container-low text-xs font-sans text-primary hover:bg-primary-container hover:border-primary-fixed transition-colors">
                Romantic weekend in Paris
              </button>
              <button className="px-4 py-2 rounded-full border border-surface-variant bg-surface-container-low text-xs font-sans text-primary hover:bg-primary-container hover:border-primary-fixed transition-colors">
                2-week adventure in Patagonia
              </button>
              <button className="px-4 py-2 rounded-full border border-surface-variant bg-surface-container-low text-xs font-sans text-primary hover:bg-primary-container hover:border-primary-fixed transition-colors">
                Family trip to Tokyo & Kyoto
              </button>
            </div>

            {/* Input Bar */}
            <div className="relative">
              <textarea 
                className="w-full glass-panel border border-surface-variant rounded-xl p-4 pr-16 font-sans text-base text-primary placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none bg-surface-container-lowest"
                rows={3}
                placeholder="E.g., I want a 7-day relaxing trip to the Amalfi Coast in September focusing on local cuisine and boat tours..."
              ></textarea>
              <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary/90 transition-colors shadow-md">
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </div>
          </div>

          {/* Quick Settings Sidebar */}
          <aside className="w-full lg:w-80 flex flex-col gap-6">
            <div className="glass-panel rounded-2xl p-6 border border-surface-variant bg-surface">
              <h3 className="font-heading text-xl text-primary mb-6">Trip Parameters</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2">Travelers</label>
                  <div className="flex items-center justify-between glass-panel px-4 py-3 rounded-lg border border-surface-variant">
                    <span className="font-sans text-primary flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">group</span> 2 Adults
                    </span>
                    <button className="text-secondary hover:text-primary transition-colors">Edit</button>
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2">Budget Level</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="py-2 rounded-lg border border-surface-variant text-sm font-sans font-medium text-on-surface-variant hover:bg-surface-container transition-colors">Moderate</button>
                    <button className="py-2 rounded-lg border-2 border-primary bg-primary-container text-sm font-sans font-medium text-primary">Luxury</button>
                    <button className="py-2 rounded-lg border border-surface-variant text-sm font-sans font-medium text-on-surface-variant hover:bg-surface-container transition-colors">Ultra</button>
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2">Pace</label>
                  <input type="range" className="w-full accent-primary" min="1" max="3" defaultValue="2" />
                  <div className="flex justify-between mt-2 font-sans text-[10px] uppercase font-semibold text-outline-variant">
                    <span>Relaxed</span>
                    <span>Balanced</span>
                    <span>Action-Packed</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
