import ReviewsIcon from "@mui/icons-material/Reviews";
import EditIcon from "@mui/icons-material/Edit";
import StarIcon from "@mui/icons-material/Star";
import { Review } from "@/types/medicine";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";
import { toast } from "sonner";
import { submitReview } from "@/services/review.service";

interface Ireview {
  reviews: Review[];
  medicineId: string;
  currentUserId: string;
}

export default function Reviews({
  reviews,
  medicineId,
  currentUserId,
}: Ireview) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [review, setReview] = useState<string>("");
  const [rating, setRating] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
  };

  const handleSubmitReview = async (id: string) => {
    if (!review.trim()) {
      return toast.error("Review cannot be empty");
    }

    if (rating < 1 || rating > 5) {
      return toast.error("Rating must be between 1 and 5");
    }
    const hasUserReviewed = reviews.some((r) => r.customerId === currentUserId);

    if (hasUserReviewed) {
      return toast.error("You have already submitted a review!");
    }

    setLoading(true);

    try {
      await submitReview(id, review, rating);
      toast.success("Review submitted");

      setIsAddModalOpen(false);
      setReview("");
      setRating(1);
    } catch (err) {
      toast.error("Something went wrong!");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const ratingCounts = [5, 4, 3, 2, 1].map((star) => {
    return reviews?.filter((r) => r.rating === star).length;
  });

  const totalReviews = reviews?.length;
  const ratingPercentages = ratingCounts.map((count) =>
    totalReviews === 0 ? 0 : Math.round((count / totalReviews) * 100),
  );

  return (
    <>
      <section className="bg-[#1E3F45] p-10 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-black text-[#FCFBFA] flex items-center gap-3">
              <ReviewsIcon className="text-[#EBBA92]" />
              Customer Reviews
            </h2>
            <p className="text-[#FCFBFA]/60 mt-2">
              Verified feedback from {reviews?.length} verified purchasers.
            </p>
          </div>

          <button
            onClick={handleOpenModal}
            className="bg-[#146976] hover:bg-[#146976]/90 text-[#FCFBFA] font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-all cursor-pointer"
          >
            <EditIcon />
            Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT — Rating Summary */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-[#ebdbce] p-8 rounded-xl border border-[#146976]/20 flex flex-col items-center text-center">
              <span className="text-6xl font-black text-[#1E3F45]">
                {reviews?.length > 0
                  ? (
                      reviews.reduce((acc, review) => acc + review.rating, 0) /
                      reviews?.length
                    ).toFixed(1)
                  : "0"}{" "}
              </span>

              <div className="flex gap-1 my-3 text-[#cba586]">
                <StarIcon fontSize="large" />
                <StarIcon fontSize="large" />
                <StarIcon fontSize="large" />
                <StarIcon fontSize="large" />
                <StarIcon fontSize="large" />
              </div>

              <p className="text-[#1E3F45]/60 font-semibold">
                Average Store Rating
              </p>
            </div>

            {/* Rating Bars */}
            {reviews.length === 0
              ? ""
              : [5, 4, 3, 2, 1].map((star, i) => (
                  <div key={star} className="flex items-center gap-4">
                    <span className="text-sm font-bold text-[#FCFBFA] w-4">
                      {star}
                    </span>

                    <StarIcon className="text-[#EBBA92]" fontSize="small" />

                    <div className="flex-1 h-2.5 bg-[#FCFBFA]/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#EBBA92] transition-all"
                        style={{ width: `${ratingPercentages[i]}%` }}
                      />
                    </div>

                    <span className="text-sm font-medium text-[#FCFBFA]/60 w-10 text-right">
                      {ratingPercentages[i]}%
                    </span>
                  </div>
                ))}
          </div>

          {/* RIGHT — Reviews */}
          <div className="lg:col-span-8 space-y-4 overflow-y-auto">
            {reviews.length === 0 ? (
              <p className="font-extrabold text-white text-3xl text-center lg:mt-16">
                No reviews yet
              </p>
            ) : (
              ""
            )}
            {reviews?.map((review) => (
              <div
                key={review?.id}
                className="bg-[#f3e5da] p-6 rounded-2xl border border-[#146976]/20 mb-4"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full border-2 border-[#146976]/20 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${review?.customer?.image})`,
                      }}
                    />
                    <div>
                      <h4 className="font-bold text-[#1E3F45]">
                        {review?.customer?.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <div className="flex text-[#EBBA92]">
                          {Array.from({ length: review?.rating }).map(
                            (_, i) => (
                              <StarIcon key={i} fontSize="small" />
                            ),
                          )}
                        </div>
                        <span className="text-xs text-[#1E3F45]/40 font-medium">
                          Verified Buyer
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-[#1E3F45]/40">
                    {new Date(review?.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <p className="text-[#1E3F45]/80 leading-relaxed font-medium">
                  {review?.comment}
                </p>
              </div>
            ))}

            {/* <button className="w-full py-4 text-[#FCFBFA]/60 font-bold hover:text-[#FCFBFA] transition-all border border-[#FCFBFA]/10 rounded-xl">
            Load 126 More Reviews
          </button> */}
          </div>
        </div>
      </section>

      {isAddModalOpen && (
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
                onClick={() => handleSubmitReview(`${medicineId}`)}
                className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-shadow cursor-pointer"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
