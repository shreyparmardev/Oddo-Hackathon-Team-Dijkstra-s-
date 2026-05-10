import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-12 bg-surface-container-low dark:bg-surface-container-highest border-t border-surface-variant dark:border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-16 max-w-7xl mx-auto gap-6">
        <div className="font-heading text-2xl text-primary">Traveloop</div>
        <nav className="flex flex-wrap gap-6 justify-center">
          <Link href="/privacy" className="font-sans text-sm text-on-surface-variant dark:text-secondary-fixed-dim hover:text-secondary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="font-sans text-sm text-on-surface-variant dark:text-secondary-fixed-dim hover:text-secondary transition-colors">
            Terms of Service
          </Link>
          <Link href="/press" className="font-sans text-sm text-on-surface-variant dark:text-secondary-fixed-dim hover:text-secondary transition-colors">
            Press
          </Link>
          <Link href="/contact" className="font-sans text-sm text-on-surface-variant dark:text-secondary-fixed-dim hover:text-secondary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="font-sans text-sm text-on-surface-variant dark:text-secondary-fixed-dim">
          © 2024 Traveloop. The Art of Discerning Travel.
        </div>
      </div>
    </footer>
  );
}
