"use server";

import { prisma } from "@/lib/prisma";

import { revalidatePath } from "next/cache";

export async function addExpense(formData: FormData) {
  const userId = "user_2pk_demo_123";
  if (!userId) throw new Error("Unauthorized");

  const tripId = formData.get("tripId") as string;
  const title = formData.get("title") as string;
  const amount = parseFloat(formData.get("amount") as string);
  const category = formData.get("category") as string;

  await prisma.expense.create({
    data: {
      tripId,
      title,
      amount,
      category,
    }
  });

  revalidatePath(`/dashboard/budget`);
}

export async function deleteExpense(expenseId: string) {
  const userId = "user_2pk_demo_123";
  if (!userId) throw new Error("Unauthorized");

  await prisma.expense.delete({
    where: { id: expenseId }
  });

  revalidatePath(`/dashboard/budget`);
}
