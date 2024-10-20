import React from 'react'
import { TbLetterT } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
export const TLetterAvatar = (props) => {
  const { href, tAvatarIconClass } = props;
  return (
    <div className="t-avatar-wrapper">
      <a href={href}>
        <TbLetterT className={`t-avatar-icon ${tAvatarIconClass}`} />
      </a>
    </div>
  );
};
export const PersonIconAvatar = (props) => {
  const { href,  personAvatarIconClass } = props;
  return (
    <div>
      <a href={href} >
        <RxAvatar className={`person-avatar-icon ${personAvatarIconClass}`} />
      </a>
    </div>
  );
};

export const NotificationIconAvatar = (props) => {
  const { href } = props;
  return (
    <div>
      <a href={href}>
        <IoIosNotificationsOutline className="notification-avatar-icon" />
      </a>
    </div>
  );
};

export const ImageAvatar = (props) => {
  const { src, imageAvatarClass, alt } = props;
  return (
    <div>
      <img
        alt={alt ? alt : ""}
        className={`image-avatar ${imageAvatarClass}`}
        src={
          src
            ? src
            : "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        }
      />
    </div>
  );
};
