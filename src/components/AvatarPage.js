import { Layout } from "./Layout";

import { NotificationIconAvatar } from "./Avatar";
import { ImageAvatar } from "./Avatar";
import { PersonIconAvatar } from "./Avatar";
import { TLetterAvatar } from "./Avatar";
import { Link } from "react-router-dom";
import {GrNext} from "react-icons/gr";
import "./Avatar.css";

export const AvatarPage = () => {
  return (
    <Layout>
      <div>
        <h2>Avatars</h2>
        <TLetterAvatar />
        <div className="iframe-wrapper">
          <iframe
            title="T-letter-avatar"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520TLetterAvatar%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520href%252C%2520tAvatarIconClass%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522t-avatar-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CTbLetterT%2520className%253D%257B%2560t-avatar-icon%2520%2524%257BtAvatarIconClass%257D%2560%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "inherit", 
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <PersonIconAvatar />
        <div className="iframe-wrapper">
          <iframe
            title="Person-icon-avatar"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520PersonIconAvatar%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520href%252C%2520%2520personAvatarIconClass%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CRxAvatar%2520className%253D%257B%2560person-avatar-icon%2520%2524%257BpersonAvatarIconClass%257D%2560%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "inherit",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>

        <NotificationIconAvatar />
        <div className="iframe-wrapper">
          <iframe
            title="Notification-avatar"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520NotificationIconAvatar%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520href%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CIoIosNotificationsOutline%2520className%253D%2522notification-avatar-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "inherit",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <ImageAvatar />
        <div className="iframe-wrapper">
          <iframe
            title="image-avatar"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520ImageAvatar%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520src%252C%2520imageAvatarClass%252C%2520alt%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%257Balt%2520%253F%2520alt%2520%253A%2520%2522%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%2560image-avatar%2520%2524%257BimageAvatarClass%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520src%253D%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253F%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253A%2520%2522https%253A%252F%252Fimages.unsplash.com%252Fphoto-1480429370139-e0132c086e2a%253Fixlib%253Drb-4.0.3%2526ixid%253DM3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww%2526auto%253Dformat%2526fit%253Dcrop%2526w%253D500%2526q%253D60%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "inherit",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <div className="navigation-next-btn-container">
          <Link to="/badge-page" className='navigation-next-btn-wrapper'>
          <GrNext className="navigation-icon"/>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
