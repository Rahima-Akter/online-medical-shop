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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);

    try {
      const res = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

      if (!res.data) {
        const msg = res.error?.message || "Email or password does not match";
        toast.error(msg);
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
        err instanceof Error ? err.message : "Something went wrong, try again",
      );
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl h-full lg:h-[720px] bg-[#ECE3DA] rounded-xl overflow-hidden shadow-lg">
        {/* Left Pane */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#146976]">
          <div className="absolute inset-0 bg-[#146976]/40 z-10"></div>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIbHr_yxrQJ8G--kEPF-I-xg5MdYAAu8yarYMuWISFUNwEWBhNQckaKg-IRIT0kRQf8ecZjqIhzZcRHrjT3pyPx88GBflafrUvvxaqZNwdx6hEPJK3GNM-z_Sa-smqnmIarSiY3N5zO3dB0lmsKBkvr3k-lv7-S9HsHuII_FltGm2KsLyG5U4hjgfwSzSD1dNONGIaOiCmUzI5sWsa_xaGDMpAJyBF_hDjuFdNuxMuqCvi5hp9bKtEyIerRwX1HEowlzk23nis7A')",
            }}
          ></div>
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
                with ease. Join our network of certified pharmacists and
                customers.
              </p>
            </div>
            <div className="text-sm text-white/60">
              © 2024 MediStore Pharmacy Solutions. All rights reserved.
            </div>
          </div>
        </div>

        {/* Right Pane */}
        <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-16">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8 text-[#146976]">
            <MedicalServicesIcon className="text-3xl font-bold" />
            <span className="text-xl font-bold uppercase tracking-wider">
              MediStore
            </span>
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-3xl font-bold text-[#1E3F45]">Welcome Back</h2>
            <p className="text-gray-500">
              Sign in to manage your medical orders and profile.
            </p>
          </div>

          {/* {errorMessage && (
            <div className="mb-4 text-red-500 font-medium">{errorMessage}</div>
          )} */}

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="relative">
              <label className="flex flex-col">
                <p className="text-gray-700 text-sm font-semibold pb-1.5 ml-1">
                  Email Address
                </p>
                <div className="relative">
                  <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className={`block w-full pl-12 pr-4 py-4 rounded-xl border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } bg-white text-[#1E3F45] placeholder:text-gray-400 focus:border-[#146976] focus:ring-2 focus:ring-[#146976]/20 transition-all outline-none`}
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 ml-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <label className="flex flex-col">
                <div className="flex justify-between items-center pb-1.5 ml-1">
                  <p className="text-gray-700 text-sm font-semibold">
                    Password
                  </p>
                  <a
                    className="text-[#146976] text-xs font-bold hover:underline"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={`block w-full pl-12 pr-12 py-4 rounded-xl border ${
                      errors.password ? "border-red-500" : "border-gray-200"
                    } bg-white text-[#1E3F45] placeholder:text-gray-400 focus:border-[#146976] focus:ring-2 focus:ring-[#146976]/20 transition-all outline-none`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <VisibilityIcon />
                  </button>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1 ml-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </label>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 px-1">
              <input
                className="w-4 h-4 rounded border-gray-300 text-[#146976] focus:ring-[#146976]"
                id="remember"
                type="checkbox"
                {...register("remember")}
              />
              <label
                className="text-sm text-gray-600 font-medium"
                htmlFor="remember"
              >
                Remember me for 30 days
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-[#146976] hover:bg-[#146976]/90 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#146976]/20 active:scale-[0.98]"
            >
              {loading ? "Logging in..." : "Login to Account"}
              <ArrowForward />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
