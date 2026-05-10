"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setError("Please fill in all fields"); return; }
    setLoading(true);
    setError("");
    try {
      const ok = await login(email, password);
      if (ok) router.push("/dashboard");
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setEmail("alex.mercer@traveloop.ai");
    setPassword("demo12345");
    setTimeout(async () => {
      await login("alex.mercer@traveloop.ai", "demo12345");
      router.push("/dashboard");
    }, 300);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="max-w-md w-full mx-auto"
    >
      <div className="mb-10 text-center lg:text-left">
        <h1 className="font-heading text-4xl text-primary mb-3">Welcome back</h1>
        <p className="font-sans text-on-surface-variant text-lg">
          Log in to continue your journey with Traveloop.
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 font-sans text-sm">
          {error}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
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
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="font-sans text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
              Password
            </label>
            <Link href="#" className="font-sans text-[10px] font-bold text-secondary hover:text-primary transition-colors">
              FORGOT PASSWORD?
            </Link>
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full bg-surface-container-lowest border border-surface-variant rounded-xl px-4 py-3 font-sans text-base text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-on-primary font-sans text-base font-semibold py-4 rounded-xl shadow-[0_8px_16px_rgba(4,22,39,0.15)] hover:shadow-[0_12px_24px_rgba(4,22,39,0.25)] hover:-translate-y-0.5 transition-all duration-300 block text-center disabled:opacity-50"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
              Signing In...
            </span>
          ) : "Sign In"}
        </button>
      </form>

      {/* Demo Login */}
      <button
        onClick={handleDemoLogin}
        className="w-full mt-4 bg-secondary/10 text-secondary font-sans text-sm font-semibold py-3 rounded-xl border border-secondary/20 hover:bg-secondary/20 transition-all flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
        Quick Demo Login
      </button>

      <div className="mt-8 flex items-center gap-4">
        <div className="h-px bg-surface-variant flex-1"></div>
        <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-outline">Or continue with</span>
        <div className="h-px bg-surface-variant flex-1"></div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <button type="button" onClick={handleDemoLogin} className="flex items-center justify-center gap-2 bg-surface-container-lowest border border-surface-variant rounded-xl py-3 px-4 hover:bg-surface-container-low transition-colors">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          <span className="font-sans text-sm font-semibold text-primary">Google</span>
        </button>
        <button type="button" onClick={handleDemoLogin} className="flex items-center justify-center gap-2 bg-surface-container-lowest border border-surface-variant rounded-xl py-3 px-4 hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-[20px] text-primary">phone_iphone</span>
          <span className="font-sans text-sm font-semibold text-primary">Phone</span>
        </button>
      </div>

      <p className="mt-10 text-center font-sans text-sm text-on-surface-variant">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-semibold text-secondary hover:text-primary transition-colors">
          Create one now
        </Link>
      </p>
    </motion.div>
  );
}
