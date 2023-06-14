import { GoAlert } from "react-icons/go";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillAlert } from "react-icons/ai";
import "./Alert.css";
export const AlertError = (props) => {
    const { errorIconClass } = props;
  return (
    <div>
      <p className="error-icon-wrapper">
        <GoAlert className={`error-icon ${errorIconClass}`} />
      </p>
    </div>
  );
};
export const SuccessfulAlert = (props) => {
  const {successfulIconClass} = props;
  return (
    <div>
      <p className="successful-alert-icon-wrapper">
        <AiFillCheckCircle className={`successful-alert-icon ${successfulIconClass}`} />
      </p>
    </div>
  );
};
export const SecurityAlert = (props) => {
  const { securityIconClass} = props;
  return (
    <div>
      <p className="security-icon-wrapper">
        <AiFillAlert className={`security-icon" ${securityIconClass}`}/>
      </p>
    </div>
  );
};
