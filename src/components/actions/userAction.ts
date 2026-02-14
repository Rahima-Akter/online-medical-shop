"use server";
import { getSession, logout } from "@/services/user.service";
import { User } from "@/types/userTypes";

interface ISession {
  user: User;
}

export async function UserAction() {
  const session = (await getSession()) as ISession | null;
  if (!session) return null;
  return session?.user?.role;
}

export async function loggedInUserAction() {
  const session = (await getSession()) as ISession | null;
  if (!session) return null;
  return session?.user;
}

export async function logOutAction() {
  return await logout();
}
