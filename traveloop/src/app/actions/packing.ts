"use server";

import { prisma } from "@/lib/prisma";

import { revalidatePath } from "next/cache";

export async function togglePackingItem(itemId: string, isPacked: boolean) {
  const userId = "user_2pk_demo_123";
  if (!userId) throw new Error("Unauthorized");

  await prisma.packingItem.update({
    where: { id: itemId },
    data: { isPacked }
  });

  revalidatePath(`/dashboard/packing`);
}

export async function addPackingItem(formData: FormData) {
  const userId = "user_2pk_demo_123";
  if (!userId) throw new Error("Unauthorized");

  const tripId = formData.get("tripId") as string;
  const name = formData.get("name") as string;
  const category = formData.get("category") as string;

  await prisma.packingItem.create({
    data: {
      tripId,
      name,
      category,
      isPacked: false,
    }
  });

  revalidatePath(`/dashboard/packing`);
}
