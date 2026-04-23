"use server";
import { submitReview } from "@/services/review.service";

export default async function submitReviewAction(
  id: string,
  review: string,
  rating: number,
) {
  return await submitReview(id, review, rating);
}