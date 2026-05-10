import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  actionCallback?: () => void;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
  actionCallback,
}: EmptyStateProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full flex flex-col items-center justify-center p-12 text-center glass-panel rounded-3xl border border-surface-variant bg-surface/50"
    >
      <div className="w-20 h-20 rounded-full bg-primary-container text-primary flex items-center justify-center mb-6 shadow-inner">
        <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          {icon}
        </span>
      </div>
      <h3 className="font-heading text-2xl text-primary mb-3">{title}</h3>
      <p className="font-sans text-base text-on-surface-variant max-w-md mb-8">
        {description}
      </p>
      
      {actionLabel && actionHref && (
        <Link href={actionHref}>
          <Button className="bg-primary text-on-primary rounded-full px-8 hover:shadow-lg transition-all font-sans">
            {actionLabel}
          </Button>
        </Link>
      )}

      {actionLabel && actionCallback && !actionHref && (
        <Button onClick={actionCallback} className="bg-primary text-on-primary rounded-full px-8 hover:shadow-lg transition-all font-sans">
          {actionLabel}
        </Button>
      )}
    </motion.div>
  );
}
