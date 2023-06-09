import { TbLetterT } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
export const TLetterAvatar = (props) => {
  const { className, href } = props;
  return (
    <div className={`t-avatar-header ${className}`}>
      <a href={href}>
        <TbLetterT className={`t-avatar-icon ${className}`} />
      </a>
    </div>
  );
};
export const PersonIconAvatar = (props) => {
  const { className, href } = props;
  return (
    <div className={`person-avatar-header ${className}`}>
      <a href={href}>
        <RxAvatar className={`person-avatar-icon ${className}`} />
      </a>
    </div>
  );
};

export const NotificationIconAvatar = (props) => {
  const { className, href } = props;
  return (
    <div className={`notification-avatar-header ${className}`}>
      <a href={href}>
        <IoIosNotificationsOutline
          className={`notification-avatar-icon ${className}`}
        />
      </a>
    </div>
  );
};

export const ImageAvatar = (props) => {
  const { className, src } = props;
  return (
    <div className={`image-avatar-header ${className}`}>
      <img alt=""
        className={`image-avatar ${className}`}
        src={ src ? src: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}
      />
    </div>
  );
};
