import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";

export default function UserLoginForm() {
  return (
    <div className="">
      {/* Main Auth Card */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl h-full lg:h-[720px] bg-[#ECE3DA] rounded-xl overflow-hidden shadow-lg">
        {/* Left Pane: Branding & Visual */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#146976]">
          <div className="absolute inset-0 bg-[#146976]/40 z-10"></div>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIbHr_yxrQJ8G--kEPF-I-xg5MdYAAu8yarYMuWISFUNwEWBhNQckaKg-IRIT0kRQf8ecZjqIhzZcRHrjT3pyPx88GBflafrUvvxaqZNwdx6hEPJK3GNM-z_Sa-smqnmIarSiY3N5zO3dB0lmsKBkvr3k-lv7-S9HsHuII_FltGm2KsLyG5U4hjgfwSzSD1dNONGIaOiCmUzI5sWsa_xaGDMpAJyBF_hDjuFdNuxMuqCvi5hp9bKtEyIerRwX1HEowlzk23nis7A')",
            }}
            data-alt="Modern pharmacy interior with medicine shelves and professional lighting"
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
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#146976] bg-gray-200 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHaiqn4v9YsGr3yryp4xPqyYzvdvM6t3RgVxX51A0tnltJ9Hfc7TZzo2gLOPjMcS00-HVHoiBiODdwcINbvuN4dFXrB9XwcnFkGDRCupfc0WqZASgHqK9kWoj-DpOGizBHKvwD1al6aXg4qTb95kAbFqdrkndQ4fFdeusFVoTe3XpGcBflOVAnM2ZI_sSpRXKRZqgzbQIeCNl0rKXb8sh8cRL1X4HzUbG6ge-8jCyxYHFF35LOwrzkEZ-lLMyIWU4rA9p-KBLBCA"
                      alt="Pharmacist professional profile"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#146976] bg-gray-200 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAitHmEE_10iKADGQQXS93S9LoepVPC0WesUFtYK5DN8XxS1cc1J4YCaTEZzIVh4f__KAUW6ZyyF1VH-MM-H7_T4OSQNZe1ew9ExSKYY2eB6S11lF0w59eA7vqHNzua5aPPgleCh42P-DVaSK9M-6MX07j_SqgMP_rNv7oMtwnj-X_Q_0A3PPWFK9GcqzhUkAIyuoQpPZciznVjhML0VcU-8IDCgY3xisBDHlSATkYPCctR53Q5MUuKBG0IsjNQ0nm9dmuT_FHLWQ"
                      alt="Doctor professional profile"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#146976] bg-gray-200 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSRoTG98UkXQoMKnDzOR6d5IyI_SbN1bZ_ttx4p26yhMu1GcfqbkDFogU6FHs3XUqYIOJM7hw5YV1w3RyKaQCsqlA9JTqqbRyMOszf2liOPJuEO5L1vWrfQjQIoUd-T7yEakoJnF-6JvdXsqaJHxitr_jT6Gy_1_8Z0XAeBRO_RTtbzJiIjObY5uUGSN8Q-jlDQUYhX0GIQGkPILZak4l0c6Hdv-Q3HpYAZO9Kmv-0vFw1hpiJoFQgI27IQsKKE_l66x8IuiazjQ"
                      alt="Medical staff profile"
                    />
                  </div>
                </div>
                <p className="text-sm font-medium">
                  Joined by 10k+ healthcare providers
                </p>
              </div>
            </div>
            <div className="text-sm text-white/60">
              © 2024 MediStore Pharmacy Solutions. All rights reserved.
            </div>
          </div>
        </div>

        {/* Right Pane: Auth Form */}
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


          {/* Authentication Form */}
          <form className="space-y-5">
            {/* Email Field */}
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
                    className="block w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-[#1E3F45] placeholder:text-gray-400 focus:border-[#146976] focus:ring-2 focus:ring-[#146976]/20 transition-all outline-none"
                  />
                </div>
              </label>
            </div>

            {/* Password Field */}
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
                    type="password"
                    placeholder="••••••••"
                    className="block w-full pl-12 pr-12 py-4 rounded-xl border border-gray-200 bg-white text-[#1E3F45] placeholder:text-gray-400 focus:border-[#146976] focus:ring-2 focus:ring-[#146976]/20 transition-all outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <VisibilityIcon />
                  </button>
                </div>
              </label>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 px-1">
              <input
                className="w-4 h-4 rounded border-gray-300 text-[#146976] focus:ring-[#146976]"
                id="remember"
                type="checkbox"
              />
              <label
                className="text-sm text-gray-600 font-medium"
                htmlFor="remember"
              >
                Remember me for 30 days
              </label>
            </div>

            {/* Action Button */}
            <button
              type="submit"
              className="w-full h-14 bg-[#146976] hover:bg-[#146976]/90 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#146976]/20 active:scale-[0.98]"
            >
              <span>Login to Account</span>
              <span className="material-symbols-outlined"><ArrowForward/></span>
            </button>
          </form>

          {/* Divider and Social Logins, etc. */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-500"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-[#ECE3DA] px-4 text-gray-600 font-medium uppercase tracking-widest text-xs">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 h-12 border-2 border-gray-300 cursor-pointer rounded-xl bg-gray-50 hover:bg-transparent transition-colors font-semibold text-gray-700">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>

            <button className="flex items-center justify-center gap-3 h-12 border-2 border-gray-300 cursor-pointer rounded-xl bg-gray-50 hover:bg-transparent transition-colors font-semibold text-gray-700">
              <svg
                className="w-5 h-5 fill-current text-[#1877F2]"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>

          {/* Switch to Register */}
          <div className="mt-auto pt-10 text-center">
            <p className="text-gray-600 font-medium">
              Don&apos;t have an account yet?
              <Link
                className="text-[#146976] font-bold hover:underline ml-1"
                href="/register"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
