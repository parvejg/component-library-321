import "./Modal.css";
import { FiCheck } from "react-icons/fi";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
export const SuccessfulModal = (props) => {
  const { name } = props;
  return (
    <div className="successfulModal-container">
      <div className="successful-modal-wrapper">
        <div className="successful-icon-wrapper">
          <FiCheck />
        </div>
        <div className="content-successful">
          <h2 className="thanks-txt">{name ? name : "Thank You!."}</h2>
          <p>{name ? name : "Your details has been successfully submited."}</p>
        </div>
        <button className="successful-modal-btn">{name ? name : "Ok"}</button>
      </div>
    </div>
  );
};
export const FormModal = (props) => {
  const { name, placeholder } = props;
  return (
    <div>
      <div className="form-Modal-container">
        <div className="inputs-wrapper">
          <h1 className="signIn-main-heading">{name ? name : "Sign in"}</h1>
          <input
            className="sign-up-input"
            type="text"
            placeholder={placeholder ? placeholder : "Enter your email"}
          />
          <input
            className="sign-up-input"
            type="password"
            placeholder={placeholder ? placeholder : "Enter your password"}
          />
        </div>
        <div className="form-content">
          <small>{name ? name : "Forgot Password?"}</small>
        </div>
        <div className="form-btn-wrapper">
          <button className="sign-btn">{name ? name : "Sign In"}</button>
          <h4 className="or-sign-with-txt">{name ? name : "or sign with:"}</h4>
          <div className="contacts-icon-btn">
            <i>
              <FaFacebook />
            </i>
            <i>
              <BsTwitter />
            </i>
            <i>
              <AiOutlineGooglePlus />
            </i>
          </div>
        </div>
        <hr />
        <small className="sign-up-content">
          {name ? name : "Not a member?"}{" "}
          <span className="not-a-member-txt">{name ? name : "Sign Up"}</span>
        </small>
      </div>
    </div>
  );
};
