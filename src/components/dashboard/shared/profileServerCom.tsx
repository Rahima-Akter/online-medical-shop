import { User } from "@/types/userTypes";
import Profile from "./profile";
import Link from "next/link";
import { getSession } from "@/services/user.service";

export default async function ProfileServerComponent() {
  const session = await getSession();
  console.log("from profile server -----------------------------");
  console.log(session);
  if (!session?.user)
    return (
      <div className="flex flex-col justify-center items-center py-20 space-y-5">
        <p className="flex justify-center items-center font-semibold">
          Please login to view your profile.
        </p>
        <Link
          href="/login"
          className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md"
        >
          Login
        </Link>
      </div>
    );
  const user: User = session?.user;

  return <Profile user={user} />;
}
