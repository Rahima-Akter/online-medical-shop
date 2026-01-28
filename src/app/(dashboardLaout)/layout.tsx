"use client";
import React, { useState } from "react";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "next/link";
import {
  Cancel as CancelIcon,
  MenuOpen as MenuOpenIcon,
} from "@mui/icons-material";

export default function DashboardRootLayout({
  admin,
  customer,
  seller
}: {
  admin: React.ReactNode;
  customer: React.ReactNode;
  seller: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-y-auto">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-0 z-10 bg-[#121e20] text-white flex flex-col border-r border-[#146976]/20 transition-transform lg:relative lg:translate-x-0 lg:w-64 md:w-96 lg:shrink-0`}
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

        <nav className="flex-1 px-4 space-y-1 mt-4">
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#146976] text-white font-medium"
          >
            <DashboardIcon />
            <span>Dashboard</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-[#146976]/20 hover:text-white transition-colors"
          >
            <Inventory2Icon />
            <span>Inventory</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-[#146976]/20 hover:text-white transition-colors"
          >
            <ShoppingCartIcon />
            <span>Orders</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-[#146976]/20 hover:text-white transition-colors"
          >
            <BarChartIcon />
            <span>Reports</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-[#146976]/20 hover:text-white transition-colors"
          >
            <SettingsIcon />
            <span>Settings</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-[#146976]/20">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-red-500/10 hover:text-red-400 cursor-pointer transition-colors">
            <ExitToAppIcon />
            <span className="font-medium">Logout</span>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 bg-[#121e20] overflow-y-auto">{admin}</div>

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
