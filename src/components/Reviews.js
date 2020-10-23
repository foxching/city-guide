import React, { useContext } from "react";
import { InfoContext } from "./context";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const { reviews } = useContext(InfoContext);
  console.log(reviews);
  return (
    <div>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
