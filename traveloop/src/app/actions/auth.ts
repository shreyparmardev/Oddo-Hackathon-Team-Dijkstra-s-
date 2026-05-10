"use server";

import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function loginAction(email: string, password: string) {
  try {
    // Basic mocked check for the hackathon
    // Wait for Prisma to find the user
    let user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      if (email === "alex.mercer@traveloop.ai") {
        // Auto-create demo user for the hackathon presentation
        user = await prisma.user.create({
          data: {
            clerkId: `clerk_mock_${Date.now()}`,
            firstName: "Alex",
            lastName: "Mercer",
            email: "alex.mercer@traveloop.ai",
          }
        });
      } else {
        return { success: false, error: "Invalid credentials" };
      }
    }

    // Set a dummy cookie to simulate session
    cookies().set("session", user.id, { httpOnly: true, secure: process.env.NODE_ENV === "production" });
    
    return { 
      success: true, 
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, error: "Something went wrong" };
  }
}

export async function signupAction(firstName: string, lastName: string, email: string, password: string) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return { success: false, error: "User already exists" };
    }

    const user = await prisma.user.create({
      data: {
        clerkId: `clerk_mock_${Date.now()}`,
        firstName,
        lastName,
        email,
      }
    });

    // Set a dummy cookie to simulate session
    cookies().set("session", user.id, { httpOnly: true, secure: process.env.NODE_ENV === "production" });

    return { 
      success: true,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    };
  } catch (error) {
    console.error("Signup error:", error);
    return { success: false, error: "Something went wrong" };
  }
}

export async function logoutAction() {
  cookies().delete("session");
  return { success: true };
}
