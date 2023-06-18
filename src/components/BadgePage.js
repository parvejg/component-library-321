import {
  NotificationBadge,
  CartBadge,
  MessageBadge,
  FolderBadge,
} from "./Badge";
import { Layout } from "./Layout";
export const BadgePage = () => {
  return (
    <Layout>
      <div className="iframe-wrapper">
        <NotificationBadge />
        <div className="iframe-wrapper">
          <iframe
            title="notification-badge"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520NotificationBadge%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520NotificationWrapperClass%252C%2520currentValue%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%250A%2520%2520%2520%2520%2520%2520className%253D%257B%2560notification-icon-Wrapper%2520%2524%257BNotificationWrapperClass%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520currentValue%253D%257BcurrentValue%2520%253F%2520currentValue%2520%253A%2520%25226%2522%257D%250A%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%253Cli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CTfiBell%2520className%253D%2522bell-notification%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
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
        <CartBadge />
        <div className="iframe-wrapper">
          <iframe
            title="cart-badge"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520CartBadge%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520currentValue%252CcartIconWrapperClass%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%250A%2520%2520%2520%2520%2520%2520className%253D%257B%2560cart-icon-Wrapper%2520%2524%257BcartIconWrapperClass%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520currentValue%253D%257BcurrentValue%2520%253F%2520currentValue%2520%253A%2520%252232%2522%257D%250A%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%253Cli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CBsCart3%2520className%253D%2522cart-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
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
        <MessageBadge />
        <div className="iframe-wrapper">
          <iframe
            title="message-badge"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520MessageBadge%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520currentValue%252CmessageIconWrapperClass%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%250A%2520%2520%2520%2520%2520%2520className%253D%257B%2560message-icon-Wrapper%2520%2524%257BmessageIconWrapperClass%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520currentValue%253D%257BcurrentValue%2520%253F%2520currentValue%2520%253A%2520%252212%2522%257D%250A%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%253Cli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CAiOutlineMessage%2520className%253D%2522message-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B%250A"
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
        <FolderBadge />
        <div className="iframe-wrapper">
          <iframe
            title="folder-badge"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%250Aexport%2520const%2520FolderBadge%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520currentValue%252CfolderIconWrapperClass%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%250A%2520%2520%2520%2520%2520%2520className%253D%257B%2560folder-icon-Wrapper%2520%2524%257BfolderIconWrapperClass%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520currentValue%253D%257BcurrentValue%2520%253F%2520currentValue%2520%253A%2520%252222%2522%257D%250A%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%253Cli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CAiOutlineFolder%2520className%253D%2522folder-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
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
      </div>
    </Layout>
  );
};
