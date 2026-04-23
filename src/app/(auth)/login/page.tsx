import UserLoginForm from "@/components/modules/auth/loginForm";
import { Suspense } from "react";

export default function LoginForm() {
  return (
    <div className="bg-[#19393e] min-h-screen flex items-center justify-center p-4 md:p-10">
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <UserLoginForm />
      </Suspense>
    </div>
  );
}
