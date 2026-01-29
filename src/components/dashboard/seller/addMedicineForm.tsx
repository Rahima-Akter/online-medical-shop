"use client";

import { useState } from "react";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import FactoryIcon from "@mui/icons-material/Factory";
import CategoryIcon from "@mui/icons-material/Category";
import ScienceIcon from "@mui/icons-material/Science";
import PaymentsIcon from "@mui/icons-material/Payments";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import DescriptionIcon from "@mui/icons-material/Description";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Pill } from "lucide-react";
import { HealthAndSafety, Report } from "@mui/icons-material";

export default function AddMedicineForm() {
  const [prescription, setPrescription] = useState(false);

  return (
    <div>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#FFFFFF0D] px-[40px] py-6 bg-[#0A1618]">
        <h2 className="text-[#F5F1E9] text-lg font-bold leading-tight tracking-[-0.015em]">
          Add Medicine
        </h2>
        <MedicalServicesIcon className="text-white" />
      </header>

      {/* Form */}
      <div className="md:mx-24 md:px-8 md:my-8 px-8 rounded-lg py-8 border border-white/30 shadow-xl shadow-purple-200/5">
        <form className="flex-1 overflow-y-auto premium-scroll space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Medicine Name */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
                Medicine Name
              </label>
              <div className="input-icon-wrapper relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#146875] text-xl pointer-events-none">
                  <Pill fontSize="small" />
                </span>
                <input
                  className="premium-input form-input w-full rounded-xl text-[#F5F1E9] focus:ring-2 focus:ring-[#146875]/50 focus:border-[#146875] border border-[#FFFFFF0D] bg-[#0A1618]/60 h-12 text-base font-normal placeholder:text-[#D1D5DB]/30 pl-10"
                  placeholder="e.g. Paracetamol 500mg"
                  type="text"
                />
              </div>
            </div>

            {/* Manufacturer */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
                Manufacturer
              </label>
              <div className="input-icon-wrapper relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#146875] text-xl pointer-events-none">
                  <FactoryIcon fontSize="small" />
                </span>
                <input
                  className="premium-input form-input w-full rounded-xl text-[#F5F1E9] focus:ring-2 focus:ring-[#146875]/50 focus:border-[#146875] border border-[#FFFFFF0D] bg-[#0A1618]/60 h-12 text-base font-normal placeholder:text-[#D1D5DB]/30 pl-10"
                  placeholder="e.g. PharmaCorp Global"
                  type="text"
                />
              </div>
            </div>
          </div>

          {/* Category and Regulation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
                Category
              </label>
              <div className="input-icon-wrapper relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#146875] text-xl pointer-events-none">
                  <CategoryIcon fontSize="small" />
                </span>
                <select className="premium-input form-select w-full rounded-xl text-[#F5F1E9] focus:ring-2 focus:ring-[#146875]/50 focus:border-[#146875] border border-[#FFFFFF0D] bg-[#0A1618]/60 h-12 text-base font-normal pl-10">
                  <option className="bg-[#0A1618]" value="">
                    Select Category
                  </option>
                  <option className="bg-[#0A1618]" value="antibiotics">
                    Antibiotics
                  </option>
                  <option className="bg-[#0A1618]" value="painkillers">
                    Painkillers
                  </option>
                  <option className="bg-[#0A1618]" value="supplements">
                    Supplements
                  </option>
                </select>
              </div>
            </div>

            {/* Regulation */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
                Regulation
              </label>
              <div className="flex items-center gap-4 h-12 bg-[#0A1618]/30 rounded-xl px-4 border border-[#FFFFFF0D]/50">
                <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    id="prescription"
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-[#D1D5DB] border-2 appearance-none cursor-pointer right-4 transition-all duration-200 border-transparent"
                    checked={prescription}
                    onChange={() => setPrescription(!prescription)}
                  />
                  <label
                    htmlFor="prescription"
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-white/10 cursor-pointer"
                  ></label>
                </div>
                <span className="text-sm font-medium text-[#F5F1E9]">
                  Rx Required
                </span>
                <div className="ml-auto">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#EBBA92]/20 text-[#EBBA92] border border-[#EBBA92]/40 uppercase tracking-tighter">
                    Restricted
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Ingredients */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
              Active Ingredients
            </label>
            <div className="input-icon-wrapper relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#146875] text-xl pointer-events-none">
                <ScienceIcon fontSize="small" />
              </span>
              <input
                className="premium-input form-input w-full rounded-xl text-[#F5F1E9] focus:ring-2 focus:ring-[#146875]/50 focus:border-[#146875] border border-[#FFFFFF0D] bg-[#0A1618]/60 h-12 text-base font-normal placeholder:text-[#D1D5DB]/30 pl-10"
                placeholder="e.g. Acetaminophen, Caffeine anhydrous"
                type="text"
              />
            </div>
          </div>

          {/* Price and Stock */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Price */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
                Price ($)
              </label>
              <div className="input-icon-wrapper relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#146875] text-xl pointer-events-none">
                  <PaymentsIcon fontSize="small" />
                </span>
                <input
                  className="premium-input form-input w-full rounded-xl text-[#F5F1E9] focus:ring-2 focus:ring-[#146875]/50 focus:border-[#146875] border border-[#FFFFFF0D] bg-[#0A1618]/60 h-12 text-base font-normal placeholder:text-[#D1D5DB]/30 pl-10"
                  placeholder="0.00"
                  step="0.01"
                  type="number"
                />
              </div>
            </div>

            {/* Stock */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
                Current Stock
              </label>
              <div className="input-icon-wrapper relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#146875] text-xl pointer-events-none">
                  <Inventory2Icon fontSize="small" />
                </span>
                <input
                  className="premium-input form-input w-full rounded-xl text-[#F5F1E9] focus:ring-2 focus:ring-[#146875]/50 focus:border-[#146875] border border-[#FFFFFF0D] bg-[#0A1618]/60 h-12 text-base font-normal placeholder:text-[#D1D5DB]/30 pl-10"
                  placeholder="0 Units"
                  type="number"
                />
              </div>
            </div>
          </div>

          {/* Dosage Instructions */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
              Dosage Instructions
            </label>
            <div className="input-icon-wrapper relative">
              <span className="absolute left-3 top-6 text-[#146875] text-xl pointer-events-none">
                <DescriptionIcon fontSize="small" />
              </span>
              <textarea
                className="premium-input form-textarea w-full rounded-xl text-[#F5F1E9] focus:ring-2 focus:ring-[#146875]/50 focus:border-[#146875] border border-[#FFFFFF0D] bg-[#0A1618]/60 min-h-[110px] p-4 text-base font-normal placeholder:text-[#D1D5DB]/30 pl-10"
                placeholder="e.g. Take one tablet twice daily after meals..."
              />
            </div>
          </div>

          {/* Side Effects */}
<div className="flex flex-col gap-2.5">
  <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
    Side Effects
  </label>
  <div className="input-icon-wrapper relative">
    <span className="absolute left-3 top-6 text-[#146875] text-xl pointer-events-none">
      <HealthAndSafety fontSize="small" />
    </span>
    <textarea
      className="premium-input form-textarea w-full rounded-xl text-[#F5F1E9] focus:ring-2 focus:ring-[#146875]/50 focus:border-[#146875] border border-[#FFFFFF0D] bg-[#0A1618]/60 min-h-[80px] p-4 text-base font-normal placeholder:text-[#D1D5DB]/30 pl-10"
      placeholder="e.g. Nausea, Dizziness, Headache..."
    />
  </div>
</div>

{/* Serious Side Effects */}
<div className="flex flex-col gap-2.5">
  <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
    Serious Side Effects
  </label>
  <div className="input-icon-wrapper relative">
    <span className="absolute left-3 top-6 text-[#146875] text-xl pointer-events-none">
      <Report fontSize="small" />
    </span>
    <textarea
      className="premium-input form-textarea w-full rounded-xl text-[#F5F1E9] focus:ring-2 focus:ring-[#146875]/50 focus:border-[#146875] border border-[#FFFFFF0D] bg-[#0A1618]/60 min-h-[80px] p-4 text-base font-normal placeholder:text-[#D1D5DB]/30 pl-10"
      placeholder="e.g. Severe allergic reaction, Difficulty breathing..."
    />
  </div>
</div>


          {/* Product Media */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
              Product Media
            </label>
            <div className="relative border-2 border-dashed border-[#146875]/60 rounded-2xl p-8 transition-all bg-[#0A1618]/40 group cursor-pointer hover:bg-[#0A1618]/60 hover:border-[#146875] upload-glow">
              <input
                className="absolute inset-0 opacity-0 cursor-pointer"
                type="file"
              />
              <div className="flex flex-col items-center justify-center gap-3 text-center">
                <div className="size-16 rounded-full bg-[#146875]/10 flex items-center justify-center text-[#146875] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(20,104,117,0.2)]">
                  <AddPhotoAlternateIcon fontSize="large" />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#F5F1E9]">
                    Drop your product imagery here
                  </p>
                  <p className="text-sm text-[#D1D5DB] opacity-60">
                    High-res PNG, JPG or WEBP (Max. 5MB)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Modal Footer */}
        <div className="flex items-center justify-center gap-5 border-t border-[#FFFFFF0D]  backdrop-blur-sm rounded-b-2xl pt-6 -mb-2">
          <button
            className="px-8 py-3 rounded-xl text-sm font-bold text-[#D1D5DB] hover:text-[#F5F1E9] hover:bg-white/5 transition-all"
            type="button"
          >
            Cancel
          </button>
          <button
            className="px-10 py-3 rounded-xl bg-gradient-to-br from-[#146875] to-[#0e4b54] text-[#F5F1E9] text-sm font-black shadow-[0_10px_25px_-5px_rgba(20,104,117,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(20,104,117,0.6)] hover:-translate-y-0.5 transition-all active:scale-95 uppercase tracking-widest"
            type="submit"
          >
            Save Product
          </button>
        </div>
      </div>

      <style jsx>{`
        .premium-scroll::-webkit-scrollbar-track {
          background: rgba(10, 22, 24, 0.2);
          margin: 10px 0;
        }
        .premium-scroll::-webkit-scrollbar-thumb {
          background: #146875;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
