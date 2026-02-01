"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GridViewIcon from "@mui/icons-material/GridView";
import StarIcon from "@mui/icons-material/Star";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
import Link from "next/link";

export default function AllProducts() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;
  const products = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      description: "30 Tablets • PharmaCorp",
      price: "$12.50",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAy9y70Pf6nHzl65R-ZSyZk-1S_vOgxVKd59M3pp2cXQtq2xna0ltrv066NEV2yBL3kN_al1HKmM7sqJcfQZpFVU3CS5e-G6fp4XKYGzVhKRAv6Cyzs8f-nWENN9JZuwwhTRBFUyoOwVspUrkah5VDH_7E7Qmvvs8_1533SHlxXojcmyxLwQjQWBWHcIxj5mVZDMLv39mlezhCIRxF65va1a8m1f8QYfD92l2RXzf1KPCmb2LUIioqpDvLrhPV_6k-zLeO0mh_9mQ",
      rating: 4.9,
      reviews: 124,
      rxRequired: true,
    },
    {
      id: 2,
      name: "Ibuprofen 200mg",
      description: "20 Tablets • HealthGen",
      price: "$10.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCoZLJzaaH_Seo2GymMwuaKLWWCJnt3RzrXUz25-wQ8-tJZgbD4lmqEqzO3iqV6e7MOMG2ggC1-6KE4IZ5OTk_FuakAQU0X0BLt6vlJYafX4xUj1zkdkpdWgN5l9CTIb3Zko3Wh94usXcdd7F1OnEKDNZxhBlLV82ewUCtz3j6RWSqH3GyOrPOufQUskcYoD25tFiAsmSdbQ4SRzql-oAfq0T78cioH2pCCp-RckTlm5Vb-ORT0RESX7mxq8riq6vQgo_Qq8ZYPhQ",
      rating: 4.5,
      reviews: 98,
      rxRequired: false,
    },
    {
      id: 3,
      name: "Vitamin C 500mg",
      description: "60 Capsules • BioRemedy",
      price: "$18.75",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC0Q4fIgLQiHY9M01xhZnD6ciHbRpZJHGysLYx042YZ3yQJIrIns8_sWh6Mp-lf4Mblbj3iBli67vmYRMI_8oMjA-VaImL23hY1LhqPcCeV3uhcADsf1pbYjgXuNCVtLIVTwLN3X1rXQ-KeFy3gFGPkSDxCeJSri4j13Pv0Qwxg7bFb8rEZV1Z0tvjwTsIKHDZZ1iukaqX59atoB9r-DrGV6biLX9MgrIPH0MNB8Pm1QaM25gHLJYEefmtmbKQCGrTJ-b7ZzXz68g",
      rating: 4.8,
      reviews: 210,
      rxRequired: false,
    },
    {
      id: 4,
      name: "Cough Syrup",
      description: "100ml • PharmaCorp",
      price: "$8.50",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCXPzi9slBc7OOIRccwbayUQqu5a47MVh3kwjeGYmjaN381qmXKMRGOE6IFeAoL6ue15z3Okel7XhyYX9lTNttWWunbI5YfqzkZQPLh4tF63QqksbHBcgJnKb6VqcIr4t2XhF8-KwmwYAFuQoLX7SgI2Jk89vI5wfXwsypXPkV1FQxi2Oq9kCjlbXDVP7tEhyb-tCCIIVNFgbnNxaxzsd2WBSKYxksLExv3g33QcRiVy8Kfv7w_HGy8eXCsy49G8coenBtB91__7g",
      rating: 4.6,
      reviews: 67,
      rxRequired: true,
    },
    {
      id: 5,
      name: "Multivitamin Gummies",
      description: "30 Gummies • HealthGen",
      price: "$14.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC2pCdqvKnBg7JPrFyJeZ6k2i6yRjk_iQnt5ongnnEg_sOqrn43hKF1xGRUfxytB5b99sfcZi6oJbeH1mmP7z9_jfnjpoQlZN30huVDJkQzcFu-MWrhFvnyAL1wxezQh5LHXc_yHaILD7fzRNOoURkRwI8lHzMlIW2kjO9v2ZSI4FWT2EGhULAAzd_Frc4vgZYISOYx7UliEiuzmZ0FfCXY8QphmawWLSnG5SU-GO3nUwnJTzUnT1qksht-923Hp_kCDJlzQtkSzw",
      rating: 4.7,
      reviews: 143,
      rxRequired: false,
    },
    {
      id: 6,
      name: "Aspirin 100mg",
      description: "50 Tablets • PharmaCorp",
      price: "$11.25",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDMdlA-Aq6Fo16pzfugiPsX8vu3KLKlsmz1yc9Xlc6PowZIffd5UZs6DMu2IJZrLqFFDt1jdPCN5ggbxQgnWhS0WGSDN8DdtdS33cu-ipHR02_PTraWOa2ammhfougRnc0Qpk-RWosPnL7g3UhVUeimVIyUScSi9cYQdmAFBZCH1SWH9bXBEckUcseEEwo5Y8l6qH5llnwUccgRho7TzHIMV3IZ7sCpQtBMfIpOKPAvYB_p3lS_mbLRochPeonjSh98G-vJMI7AmQ",
      rating: 4.4,
      reviews: 89,
      rxRequired: true,
    },
    {
      id: 7,
      name: "Allergy Relief",
      description: "10 Tablets • BioRemedy",
      price: "$9.50",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCa5AT7T_og60p2DA6SdFnMYUcsJHM8tVitsbZCJ_lSqUfRc7Ra42i9V6U31sFWIIdsS1TqH0IYgRndnn_SMIC-pXrk_4zWVerQyemGukP4pg899c4Lg9lNoJOby2ze4hkg7pMn5pknU3MfCQmMEzetxQtLQGA8m8hlrFC70SBkrAJfnt2AAB3HcdjWPKYMM-xIIn2x17pmPWVfX4tUIt2eM3bA5ycw16jt4LpN2VE6obFGLyUYjpKO-dTl6ceOKFNEDTo1Ega35g",
      rating: 4.5,
      reviews: 76,
      rxRequired: false,
    },
    {
      id: 8,
      name: "First Aid Kit",
      description: "1 Kit • HealthGen",
      price: "$25.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCj2HZPP00hSDu5LPU7hgKg2cWTYigCu6BvJG_jDlFajW_FyLPEXo09D6bAqG_69Nhl7XtaYilEgW_swuQYEPQ4si1HbHunId8YiK7ExECJOiEuFCHHvQz7zM80WkKrM_ZVFoEZDGLELg0nYUgCPRCkKRKYi1l7pVOfV797lSea9EAwWCsalA_1-DVCHCjJ9BaSYYEg0lMZSG_0ZEmLSorcYvVfg3EjCIAbai3Kz6IX4OR7U5UR1hwlOJdUlNi9HfF19NAReC8a6g",
      rating: 4.9,
      reviews: 55,
      rxRequired: false,
    },
  ];

  return (
    <main className="max-w-360 mx-auto px-6 py-8 lg:flex gap-8 font-[Inter,sans-serif]">
      {/* Sidebar Toggle for small devices */}
      <div className="lg:hidden mb-4 w-full absolute md:left-[92%] md:bottom-[87%] left-[85%] bottom-[80%]">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="px-2 py-1 bg-[#146976] text-white rounded-md"
        >
          {sidebarOpen ? <CancelIcon /> : <ViewSidebarIcon />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`w-64 shrink-0 lg:block fixed lg:relative bottom-0 left-0 h-[95%] lg:h-auto z-20 transition-transform bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-800
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="sticky top-24">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-[#146976]">Filters</h3>
            <button className="text-xs text-[#146976] font-semibold hover:underline">
              Clear all
            </button>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Categories
            </p>
            <div className="space-y-3">
              {[
                "Prescription",
                "OTC Medicines",
                "Wellness & Vitamins",
                "First Aid",
              ].map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    className="rounded border-gray-600 text-[#146976] focus:ring-[#146976] w-4 h-4"
                  />
                  <span className="text-sm text-gray-300 group-hover:text-[#146976] transition-colors">
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Price Range
            </p>
            <div className="px-2">
              <div className="h-1 w-full bg-gray-700 rounded-full relative">
                <div className="absolute h-1 bg-[#146976] left-0 right-1/4 rounded-full"></div>
                <div className="absolute w-4 h-4 bg-gray-800 border-2 border-[#146976] rounded-full -top-1.5 left-0"></div>
                <div className="absolute w-4 h-4 bg-gray-800 border-2 border-[#146976] rounded-full -top-1.5 right-1/4"></div>
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-xs font-medium text-gray-400">$0</span>
                <span className="text-xs font-medium text-gray-400">$450</span>
              </div>
            </div>
          </div>

          {/* Manufacturers */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Manufacturers
            </p>
            <div className="space-y-3">
              {["PharmaCorp", "HealthGen", "BioRemedy"].map((m) => (
                <label
                  key={m}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    className="rounded border-gray-600 text-[#146976] focus:ring-[#146976] w-4 h-4"
                  />
                  <span className="text-sm text-gray-300">{m}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="pt-4 border-t border-gray-800">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Rating
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-[#EBBA92]">
                {Array.from({ length: 4 }).map((_, i) => (
                  <StarIcon key={i} className="text-xs" />
                ))}
                <StarIcon className="text-xs text-gray-600" />
                <span className="text-xs text-gray-400 ml-1">& Up</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="flex-1">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6">
          <Link
            className="text-xs font-medium text-gray-400 hover:text-[#146976]"
            href="/"
          >
            Home
          </Link>
          <span className="text-xs text-gray-600">›</span>
          <span className="text-xs font-bold text-[#146976]">
            Medicine Shop
          </span>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-300">
              Medicines &amp; Supplements
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Showing 1-12 of 148 products
            </p>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="relative">
              <select className="appearance-none bg-gray-800 border border-gray-600 rounded-[0.5rem] py-2 pl-4 pr-10 text-sm focus:ring-[#146976] focus:border-[#146976] text-white">
                <option>Sort by: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rating</option>
              </select>
            </div>
            <div className="flex border border-gray-600 rounded-lg">
              <button className="p-2 bg-[#146976] text-white">
                <GridViewIcon className="text-[20px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-800"
            >
              <div className="aspect-square relative overflow-hidden bg-gray-800">
                <img
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform"
                  src={product.image}
                  alt={product.name}
                />
                {product.rxRequired && (
                  <div className="absolute top-3 left-3 bg-red-700 text-red-200 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                    Rx Required
                  </div>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 bg-gray-700/80 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500">
                  <FavoriteIcon className="text-sm" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2 text-[#EBBA92]">
                  <StarIcon className="text-xs" />
                  <span className="text-xs font-bold text-gray-400">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <h3 className="font-bold text-gray-300 mb-1 line-clamp-1 group-hover:text-[#146976] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-400 mb-4 italic">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-[#EBBA92]">
                    {product.price}
                  </span>
                  <button className="w-10 h-10 bg-[#146976]/10 text-[#146976] rounded-[0.5rem] flex items-center justify-center hover:bg-[#146976] hover:text-white transition-all">
                    <AddShoppingCartIcon className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-2 justify-center mt-10">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-yellow-200 hover:text-[#146976] border border-gray-800">
            <span className="material-symbols-outlined">
              <ArrowBackIosNewIcon />
            </span>
          </button>

          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            if (
              page === 1 ||
              page === totalPages ||
              Math.abs(currentPage - page) <= 1
            ) {
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                    page === currentPage
                      ? "bg-[#146976] text-white font-bold"
                      : "bg-gray-800 text-gray-400 hover:text-[#146976] border border-gray-800"
                  }`}
                >
                  {page}
                </button>
              );
            } else if (
              (page === 2 && currentPage > 3) ||
              (page === totalPages - 1 && currentPage < totalPages - 2)
            ) {
              return (
                <span key={page} className="text-gray-400 px-2">
                  ...
                </span>
              );
            } else return null;
          })}

          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-yellow-200 hover:text-[#146976] border border-gray-800">
            <span className="material-symbols-outlined">
              <ArrowForwardIosIcon />
            </span>
          </button>
        </div>
      </section>
    </main>
  );
}
