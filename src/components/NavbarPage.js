import { Layout } from "./Layout";
import "./Navbar.css";
import "./NavbarPage.css";
import {
  TeaIconNavbar,
  TataLogoNavbar,
  LayoutNavbar,
  ResponsiveHeader,
} from "./Navbar";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

export const NavbarPage = () => {
  return (
    <Layout>
      <div className="navbar-wrapper">
        <h2>Navbars</h2>
        <TataLogoNavbar />
        <div className="iframe-wrapper">
          <iframe
            title="tata-logo-navbar"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=javascript&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=const%2520TataLogoNavbar%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520href%252C%2520name%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522tata-logo-navbar-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522tata-logo-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%2522tata-logo%2522%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522TATA%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522%2520tata-links-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%2520className%253D%2522tata-main-Links%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522Link%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%2520className%253D%2522tata-main-Links%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522Download%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%2520className%253D%2522tata-main-Links%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522Blog%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253Beturn%2520go%28f%252C%2520seed%252C%2520%255B%255D%29%250A%257D"
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
        <TeaIconNavbar />
        <div className="iframe-wrapper">
          <iframe
            title="tea-icon-navbar"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=const%2520TeaIconNavbar%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520href%252C%2520name%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522tea-Navbar-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%2522tea-logo-link%2522%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CSlCup%2520className%253D%2522tea-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522tea-link-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%2522teaNavbar-links%2522%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522Home%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%2522teaNavbar-links%2522%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522Pages%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%2522teaNavbar-links%2522%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522Gallery%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%2522teaNavbar-links%2522%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522Contact%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%2522teaNavbar-links%2522%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522About%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%2522teaNavbar-links%2522%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522Menu%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
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
        <h2>UI Navbar</h2>
        <LayoutNavbar />
        <div className="iframe-wrapper">
          <iframe
            title="layout-navbar"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520LayoutNavbar%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520href%252C%2520name%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522layout-navbar-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ch2%2520className%253D%2522ui-navbar-logo%2522%253EUI%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522navbar-links-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%2520className%253D%2522layout-navbar-links%2520layout-links%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522Install%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%2520className%253D%2522layout-navbar-links%2520layout-links%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522Components%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
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
        <h2>Responsive Navbar</h2>
        <ResponsiveHeader />
        <div className="iframe-wrapper">
          <iframe
            title="responsive-navbar"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=javascript&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520ResponsiveHeader%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520linkName%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522main-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522responsive-header-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522header-logo%2522%253ELOGO%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522links-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523Home%2522%2520className%253D%2522%2520home%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257BlinkName%2520%253F%2520linkName%2520%253A%2520%2522Home%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523Contact%2522%2520className%253D%2522responsive-links%2520contact%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257BlinkName%2520%253F%2520linkName%2520%253A%2520%2522Contact%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523About%2522%2520className%253D%2522responsive-links%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257BlinkName%2520%253F%2520linkName%2520%253A%2520%2522About%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
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
          <Link to="/modal-page" className="navigation-previous-btn-wrapper">
            <GrPrevious className="navigation-icon" />
          </Link>
          <Link to="/rating-page" className="navigation-next-btn-wrapper">
            <GrNext className="navigation-icon" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};
