"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ArrowForward } from "@mui/icons-material";
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import Link from "next/link";

interface LoginFormData {
  email: string;
  password: string;
  remember: boolean;
}

export default function UserLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const { register, handleSubmit, setValue } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);

    try {
      const res = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

      if (!res) {
        toast.error("Email or password does not match");
        setLoading(false);
        return;
      }

      toast.success("Login successful!");

      if (redirect && redirect.startsWith("/")) {
        router.push(redirect);
      } else {
        router.push("/");
      }

      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error(
        err instanceof Error ? err.message : "Something went wrong, try again!",
      );
      setLoading(false);
    }
  };

  const handleQuickLogin = async (role: "admin" | "seller" | "user") => {
    let credentials = {
      email: "",
      password: "",
    };

    if (role === "admin") {
      credentials = { email: "srity@admin.com", password: "password1234" };
    }
    if (role === "seller") {
      credentials = { email: "seller@example.com", password: "password1234" };
    }
    if (role === "user") {
      credentials = { email: "john.doe@example.com", password: "password1234" };
    }

    setValue("email", credentials.email);
    setValue("password", credentials.password);

    await onSubmit({ ...credentials, remember: true });
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full max-w-6xl h-full lg:h-180 bg-[#ECE3DA] rounded-xl overflow-hidden shadow-lg">
        {/* Left */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#146976]">
          <div className="absolute inset-0 bg-[#146976]/40 z-10"></div>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIbHr_yxrQJ8G--kEPF-I-xg5MdYAAu8yarYMuWISFUNwEWBhNQckaKg-IRIT0kRQf8ecZjqIhzZcRHrjT3pyPx88GBflafrUvvxaqZNwdx6hEPJK3GNM-z_Sa-smqnmIarSiY3N5zO3dB0lmsKBkvr3k-lv7-S9HsHuII_FltGm2KsLyG5U4hjgfwSzSD1dNONGIaOiCmUzI5sWsa_xaGDMpAJyBF_hDjuFdNuxMuqCvi5hp9bKtEyIerRwX1HEowlzk23nis7A')",
            }}
          />
          <div className="relative z-20 flex flex-col justify-between p-12 h-full text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                <MedicalServicesIcon className="text-white text-2xl" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">MediStore</h2>
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl font-extrabold leading-tight">
                Your Trusted <br />
                Online Medicine <br />
                Shop
              </h1>
              <p className="text-white/80 text-lg max-w-md">
                Access premium healthcare products and manage your prescriptions
                with ease.
              </p>
            </div>
            <div className="text-sm text-white/60">
              © 2024 MediStore Pharmacy Solutions.
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-16">
          <div className="lg:hidden flex items-center gap-2 mb-8 text-[#146976]">
            <MedicalServicesIcon className="text-3xl" />
            <span className="text-xl font-bold uppercase">MediStore</span>
          </div>

          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[#1E3F45]">Welcome Back</h2>
            <p className="text-gray-500">
              Sign in to manage your medical orders.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div>
              <p className="text-gray-700 text-sm font-semibold pb-1.5 ml-1">
                Email Address
              </p>
              <div className="relative">
                <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="block w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-[#1E3F45] focus:border-[#146976] focus:ring-2 focus:ring-[#146976]/20 outline-none"
                  {...register("email", { required: true })}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between pb-1.5 ml-1">
                <p className="text-gray-700 text-sm font-semibold">Password</p>
                <a className="text-[#146976] text-xs hover:underline cursor-pointer">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password Here...."
                  className="block w-full pl-12 pr-12 py-4 rounded-xl border border-gray-200 bg-white text-[#1E3F45]"
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <VisibilityIcon />
                </button>
              </div>
            </div>

            {/* Submit */}
            <button className="w-full h-14 bg-[#146976] text-white rounded-xl flex items-center justify-center gap-2 cursor-pointer">
              {loading ? "Logging in..." : "Login to Account"}
              <ArrowForward />
            </button>

            {/* Quick login */}
            <div className="flex gap-3 flex-wrap pt-2">
              <button
                type="button"
                onClick={() => handleQuickLogin("admin")}
                className="flex-1 min-w-25 py-2 bg-[#146976] text-white rounded-lg text-sm cursor-pointer"
              >
                Admin
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin("seller")}
                className="flex-1 min-w-25 py-2 bg-[#146976]/80 text-white rounded-lg text-sm cursor-pointer"
              >
                Seller
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin("user")}
                className="flex-1 min-w-25 py-2 bg-[#146976]/60 text-white rounded-lg text-sm cursor-pointer"
              >
                User
              </button>
            </div>
          </form>

          <div className="mt-8 flex flex-col items-center gap-3 text-sm">
            <Link
              href="/"
              className="text-[#146976] hover:underline cursor-pointer"
            >
              ← Go back home
            </Link>

            <div className="flex items-center gap-1 text-gray-500">
              <span>Don’t have an account?</span>
              <Link
                href="/register"
                className="text-[#146976] font-semibold hover:underline cursor-pointer"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
