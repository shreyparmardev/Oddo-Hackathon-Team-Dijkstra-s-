"use client";

import { TripSubNav } from "@/components/layout/TripSubNav";
import { 
  TotalExpenditureCard, 
  AvailableFundsCard, 
  CategoryBreakdownCard, 
  InsightCard,
  DailySpendChartCard
} from "@/components/analytics/BudgetCards";
import { motion } from "framer-motion";

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

export default function BudgetAnalyticsPage() {
  return (
    <>
      <TripSubNav />
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="w-full relative"
      >
        {/* Page Header */}
        <header className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-8">
          <motion.div variants={fadeInUp} className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4"
            >
              Fiscal Intelligence
            </motion.p>
            <h2 className="font-heading text-5xl md:text-6xl text-primary tracking-tight leading-[0.95] mb-4">
              Budget Analytics
            </h2>
            <p className="font-sans text-lg text-on-surface-variant font-medium leading-relaxed">
              Every detail optimized. From major flights to hidden dining gems, we track the pulse of your travel investment.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="glass-panel px-8 py-3 rounded-full flex items-center gap-3 cursor-default font-sans text-xs font-bold uppercase tracking-widest text-primary border border-secondary/10 shadow-2xl bg-white/50 backdrop-blur-xl">
              <span className="material-symbols-outlined text-[18px] text-secondary">calendar_today</span>
              Amalfi Coast Escape — Oct 2024
            </div>
          </motion.div>
        </header>

        {/* Bento Grid Analytics */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div variants={fadeInUp} className="md:col-span-8">
            <TotalExpenditureCard 
              title="Total Expenditure"
              subtitle="Tracking against $15,000 budget"
              amount="$8,240"
              trend="54%"
              trendDirection="up"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="md:col-span-4">
            <AvailableFundsCard 
              title="Available Funds"
              subtitle="Remaining balance"
              amount="$6,760"
              progress={46}
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="md:col-span-5">
            <CategoryBreakdownCard 
              title="Spending by Category"
              categories={[
                { name: "Sanctuaries", icon: "hotel", amount: "$4,120", progress: 50, colorClass: "bg-primary" },
                { name: "Airways", icon: "flight", amount: "$2,500", progress: 30, colorClass: "bg-secondary" },
                { name: "Gastronomy", icon: "restaurant", amount: "$1,620", progress: 20, colorClass: "bg-secondary-container" },
              ]}
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="md:col-span-7">
            <DailySpendChartCard 
              data={[
                { day: "Oct 12", amount: 450 },
                { day: "Oct 13", amount: 320 },
                { day: "Oct 14", amount: 890 },
                { day: "Oct 15", amount: 210 },
                { day: "Oct 16", amount: 560 },
                { day: "Oct 17", amount: 300 },
              ]}
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="md:col-span-12">
            <InsightCard 
              title="Concierge Insights"
              insight="Your dining expenditure is slightly above the forecasted average for the Amalfi Coast. However, our intelligence suggests this is offset by the $1,200 saved on private transfers via our preferred partner network. Your overall fiscal health remains excellent."
              buttonText="VIEW FISCAL STRATEGY"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
