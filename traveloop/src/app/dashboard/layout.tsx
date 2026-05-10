import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 md:ml-64 flex flex-col min-h-screen relative">
      {/* TopAppBar for Dashboard */}
      <header className="fixed top-0 w-full md:w-[calc(100%-16rem)] z-40 bg-surface/80 dark:bg-primary/80 backdrop-blur-md transition-all border-b border-surface-variant/10">
        <div className="flex justify-between items-center h-20 px-5 md:px-16 max-w-7xl mx-auto">
          <div className="md:hidden flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-2xl cursor-pointer">menu</span>
            <span className="font-heading text-2xl text-primary dark:text-primary-fixed tracking-tight">Traveloop</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-sans text-[10px] uppercase font-bold tracking-[0.2em]">
            <Link className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="/dashboard/discover">Destinations</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="/dashboard/activities">Experiences</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="/dashboard/journal">Journal</Link>
          </nav>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined hover:text-primary transition-colors cursor-pointer hover:scale-110 active:scale-90">notifications</span>
              <Link href="/dashboard/profile">
                <span className="material-symbols-outlined hover:text-primary transition-colors cursor-pointer hover:scale-110 active:scale-90">account_circle</span>
              </Link>
            </div>
            <Link href="/dashboard/planner">
              <button className="hidden md:block bg-primary text-on-primary font-sans text-[10px] uppercase tracking-widest font-bold px-6 py-2.5 rounded-full hover:bg-secondary hover:shadow-lg transition-all active:scale-95">
                Plan Trip
              </button>
            </Link>
          </div>
        </div>
      </header>

      <Sidebar />

      <main className="flex-1 pt-28 pb-20 px-5 md:px-16 max-w-7xl mx-auto w-full space-y-16 md:space-y-24">
        {children}
      </main>

      <Footer />
    </div>
  );
}
