"use client";
import {
  ArrowBack,
  Assignment,
  EditNote,
  EventRepeat,
  InfoRounded,
  Insights,
  Lightbulb,
  Lock,
  PhotoCamera,
  Redeem,
  Stars,
  TodayOutlined,
  Verified,
} from "@mui/icons-material";
import Link from "next/link";
import { User } from "@/types/userTypes";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  image: string;
  name: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  default_shipping_address: string;
  blood_type: string;
};

export default function Profile({ user: userInfo }: { user: User }) {
  const [user, setUser] = useState<User>(userInfo);
  const defaultImg =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBl939L5wNqdSdH0lGQPuIaZy7H-nswuo-e88tdvlJWOOftzkCS608CD34UlmxIJUFcY5oIS97v5J_qv_1XaLJBpKalZWnGAR4r2_Xq2PI0YjYGX4Ak1bscMZ9o9l-oUNzQ6-2VD-sUNXyatWaMGBJZe7pcgGuW6SE8bd_JzgpcO73tGnNPzxGe59wQEIl2mljxt2tGuSR5c9WY0RGWqXQHF7tzDsMAHCKZTEYs1uQzouKXazoniSiUuIZPr0dCI3nm8owAL8IZxg";
  const [editMode, setEditMode] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: user?.id,
      image: user?.image || "",
      name: user?.name || "N/A",
      email: user?.email || "N/A",
      phone_number: user?.phone_number || "N/A",
      date_of_birth: user?.date_of_birth
        ? new Date(user.date_of_birth).toISOString().split("T")[0]
        : "",
      default_shipping_address: user?.default_shipping_address || "N/A",
      blood_type: user?.blood_type || "N/A",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // Read token from cookies
      const sessionToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("better-auth.session_token="))
        ?.split("=")[1];

      if (!sessionToken) throw new Error("Not authenticated");

      const response = await fetch("http://localhost:5000/api/user/me", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to update profile");

      const updatedUser = await response.json();
      setUser(updatedUser);
      reset(updatedUser);
      setEditMode(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#101521] text-[#F5F1E9] font-display">
      <div className="p-6 md:p-10 max-w-6xl mx-auto w-full space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#F5F1E9] text-4xl font-extrabold leading-tight tracking-tight">
              Profile Settings
            </h1>
            <p className="text-[#F5F1E9]/50 text-base max-w-2xl font-light">
              Experience premium healthcare management. Securely update your
              personal details and account preferences.
            </p>
          </div>
          <Link
            href="/"
            className="flex items-center justify-center p-3 rounded-lg bg-[#146976] text-white font-bold text-sm gap-1 hover:bg-[#146976]/90 transition-colors"
          >
            <ArrowBack className="text-sm " />
            <span>Go Back Home</span>
          </Link>
        </div>

        {/* Profile Card */}
        <div className="bg-[#161d2b] rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl overflow-hidden group relative z-10 border border-white/10">
          <div className="md:flex gap-6 md:gap-8 items-center">
            <div className="relative flex justify-center md:block">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl
               h-24 w-24 sm:h-28 sm:w-28
               ring-1 ring-white/10 shadow-2xl"
                style={{
                  backgroundImage: `url("${user?.image || defaultImg}")`,
                }}
              ></div>
              <div
                className="absolute -bottom-2 right-20 md:-bottom-2 md:-right-2
                  bg-[#146875] text-white p-2 rounded-xl border border-white/10 cursor-pointer shadow-lg hover:scale-110 transition-transform"
              >
                <PhotoCamera />
              </div>
            </div>

            <div className="flex flex-col justify-center mt-4 md:mt-0 text-center md:text-left">
              <p className="text-soft-cream text-2xl sm:text-3xl font-black leading-tight tracking-tight">
                {user?.name}
              </p>

              <div className="flex flex-col gap-x-5 gap-y-2 mt-2">
                <p className="text-soft-cream/40 text-xs sm:text-sm flex items-center gap-2 justify-center md:justify-start">
                  <TodayOutlined />
                  Member since{" "}
                  {user?.createdAt &&
                    new Date(user.createdAt).toLocaleDateString()}
                </p>

                <p className="text-[#EBBA92] text-xs sm:text-sm font-bold flex items-center gap-2 justify-center md:justify-start">
                  {user?.emailVerified ? (
                    <>
                      {" "}
                      <Verified />
                      Verified Customer
                    </>
                  ) : (
                    ""
                  )}
                </p>
              </div>

              <div className="md:flex gap-3 items-center pt-3 space-y-3 md:space-y-0">
                <button
                  onClick={() => setEditMode(!editMode)}
                  className="flex w-full md:w-auto min-w-[140px] cursor-pointer items-center justify-center rounded-xl h-10 bg-[#146875] text-white text-xs font-bold tracking-wide hover:brightness-110 transition-all shadow-lg shadow-primary/30"
                >
                  {editMode ? "Cancel Edit" : "Edit Profile"}
                </button>
                <button className="flex w-full md:w-auto min-w-[140px] cursor-pointer items-center justify-center rounded-xl h-10 bg-[#146875] text-white text-xs font-bold tracking-wide hover:brightness-110 transition-all shadow-lg shadow-primary/30">
                  Edit Password
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Info & Health Info */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex md:flex-row flex-col gap-5"
        >
          <div className="space-y-8 flex-1 lg:flex-2 md:flex-4">
            <div className="overflow-hidden bg-[rgba(30,41,59,0.5)] rounded-2xl shadow-xl border border-[#EBBA92]/20">
              <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#F5F1E9] flex items-center gap-3">
                  <EditNote />
                  Personal Information
                </h3>
                <span className="text-[10px] text-[#EBBA92]/50 uppercase tracking-widest font-bold">
                  General
                </span>
              </div>

              <div className="p-8 space-y-8">
                {editMode && (
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-[#F5F1E9]/40 uppercase tracking-widest ml-1">
                      Profile Image URL
                    </label>
                    <input
                      {...register("image")}
                      type="text"
                      placeholder="https://example.com/your-image.jpg"
                      className="w-full bg-white/5 border-white/10 rounded-xl px-4 py-3 text-[#F5F1E9] focus:ring-[#146875] focus:border-[#146875] transition-all"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-[#F5F1E9]/40 uppercase tracking-widest ml-1">
                      Full Name
                    </label>
                    <input
                      {...register("name")}
                      disabled={!editMode}
                      className="w-full bg-white/5 border-white/10 rounded-xl px-4 py-3 text-[#F5F1E9] focus:ring-[#146875] focus:border-[#146875] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-[#F5F1E9]/40 uppercase tracking-widest ml-1">
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      disabled={!editMode}
                      className="w-full bg-white/5 border-white/10 rounded-xl px-4 py-3 text-[#F5F1E9] focus:ring-[#146875] focus:border-[#146875] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-[#F5F1E9]/40 uppercase tracking-widest ml-1">
                      Phone Number
                    </label>
                    <input
                      {...register("phone_number")}
                      disabled={!editMode}
                      className="w-full bg-white/5 border-white/10 rounded-xl px-4 py-3 text-[#F5F1E9] focus:ring-[#146875] focus:border-[#146875] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-[#F5F1E9]/40 uppercase tracking-widest ml-1">
                      Date of Birth
                    </label>
                    <input
                      {...register("date_of_birth")}
                      disabled={!editMode}
                      type="date"
                      className="w-full bg-white/5 border-white/10 rounded-xl px-4 py-3 text-[#F5F1E9] focus:ring-[#146875] focus:border-[#146875] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-[#F5F1E9]/40 uppercase tracking-widest ml-1">
                    Default Shipping Address
                  </label>
                  <textarea
                    {...register("default_shipping_address")}
                    disabled={!editMode}
                    className="w-full bg-white/5 border-white/10 rounded-xl px-4 py-3 text-[#F5F1E9] focus:ring-[#146875] focus:border-[#146875] transition-all"
                    rows={3}
                  />
                </div>

                <div className="flex justify-end gap-4 pt-4">
                  {editMode && (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          reset();
                          setEditMode(false);
                        }}
                        className="px-8 py-3 rounded-xl text-sm font-bold text-[#F5F1E9]/60 hover:text-[#F5F1E9] hover:bg-white/5 transition-all"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-8 py-3 rounded-xl text-sm font-bold bg-[#146875] text-white hover:brightness-110 transition-all shadow-xl shadow-[#146875]/20"
                      >
                        Save Changes
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Personal Health Info */}
            <div className="bg-[rgba(30,41,59,0.5)] rounded-2xl shadow-xl border border-[#EBBA92]/20 overflow-hidden">
              <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between bg-black/10">
                <h3 className="text-lg font-bold text-[#F5F1E9] flex items-center gap-3">
                  <Assignment />
                  Personal Health Information
                </h3>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-[#D1D5DB] uppercase tracking-widest ml-1 opacity-60">
                    Emergency Contact
                  </label>
                  <input
                    {...register("phone_number")}
                    disabled={!editMode}
                    className="w-full bg-black/20 border-white/10 rounded-xl px-4 py-3 text-[#F5F1E9] focus:ring-[#146875] focus:border-[#EBBA92] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-[#D1D5DB] uppercase tracking-widest ml-1 opacity-60">
                    Blood Type
                  </label>
                  <input
                    {...register("blood_type")}
                    disabled={!editMode}
                    className="w-full bg-black/20 border-white/10 rounded-xl px-4 py-3 text-[#F5F1E9] focus:ring-[#146875] focus:border-[#EBBA92] transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}

          {/* Right Side Cards */}
          <div className="space-y-8 flex-1">
            {/* Rewards Card */}
            <div className="bg-[rgba(30,41,59,0.5)] rounded-2xl shadow-xl p-8 border border-[#EBBA92]/20 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EBBA92]/5 rounded-full -mr-16 -mt-16 blur-xl"></div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#EBBA92]/15 rounded-xl text-[#EBBA92] border border-[#EBBA92]/20">
                    <Stars />
                  </div>

                  <div className="flex flex-col">
                    <span className="font-bold text-[#F5F1E9] text-lg leading-none">
                      Pharmacy Rewards
                    </span>
                    <span className="text-[10px] text-[#EBBA92] font-bold uppercase tracking-widest mt-1">
                      Gold Tier Member
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-[#D1D5DB] uppercase font-bold tracking-widest mb-1 opacity-60">
                      Loyalty Points
                    </p>
                    <p className="text-4xl font-black text-[#F5F1E9]">2,450</p>
                  </div>

                  <p className="text-xs font-bold text-[#EBBA92] bg-[#EBBA92]/10 px-2 py-1 rounded">
                    75% Complete
                  </p>
                </div>

                <div className="relative w-full h-3 bg-[rgba(0,0,0,0.3)] rounded-full overflow-hidden border border-white/5">
                  <div
                    className="absolute top-0 left-0 h-full bg-[#EBBA92] rounded-full shadow-[0_0_12px_rgba(235,186,146,0.5)] transition-all duration-1000"
                    style={{ width: "75%" }}
                  ></div>
                </div>

                <div className="flex justify-between text-[10px] font-bold text-[#D1D5DB] uppercase tracking-tight opacity-60">
                  <span>2,000 pts reached</span>
                  <span className="text-[#EBBA92] opacity-100 font-black">
                    $10 Discount (3,000 pts)
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
                <button className="w-full py-4 bg-[#146875] text-white rounded-xl text-xs font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 border border-white/10 shadow-lg">
                  <Redeem />
                  Redeem Points
                </button>
              </div>
            </div>

            {/* Daily Tips Card */}
            <div className="bg-[rgba(30,41,59,0.5)] rounded-2xl shadow-xl p-8 border border-white/5">
              <h4 className="text-sm font-bold text-[#F5F1E9] flex items-center gap-3 mb-6">
                <Insights />
                Daily Health Tips
              </h4>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-[rgba(0,0,0,0.2)] rounded-xl border border-white/5">
                  <Lightbulb className="text-[#EBBA92] text-xl flex-shrink-0" />
                  <p className="text-sm text-[#D1D5DB] font-medium leading-relaxed">
                    Stay hydrated: Aim for 8 glasses of water today.
                  </p>
                </div>

                <div className="flex gap-4 p-4 bg-[rgba(0,0,0,0.2)] rounded-xl border border-white/5">
                  <EventRepeat className="text-[#EBBA92] text-xl flex-shrink-0" />
                  <p className="text-sm text-[#D1D5DB] font-medium leading-relaxed">
                    Consistency is key: Take your supplements at the same time
                    daily.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/5">
                <div className="flex items-start gap-2">
                  <InfoRounded className="text-[#EBBA92] text-sm mt-0.5" />
                  <p className="text-[10px] text-[#D1D5DB] leading-relaxed font-bold uppercase tracking-wider opacity-60">
                    98% medication adherence this week
                  </p>
                </div>
              </div>
            </div>

            {/* Encrypted Data Card */}
            <div className="p-6 rounded-2xl border border-white/5 bg-[rgba(0,0,0,0.2)] text-[#D1D5DB]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="text-sm" />
                  <span className="text-xs font-bold opacity-70">
                    Encrypted Data
                  </span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#EBBA92] hover:text-[#F5F1E9] transition-colors">
                  safe & secure
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <footer className="mt-auto py-8 text-center border-t border-white/5 bg-black/20">
        <p className="text-[10px] text-[#F5F1E9]/20 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} MediStore Premium Healthcare • Your
          Trust, Our Privacy
        </p>
      </footer>
    </div>
  );
}
