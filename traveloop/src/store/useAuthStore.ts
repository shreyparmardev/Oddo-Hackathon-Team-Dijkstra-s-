import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginAction, signupAction, logoutAction } from "@/app/actions/auth";

interface AuthState {
  isLoggedIn: boolean;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  } | null;
  login: (email: string, password: string, firstName?: string, lastName?: string) => Promise<boolean>;
  signup: (firstName: string, lastName: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,

      login: async (email: string, password: string) => {
        try {
          const res = await loginAction(email, password);
          if (res.success && res.user) {
            set({
              isLoggedIn: true,
              user: res.user,
            });
            return true;
          }
          return false;
        } catch (err) {
          console.error(err);
          return false;
        }
      },

      signup: async (firstName: string, lastName: string, email: string, password: string) => {
        try {
          const res = await signupAction(firstName, lastName, email, password);
          if (res.success && res.user) {
            set({
              isLoggedIn: true,
              user: res.user,
            });
            return true;
          }
          return false;
        } catch (err) {
          console.error(err);
          return false;
        }
      },

      logout: async () => {
        await logoutAction();
        set({ isLoggedIn: false, user: null });
      },
    }),
    {
      name: "traveloop-auth",
    }
  )
);
