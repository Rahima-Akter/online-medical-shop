"use server";
import {
  allUsers,
  deleteUser,
  getSession,
  logout,
  singleUser,
} from "@/services/user.service";
import { User, UserResponse } from "@/types/userTypes";

interface ISession {
  user: User;
}

export async function UserAction() {
  const session = (await getSession()) as ISession | null;
  if (!session) return null;
  return session?.user?.role;
}

export async function allUserAction(page: number, limit: number) {
  const allUser = (await allUsers(page, limit)) as UserResponse | null;
  return allUser;
}

export async function deleteUserAction(userId: string) {
  return await deleteUser(userId);
}

export async function singleUserAction(userId: string) {
  return await singleUser(userId);
}

export async function loggedInUserAction() {
  const session = (await getSession()) as ISession | null;
  if (!session) return null;
  return session?.user;
}

export async function logOutAction() {
  return await logout();
}
