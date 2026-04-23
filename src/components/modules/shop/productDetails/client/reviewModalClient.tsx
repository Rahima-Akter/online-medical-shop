"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";
import { toast } from "sonner";
import { useState } from "react";
import submitReviewAction from "@/components/actions/reviewAction";

export default function ReviewModalClient({
  handleCloseModal,
  review,
  allReviews,
  setAllReviews,
  setReview,
  rating,
  setRating,
  currentUserId,
  medicineId,
  setIsAddModalOpen,
}: any) {
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmitReview = async (id: string) => {
    if (!review.trim()) {
      return toast.error("Review cannot be empty");
    }

    if (rating < 1 || rating > 5) {
      return toast.error("Rating must be between 1 and 5");
    }

    const hasUserReviewed = allReviews?.some(
      (r: any) => r.customerId === currentUserId,
    );

    if (hasUserReviewed) {
      return toast.error("You have already submitted a review!");
    }

    setLoading(true);

    try {
      const newReview = await submitReviewAction(id, review, rating);
      if (newReview) {
        setAllReviews((prev: any) => [newReview, ...prev]);
        toast.success("Review submitted");

        setIsAddModalOpen(false);
        setReview("");
        setRating(1);
        window.location.reload();
      } else {
        toast.error("Only Customers Can Review");
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong!");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-background-dark w-full max-w-lg rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold">Add A Review</h3>
          <IconButton onClick={handleCloseModal}>
            <Close className="text-slate-400 hover:text-slate-600 transition-colors" />
          </IconButton>
        </div>
        <div className="p-6 space-y-4">
          {/* Form */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 dark:text-[#9fb3b7] uppercase">
              Review
            </label>
            <input
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full px-4 py-2 bg-slate-50 dark:bg-[#2a3537] border-slate-200 dark:border-none rounded-lg focus:ring-primary focus:border-primary"
              placeholder="write your review  here"
              type="text"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 dark:text-[#9fb3b7] uppercase">
              Your Rating
            </label>
            <input
              min={1}
              max={5}
              step={1}
              value={rating}
              onChange={(e) =>
                setRating(Math.min(5, Math.max(1, Number(e.target.value))))
              }
              className="w-full px-4 py-2 bg-slate-50 dark:bg-[#2a3537] border-slate-200 dark:border-none rounded-lg focus:ring-primary focus:border-primary"
              placeholder="give you rating between 1-5"
              type="number"
            />
          </div>
        </div>
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 flex justify-end gap-3">
          <button
            onClick={handleCloseModal}
            className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-800 transition-colors"
          >
            Cancel
          </button>
          <button
            disabled={loading}
            onClick={() => handleSubmitReview(`${medicineId}`)}
            className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-shadow cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </div>
      </div>
    </div>
  );
}
