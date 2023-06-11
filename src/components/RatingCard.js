import { BsStar } from "react-icons/bs";
import "./RatingCard.css";
export const DatesRating = (props) => {
  const {
    starIconClass,
    ratingDatesContainerClass,
    datesImgContainerClass,
    datesImgClass,
    ratingContainerClass,
    ratingSubmitBtnWrapper,
    ratingSubmitBtnClass,
    src,
  } = props;
  return (
    <div className={`rating-dates-container ${ratingDatesContainerClass}`}>
      <div className={`dates-img-container ${datesImgContainerClass}`}>
        <img
          className={`dates-img ${datesImgClass}`}
          alt="img"
          src={
            src
              ? src
              : "https://images.unsplash.com/photo-1537201872643-ff006e1f016f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
      </div>
      <div className={`rating-container ${ratingContainerClass}`}>
        <a>
          <BsStar className={`star-icon ${starIconClass}`} />{" "}
        </a>
        <a>
          <BsStar className={`star-icon ${starIconClass}`} />{" "}
        </a>
        <a>
          <BsStar className={`star-icon ${starIconClass}`} />{" "}
        </a>
        <a>
          <BsStar className={`star-icon ${starIconClass}`} />{" "}
        </a>
        <a>
          <BsStar className={`star-icon ${starIconClass}`} />{" "}
        </a>
      </div>
      <div className={`rating-submit-btn-wrapper ${ratingSubmitBtnWrapper}`}>
        <button className={`rating-submit-btn ${ratingSubmitBtnClass}`}>
          Submit
        </button>
      </div>
    </div>
  );
};
