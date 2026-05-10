import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex bg-surface">
      {/* Left Panel: Form Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 md:px-24 xl:px-32 py-12 relative z-10 bg-surface/90 backdrop-blur-md lg:backdrop-blur-none lg:bg-transparent min-h-screen overflow-y-auto">
        <div className="w-full max-w-md mx-auto flex flex-col">
          {/* Brand Logo */}
          <div className="mb-12">
            <Link href="/" className="font-heading text-3xl text-primary tracking-tight">
              Traveloop
            </Link>
          </div>

          {children}
        </div>
      </div>

      {/* Right Panel: Cinematic Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/amalfi-luxury.png"
          alt="Cinematic luxury travel view"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay for atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface pointer-events-none" />
      </div>
      
      {/* Mobile background image (behind the form) */}
      <div className="lg:hidden absolute inset-0 z-0">
        <Image
          src="/amalfi-luxury.png"
          alt="Cinematic luxury travel view"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-surface/80" />
      </div>
    </div>
  );
}
