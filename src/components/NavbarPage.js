import { Layout } from "./Layout";
import './Navbar.css';
import './NavbarPage.css';
import {  TeaIconNavbar, TataLogoNavbar,LayoutNavbar} from './Navbar';


export const NavbarPage = () => {
  return (
    <Layout>
      <div className="navbar-wrapper">
        <h2>Navbars</h2>
        <TataLogoNavbar />
        <div></div>
        <TeaIconNavbar />
        <div></div>
        <LayoutNavbar/>
        <div></div>
      </div>
    </Layout>
  );
};
