import "./Toast.css";
import { ImWarning } from "react-icons/im";
import { BsInfoCircle } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";
import { BiCheck } from "react-icons/bi";
export const WarningToast = (props) => {
  const { warningToastIconWrapperClass, warningIconClass } = props;
  return (
    <div>
      <p
        className={`warning-toast-icon-wrapper ${warningToastIconWrapperClass}`}
      >
        <ImWarning className={`warning-toast-icon ${warningIconClass}`} />
      </p>
    </div>
  );
};
export const InfoToast = (props) => {
  const { infoToastIconWrapperClass, infoToastIconClass } = props;
  return (
    <div>
      <p className={`info-toast-icon-wrapper ${infoToastIconWrapperClass}`}>
        <BsInfoCircle className={`info-toast-icon ${infoToastIconClass}`} />
      </p>
    </div>
  );
};
export const DangerToast = (props) => {
  const { dangerToastIconWrapperClass, dangerToastIconClass } = props;
  return (
    <div>
      <p className={`danger-toast-icon-wrapper ${dangerToastIconWrapperClass}`}>
        <CgDanger className={`danger-toast-icon ${dangerToastIconClass}`} />
      </p>
    </div>
  );
};
export const SuccessfulToast = (props) => {
  const { successfulToastIconWrapperClass, successfulToastIconClass } = props;
  return (
    <div>
      <p
        className={`successful-toast-icon-wrapper ${successfulToastIconWrapperClass}`}
      >
        <BiCheck
          className={`successful-toast-icon ${successfulToastIconClass}`}
        />
      </p>
    </div>
  );
};
