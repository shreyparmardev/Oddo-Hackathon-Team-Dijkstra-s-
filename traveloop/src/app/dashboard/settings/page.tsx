import Image from "next/image";

export default function SettingsPage() {
  return (
    <div className="w-full">
      {/* PROFILE HEADER (Atmospheric Minimalism) */}
      <section className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-24 md:mb-32">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 border-4 border-white dark:border-surface shadow-xl relative">
          <Image 
            alt="User Profile" 
            className="object-cover" 
            fill
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQAr6Ao4B_RTMYWCmtinw_g3NR4G6g1n3HoaDPIU_6enCoNP5izK4rC8qNbx0bvHAd4uIiFVQQqSt-TkJ912pNYCcJD4QMSpHd3hWhXE2hT8JxmdkWO8TzfhiE0UFSTDAOwpnqwL0Px6qQHfppISdYQXwm4XlX2TDSCfH33Um3WV3cHH3SMprL4exfT0Jy-VZssUhhDy7USqaX0oEHpBF1nn4kiSEruP8-2W0DpvIK5vTTurj5JWF3pmYp7n8X1ArK1eoR9c0pwx0"
          />
        </div>
        <div className="flex-1">
          <p className="font-sans text-[10px] font-bold text-secondary mb-2 tracking-widest uppercase">Nomad Explorer</p>
          <h2 className="font-heading text-5xl md:text-6xl text-primary mb-4">Elena Rossi</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 rounded-full bg-surface-container-low border border-surface-variant font-sans text-[10px] font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">water</span> Coastal
            </span>
            <span className="px-4 py-1.5 rounded-full bg-surface-container-low border border-surface-variant font-sans text-[10px] font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">account_balance</span> Historic
            </span>
            <span className="px-4 py-1.5 rounded-full bg-surface-container-low border border-surface-variant font-sans text-[10px] font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">restaurant</span> Culinary
            </span>
          </div>
        </div>
        <button className="mt-6 md:mt-0 px-6 py-3 rounded-full border border-surface-variant bg-surface text-primary font-sans text-sm font-semibold hover:bg-surface-container-low transition-colors shadow-sm">
          Edit Profile
        </button>
      </section>

      {/* TRAVEL PASSPORT (Achievements) */}
      <section className="mb-24 md:mb-32">
        <div className="flex justify-between items-end mb-8">
          <h3 className="font-heading text-3xl md:text-4xl text-primary">Travel Passport</h3>
          <button className="font-sans text-sm font-semibold text-secondary hover:text-primary transition-colors flex items-center gap-1">
            View All <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Stamp 1 */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square relative overflow-hidden group border border-surface-variant shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="material-symbols-outlined text-[48px] text-secondary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>flight_takeoff</span>
            <h4 className="font-heading text-xl text-primary">100K Miles</h4>
            <p className="font-sans text-sm text-on-surface-variant mt-1">Globetrotter</p>
          </div>
          
          {/* Stamp 2 */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square relative overflow-hidden group border border-surface-variant shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="material-symbols-outlined text-[48px] text-tertiary-container mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>sailing</span>
            <h4 className="font-heading text-xl text-primary">Aegean Sea</h4>
            <p className="font-sans text-sm text-on-surface-variant mt-1">Yacht Week &apos;23</p>
          </div>
          
          {/* Stamp 3 */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square relative overflow-hidden group border border-surface-variant shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="material-symbols-outlined text-[48px] text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>landscape</span>
            <h4 className="font-heading text-xl text-primary">Alps Ascent</h4>
            <p className="font-sans text-sm text-on-surface-variant mt-1">Winter &apos;24</p>
          </div>
          
          {/* Empty Slot */}
          <div className="border border-dashed border-outline-variant rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square hover:bg-surface-container-low transition-colors cursor-pointer bg-surface/50">
            <span className="material-symbols-outlined text-[32px] text-outline-variant mb-2">add</span>
            <p className="font-sans text-sm text-on-surface-variant">Log Past Trip</p>
          </div>
        </div>
      </section>

      {/* SAVED DESTINATIONS (Bento Grid) */}
      <section className="mb-24 md:mb-32">
        <h3 className="font-heading text-3xl md:text-4xl text-primary mb-8">Curated Wishlist</h3>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {/* Large Feature */}
          <div className="md:col-span-8 rounded-3xl overflow-hidden relative group shadow-lg border border-white dark:border-surface-variant">
            <Image 
              alt="Paris" 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7qDSZA2CV2E5rPt-RIR5mwsSunv1IjRnK0775BkEdu0M6rIALyZXrb_kepAOKKY-nuE_19ARxff3GpCN5OQ6BteZvu9HqlJZj3prSeIZqIBirU0IHsJOpD1wVsZqTsYr97Zl4LmpJ3-lL23zxVvOY8qHH3skPntVKAvKPOEHxY3dc-mbdw5aBIKFXS2tVEKx7e_U5N9hxP6nc_ZGcO0MxJFXiBTAfHvkFMp96D7ljKZAJ-saC5Xftrh4nZlnMqWkrzHEeUpnU-Mk"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-white/10 backdrop-blur-md border-t border-white/20 flex justify-between items-end">
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-white/80 mb-1">France</p>
                <h4 className="font-heading text-3xl text-white">Parisian Autumn</h4>
              </div>
              <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center hover:bg-white/40 transition-colors">
                <span className="material-symbols-outlined text-white text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </button>
            </div>
          </div>
          
          {/* Small Square */}
          <div className="md:col-span-4 rounded-3xl overflow-hidden relative group shadow-lg border border-white dark:border-surface-variant">
            <Image 
              alt="Kyoto" 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEwts_phJWDG201AhxYlOwf2myA89DhlC6OimeDWoEpLKaOeJTinBXRGO7UfevEwc8K3vIpzBiAGf1jIcthlSiFcDXSuzwgYJyhjPZx_t05CQEn2TgAB1IPwZZHoUmjsT8Q4Nenhk5DF8FXiqjgnmHlR63Aq74Ay2cEpL0ybz-OanAZWZVMDaV9I1ymhykHU3Nq0RXFineUfiBq4WzaqDJHkxBrp7RN5I98zRQiDbScAleOxdZGbiif8ONSVRNweIOKSAjWlwNzOI"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-white/80 mb-1">Japan</p>
              <h4 className="font-heading text-2xl text-white">Kyoto Retreat</h4>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONALIZATION SETTINGS */}
      <section className="max-w-3xl">
        <h3 className="font-heading text-3xl md:text-4xl text-primary mb-8">Account Details</h3>
        
        <div className="space-y-8 glass-panel border border-surface-variant shadow-md rounded-3xl p-8 md:p-12">
          {/* Input Group */}
          <div className="flex flex-col">
            <label className="font-sans text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-2">Full Name</label>
            <input 
              className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-sans text-lg text-primary transition-colors outline-none" 
              type="text" 
              defaultValue="Elena Rossi"
            />
          </div>
          
          {/* Input Group */}
          <div className="flex flex-col">
            <label className="font-sans text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-2">Email Address</label>
            <input 
              className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-sans text-lg text-primary transition-colors outline-none" 
              type="email" 
              defaultValue="elena.rossi@example.com"
            />
          </div>
          
          {/* Notification Toggle */}
          <div className="flex items-center justify-between py-4 border-b border-outline-variant/30">
            <div>
              <h4 className="font-heading text-xl text-primary">Travel Concierge Alerts</h4>
              <p className="font-sans text-sm text-on-surface-variant mt-1">Receive AI-curated suggestions based on your saved vibes.</p>
            </div>
            <button className="w-12 h-6 rounded-full bg-secondary relative flex items-center px-1 transition-colors">
              <div className="w-4 h-4 rounded-full bg-white absolute right-1"></div>
            </button>
          </div>
          
          {/* Currency Selection */}
          <div className="flex flex-col pt-4">
            <label className="font-sans text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-2">Preferred Currency</label>
            <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-sans text-lg text-primary transition-colors outline-none cursor-pointer">
              <option value="USD">USD ($) - US Dollar</option>
              <option value="EUR">EUR (€) - Euro</option>
              <option value="GBP">GBP (£) - British Pound</option>
            </select>
          </div>
          
          <div className="pt-8">
            <button className="bg-primary text-on-primary font-sans text-base font-medium py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              Save Preferences
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
