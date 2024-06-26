import React from "react";
import StarRating from "./StarRating";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const Reviews = () => {
  const ReviewData = useSelector((state: RootState) => state.user.reviews);
  return (
    <>
      {
        ReviewData.length > 0 && <div className="reviewdata">
          <h2 className="text-center">FEEDBACKS</h2>
          {ReviewData.map(({ review, name, rating, date }, index) => (
            <div key={index} className="review fd">
              <div className="review__author" style={{ color: "#61dbfb" }}>{name}</div>
              <p className="review__date" style={{ color: "green" }}>{date}</p>
              <StarRating readonly value={rating} size={15} />
              <p className="review__text" style={{ color: "#fff" }}>{review}</p>
              <hr style={{ border: "1px solid gray", width: "100%" }} />
            </div>
          ))}
        </div>
      }
    </>
  );
};

export default Reviews;
