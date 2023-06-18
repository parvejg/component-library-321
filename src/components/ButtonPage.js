import { Layout } from "./Layout";
import { ElevatedButton } from "./Button.js";
import { TextBtn } from "./Button.js";
import { OutlineBtn } from "./Button.js";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
export const ButtonPage = () => {
  return (
    <Layout>
      <div>
        <h2> Buttons </h2>
        <ElevatedButton />
        <div className="iframe-wrapper">
          <iframe
            title="elevated-btn"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520ElevatedButton%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520name%252C%2520elevatedBtnClass%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cbutton%2520className%253D%257B%2560elevated-btn%2520%2524%257BelevatedBtnClass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522Elevated%2522%257D%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%29%253B%250A%257D%253B"
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
        <TextBtn />
        <div className="iframe-wrapper">
          <iframe
            title="txt-btn"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%2520export%2520const%2520TextBtn%2520%253D%28props%29%253D%253E%257B%250A%2520%2520%2520%2520const%2520%257Bname%252C%2520txtBtnClass%257D%2520%253D%2520props%250A%2520%2520%2520%2520return%28%2520%253Cbutton%2520className%253D%257B%2560txtBtn%2520%2524%257BtxtBtnClass%257D%2560%257D%253E%257Bname%2520%253F%2520name%253A%2520%2522Text%2520Btn%2522%257D%253C%252Fbutton%253E%250A%2520%2520%2520%2520%29%253B%250A%257D"
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
        <OutlineBtn />
        <div className="iframe-wrapper">
          <iframe
            title="outline-btn"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520OutlineBtn%2520%253D%2520%28props%29%253D%253E%257B%250A%2520%2520%2520%2520const%2520%257Bname%252CoutlineBtnClass%257D%2520%253D%2520props%250A%2520%2520%2520%2520return%2520%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%257B%2560outline-Btn%2520%2524%257BoutlineBtnClass%257D%2560%2520%2520%257D%253E%257Bname%2520%253F%2520name%253A%2520%2522Outline%2522%257D%253C%252Fbutton%253E%250A%2520%2520%2520%2520%29%250A%257D%253B"
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
        <div className="navigation-btn-container">
          <Link to="/badge-page" className="navigation-previous-btn-wrapper">
            <GrPrevious className="navigation-icon" />
          </Link>
          <Link to="/card-page" className="navigation-next-btn-wrapper">
            <GrNext className="navigation-icon" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};
