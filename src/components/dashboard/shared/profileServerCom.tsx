import { getSession } from "@/services/user.service";
import { User } from "@/types/userTypes";
import Profile from "./profile";

export default async function ProfileServerComponent() {
  const session = await getSession();
  if (!session?.user) return <p>Please login to view your profile.</p>;
  const user: User = session?.user;

  return <Profile user={user} />;
}
