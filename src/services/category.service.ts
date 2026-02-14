import { env } from "@/env";

export const getAllCategory = async () => {
  const res = await fetch(`${env.BACKEND_URL}/api/category`, {
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  const category = await res.json();

  return category.data.Data;
};

