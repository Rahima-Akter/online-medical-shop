import { redirect } from "next/navigation";

export default function AdminDefault() {
  // redirect("/admin-dashboard");
  return null;
}

// src
//  |_____app
//         |_____(dashboardLayout)
//                      |_______@admin
//                                 |_____admin-Dashboard
//                                       |      |_____page.tsx
//                                       |_____default.tsx
