import Image from "next/image";

export default function SharedItineraryPage() {
  return (
    <div className="w-full relative bg-surface">
      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            className="object-cover" 
            alt="Cinematic view of the Amalfi coast"
            fill
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAslrVePOP5NSVkFIgt3hS8mbsZSu9m_sCH1O5RpbzreaHRmljVewvfouUL-gy1nhVIAXZfhhDJk0Fv3pCmojeipUDtC6zWDwYbCjo18X6DsJiLPrG35Gl7ZzqP6jUdOus9Lo0eWOZv5kWQThXNcApVjP-FV05wmoLgiBl5lppRhsLZ0A__DfIoI3adkiz6r68TXRnrkz9SsGiiu5br1SXmgmjJcV1GxUc6O2D768mqNcBzyR3ACmFXVsehUY2cONgITLdUGLpd1xQ"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-16 pb-24 text-center md:text-left">
          <div className="inline-block bg-surface/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-1 mb-6">
            <span className="font-sans text-[10px] font-bold text-primary-fixed uppercase tracking-widest">Featured Journey</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 max-w-4xl drop-shadow-lg">La Dolce Vita: 7 Days in the Amalfi Coast</h1>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
            <div className="flex items-center gap-4">
              <Image 
                alt="Concierge Avatar" 
                className="w-12 h-12 rounded-full border-2 border-surface object-cover" 
                width={48}
                height={48}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn0mRDuA89seYg26-gnk9c9eGJEG-3aqf0IziyT2jhoP0UtQu4K3ONWEDWg4d9aD897Zr4RmrIPCHAfFF_kwrKhZ23LUNapqHemwLLO7g2hrzt9DPIUc6NWXgTHgsY-Psm-vtEPn4T6X5eQ3wNVmNELBTCWFwurQlzNWTVVwP4B9QbNCBG5bOY3nHRSAciNzeQjIvT3OknfmBPtAzlNJx6xyyTHmdYUAxw03Gn_c1qi0lMbDtripEB5sBiQ0lI0d_sgfQSfSFOnU4"
              />
              <div className="text-left">
                <p className="font-sans text-[10px] font-bold text-primary-fixed-dim uppercase tracking-wider">Curated By</p>
                <p className="font-sans text-base text-white">Elena Rossi, Senior Concierge</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <button className="bg-surface/20 backdrop-blur-md text-white border border-white/50 font-sans text-base font-medium px-8 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                Plan Similar
              </button>
              <button className="bg-primary-container text-white font-sans text-base font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 border border-white/10">
                <span className="material-symbols-outlined text-[20px]">flight_takeoff</span>
                Join this Trip
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Overview */}
      <section className="max-w-7xl mx-auto px-5 md:px-16 py-24 md:py-32 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 className="font-heading text-4xl text-primary mb-6">The Atmosphere</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-surface-container border border-outline-variant rounded-full px-5 py-2 font-sans text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Coastal Elegance</span>
            <span className="bg-surface-container border border-outline-variant rounded-full px-5 py-2 font-sans text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Gastronomy</span>
            <span className="bg-surface-container border border-outline-variant rounded-full px-5 py-2 font-sans text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Historic</span>
          </div>
        </div>
        <div className="md:w-2/3 md:pl-12 md:border-l border-surface-variant">
          <p className="font-sans text-xl text-on-surface-variant mb-6 first-letter:text-5xl first-letter:font-heading first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1 leading-relaxed">
            Experience the timeless allure of southern Italy. This carefully paced itinerary balances indulgent relaxation with immersive cultural experiences. From private boat charters navigating secluded grottos to Michelin-starred dining perched above the Tyrrhenian Sea, every detail is orchestrated to present the Amalfi Coast at its most breathtaking.
          </p>
          <p className="font-sans text-base text-outline leading-relaxed italic">
            Ideal for couples seeking romance or discerning groups prioritizing privacy and exclusive access.
          </p>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section className="max-w-7xl mx-auto px-5 md:px-16 py-24 relative bg-surface-container-lowest/50 rounded-3xl border border-surface-variant mb-24">
        <div className="text-center mb-24">
          <h2 className="font-heading text-5xl text-primary mb-4">The Journey</h2>
          <p className="font-sans text-xl text-on-surface-variant">A day-by-day exploration</p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-secondary-fixed-dim -translate-x-1/2 opacity-50"></div>
          
          {/* Day 1 (Left aligned on Desktop) */}
          <div className="relative flex flex-col md:flex-row items-center w-full mb-32 group">
            {/* Marker */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-surface border-2 border-secondary-fixed-dim -translate-x-1/2 z-10 group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300"></div>
            
            {/* Content Left (Desktop) */}
            <div className="w-full pl-20 md:pl-0 md:w-5/12 md:pr-12 md:text-right">
              <div className="inline-block bg-surface-container-high text-primary font-sans text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Day 1</div>
              <h3 className="font-heading text-3xl text-primary mb-4">Arrival &amp; Positano Views</h3>
              <p className="font-sans text-base text-on-surface-variant mb-6 leading-relaxed">
                Private transfer from Naples International to your cliffside sanctuary. Settle in and enjoy a welcome aperitivo as the sun sets over the iconic pastel houses.
              </p>
              
              {/* Glassmorphic Card */}
              <div className="glass-panel rounded-2xl p-4 md:ml-auto md:max-w-sm text-left border border-surface-variant shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-secondary">hotel</span>
                  <span className="font-sans text-base text-primary font-semibold">Le Sirenuse</span>
                </div>
                <div className="w-full h-32 relative rounded-xl overflow-hidden mb-1">
                  <Image 
                    alt="Hotel view" 
                    fill
                    className="object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkeEUbLf7VM7WEwim4In-FhFuOOM0MHf7d3_6-KUIjfpCpU8sfwiNXoFCoDQVDfMf4nYxDedU6HwLtdazVthqQNj6q5kK5_9ox_qxwse_gNEZVzGM-kJBrDI3qFyHfrhNgQuAFVq6ivj_e3ltX_bjebssTssa0kxG8pdCI_CRfmYjppyUxq61g4bebGboZcKC3IwFIZZTFcnl6t4Alh1e6hld78aW-pKxH5JWoITJUsjmh3Bq7xfRPH4qa53dK5OG1-Nfr8wgZ1qM"
                  />
                </div>
              </div>
            </div>
            
            {/* Spacer for Desktop */}
            <div className="hidden md:block md:w-2/12"></div>
            <div className="hidden md:block md:w-5/12"></div>
          </div>
          
          {/* Day 2 (Right aligned on Desktop) */}
          <div className="relative flex flex-col md:flex-row items-center w-full mb-32 group">
            {/* Marker */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-surface border-2 border-secondary-fixed-dim -translate-x-1/2 z-10 group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300"></div>
            
            {/* Spacer for Desktop */}
            <div className="hidden md:block md:w-5/12"></div>
            <div className="hidden md:block md:w-2/12"></div>
            
            {/* Content Right (Mobile & Desktop) */}
            <div className="w-full pl-20 md:pl-0 md:w-5/12 md:pl-12 text-left">
              <div className="inline-block bg-surface-container-high text-primary font-sans text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Day 2</div>
              <h3 className="font-heading text-3xl text-primary mb-4">Sailing the Capri Coast</h3>
              <p className="font-sans text-base text-on-surface-variant mb-6 leading-relaxed">
                Board a private gozzo boat for a full-day charter around the Isle of Capri. Swim in secluded coves, visit the Faraglioni rocks, and dock for an extended lunch at La Fontelina.
              </p>
              
              {/* Glassmorphic Card */}
              <div className="glass-panel rounded-2xl p-4 max-w-sm border border-surface-variant shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-secondary">sailing</span>
                  <span className="font-sans text-base text-primary font-semibold">Private Charter</span>
                </div>
                <div className="w-full h-32 relative rounded-xl overflow-hidden mb-1">
                  <Image 
                    alt="Boat in Capri" 
                    fill
                    className="object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5tJDQsuQXVTzHhTz4Z3LYtKvydxTobmvj4OPEXia3a2XxvY0rHJQjTGNv15bH5Ay6cgJKz6lM2LxMW_6CFUn6KPWGh9ONvjCqe9lnmXYkMJBqAtKU_LvwKPlBQE7c2hXZB6WurhTkAlbzHBlFnCwg4IM3-pbhyfyaHmICDddQMe6Tg2ZJzJ2pP5t0phP3X1NEcKWOzuLjJKWdmNDUzjF_DroO-lgvEfcbIxu27vQ5QLXyZDHdvBlOmOlQzVjAl77QQWUPSYwJ56I"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Day 3 (Left aligned on Desktop) */}
          <div className="relative flex flex-col md:flex-row items-center w-full group">
            {/* Marker */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-surface border-2 border-secondary-fixed-dim -translate-x-1/2 z-10 group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300"></div>
            
            {/* Content Left (Desktop) */}
            <div className="w-full pl-20 md:pl-0 md:w-5/12 md:pr-12 md:text-right">
              <div className="inline-block bg-surface-container-high text-primary font-sans text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Day 3</div>
              <h3 className="font-heading text-3xl text-primary mb-4">Path of the Gods</h3>
              <p className="font-sans text-base text-on-surface-variant mb-6 leading-relaxed">
                An early morning guided hike along the legendary Sentiero degli Dei. Breathtaking panoramas of the coastline culminating in a rustic, farm-to-table lunch overlooking the sea.
              </p>
            </div>
            
            {/* Spacer for Desktop */}
            <div className="hidden md:block md:w-2/12"></div>
            <div className="hidden md:block md:w-5/12"></div>
          </div>
          
          {/* Bottom Fade for timeline */}
          <div className="absolute left-8 md:left-1/2 bottom-0 w-px h-32 bg-gradient-to-b from-secondary-fixed-dim to-transparent -translate-x-1/2"></div>
        </div>
      </section>
    </div>
  );
}
