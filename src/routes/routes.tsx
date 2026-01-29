import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { UserRoles, UserRole } from "@/roles/roles";
import { usePathname } from "next/navigation";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import { AddCircle, Edit, ShoppingBag } from "@mui/icons-material";

export default function RoutesNavigation({ role }: { role: UserRole }) {
  const pathname = usePathname();

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
      <Link
        href="/profile"
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/profile" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <FolderSharedIcon />
        <span>Profile</span>
      </Link>
    </>
  );

  const customerRoutes = (
    <>
      <Link
        href="/dashboard"
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/dashboard" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <DashboardIcon />
        <span>Dashboard</span>
      </Link>

      <Link
        href="/my-orders"
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/my-orders" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <ShoppingBag />
        <span>My Orders</span>
      </Link>

      <Link
        href="/cart"
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/cart" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <ShoppingCartIcon />
        <span>Cart Items</span>
      </Link>

      <Link
        href="/profile"
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/profile" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <FolderSharedIcon />
        <span>Profile</span>
      </Link>
    </>
  );

  const sellerRoutes = (
    <>
      <Link
        href="/seller-dashboard"
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/seller-dashboard" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <DashboardIcon />
        <span>Dashboard</span>
      </Link>
      <Link
        href="/medicine-management"
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/medicine-management" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <Inventory2Icon />
        <span>Medicine Management</span>
      </Link>
      <Link
        href="/order-management"
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/order-management" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <ShoppingCartIcon />
        <span>Order Management</span>
      </Link>
      <Link
        href="/add-medicine"
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/add-medicine" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <AddCircle />
        <span>Add Medicine</span>
      </Link>
      <Link
        href="/edit-medicine"
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/edit-medicine" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <Edit />
        <span>Edit Medicine</span>
      </Link>
      <Link
        href="/profile"
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          pathname === "/profile" ? "bg-[#146976]" : "text-white/70"
        } hover:bg-[#146976]/20 hover:text-white transition-colors`}
      >
        <FolderSharedIcon />
        <span>Profile</span>
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
