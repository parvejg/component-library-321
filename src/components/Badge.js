import "./Badge.css";
import { TfiBell } from "react-icons/tfi";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineFolder } from "react-icons/ai";
export const NotificationBadge = (props) => {
  const { NotificationWrapper, currentValue } = props;
  return (
    <div
      className={`notification-icon-Wrapper ${NotificationWrapper}`}
      currentValue={currentValue ? currentValue : "6"}
    >
      <li>
        <TfiBell className="bell-notification" />
      </li>
    </div>
  );
};

export const CartBadge = (props) => {
  const { currentValue } = props;
  return (
    <div
      className="cart-icon-Wrapper"
      currentValue={currentValue ? currentValue : "32"}
    >
      <li>
        <BsCart3 className="cart-icon" />
      </li>
    </div>
  );
};

export const MessageBadge = (props) => {
  const { currentValue } = props;
  return (
    <div
      className="message-icon-Wrapper"
      currentValue={currentValue ? currentValue : "12"}
    >
      <li>
        <AiOutlineMessage className="message-icon" />
      </li>
    </div>
  );
};

export const FolderBadge = (props) => {
  const { currentValue } = props;
  return (
    <div
      className="folder-icon-Wrapper"
      currentValue={currentValue ? currentValue : "22"}
    >
      <li>
        <AiOutlineFolder className="folder-icon" />
      </li>
    </div>
  );
};
