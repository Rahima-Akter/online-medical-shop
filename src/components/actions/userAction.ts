"use server";
import { getSession } from "@/services/user.service";
import { User } from "@/types/userTypes";

interface ISession {
  user: User;
}

export default async function UserAction() {
  const session = (await getSession()) as ISession | null;
  if (!session) return null;
  return session?.user?.role;
}
