import { Layout } from "./Layout";

import { NotificationIconAvatar } from "./Avatar";
import { ImageAvatar } from "./Avatar";
import { PersonIconAvatar } from "./Avatar";
import { TLetterAvatar } from "./Avatar";
import "./Avatar.css";

export const AvatarPage = () => {
  return (
    <Layout>
      <div>
        <h2>Avatars</h2>
        <TLetterAvatar />
        <div></div>
        <PersonIconAvatar />
        {/* style={{
              width: "597px",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }} */}
        <NotificationIconAvatar />
        <div></div>
        <ImageAvatar />
        <div></div>
      </div>
    </Layout>
  );
};
