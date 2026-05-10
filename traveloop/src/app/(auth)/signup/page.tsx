"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { motion } from "framer-motion";

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuthStore();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) { setError("All fields are required"); return; }
    if (password.length < 8) { setError("Password must be at least 8 characters"); return; }
    setLoading(true);
    setError("");
    try {
      const ok = await signup(firstName, lastName, email, password);
      if (ok) router.push("/dashboard");
    } catch {
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="max-w-md w-full mx-auto pb-12"
    >
      <div className="mb-10 text-center lg:text-left mt-12 lg:mt-0">
        <h1 className="font-heading text-4xl text-primary mb-3">Join Traveloop</h1>
        <p className="font-sans text-on-surface-variant text-lg">
          Create an account to start curating your next luxurious journey.
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 font-sans text-sm">
          {error}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="font-sans text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Alex"
              className="w-full bg-surface-container-lowest border border-surface-variant rounded-xl px-4 py-3 font-sans text-base text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="font-sans text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Mercer"
              className="w-full bg-surface-container-lowest border border-surface-variant rounded-xl px-4 py-3 font-sans text-base text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="font-sans text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex.mercer@traveloop.ai"
            className="w-full bg-surface-container-lowest border border-surface-variant rounded-xl px-4 py-3 font-sans text-base text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="font-sans text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a strong password"
            className="w-full bg-surface-container-lowest border border-surface-variant rounded-xl px-4 py-3 font-sans text-base text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
            required
          />
          <p className="font-sans text-[10px] text-outline mt-1">Must be at least 8 characters long.</p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-on-primary font-sans text-base font-semibold py-4 rounded-xl shadow-[0_8px_16px_rgba(4,22,39,0.15)] hover:shadow-[0_12px_24px_rgba(4,22,39,0.25)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
              Creating Account...
            </span>
          ) : "Create Account"}
        </button>
      </form>

      <div className="mt-8 flex items-center gap-4">
        <div className="h-px bg-surface-variant flex-1"></div>
        <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-outline">Or register with</span>
        <div className="h-px bg-surface-variant flex-1"></div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <button type="button" className="flex items-center justify-center gap-2 bg-surface-container-lowest border border-surface-variant rounded-xl py-3 px-4 hover:bg-surface-container-low transition-colors">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          <span className="font-sans text-sm font-semibold text-primary">Google</span>
        </button>
        <button type="button" className="flex items-center justify-center gap-2 bg-surface-container-lowest border border-surface-variant rounded-xl py-3 px-4 hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-[20px] text-primary">phone_iphone</span>
          <span className="font-sans text-sm font-semibold text-primary">Phone</span>
        </button>
      </div>

      <p className="mt-10 text-center font-sans text-sm text-on-surface-variant">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-secondary hover:text-primary transition-colors">
          Sign in here
        </Link>
      </p>
      
      <p className="mt-8 text-center font-sans text-xs text-outline leading-relaxed px-4">
        By creating an account, you agree to our{" "}
        <Link href="#" className="underline hover:text-primary transition-colors">Terms of Service</Link>
        {" "}and{" "}
        <Link href="#" className="underline hover:text-primary transition-colors">Privacy Policy</Link>.
      </p>
    </motion.div>
  );
}
