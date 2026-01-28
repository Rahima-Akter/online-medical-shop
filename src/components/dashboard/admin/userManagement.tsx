import {
  AppRegistration,
  CheckCircle,
  ChevronRight,
  ExpandMore,
  FilterList,
  Group,
  MoreHoriz,
  Search,
  Storefront,
  TrendingUp,
} from "@mui/icons-material";
import { ChevronLeft } from "lucide-react";
import React from "react";

const UserManagement = () => {
  return (
    <main className="flex-1 flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="p-8 pb-0">
        <div className="flex flex-wrap justify-between items-end gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-black text-white tracking-tighter">
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
            <span className="material-symbols-outlined text-[#559aa5]">
              <Group />
            </span>
          </div>
          <p className="text-3xl font-black text-[#FCFBFA]">2,481</p>
          <p className="text-emerald-400 text-xs mt-2 flex items-center gap-1 font-bold">
            <span className="material-symbols-outlined text-xs">
              <TrendingUp/>
            </span>{" "}
            +12% this month
          </p>
        </div>

        <div className="bg-[#1E3F45] dark:bg-[#1E3F45] border border-[#146976]/20 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#FCFBFA]/60 text-sm font-medium">
              Active Sellers
            </p>
            <span className="material-symbols-outlined text-[#62a4ae]">
              <Storefront/>
            </span>
          </div>
          <p className="text-3xl font-black text-[#FCFBFA]">142</p>
          <p className="text-emerald-400 text-xs mt-2 flex items-center gap-1 font-bold">
            <span className="material-symbols-outlined text-xs">
              <TrendingUp/>
            </span>{" "}
            +4% from last week
          </p>
        </div>

        <div className="bg-[#1E3F45] dark:bg-[#1E3F45] border border-[#146976]/20 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#FCFBFA]/60 text-sm font-medium">
              New Registrations
            </p>
            <span className="material-symbols-outlined text-[#68b0bb]">
              <AppRegistration />
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

      {/* usder table */}
      {/* <!-- Data Table --> */}
      <section className="px-8 py-6 flex-1">
        <div className="bg-[#1E3F45] border border-[#146976]/20 rounded-xl overflow-x-auto shadow-2xl">
          <table className="w-full text-left border-collapse ">
            <thead>
              <tr className="bg-[#121e20]/40 border-b border-[#146976]/20">
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-[#FCFBFA]/50">
                  User Details
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-[#FCFBFA]/50">
                  Role
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-[#FCFBFA]/50">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-[#FCFBFA]/50">
                  Joined
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-[#FCFBFA]/50 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#146976]/10">
              {/* <!-- Table Row 1 --> */}
              <tr className="hover:bg-[#146976]/20 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#146976]/20 border border-[#146976]/30 overflow-hidden">
                      <img
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7bB7Bn2nSNFhvterh8dmyNRNNu4aFjvRhGMRkQVWUZZYI-r60j7iWIo7LOGl1vApV2LoZUTzjwrD60MdgIPNJNB2HPs0wJpkAvJnTREPvGbVkstYnNEJe4oJIAMoypyljTU2dvOvDIkmd_csgGDcJsJR7MJFnNStKFIVUv-Z--zlym5_rOQonCwsOYKsnzNiqiNTdJ70qPm3sf9QK7A_9W8zigyIWu-44BLVxGpruNBY_ceQ4J11kX2o6yvUMULmXZJL95xrQVg"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#FCFBFA]">
                        Alexander Wright
                      </p>
                      <p className="text-xs text-[#FCFBFA]/40">
                        alex.wright@email.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded text-[10px] font-black uppercase border border-[#146976]/70 text-[#5aaeba]  bg-[#146976]/10">
                    Customer
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-xs font-medium text-[#FCFBFA]/80">
                      Active
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs text-[#FCFBFA]/60 font-medium">
                  Oct 12, 2023
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[#FCFBFA]/40 hover:text-[#FCFBFA] transition-colors">
                    <span className="material-symbols-outlined">
                      <MoreHoriz />
                    </span>
                  </button>
                </td>
              </tr>
              {/* <!-- Table Row 2 --> */}
              <tr className="hover:bg-[#146976]/20 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#146976]/20 border border-[#146976]/30 overflow-hidden">
                      <img
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNuvEeHOORrBrdByAdB1e2JE7OkmaSPeg2r1nW9VCz2d7hPswS18cnEuEqaxoTfVFDVR6pQPp5A_-TwJyQHtWl5Ck-F6-XBCGoQlcNr_JwApE9SyziKh0CESMpJ7fQJ3RGJ0FDWSN4sf2nhoMc6GthHf59KNsit2kQnaDXMVUe34kQSiXjovarI6MZzUP1p9w0hfG_detShRvXO63OCVEnE-v1q91slZcM6lF5bjgqIGr-RSxQmIY57Thr5nM2Al6Lw3WFMTVgGQ"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#FCFBFA]">
                        MediCare Pharma
                      </p>
                      <p className="text-xs text-[#FCFBFA]/40">
                        billing@medicare.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded text-[10px] font-black uppercase border border-[#FCFBFA]/40 text-[#FCFBFA] bg-[#FCFBFA]/5">
                    Seller
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-xs font-medium text-[#FCFBFA]/80">
                      Active
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs text-[#FCFBFA]/60 font-medium">
                  Aug 05, 2023
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[#FCFBFA]/40 hover:text-[#FCFBFA] transition-colors">
                    <span className="material-symbols-outlined">
                      <MoreHoriz />
                    </span>
                  </button>
                </td>
              </tr>
              {/* <!-- Table Row 3 --> */}
              <tr className="hover:bg-[#146976]/20 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#146976]/20 border border-[#146976]/30 overflow-hidden">
                      <img
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeGZpKvRiTJ3Ps1mbl9P2TI9YjgOJghHT_pke9WJfH9KFLI7Ysvy6TDP_3i9KNkY48z3DnuOQW_DK0ZPD1gLvqvrFOeh49tN6VQNxf5N6NGYP6n1IE9vOkzQbwWU38oDfnppBxwX6Tk7edU9S1NOlpVwuNXMM3-Cvppsx_VBJvHh6ouO2f8WWEiiaSzfkQPoMNY5BYwwSsSx5rpdQJI3IwFPkbQ6yCLxntqP53hyWe6hHHreKyD6OyxdwwRqp0UTTJbhPxpRXCaA"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#FCFBFA]">
                        Marcus Chen
                      </p>
                      <p className="text-xs text-[#FCFBFA]/40">
                        marcus_c@gmail.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded text-[10px] font-black uppercase border border-[#146976]/70 text-[#5aaeba]  bg-[#146976]/10">
                    Customer
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    <span className="text-xs font-medium text-[#FCFBFA]/80">
                      Pending
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs text-[#FCFBFA]/60 font-medium">
                  Jan 20, 2024
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[#FCFBFA]/40 hover:text-[#FCFBFA] transition-colors">
                    <span className="material-symbols-outlined">
                      <MoreHoriz />
                    </span>
                  </button>
                </td>
              </tr>
              {/* <!-- Table Row 4 --> */}
              <tr className="hover:bg-[#146976]/20 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#146976]/20 border border-[#146976]/30 overflow-hidden">
                      <img
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4lHirtnMdkF_9N6MA4CLYZ-akj5klbWDvx_XkJJKjReN1JTBASFqOvYbkOXUM_AyuW5bNC08cihlapDc5c7I30Fa1GXoTwwf8G3oeVYywY5ZhVb1c4CymZq_LGsSppN1buAqBTqneVFLrrdvypawfHXkMcArAgUmsMwrwojNA4d4oabU8WGJwyh1aq6XobG6JX90hhHby_3nVHXX3EGZKHe0_pQRKF2x96cQ3aVa2uwbewpvlnVuVGZnHzF9X2vwlYi0NxSaYOQ"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#FCFBFA]">
                        Elena Rodriguez
                      </p>
                      <p className="text-xs text-[#FCFBFA]/40">
                        elena.r@outlook.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded text-[10px] font-black uppercase border border-[#146976]/70 text-[#5aaeba] bg-[#146976]/10">
                    Customer
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="text-xs font-medium text-[#FCFBFA]/80">
                      Suspended
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs text-[#FCFBFA]/60 font-medium">
                  Nov 28, 2023
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[#FCFBFA]/40 hover:text-[#FCFBFA] transition-colors">
                    <span className="material-symbols-outlined">
                      <MoreHoriz />
                    </span>
                  </button>
                </td>
              </tr>
              {/* <!-- Table Row 5 --> */}
              <tr className="hover:bg-[#146976]/20 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#146976]/20 border border-[#146976]/30 overflow-hidden">
                      <img
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI5g6myesk1yiiTz4bd4ad57JWSRPzeCSBCzDVrLNtZKw7KqALeuHDntSjhOwzRCdgMwIwTPklhNzyydUIpxoGeqJUrrZe_CwM7gZN_ZvcatgMrHlYknBcHpaN8hohgyn_vDHWJZP-gI81PRley09F5CECmzqdjwNUq8bhWTonEHKlOcOhdZhWkcFT1YxPerCrrSWzEsrP84rhS5ICHgXOPR4ZEY5CzV4TcU2JJH1vFUIU3K3vg_aiwrnNKF9lIHNQq1_48jWWLw"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#FCFBFA]">
                        Vitality Meds Ltd
                      </p>
                      <p className="text-xs text-[#FCFBFA]/40">
                        contact@vitalitymeds.co
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded text-[10px] font-black uppercase border border-[#FCFBFA]/40 text-[#FCFBFA] bg-[#FCFBFA]/5">
                    Seller
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-xs font-medium text-[#FCFBFA]/80">
                      Active
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs text-[#FCFBFA]/60 font-medium">
                  Feb 01, 2024
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[#FCFBFA]/40 hover:text-[#FCFBFA] transition-colors">
                    <span className="material-symbols-outlined">
                      <MoreHoriz />
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Pagination --> */}
          <div className="bg-[#121e20]/40 px-6 py-4 border-t border-[#146976]/20 flex md:flex-row flex-col items-center justify-between">
            <p className="text-xs text-[#FCFBFA]/40 font-medium">
              Showing 1 to 5 of 2,481 entries
            </p>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-lg bg-[#121e20]/50 border border-[#146976]/10 text-[#FCFBFA]/40 hover:text-[#FCFBFA] disabled:opacity-30">
                <span className="material-symbols-outlined text-sm">
                  <ChevronLeft/>
                </span>
              </button>
              <button className="px-3 py-1 rounded bg-[#146976] text-white text-xs font-bold">
                1
              </button>
              <button className="px-3 py-1 rounded hover:bg-[#146976]/10 text-[#FCFBFA]/60 text-xs font-bold">
                2
              </button>
              <button className="px-3 py-1 rounded hover:bg-[#146976]/10 text-[#FCFBFA]/60 text-xs font-bold">
                3
              </button>
              <span className="text-[#FCFBFA]/20">...</span>
              <button className="px-3 py-1 rounded hover:bg-[#146976]/10 text-[#FCFBFA]/60 text-xs font-bold">
                496
              </button>
              <button className="p-1.5 rounded-lg bg-[#121e20]/50 border border-[#146976]/10 text-[#FCFBFA]/40 hover:text-[#FCFBFA]">
                <span className="material-symbols-outlined text-sm">
                  <ChevronRight/>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserManagement;
