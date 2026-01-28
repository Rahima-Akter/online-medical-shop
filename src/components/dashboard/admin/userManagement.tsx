import {
  CheckCircle,
  ExpandMore,
  FilterList,
  Group,
  Search,
} from "@mui/icons-material";
import React from "react";

const UserManagement = () => {
  return (
    <main className="flex-1 flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="p-8 pb-0">
        <div className="flex flex-wrap justify-between items-end gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-black text-slate-200 dark:text-[#FCFBFA] tracking-tighter">
              User Management
            </h2>
            <p className="text-slate-400 text-sm">
              Monitor and manage access for 2,481 registered platform members.
            </p>
          </div>
          {/* <button className="bg-[#146976] hover:bg-[#146976]/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-[#146976]/20">
            <span className="material-symbols-outlined text-sm">
              person_add
            </span>
            Add New User
          </button> */}
        </div>
      </header>

      {/* Stats Overview */}
      <section className="px-8 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1E3F45] dark:bg-[#1E3F45] border border-[#146976]/20 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#FCFBFA]/60 text-sm font-medium">Total Users</p>
            <span className="material-symbols-outlined text-[#146976]">
              <Group/>
            </span>
          </div>
          <p className="text-3xl font-black text-[#FCFBFA]">2,481</p>
          <p className="text-emerald-400 text-xs mt-2 flex items-center gap-1 font-bold">
            <span className="material-symbols-outlined text-xs">
              trending_up
            </span>{" "}
            +12% this month
          </p>
        </div>

        <div className="bg-[#1E3F45] dark:bg-[#1E3F45] border border-[#146976]/20 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#FCFBFA]/60 text-sm font-medium">
              Active Sellers
            </p>
            <span className="material-symbols-outlined text-[#146976]">
              storefront
            </span>
          </div>
          <p className="text-3xl font-black text-[#FCFBFA]">142</p>
          <p className="text-emerald-400 text-xs mt-2 flex items-center gap-1 font-bold">
            <span className="material-symbols-outlined text-xs">
              trending_up
            </span>{" "}
            +4% from last week
          </p>
        </div>

        <div className="bg-[#1E3F45] dark:bg-[#1E3F45] border border-[#146976]/20 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#FCFBFA]/60 text-sm font-medium">
              New Registrations
            </p>
            <span className="material-symbols-outlined text-[#146976]">
              app_registration
            </span>
          </div>
          <p className="text-3xl font-black text-[#FCFBFA]">18</p>
          <p className="text-[#FCFBFA]/40 text-xs mt-2 font-medium">
            Last 24 hours
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="px-8 mt-8">
        <div className="bg-[#1E3F45]/50 dark:bg-[#1E3F45]/40 p-4 rounded-xl border border-[#146976]/10 flex flex-wrap items-center gap-4">
          <div className="flex md:flex-row flex-wrap md:justify-center items-center space-x-3 space-y-3 w-full">
            <div className="relative group lg:w-4/9">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#FCFBFA]/40 group-focus-within:text-[#146976] transition-colors">
                <Search />
              </span>
              <input
                className="w-full bg-[#121e20]/50 border-[#146976]/20 rounded-lg pl-10 pr-4 py-2.5 text-[#FCFBFA] text-sm focus:ring-[#146976] focus:border-[#146976] placeholder:text-[#FCFBFA]/30 transition-all"
                placeholder="Search by name, email, or user ID..."
                type="text"
              />
            </div>

            {/* filter button */}
            <div className="flex items-center gap-3 md:flex-row flex-wrap">
              <button className="flex items-center gap-2 bg-[#121e20]/50 border border-[#146976]/20 px-4 py-2 rounded-lg text-[#FCFBFA] text-sm font-medium hover:border-[#146976] transition-all">
                <span className="material-symbols-outlined text-sm">
                  <FilterList />
                </span>
                Role: All
                <span className="material-symbols-outlined text-sm">
                  <ExpandMore />
                </span>
              </button>
              <button className="flex items-center gap-2 bg-[#121e20]/50 border border-[#146976]/20 px-4 py-2 rounded-lg text-[#FCFBFA] text-sm font-medium hover:border-[#146976] transition-all">
                <span className="material-symbols-outlined text-sm">
                  <CheckCircle />
                </span>
                Status: Active
                <span className="material-symbols-outlined text-sm">
                  <ExpandMore />
                </span>
              </button>
              <button className="flex items-center gap-2 bg-[#146976]/20 border border-[#146976]/30 px-4 py-2 rounded-lg text-[#146976] dark:text-[#FCFBFA] text-sm font-bold hover:bg-[#146976]/30 transition-all">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserManagement;
