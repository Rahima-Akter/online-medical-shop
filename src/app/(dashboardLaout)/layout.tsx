"use client";
import React, { useEffect, useState } from "react";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Cancel as CancelIcon,
  MenuOpen as MenuOpenIcon,
} from "@mui/icons-material";
import RoutesNavigation from "@/routes/routes";
import {
  loggedInUserAction,
  logOutAction,
  UserAction,
} from "@/components/actions/userAction";
import { UserRole, UserRoles } from "@/roles/roles";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { User } from "@/types/userTypes";

export default function DashboardRootLayout({
  admin,
  customer,
  seller,
}: {
  admin: React.ReactNode;
  customer: React.ReactNode;
  seller: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [role, setRole] = useState<UserRole | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchRole() {
      const result = (await UserAction()) as UserRole;
      setRole(result);
    }

    const fetchUser = async () => {
      const user = await loggedInUserAction();
      setUser(user || null);
    };

    fetchUser();
    fetchRole();
  }, []);

  const handleLogOut = async () => {
    try {
      await logOutAction();
      toast.success("Logout Successfull");
      router.push("/");
    } catch (err) {
      console.log(err);
      toast.error("Someting Went Wrong!");
    }
  };

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
                {user?.role} Portal
              </p>
            </div>
          </div>
        </div>

        {role && (
          <nav className="flex-1 space-y-1 mt-4">
            <RoutesNavigation role={role} />
          </nav>
        )}

        <div className="p-4 border-t border-[#146976]/20 w-full">
          <button
            onClick={() => handleLogOut()}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-red-500/10 hover:text-red-400 cursor-pointer transition-colors w-full"
          >
            <ExitToAppIcon />
            <span className="font-medium">Logout</span>
          </button>
        </div>
        {/* user logo and name */}
        <div className="flex items-center gap-3 px-8 py-2">
          <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center overflow-hidden border border-white/20">
            <img
              alt="Profile Avatar"
              className="w-full h-full object-cover"
              data-alt="user profile"
              src={user?.image ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eN9ltaN4YL-7g4jrTdTXHsBUf_bWxQ_cSg&s"}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-white font-medium truncate">
              {user?.name}
            </p>
            <p className="text-[10px] text-white/40 truncate">{user?.role}</p>
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
        {role === UserRoles.CUSTOMER && customer}
        {role === UserRoles.SELLER && seller}
        {role === UserRoles.ADMIN && admin}
      </div>

      {/* Sidebar Toggle Button */}
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
