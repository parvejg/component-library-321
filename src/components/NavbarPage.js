import { Layout } from "./Layout";
import "./Navbar.css";
import "./NavbarPage.css";
import { TeaIconNavbar, TataLogoNavbar, LayoutNavbar } from "./Navbar";

export const NavbarPage = () => {
  return (
    <Layout>
      <div className="navbar-wrapper">
        <h2>Navbars</h2>
        <TataLogoNavbar />
        <div>
          <iframe
            title="tata-logo-navbar"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=const%2520TataLogoNavbar%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520%2520href%252C%2520tataLogoNavbarWrapperClass%252CtataLogoWrapperClass%252CtataLogoClass%2520%252CtataLinksWrapperClass%2520%252CtataMainLinksClass%2520%2520%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560tata-logo-navbar-wrapper%2520%2524%257BtataLogoNavbarWrapperClass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560tata-logo-wrapper%2520%2524%257BtataLogoWrapperClass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%257B%2560tata-logo%2520%2524%257BtataLogoClass%257D%2560%257D%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520TATA%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560tata-links-wrapper%2520%2524%257BtataLinksWrapperClass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%2520className%253D%257B%2560tata-main-Links%2520%2524%257BtataMainLinksClass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Link%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%2520className%253D%257B%2560tata-main-Links%2520%2524%257BtataMainLinksClass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Download%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%2520className%253D%257B%2560tata-main-Links%2520%2524%257BtataMainLinksClass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Blog%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "600px",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <TeaIconNavbar />
        <div>
          <iframe
            title="tea-logo-navbar"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=const%2520TeaIconNavbar%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520className%252C%2520href%252CteaNavbarHeaderClass%2520%252CteaLogoLinkClass%2520%252CteaIconClass%2520%252CteaNavbarLinksClass%2520%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560tea-Navbar-header%2520%2524%257BteaNavbarHeaderClass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%257B%2560tea-logo-link%2520%2524%257BteaLogoLinkClass%257D%2560%257D%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CSlCup%2520className%253D%257B%2560tea-icon%2520%2524%257BclassName%257D%2560%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560tea-link-wrapper%2520%2524%257BteaIconClass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%257B%2560teaNavbar-links%2520%2524%257BteaNavbarLinksClass%257D%2560%257D%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Home%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%257B%2560teaNavbar-links%2520%2524%257BteaNavbarLinksClass%257D%2560%257D%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Pages%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%257B%2560teaNavbar-links%2520%2524%257BteaNavbarLinksClass%257D%2560%257D%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Gallery%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%257B%2560teaNavbar-links%2520%2524%257BteaNavbarLinksClass%257D%2560%257D%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Contact%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%257B%2560teaNavbar-links%2520%2524%257BteaNavbarLinksClass%257D%2560%257D%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520About%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%257B%2560teaNavbar-links%2520%2524%257BteaNavbarLinksClass%257D%2560%257D%2520href%253D%257Bhref%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Menu%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "600px",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>

        <LayoutNavbar />
        <div>
          <iframe
            title="layout-navbar"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520LayoutNavbar%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520className%252C%2520href%2520%252C%2520layoutNavbarWrapperClass%252C%2520uiNavbarLogoClass%252C%2520navbarLinksWrapperClass%250A%2520%2520%252C%2520layoutNavbarLinksClass%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560layout-navbar-wrapper%2520%2524%257BlayoutNavbarWrapperClass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%253Ch2%2520className%253D%257B%2560ui-navbar-logo%2520%2524%257BuiNavbarLogoClass%257D%2560%257D%253EUI%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560navbar-links-wrapper%2520%2524%257BnavbarLinksWrapperClass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520href%253D%257Bhref%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%2560layout-navbar-links%2520layout-links%2520%2524%257BlayoutNavbarLinksClass%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Install%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520href%253D%257Bhref%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%2560layout-navbar-links%2520layout-links%2520%2524%257BlayoutNavbarLinksClass%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Components%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "600px",
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
