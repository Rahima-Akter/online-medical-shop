"use client";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import ReviewModalClient from "./reviewModalClient";
import { Review } from "@/types/medicine";

// Only needs these 3 props — everything else is managed internally
interface Props {
  medicineId: string;
  currentUserId: string;
  allReviews: Review[];
}

export default function WriteReviewButtonClient({
  medicineId,
  currentUserId,
  allReviews: initialReviews,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // All state lives HERE — not in the parent
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [allReviews, setAllReviews] = useState<Review[]>(initialReviews);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#146976] hover:bg-[#146976]/90 text-[#FCFBFA] font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-all cursor-pointer"
      >
        <EditIcon />
        Write a Review
      </button>

      {isOpen && (
        <ReviewModalClient
          handleCloseModal={() => setIsOpen(false)}
          currentUserId={currentUserId}
          medicineId={medicineId}
          allReviews={allReviews}
          setAllReviews={setAllReviews}
          setIsAddModalOpen={setIsOpen}
          review={review}
          setReview={setReview}
          rating={rating}
          setRating={setRating}
        />
      )}
    </>
  );
}