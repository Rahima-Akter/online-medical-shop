import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { UserRoles, UserRole } from "@/roles/roles";
import { usePathname } from "next/navigation";

export default function RoutesNavigation({ role }: { role: UserRole }) {
  const pathname = usePathname()
  const adminRoutes = (
    <>
      <Link
        href="/admin-dashboard"
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/admin-dashboard" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <DashboardIcon />
        <span>Dashboard</span>
      </Link>

            <Link
        href="/orders"
       className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/orders" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <ShoppingCartIcon />
        <span>Orders</span>
      </Link>

      <Link
        href="/inventory"
       className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/inventory" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <Inventory2Icon />
        <span>Medicine Inventory</span>
      </Link>


      <Link
        href="/manage-users"
       className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/manage-users" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <BarChartIcon />
        <span>User Management</span>
      </Link>

      <Link
        href="/category"
       className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/category" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <SettingsIcon />
        <span>Category Mangement</span>
      </Link>
    </>
  );

  const customerRoutes = (
    <>
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
        <ShoppingCartIcon />
        <span>Orders</span>
      </Link>
    </>
  );

  const sellerRoutes = (
    <>
      <Link
        href="#"
        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#146976] text-white font-medium"
      >
        <DashboardIcon />
        <span>Home</span>
      </Link>
    </>
  );

  // Determine which routes to show based on userRole
  let routesToRender;

  if (role === UserRoles.ADMIN) {
    routesToRender = adminRoutes;
  } else if (role === UserRoles.CUSTOMER) {
    routesToRender = customerRoutes;
  } else {
    routesToRender = sellerRoutes;
  }

  return <nav className="flex-1 px-4 space-y-1 mt-4">{routesToRender}</nav>;
}
