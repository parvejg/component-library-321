import React from 'react'
import { Layout } from "./Layout";
import { DatesRating } from "./RatingCard";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
export const RatingPage = () => {
  return (
    <Layout>
      <div className="rating-main-wrapper">
        <h2>Rating Card</h2>
        <div className="iframe-wrapper iframe-wrapper-rating">
          <DatesRating />

          <iframe
            title="dates-img-card"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520DatesRating%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520src%252C%2520name%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522rating-dates-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522dates-img-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522dates-img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253F%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253A%2520%2522https%253A%252F%252Fimages.unsplash.com%252Fphoto-1537201872643-ff006e1f016f%253Fixlib%253Drb-4.0.3%2526ixid%253DM3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0ZXN8ZW58MHx8MHx8fDA%25253D%2526auto%253Dformat%2526fit%253Dcrop%2526w%253D500%2526q%253D60%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522rating-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CBsStar%2520className%253D%2522star-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CBsStar%2520className%253D%2522star-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CBsStar%2520className%253D%2522star-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CBsStar%2520className%253D%2522star-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CBsStar%2520className%253D%2522star-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522rating-submit-btn%2522%253E%257Bname%2520%253F%2520name%2520%253A%2520%2522Submit%2522%257D%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B%29%253B%250A%257D%253B"
            style={{
              width: "inherit",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <div className="navigation-btn-container">
          <Link to="/navbar-page" className="navigation-previous-btn-wrapper">
            <GrPrevious className="navigation-icon" />
          </Link>
          <Link to="/toast-page" className="navigation-next-btn-wrapper">
            <GrNext className="navigation-icon" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};
