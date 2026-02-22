"use client";
import { allUserAction } from "@/components/actions/userAction";
import { Spinner } from "@/components/ui/spinner";
import { UserRoles } from "@/roles/roles";
import { User } from "@/types/userTypes";
import {
  AppRegistration,
  CheckCircle,
  ChevronRight,
  DeleteForever,
  EditSquare,
  ExpandMore,
  FilterList,
  Group,
  MoreHoriz,
  Search,
  Storefront,
  TrendingUp,
  Visibility,
} from "@mui/icons-material";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function UserManagement() {
  const [userData, setUserData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  const roles = ["ALL", "ADMIN", "SELLER", "CUSTOMER"];
  const statuses = ["ALL", "ACTIVE", "BANNED"];

  const activeSellers = userData.filter(
    (active) =>
      active.status === "ACTIVE" &&
      active.role?.toUpperCase() === UserRoles.SELLER,
  ).length;

  const today = new Date();
  const selectedMonth = today.getMonth();
  const selectedYear = today.getFullYear();
  const newRegister = userData.filter((user) => {
    if (!user.createdAt) return false;
    const regDate = new Date(user.createdAt);
    return (
      regDate.getMonth() === selectedMonth &&
      regDate.getFullYear() === selectedYear
    );
  }).length;

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        setLoading(true);
        const response = await allUserAction(currentPage, limit);

        if (response) {
          setUserData(response.user);
          setFilteredUsers(response.user);
          setCurrentPage(response.currentPage || 1);
          setTotalPages(response.totalPages || 1);
          setTotal(response.total);
          setLimit(response.limit || 10);
        }
      } catch (err) {
        console.log(err);
        toast.error("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    getAllUsers();
  }, [currentPage, limit]);

  const applyFilters = () => {
    const filtered = userData.filter((user) => {
      const matchesSearch =
        search.trim() === "" ||
        user.name?.toLowerCase().includes(search.toLowerCase()) ||
        user.email?.toLowerCase().includes(search.toLowerCase()) ||
        user.id?.toLowerCase().includes(search.toLowerCase());

      const matchesRole = role === "ALL" || user.role === role;
      const matchesStatus = status === "ALL" || user.status === status;

      return matchesSearch && matchesRole && matchesStatus;
    });

    setFilteredUsers(filtered);
  };

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
              Monitor and manage access for {total} registered platform members.
            </p>
          </div>
        </div>
      </header>

      {/* Stats Overview */}
      <section className="px-8 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1E3F45] border border-[#146976]/20 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#FCFBFA]/60 text-sm font-medium">Total Users</p>
            <Group className="text-[#559aa5]" />
          </div>
          <p className="text-3xl font-black text-[#FCFBFA]">{total}</p>
        </div>

        <div className="bg-[#1E3F45] border border-[#146976]/20 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#FCFBFA]/60 text-sm font-medium">
              Active Sellers
            </p>
            <Storefront className="text-[#62a4ae]" />
          </div>
          <p className="text-3xl font-black text-[#FCFBFA]">{activeSellers}</p>
        </div>

        <div className="bg-[#1E3F45] border border-[#146976]/20 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#FCFBFA]/60 text-sm font-medium">
              New Registrations
            </p>
            <AppRegistration className="text-[#68b0bb]" />
          </div>
          <p className="text-3xl font-black text-[#FCFBFA]">{newRegister}</p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="px-8 mt-8">
        <div className="bg-[#1E3F45]/50 p-4 rounded-xl border border-[#146976]/10 flex flex-wrap items-center gap-4">
          <div className="flex md:flex-row flex-wrap md:justify-center items-center space-x-3 space-y-3 w-full">
            <div className="relative group lg:w-4/9">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FCFBFA]/40" />
              <input
                className="w-full bg-[#121e20]/50 border-[#146976]/20 rounded-lg pl-10 pr-4 py-2.5 text-[#FCFBFA] text-sm"
                placeholder="Search by name, email, or user ID..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Role & Status Filter Buttons */}
            <div className="flex items-center gap-3 md:flex-row flex-wrap">
              {/* Role Dropdown */}
              <div className="relative flex items-center gap-2 bg-[#121e20]/50 border border-[#146976]/20 px-4 py-2 rounded-lg text-[#FCFBFA] text-sm font-medium cursor-pointer">
                <FilterList />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="bg-transparent text-[#FCFBFA] text-sm font-medium pr-6 focus:outline-none cursor-pointer appearance-none"
                >
                  {roles.map((r) => (
                    <option key={r} value={r} className="text-black">
                      {r}
                    </option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ExpandMore className="text-[#FCFBFA]/60" />
                </span>
              </div>

              {/* Status Dropdown */}
              <div className="relative flex items-center gap-2 bg-[#121e20]/50 border border-[#146976]/20 px-4 py-2 rounded-lg text-[#FCFBFA] text-sm font-medium cursor-pointer">
                <CheckCircle />
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="bg-transparent text-[#FCFBFA] text-sm font-medium pr-6 focus:outline-none cursor-pointer appearance-none"
                >
                  {statuses.map((s) => (
                    <option key={s} value={s} className="text-black px-32">
                      {s}
                    </option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ExpandMore className="text-[#FCFBFA]/60" />
                </span>
              </div>

              {/* Apply Filters Button */}
              <button
                onClick={applyFilters}
                className="flex items-center gap-2 bg-[#146976]/20 border border-[#146976]/30 px-4 py-2 rounded-lg text-[#FCFBFA] text-sm font-bold"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* User Table */}
      <section className="px-8 py-6 flex-1">
        <div className="bg-[#1E3F45] border border-[#146976]/20 rounded-xl overflow-x-auto shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#121e20]/40 border-b border-[#146976]/20">
                <th className="px-6 py-4 text-xs font-black uppercase text-[#FCFBFA]/50">
                  User Details
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase text-[#FCFBFA]/50">
                  Role
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase text-[#FCFBFA]/50">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase text-[#FCFBFA]/50">
                  Joined
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase text-[#FCFBFA]/50 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#146976]/10">
              {filteredUsers.map((user) => {
                const roleStyle =
                  user.role === UserRoles.SELLER
                    ? "border border-[#FCFBFA]/40 text-[#FCFBFA] bg-[#FCFBFA]/5"
                    : user.role === UserRoles.ADMIN
                      ? "border border-purple-500/70 text-purple-400 bg-purple-500/10"
                      : "border border-[#146976]/70 text-[#5aaeba] bg-[#146976]/10";

                const statusColor =
                  user.status === "ACTIVE"
                    ? "bg-emerald-400"
                    : user.status === "BANNED"
                      ? "bg-red-500"
                      : "bg-yellow-400";

                return (
                  <tr
                    key={user.id}
                    className="hover:bg-[#146976]/20 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#146976]/20 border border-[#146976]/30 overflow-hidden">
                          <img
                            alt="User Avatar"
                            className="w-full h-full object-cover"
                            src={user.image || "/avatar.png"}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#FCFBFA]">
                            {user.name}
                          </p>
                          <p className="text-xs text-[#FCFBFA]/40">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded text-[10px] font-black uppercase ${roleStyle}`}
                      >
                        {user.role}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${statusColor}`}
                        ></span>
                        <span className="text-xs font-medium text-[#FCFBFA]/80">
                          {user.status}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-xs text-[#FCFBFA]/60 font-medium">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-4 flex justify-center items-center gap-3">
                      <Link href={`/manage-users/${user.id}`}>
                        <button className="text-[#FCFBFA]/40 hover:text-[#FCFBFA] transition-colors cursor-pointer">
                          <Visibility />
                        </button>
                      </Link>
                      <button className="text-[#FCFBFA]/40 hover:text-[#FCFBFA] transition-colors cursor-pointer">
                        <DeleteForever />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="bg-[#121e20]/40 px-6 py-4 border-t border-[#146976]/20 flex md:flex-row flex-col items-center justify-between">
            <p className="text-xs text-[#FCFBFA]/40 font-medium">
              Showing {(currentPage - 1) * limit + 1} to{" "}
              {Math.min(currentPage * limit, total)} of {total} entries
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1 || loading}
                className="p-1.5 rounded-lg bg-[#121e20]/50 border border-[#146976]/10 text-[#FCFBFA]/40 hover:text-[#FCFBFA] disabled:opacity-30 cursor-pointer"
              >
                {loading ? <Spinner /> : <ChevronLeft />}
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-1 rounded text-xs font-bold cursor-pointer ${
                      currentPage === pageNum
                        ? "bg-[#146976] text-white"
                        : "hover:bg-[#146976]/10 text-[#FCFBFA]/60"
                    }`}
                  >
                    {pageNum}
                  </button>
                ),
              )}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages || loading}
                className="p-1.5 rounded-lg bg-[#121e20]/50 border border-[#146976]/10 text-[#FCFBFA]/40 hover:text-[#FCFBFA] disabled:opacity-30 cursor-pointer"
              >
                {loading ? <Spinner /> : <ChevronRight />}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}