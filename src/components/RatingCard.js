import { BsStar } from "react-icons/bs";
import "./RatingCard.css";
export const DatesRating = () => {
  return (
    <div className="rating-dates-containr">
      <div className="dates-img-container">
        <img
          className="dates-img"
          alt="img"
          src="https://images.unsplash.com/photo-1537201872643-ff006e1f016f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div className="rating-container">
        <input type="radio" className="star-list">
          <BsStar className="star-icon" />
        </input>
        <input type="radio" className="star-list">
          <BsStar className="star-icon" />
        </input>
        <input type="radio" className="star-list">
          <BsStar className="star-icon" />
        </input>
        <input type="radio" className="star-list">
          <BsStar className="star-icon" />
        </input>
        <input type="radio" className="star-list">
          <BsStar className="star-icon" />
        </input>
        <input type="radio" className="star-list">
          <BsStar className="star-icon" />
        </input>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
};
