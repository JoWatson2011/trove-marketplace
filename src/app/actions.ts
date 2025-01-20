"use server";

import { cookies } from "next/headers";

export async function setToken(token: string) {
  const cookieStore = await cookies();

  cookieStore.set("token", token);
  console.log(cookieStore.getAll());
}

export async function setUser(userId: number) {
  const cookieStore = await cookies();
  cookieStore.set("userId", `${userId}`);
  console.log(cookieStore.getAll());
}

export async function getToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  return token;
}

export async function getUser() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  return userId;
}
