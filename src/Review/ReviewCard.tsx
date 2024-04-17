import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import StarRating from "./StarRating";
interface Iprops {
  header: string;
}
const Card: React.FC<Iprops> = ({ header }) => {
  const Rating = useSelector((state: RootState) => state.user.reviews);
  const Star = useSelector((state: RootState) => state.user.average);
  return (
    <div className="reviewcard ">
      <div className="card__content">
        <h2 className="card__header" style={{color:"black"}}>{header}</h2>
        <div className="card__review">
          <StarRating value={Star} readonly size={20} />
          <div data-testid="rating" className="card__label">
            {`${Star} | ${Rating.length || 0} users rated this!`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
