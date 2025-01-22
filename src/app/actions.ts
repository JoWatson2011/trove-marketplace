"use server";

import { cookies } from "next/headers";
import { getRequest, postRequest } from "../utils/api";

export async function setToken(token: string) {
  const cookieStore = await cookies();

  cookieStore.set("token", token);
}

export async function setUser(userId: number) {
  const cookieStore = await cookies();
  cookieStore.set("userId", `${userId}`);
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

export async function logInRequest(
  username: string,
  password: string
) {
  const token = await postRequest(`/auth/login`, {
    username: username,
    password: password,
  });
  setToken(token);

  const user = await getRequest("/users/1");

  setUser(user);
}
