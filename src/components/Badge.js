import React from 'react'
import "./Badge.css";
import { TfiBell } from "react-icons/tfi";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineFolder } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
export const NotificationBadge = (props) => {
  const { NotificationWrapperClass, currentValue } = props;
  return (
    <div
      className={`notification-icon-Wrapper ${NotificationWrapperClass}`}
      currentValue={currentValue ? currentValue : "6"}
    >
      <li>
        <TfiBell className="bell-notification" />
      </li>
    </div>
  );
};

export const CartBadge = (props) => {
  const { currentValue, cartIconWrapperClass } = props;
  return (
    <div
      className={`cart-icon-Wrapper ${cartIconWrapperClass}`}
      currentValue={currentValue ? currentValue : "32"}
    >
      <li>
        <BsCart3 className="cart-icon" />
      </li>
    </div>
  );
};

export const MessageBadge = (props) => {
  const { currentValue, messageIconWrapperClass } = props;
  return (
    <div
      className={`message-icon-Wrapper ${messageIconWrapperClass}`}
      currentValue={currentValue ? currentValue : "12"}
    >
      <li>
        <AiOutlineMessage className="message-icon" />
      </li>
    </div>
  );
};

export const FolderBadge = (props) => {
  const { currentValue, folderIconWrapperClass } = props;
  return (
    <div
      className={`folder-icon-Wrapper ${folderIconWrapperClass}`}
      currentValue={currentValue ? currentValue : "22"}
    >
      <li>
        <AiOutlineFolder className="folder-icon" />
      </li>
    </div>
  );
};
export const InstagramBadge = () => {
  return (
    <div currentValue="23" className="insta-icon-wrapper">
      <li>
        <AiFillInstagram className="insta-icon" />
      </li>
    </div>
  );
};
