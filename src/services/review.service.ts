export const submitReview = async (
  id: string,
  review: string,
  rating: number,
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/review`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, review, rating }),
        next: { revalidate: 5 },
      },
    );
    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }
    const reviewData = res.json();
    return reviewData;
  } catch (err) {
    console.log(err);
  }
};
