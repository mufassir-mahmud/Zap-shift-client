import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
const ReviewCard = ({ review }) => {
  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 w-[90vw] sm:w-[400px] md:w-[450px] min-h-[320px] p-5 sm:p-6 md:p-8">
      {" "}
      {/* Quote Icon */}{" "}
      <FaQuoteLeft className="text-primary text-2xl sm:text-3xl mb-4" />{" "}
      {/* Fixed Text */}{" "}
      <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
        {" "}
        A posture corrector works by providing support and gentle alignment to
        your shoulders, back, and spine, encouraging you to maintain proper
        posture throughout the day.{" "}
      </p>{" "}
      {/* Divider */} <div className="divider my-4"></div>{" "}
      {/* User Information */}{" "}
      <div className="flex items-center gap-3">
        {" "}
        {/* Profile Image */}{" "}
        <div className="avatar shrink-0">
          {" "}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full">
            {" "}
            <img src={review.user_photoURL} alt={review.userName} />{" "}
          </div>{" "}
        </div>{" "}
        {/* Name + Review */}{" "}
        <div className="min-w-0">
          {" "}
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            {" "}
            {review.userName}{" "}
          </h3>{" "}
          <p className="text-gray-500 text-sm sm:text-base mt-1 break-words">
            {" "}
            {review.review}{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default ReviewCard;
