import ReviewsIcon from "@mui/icons-material/Reviews";
import StarIcon from "@mui/icons-material/Star";
import { Review } from "@/types/medicine";
import WriteReviewButtonClient from "./client/writeReviewButtonClient";

interface IReview {
  reviews: Review[];
  medicineId: string;
  currentUserId: string;
}

export default function Reviews({
  reviews,
  medicineId,
  currentUserId,
}: IReview) {
  const allReviews = reviews ?? [];

  const ratingCounts = [5, 4, 3, 2, 1].map(
    (star) => allReviews.filter((r) => r.rating === star).length,
  );

  const totalReviews = allReviews.length;

  const ratingPercentages = ratingCounts.map((count) =>
    totalReviews === 0 ? 0 : Math.round((count / totalReviews) * 100),
  );

  return (
    <section className="bg-[#1E3F45] p-10 rounded-2xl shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-black text-[#FCFBFA] flex items-center gap-3">
            <ReviewsIcon className="text-[#EBBA92]" />
            Customer Reviews
          </h2>
          <p className="text-[#FCFBFA]/60 mt-2">
            Verified feedback from {allReviews.length} verified purchasers.
          </p>
        </div>

        {/* Client-side Write Review Button */}
        <WriteReviewButtonClient
          medicineId={medicineId}
          currentUserId={currentUserId}
          allReviews={allReviews}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT — Rating Summary */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-[#ebdbce] p-8 rounded-xl border border-[#146976]/20 flex flex-col items-center text-center">
            <span className="text-6xl font-black text-[#1E3F45]">
              {allReviews.length > 0
                ? (
                    allReviews.reduce((acc, review) => acc + review.rating, 0) /
                    allReviews.length
                  ).toFixed(1)
                : "0"}
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
          {allReviews.length > 0 &&
            [5, 4, 3, 2, 1].map((star, i) => (
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
          {allReviews.length === 0 && (
            <p className="font-extrabold text-white text-3xl text-center lg:mt-16">
              No reviews yet
            </p>
          )}

          {allReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#f3e5da] p-6 rounded-2xl border border-[#146976]/20 mb-4"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full border-2 border-[#146976]/20 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${review.customer?.image})`,
                    }}
                  />
                  <div>
                    <h4 className="font-bold text-[#1E3F45]">
                      {review.customer?.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <div className="flex text-[#EBBA92]">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <StarIcon key={i} fontSize="small" />
                        ))}
                      </div>
                      <span className="text-xs text-[#1E3F45]/40 font-medium">
                        Verified Buyer
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-sm text-[#1E3F45]/40">
                  {new Date(review.createdAt).toLocaleDateString()}
                </span>
              </div>

              <p className="text-[#1E3F45]/80 leading-relaxed font-medium">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
