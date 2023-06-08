import { SlCup } from "react-icons/sl";
import './Navbar.css';

const TataLogoNavbar = () => {
  return (
    <div className="tata-logo-navbar-wrapper">
      <div className="tata-logo-header">
        <a className="tata-logo" href="/">TATA</a>
      </div>
      <div className="tata-links-wrapper">
        <a href="/" className="tata-main-Links">
          Link
        </a>
        <a href="/" className="tata-main-Links">
          Download
        </a>
        <a href="/" className="tata-main-Links">
          Blog
        </a>
      </div>
    </div>
  );
};
const TeaIconNavbar =()=>{
  return (
    <div className="tea-Navbar-header">
        <a className="tea-logo-link" href="/" ><SlCup className="tea-icon"/></a>

      <div className="tea-link-wrapper">
        <a className="teaNavbar-links" href="/">Home</a>
        <a className="teaNavbar-links" href="/">Pages</a>
        <a className="teaNavbar-links" href="/">Gallery</a>
        <a className="teaNavbar-links" href="/">Contact</a>
        <a className="teaNavbar-links" href="/">About</a>
        <a className="teaNavbar-links" href="/">Menu</a>
      </div>
    </div>
  )
}
export const LayoutNavbar=()=>{
    return  <div className="layout-navbar-wrapper">
            <h2>UI</h2>
            <div className="navbar-links-wrapper">
            <a href="/" className="layout-navbar-links layout-links">Install</a>
            <a href="/"className="layout-navbar-links layout-links">Components</a>
            </div>
        </div>
}




export { TataLogoNavbar,  TeaIconNavbar };
