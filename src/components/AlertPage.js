import { AlertError, SecurityAlert, SuccessfulAlert } from "./Alert";
import { Layout } from "./Layout";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
export const AlertPage = () => {
  return (
    <Layout>
      <div className="iframe-wrapper">
        <h2> Successful Alert</h2>
        <SuccessfulAlert />
        <div className="iframe-wrapper">
          <iframe
            title="successful-alert"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520SuccessfulAlert%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257BsuccessfulIconClass%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522successful-icon-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CAiFillCheckCircle%2520className%253D%257B%2560successful-icon%2520%2524%257BsuccessfulIconClass%257D%2560%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
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
        <h2> Security Alert</h2>
        <SecurityAlert />
        <div className="iframe-wrapper">
          <iframe
            title="security-alert"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520SecurityAlert%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520securityIconClass%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522security-icon-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CAiFillAlert%2520className%253D%257B%2560security-icon%2522%2520%2524%257BsecurityIconClass%257D%2560%257D%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
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
        <h2> Error Alert</h2>
        <AlertError />
        <div className="iframe-wrapper">
          <iframe
            title="error-alert"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520AlertError%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520const%2520%257B%2520errorIconClass%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522error-icon-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CGoAlert%2520className%253D%257B%2560error-icon%2520%2524%257BerrorIconClass%257D%2560%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
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
          <Link to="/avatar-page" className="navigation-previous-btn-wrapper">
            <GrPrevious className="navigation-icon" />
          </Link>
          <Link to="/badge-page" className="navigation-next-btn-wrapper">
            <GrNext className="navigation-icon" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};
