import "./Toast.css";
import { ImWarning } from "react-icons/im";
import { BsInfoCircle } from "react-icons/bs";
import {CgDanger} from "react-icons/cg"
import {BiCheck} from "react-icons/bi"
export const WarningToast = () => {
  return (
    <div>
      <p className="warning-toast-icon-wrapper">
        <ImWarning className="warning-toast-icon" />
      </p>
    </div>
  );
};
export const InfoToast = () => {
  return (
    <div>
      <p className="info-toast-icon-wrapper">
        <BsInfoCircle className="info-toast-icon" />
      </p>
    </div>
  );
};
export const DangerToast = () => {
  return (
    <div>
      <p className="danger-toast-icon-wrapper">
        <CgDanger className="danger-toast-icon" />
      </p>
    </div>
  );
};
export const SuccessfulToast = () => {
    return (
      <div>
        <p className="successful-toast-icon-wrapper">
          <BiCheck className="successful-toast-icon" />
        </p>
      </div>
    );
  };
