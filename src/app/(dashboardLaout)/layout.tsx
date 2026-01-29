"use client";
import React, { useState } from "react";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Cancel as CancelIcon,
  MenuOpen as MenuOpenIcon,
} from "@mui/icons-material";
import { UserRole, UserRoles } from "@/roles/roles";
import RoutesNavigation from "@/routes/routes";

export default function DashboardRootLayout({
  admin,
  customer,
  seller,
  children,
}: {
  admin: React.ReactNode;
  customer: React.ReactNode;
  seller: React.ReactNode;
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const role: UserRole = UserRoles.CUSTOMER;

  return (
    <div className="h-screen flex overflow-y-auto">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-0 z-20 ${
          role === UserRoles.SELLER
            ? "bg-[#1e4147]"
            : role === UserRoles.ADMIN
              ? "bg-[#121e20]"
              : "bg-[#121e20]"
        }
 text-white flex flex-col border-r border-[#146976]/20 transition-transform lg:relative lg:translate-x-0 lg:w-64 md:w-96 lg:shrink-0`}
      >
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#146976] p-2 rounded-lg flex items-center justify-center">
              <MedicalServicesIcon className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white leading-none">
                MediStore
              </h1>
              <p className="text-xs text-[#146976]/60 font-medium uppercase tracking-widest mt-1">
                Seller Portal
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1 mt-4">
          <RoutesNavigation role={role} />
        </nav>

        <div className="p-4 border-t border-[#146976]/20">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-red-500/10 hover:text-red-400 cursor-pointer transition-colors">
            <ExitToAppIcon />
            <span className="font-medium">Logout</span>
          </div>
        </div>
        {/* user logo and name */}
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center overflow-hidden border border-white/20">
            <img
              alt="Admin Profile Avatar"
              className="w-full h-full object-cover"
              data-alt="Portrait of an administrator user profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKi2lBmNRB282Xvgvm8D7lFLB-5gtRGQCLoMfwlnltjWn0gUXvJjDYTjYm-Jb9fuN6DXJiEX3palhO_YcF6Zr-maIAwj0w4uAolvBd2P6BEY-fRRN0uessGcVSlgeCJsjyrM_fTvknFu89tCf7EH5UKtgYMyhkXMDX5OZeJVgNCZX3MJ35wosTLQSKysGxPQBlek0L5_U9qD3fj6sY0BqS6-gFxZvYUcaGpnTHakv_fwOn5sumMirsKOiO9KvzazCuoqwzv7JM-A"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-white font-medium truncate">
              Dr. Sarah Smith
            </p>
            <p className="text-[10px] text-white/40 truncate">
              Lead Pharmacist
            </p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      {/* <div className="flex-1 bg-[#121e20] overflow-y-auto">
        {role === UserRoles.SELLER
          ? seller
          : role === UserRoles.ADMIN
            ? admin
            : customer}
      </div> */}
      <div className="flex-1 bg-[#121e20] overflow-y-auto">
        {/* Role-specific dashboard content */}
        {role === UserRoles.CUSTOMER && customer}
        {role === UserRoles.SELLER && seller}
        {role === UserRoles.ADMIN && admin}

        {/* Shared routes like /dashboard/profile */}
        {/* {children} */}
      </div>

      {/* Sidebar Toggle Button for Small Screens */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 right-4 lg:hidden p-2 bg-[#146976] rounded-full text-white z-50"
      >
        {sidebarOpen ? (
          <CancelIcon className="text-white" />
        ) : (
          <MenuOpenIcon className="text-white" />
        )}
      </button>
    </div>
  );
}
