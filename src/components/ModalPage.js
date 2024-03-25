import { Layout } from "./Layout";
import { SuccessfulModal, FormModal } from "./Modal";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

export const ModalPage = () => {
  return (
    <Layout>
      <div className="modal-page-wrapper">
        <h2>Successful Modal</h2>
        <SuccessfulModal />
        <div className="iframe-wrapper">
          <iframe
            title="successful-modal"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520SuccessfulModal%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520name%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522successfulModal-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522successful-modal-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522successful-icon-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CFiCheck%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522content-successful%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%2520className%253D%2522thanks-txt%2522%253E%257Bname%2520%253F%2520name%2520%253A%2520%2522Thank%2520You%21.%2522%257D%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%257Bname%2520%253F%2520name%2520%253A%2520%2522Your%2520details%2520has%2520been%2520successfully%2520submited.%2522%257D%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522successful-modal-btn%2522%253E%257Bname%2520%253F%2520name%2520%253A%2520%2522Ok%2522%257D%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
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
        <h2> Sign in Modal</h2>
        <FormModal />
        <div className="iframe-wrapper">
          <iframe
            title="form-modal"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520FormModal%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520name%252C%2520placeholder%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522form-Modal-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522inputs-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520className%253D%2522signIn-main-heading%2522%253E%257Bname%2520%253F%2520name%2520%253A%2520%2522Sign%2520in%2522%257D%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522sign-up-input%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520type%253D%2522text%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520placeholder%253D%257Bplaceholder%2520%253F%2520placeholder%2520%253A%2520%2522Enter%2520your%2520email%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522sign-up-input%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520type%253D%2522password%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520placeholder%253D%257Bplaceholder%2520%253F%2520placeholder%2520%253A%2520%2522Enter%2520your%2520password%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522form-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Csmall%253E%257Bname%2520%253F%2520name%2520%253A%2520%2522Forgot%2520Password%253F%2522%257D%253C%252Fsmall%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522form-btn-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522sign-btn%2522%253E%257Bname%2520%253F%2520name%2520%253A%2520%2522Sign%2520In%2522%257D%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%2520className%253D%2522or-sign-with-txt%2522%253E%257Bname%2520%253F%2520name%2520%253A%2520%2522or%2520sign%2520with%253A%2522%257D%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522contacts-icon-btn%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CFaFacebook%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CBsTwitter%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CAiOutlineGooglePlus%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Chr%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Csmall%2520className%253D%2522sign-up-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522Not%2520a%2520member%253F%2522%257D%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522not-a-member-txt%2522%253E%257Bname%2520%253F%2520name%2520%253A%2520%2522Sign%2520Up%2522%257D%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fsmall%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
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
          <Link to="/list-page" className="navigation-previous-btn-wrapper">
            <GrPrevious className="navigation-icon" />
          </Link>
          <Link to="/navbar-page" className="navigation-next-btn-wrapper">
            <GrNext className="navigation-icon" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};
