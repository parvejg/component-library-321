import { GoAlert } from "react-icons/go";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillAlert } from "react-icons/ai";
import "./Alert.css";
export const AlertError = (props) => {
    const {errorIconWrapperClass, errorIconClass } = props;
  return (
    <div>
      <p className={`error-icon-wrapper ${errorIconWrapperClass}`}>
        <GoAlert className={`error-icon ${errorIconClass}`} />
      </p>
    </div>
  );
};
export const SuccessfulAlert = (props) => {
  const {successfulIconClass, successfulWrapperClass} = props;
  return (
    <div>
      <p className={`successful-icon-wrapper ${successfulWrapperClass}`}>
        <AiFillCheckCircle className={`successful-icon ${successfulIconClass}`} />
      </p>
    </div>
  );
};
export const SecurityAlert = (props) => {
  const {SecurityAlertWrapperClass, securityIconClass} = props;
  return (
    <div>
      <p className={`security-icon-wrapper ${SecurityAlertWrapperClass}`}>
        <AiFillAlert className={`security-icon" ${securityIconClass}`}/>
      </p>
    </div>
  );
};
