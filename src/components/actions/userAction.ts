"use server";
import {
  allUsers,
  deleteUser,
  getSession,
  logout,
  singleUser,
  updateUser,
} from "@/services/user.service";
import { User, UserResponse } from "@/types/userTypes";
import { redirect } from "next/navigation";

interface ISession {
  user: User;
}

export async function UserAction() {
  const session = (await getSession()) as ISession | null;
  if (!session) return null;
  return session?.user?.role;
}

export async function UserInfoAction() {
  const session = (await getSession()) as ISession | null;
  if (!session) return null;
  return session?.user;
}

export async function allUserAction(page: number, limit: number) {
  const allUser = (await allUsers(page, limit)) as UserResponse | null;
  return allUser;
}

export async function deleteUserAction(userId: string) {
  return await deleteUser(userId);
}

export async function updateUserAction(payLoad: Partial<User>) {
  return await updateUser(payLoad);
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
  await logout();
  redirect("/login");
}
