import { useState } from "react";

const mockReviews = [
  { id: 1, user: "Neeraj", rating: 5, comment: "Excellent service!" },
  { id: 2, user: "Priya", rating: 4, comment: "Very good, polite behavior." },
];

export default function RatingsReviews() {
  const [reviews, setReviews] = useState(mockReviews);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      user: "Anonymous", // In real app, use logged-in user's name
      rating,
      comment,
    };
    setReviews([newReview, ...reviews]);
    setRating(0);
    setComment("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-red-400 shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-red-800">Ratings & Reviews</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div className="flex items-center space-x-2">
          <label className="font-medium">Rating:</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="border rounded px-2 py-1"
            required
          >
            <option value="">Select</option>
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star} ⭐
              </option>
            ))}
          </select>
        </div>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review..."
          className="w-full border rounded p-3"
          rows="4"
          required
        />

        <button
          type="submit"
          className="bg-red-300 text-white px-6 py-2 rounded hover:bg-red-800"
        >
          Submit Review
        </button>
      </form>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border p-4 rounded bg-red-100 shadow-sm"
          >
            <p className="font-semibold">{review.user}</p>
            <p className="text-yellow-500">
              {"⭐".repeat(review.rating)} ({review.rating})
            </p>
            <p className="text-sm text-red-800">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}