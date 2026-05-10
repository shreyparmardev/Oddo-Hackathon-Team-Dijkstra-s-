"use server";

import { prisma } from "@/lib/prisma";

import { revalidatePath } from "next/cache";

export async function getUserTrips() {
  const userId = "user_2pk_demo_123";
  
  if (!userId) {
    throw new Error("Unauthorized");
  }

  // Get or create user
  const user = await prisma.user.upsert({
    where: { clerkId: userId },
    update: {},
    create: {
      clerkId: userId,
      email: "placeholder@example.com", // In a real app, grab from Clerk webhook
      firstName: "Traveler",
      lastName: "",
    }
  });

  const trips = await prisma.trip.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });

  return trips;
}

export async function createTrip(formData: FormData) {
  const userId = "user_2pk_demo_123";
  if (!userId) throw new Error("Unauthorized");

  const title = formData.get("title") as string;
  const destination = formData.get("destination") as string;
  
  const user = await prisma.user.findUnique({ where: { clerkId: userId } });
  if (!user) throw new Error("User not found");

  const trip = await prisma.trip.create({
    data: {
      title,
      destination,
      userId: user.id,
      status: "draft",
      progress: 10,
    }
  });

  revalidatePath("/dashboard/trips");
  return trip;
}

export async function deleteTrip(tripId: string) {
  const userId = "user_2pk_demo_123";
  if (!userId) throw new Error("Unauthorized");

  await prisma.trip.delete({
    where: { id: tripId }
  });

  revalidatePath("/dashboard/trips");
}
