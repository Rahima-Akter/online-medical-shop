"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { addMedicineAction } from "@/components/actions/medicineAction";
import { toast } from "sonner";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import FactoryIcon from "@mui/icons-material/Factory";
import CategoryIcon from "@mui/icons-material/Category";
import ScienceIcon from "@mui/icons-material/Science";
import PaymentsIcon from "@mui/icons-material/Payments";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { Pill } from "lucide-react";
import { UserInfoAction } from "@/components/actions/userAction";
import { Description, HealthAndSafety, Report } from "@mui/icons-material";

type FormValues = {
  name: string;
  manufacturer: string;
  categoryId: string;
  prescription: boolean;
  ingredients: string;
  price: number;
  stock: number;
  dosage: string;
  sideEffects: string;
  seriousSideEffects: string;
  image: string;
};

export default function AddMedicineForm() {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    const sessionData = await UserInfoAction();
    try {
      setLoading(true);

      const payload = {
        name: data.name,
        price: data.price,
        stock: data.stock,
        manufacturer: data.manufacturer,
        rx_required: data.prescription,
        active_ingrdients: data.ingredients,
        dosage_instructions: data.dosage,
        side_effects: data.sideEffects
          ? data.sideEffects.split(",").map((i) => i.trim())
          : [],
        serious_side_effects: data.seriousSideEffects
          ? data.seriousSideEffects.split(",").map((i) => i.trim())
          : [],
        img: data.image,
        isActive: true,
        sellerId: sessionData?.id,
        categoryId: data.categoryId,
      };

      await addMedicineAction(payload);
      toast.success("Medicine added successfully ✅");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to add medicine ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#FFFFFF0D] px-10 py-6 bg-[#0A1618]">
        <h2 className="text-[#F5F1E9] text-lg font-bold leading-tight tracking-[-0.015em]">
          Add Medicine
        </h2>
        <MedicalServicesIcon className="text-white" />
      </header>

      <div className="md:mx-24 md:px-8 md:my-8 px-8 rounded-lg py-8 border border-white/30 shadow-xl shadow-purple-200/5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 premium-scroll space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Medicine Name */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
                Medicine Name
              </label>
              <div className="input-icon-wrapper relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#146875] text-xl pointer-events-none">
                  <Pill size={18} />
                </span>
                <input
                  {...register("name")}
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
                  {...register("manufacturer")}
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
                <select
                  {...register("categoryId")}
                  className="premium-input form-select w-full rounded-xl text-[#F5F1E9] focus:ring-2 focus:ring-[#146875]/50 focus:border-[#146875] border border-[#FFFFFF0D] bg-[#0A1618]/60 h-12 text-base font-normal pl-10"
                >
                  <option className="bg-[#0A1618]" value="">
                    Select Category
                  </option>
                  <option
                    className="bg-[#0A1618]"
                    value="f43ca115-3f23-44ee-9c4e-23dc85917fa1"
                  >
                    Antibiotics
                  </option>
                  <option
                    className="bg-[#0A1618]"
                    value="11111111-1111-1111-1111-111111111111"
                  >
                    Painkillers
                  </option>
                  <option
                    className="bg-[#0A1618]"
                    value="22222222-2222-2222-2222-222222222222"
                  >
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
                <input
                  type="checkbox"
                  {...register("prescription")}
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-[#F5F1E9]">
                  Rx Required
                </span>
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
                {...register("ingredients")}
                className="premium-input form-input w-full rounded-xl text-[#F5F1E9] focus:ring-2 focus:ring-[#146875]/50 focus:border-[#146875] border border-[#FFFFFF0D] bg-[#0A1618]/60 h-12 text-base font-normal pl-10"
                placeholder="e.g. Acetaminophen, Caffeine"
                type="text"
              />
            </div>
          </div>

          {/* Price and Stock */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2.5">
              <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
                Price ($)
              </label>
              <div className="input-icon-wrapper relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#146875]">
                  <PaymentsIcon fontSize="small" />
                </span>
                <input
                  type="number"
                  step="0.01"
                  {...register("price", { valueAsNumber: true })}
                  className="premium-input form-input w-full rounded-xl text-[#F5F1E9] border border-[#FFFFFF0D] bg-[#0A1618]/60 h-12 pl-10"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
                Current Stock
              </label>
              <div className="input-icon-wrapper relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#146875]">
                  <Inventory2Icon fontSize="small" />
                </span>
                <input
                  type="number"
                  {...register("stock", { valueAsNumber: true })}
                  className="premium-input form-input w-full rounded-xl text-[#F5F1E9] border border-[#FFFFFF0D] bg-[#0A1618]/60 h-12 pl-10"
                  placeholder="0 Units"
                />
              </div>
            </div>
          </div>

          {/* Dosage */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
              Dosage Instructions
            </label>

            <div className="input-icon-wrapper relative">
              <span className="absolute left-3 top-4 text-[#146875] text-xl pointer-events-none">
                <Description fontSize="small" />
              </span>
              <textarea
                {...register("dosage")}
                className="premium-input form-textarea w-full rounded-xl text-[#F5F1E9] focus:ring-2 focus:ring-[#146875]/50 focus:border-[#146875] border border-[#FFFFFF0D] bg-[#0A1618]/60 min-h-27.5 p-4 text-base font-normal placeholder:text-[#D1D5DB]/30 pl-10"
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
              <span className="absolute left-3 top-4 text-[#146875] text-xl pointer-events-none">
                <HealthAndSafety fontSize="small" />
              </span>
              <textarea
                {...register("sideEffects")}
                className="premium-input form-textarea w-full rounded-xl text-[#F5F1E9] focus:ring-2 focus:ring-[#146875]/50 focus:border-[#146875] border border-[#FFFFFF0D] bg-[#0A1618]/60 min-h-20 p-4 text-base font-normal placeholder:text-[#D1D5DB]/30 pl-10"
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
              <span className="absolute left-3 top-4 text-[#146875] text-xl pointer-events-none">
                <Report fontSize="small" />
              </span>
              <textarea
                {...register("seriousSideEffects")}
                className="premium-input form-textarea w-full rounded-xl text-[#F5F1E9] focus:ring-2 focus:ring-[#146875]/50 focus:border-[#146875] border border-[#FFFFFF0D] bg-[#0A1618]/60 min-h-20 p-4 text-base font-normal placeholder:text-[#D1D5DB]/30 pl-10"
                placeholder="e.g. Severe allergic reaction, Difficulty breathing..."
              />
            </div>
          </div>

          {/* Image URL */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[#F5F1E9] text-xs font-bold uppercase tracking-wider ml-1">
              Product Image URL
            </label>
            <input
              {...register("image")}
              className="premium-input form-input w-full rounded-xl text-[#F5F1E9] border border-[#FFFFFF0D] bg-[#0A1618]/60 h-12 p-4"
              placeholder="https://example.com/image.jpg"
              type="text"
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-center gap-5 border-t border-[#FFFFFF0D] backdrop-blur-sm rounded-b-2xl pt-6 -mb-2">
            <button
              type="button"
              onClick={() => reset()}
              className="px-8 py-3 rounded-xl text-sm font-bold text-[#D1D5DB] hover:text-[#F5F1E9] hover:bg-white/5 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-3 rounded-xl bg-linear-to-br from-[#146875] to-[#0e4b54] text-[#F5F1E9] text-sm font-black shadow-[0_10px_25px_-5px_rgba(20,104,117,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(20,104,117,0.6)] hover:-translate-y-0.5 transition-all active:scale-95 uppercase tracking-widest"
            >
              {loading ? "Saving..." : "Save Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
