import { create } from "zustand";

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  avatar: string | null;
  stats: {
    countries: number;
    cities: number;
    journeys: number;
  };
  preferences: {
    vibe: string[];
    pace: string;
    interests: string[];
  };
}

interface UserState {
  profile: UserProfile | null;
  isAuthenticated: boolean;
  login: (profile: UserProfile) => void;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

const mockUser: UserProfile = {
  id: "u1",
  firstName: "Alex",
  lastName: "Mercer",
  email: "alex.mercer@example.com",
  location: "New York, USA",
  avatar: null,
  stats: {
    countries: 12,
    cities: 45,
    journeys: 8,
  },
  preferences: {
    vibe: ["Luxury", "Boutique"],
    pace: "Relaxed",
    interests: ["Culinary", "History", "Wellness"],
  }
};

export const useUserStore = create<UserState>((set) => ({
  profile: mockUser, // Set to null initially when real auth is added
  isAuthenticated: true, // Set to false initially
  login: (profile) => set({ profile, isAuthenticated: true }),
  logout: () => set({ profile: null, isAuthenticated: false }),
  updateProfile: (updates) => 
    set((state) => ({
      profile: state.profile ? { ...state.profile, ...updates } : null
    }))
}));
