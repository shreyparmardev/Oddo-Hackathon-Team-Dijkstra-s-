"use client";

import { ReactNode } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export function TotalExpenditureCard({
  title,
  subtitle,
  amount,
  trend,
  trendDirection = "up",
}: {
  title: string;
  subtitle: string;
  amount: string;
  trend: string;
  trendDirection?: "up" | "down";
}) {
  return (
    <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group bg-surface shadow-md hover:shadow-xl transition-all duration-300 border border-surface-variant h-full">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary-fixed-dim/20 rounded-full blur-[80px] group-hover:bg-secondary-fixed-dim/30 transition-all duration-700"></div>
      <div className="relative z-10">
        <h3 className="font-heading text-2xl text-on-surface-variant mb-1">{title}</h3>
        <p className="font-sans text-base text-outline">{subtitle}</p>
      </div>
      <div className="mt-12 flex items-baseline gap-4 relative z-10">
        <span className="font-heading text-6xl md:text-7xl text-primary tracking-tight">{amount}</span>
        <span className="font-sans text-xs font-semibold uppercase tracking-wider text-secondary-container bg-primary px-3 py-1.5 rounded-full flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">
            {trendDirection === "up" ? "trending_up" : "trending_down"}
          </span>{" "}
          {trend}
        </span>
      </div>
    </div>
  );
}

export function AvailableFundsCard({
  title,
  subtitle,
  amount,
  progress,
}: {
  title: string;
  subtitle: string;
  amount: string;
  progress: number;
}) {
  return (
    <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between bg-surface shadow-md hover:shadow-xl transition-all duration-300 border border-surface-variant h-full">
      <div>
        <h3 className="font-heading text-2xl text-on-surface-variant mb-1">{title}</h3>
        <p className="font-sans text-base text-outline">{subtitle}</p>
      </div>
      <div className="mt-8">
        <span className="font-heading text-4xl text-secondary">{amount}</span>
        <div className="w-full bg-surface-variant h-2 rounded-full mt-4 overflow-hidden">
          <div className="bg-secondary h-full rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export interface CategoryData {
  name: string;
  icon: string;
  amount: string;
  progress: number;
  colorClass: string;
}

export function CategoryBreakdownCard({
  title,
  categories,
}: {
  title: string;
  categories: CategoryData[];
}) {
  return (
    <div className="glass-panel rounded-2xl p-8 bg-surface shadow-md border border-surface-variant h-full">
      <h3 className="font-heading text-2xl text-primary mb-8 border-b border-surface-variant pb-4">{title}</h3>
      <div className="space-y-6">
        {categories.map((cat, idx) => (
          <div key={idx}>
            <div className="flex justify-between font-sans text-base font-medium text-primary mb-2">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">{cat.icon}</span> {cat.name}
              </span>
              <span>{cat.amount}</span>
            </div>
            <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
              <div className={`${cat.colorClass} h-full rounded-full`} style={{ width: `${cat.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InsightCard({
  title,
  insight,
  buttonText,
}: {
  title: string;
  insight: string;
  buttonText: string;
}) {
  return (
    <div className="glass-panel rounded-2xl p-8 bg-surface shadow-md border border-surface-variant flex flex-col h-full">
      <h3 className="font-heading text-2xl text-primary mb-6">{title}</h3>
      <div className="bg-surface-container-low rounded-xl p-6 border border-surface-variant/50 relative overflow-hidden flex-1 flex flex-col justify-between">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
        <p className="font-sans text-base text-on-surface-variant leading-relaxed mb-6">{insight}</p>
        <button className="font-sans text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors flex items-center gap-1 w-fit">
          {buttonText} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}

export function DailySpendChartCard({ data }: { data: any[] }) {
  return (
    <div className="glass-panel rounded-2xl p-8 bg-surface shadow-md border border-surface-variant h-full flex flex-col">
      <h3 className="font-heading text-2xl text-primary mb-8 border-b border-surface-variant pb-4">Daily Spend (AI Forecast)</h3>
      <div className="flex-1 w-full min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(value: any) => `$${value}`} />
            <Tooltip 
              cursor={{ fill: '#f1f5f9' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="amount" fill="#0f172a" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
