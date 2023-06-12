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
       
        <TeaIconNavbar />
        

        <LayoutNavbar />
        {/* <div>
            style={{
              width: "600px",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
          
        </div> */}
      </div>
    </Layout>
  );
};
