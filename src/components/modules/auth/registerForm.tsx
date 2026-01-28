import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SecurityIcon from "@mui/icons-material/Security";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Link from "next/link";
import { ExpandCircleDown } from "@mui/icons-material";

export default function RegisterForm() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full max-w-6xl h-full lg:min-h-212.5 bg-[#ECE3DA] rounded-xl overflow-hidden shadow-lg">
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#146976]">
          <div className="absolute inset-0 bg-[#146976]/40 z-10"></div>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIbHr_yxrQJ8G--kEPF-I-xg5MdYAAu8yarYMuWISFUNwEWBhNQckaKg-IRIT0kRQf8ecZjqIhzZcRHrjT3pyPx88GBflafrUvvxaqZNwdx6hEPJK3GNM-z_Sa-smqnmIarSiY3N5zO3dB0lmsKBkvr3k-lv7-S9HsHuII_FltGm2KsLyG5U4hjgfwSzSD1dNONGIaOiCmUzI5sWsa_xaGDMpAJyBF_hDjuFdNuxMuqCvi5hp9bKtEyIerRwX1HEowlzk23nis7A')",
            }}
          />
          <div className="relative z-20 flex flex-col justify-between p-12 px-8 h-full text-white w-screen">
            <div className="absolute top-[5rem] left-14 right-14 z-20 space-y-64">
              {/* The content will be moved upwards by 5rem */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                  <MedicalServicesIcon className="text-white text-2xl" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">MediStore</h2>
              </div>
              {/* this div */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl font-extrabold leading-tight">
                    Join the Future of Pharmacy
                  </h1>
                  <p className="text-white/80 text-lg max-w-md leading-relaxed">
                    Register today to experience seamless medicine ordering and
                    expert pharmaceutical care at your fingertips.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex w-full items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <VerifiedUserIcon className="text-teal-300" />
                    <div className="text-xs">
                      <p className="font-bold">Certified Quality</p>
                      <p className="opacity-70">WHO Standards</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <SecurityIcon className="text-teal-300" />
                    <div className="text-xs">
                      <p className="font-bold">Secure Data</p>
                      <p className="opacity-70">HIPAA Compliant</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
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
                    Over 25,000 satisfied users
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm text-white absolute bottom-20 left-20">
            © {new Date().getFullYear()} MediStore Pharmacy Solutions. Trusted
            by Professionals.
          </div>
        </div>

        {/* Right side (Form Section) */}
        <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-14 overflow-y-auto">
          <div className="lg:hidden flex items-center gap-2 mb-8 text-[#146976]">
            <MedicalServicesIcon className="text-3xl font-bold" />
            <span className="text-xl font-bold uppercase tracking-wider">
              MediStore
            </span>
          </div>
          <div className="flex flex-col gap-2 mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Create Account
            </h2>
            <p className="text-gray-500">
              Please fill in your details to start your journey.
            </p>
          </div>
          <button
            className="w-full h-14 bg-[#FCFBFA] hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-200 transition-all flex items-center justify-center gap-3 shadow-sm active:scale-[0.98]"
            type="button"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              ></path>
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              ></path>
            </svg>
            <span>Continue with Google</span>
          </button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-400"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#ECE3DA] text-gray-400 font-medium uppercase tracking-widest text-[10px]">
                or register with email
              </span>
            </div>
          </div>

          <form className="space-y-6">
            {/* Full Name */}
            <div className="relative">
              {/* <label className="floating-label" htmlFor="fullname">
                Full Name
              </label> */}
              <input
                className="form-input block w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 focus:border-[#146976] focus:ring-2 focus:ring-[#146976]/20 transition-all outline-none palceholder-text:black shadow-lg shadow-[#146976]/20 placeholder:font-semibold"
                id="fullname"
                placeholder="Full Name"
                type="text"
              />
              <PersonIcon className="absolute left-4 top-4 text-gray-400" />
            </div>

            {/* Email */}
            <div className="relative">
              <MailIcon className="absolute left-4 top-4 text-gray-400" />
              <input
                className="form-input block w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 focus:border-[#146976] focus:ring-2 focus:ring-[#146976]/20 transition-all outline-none shadow-lg shadow-[#146976]/20 placeholder:font-semibold"
                id="email"
                placeholder="Email Address"
                type="email"
              />
              {/* <label className="floating-label" htmlFor="email">
                Email Address
              </label> */}
            </div>

            {/* Phone */}
            <div className="relative">
              <CallIcon className="absolute left-4 top-4  text-gray-400" />
              <input
                className="form-input block w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 focus:border-[#146976] focus:ring-2 focus:ring-[#146976]/20 transition-all outline-none shadow-lg shadow-[#146976]/20 placeholder:font-semibold"
                id="phone"
                placeholder="Phone Number"
                type="tel"
              />
              {/* <label className="floating-label" htmlFor="phone">
                Phone Number
              </label> */}
            </div>

            {/* Role */}
            <div className="relative">
              <SwitchAccountIcon className="absolute left-4 top-4 text-gray-400" />
              <select
                className="form-select block w-full pl-12 pr-10 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 appearance-none 
  focus:border-[#146976] focus:ring-2 focus:ring-[#146976]/20 transition-all outline-none 
  hover:border-[#146976] hover:ring-2 hover:ring-[#146976]/10 shadow-lg shadow-[#146976]/20 
  focus:shadow-[#146976]/30 dark:bg-[#1e2a3e] dark:text-white dark:border-gray-600 dark:focus:ring-[#3b82f6]"
                id="role"
              >
                <option value="" className="text-[#A3B0B8] font-semibold">
                  Select your role
                </option>
                <option value="Customer">I am a Customer</option>
                <option value="Seller">I am a Seller</option>
              </select>

              <label className="text-green-600 font-extrabold absolute text-xs left-14 -top-2" htmlFor="role">
                Role
              </label>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                <span className="material-symbols-outlined">
                  <ExpandCircleDown />
                </span>
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                className="form-input block w-full pl-12 pr-12 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 focus:border-[#146976] focus:ring-2 focus:ring-[#146976]/20 transition-all outline-none shadow-lg shadow-[#146976]/20 placeholder:font-semibold"
                id="password"
                placeholder="Password"
                type="password"
              />
              {/* <label className="floating-label" htmlFor="password">
                Create Password
              </label> */}
              <button
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                type="button"
              >
                <VisibilityIcon />
              </button>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-3 px-1">
              <div className="mt-1">
                <input
                  className="w-4 h-4 rounded border-gray-300 text-[#146976] focus:ring-[#146976]"
                  id="terms"
                  type="checkbox"
                />
              </div>
              <label
                className="text-xs text-gray-500 font-medium leading-relaxed"
                htmlFor="terms"
              >
                By creating an account, I agree to MediStore&apos;s{" "}
                <a className="text-[#146976] hover:underline" href="#">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="text-[#146976] hover:underline" href="#">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Submit Button */}
            <button
              className="w-full h-14 bg-[#146976] hover:bg-[#146976]/95 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#146976]/20 active:scale-[0.98] mt-4"
              type="submit"
            >
              <span>Create Account</span>
              <HowToRegIcon />
            </button>
          </form>

          {/* Already have an account */}
          <div className="mt-auto pt-10 text-center">
            <p className="text-gray-600 font-medium">
              Already have an account?
              <Link
                className="text-[#146976] font-bold hover:underline ml-1"
                href="/login"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Footer Links */}
          <div className="mt-8 flex justify-center gap-6 text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            <a className="hover:text-[#146976] transition-colors" href="#">
              Support
            </a>
            <a className="hover:text-[#146976] transition-colors" href="#">
              Legal
            </a>
            <a className="hover:text-[#146976] transition-colors" href="#">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
