import { SlCup } from "react-icons/sl";
import "./Navbar.css";

const TataLogoNavbar = (props) => {
  const { href, name } = props;
  return (
    <div className="tata-logo-navbar-wrapper">
      <div className="tata-logo-wrapper">
        <a className="tata-logo" href={href}>
          {name ? name : "TATA"}
        </a>
      </div>
      <div className=" tata-links-wrapper">
        <a href={href} className="tata-main-Links">
          {name ? name : "Link"}
        </a>
        <a href={href} className="tata-main-Links">
          {name ? name : "Download"}
        </a>
        <a href={href} className="tata-main-Links">
          {name ? name : "Blog"}
        </a>
      </div>
    </div>
  );
};
const TeaIconNavbar = (props) => {
  const { href, name } = props;
  return (
    <div className="tea-Navbar-wrapper">
      <a className="tea-logo-link" href={href}>
        <SlCup className="tea-icon" />
      </a>

      <div className="tea-link-wrapper">
        <a className="teaNavbar-links" href={href}>
          {name ? name : "Home"}
        </a>
        <a className="teaNavbar-links" href={href}>
          {name ? name : "Pages"}
        </a>
        <a className="teaNavbar-links" href={href}>
          {name ? name : "Gallery"}
        </a>
        <a className="teaNavbar-links" href={href}>
          {name ? name : "Contact"}
        </a>
        <a className="teaNavbar-links" href={href}>
          {name ? name : "About"}
        </a>
        <a className="teaNavbar-links" href={href}>
          {name ? name : "Menu"}
        </a>
      </div>
    </div>
  );
};
export const LayoutNavbar = (props) => {
  const { href, name } = props;
  return (
    <div className="layout-navbar-wrapper">
      <h2 className="ui-navbar-logo">UI</h2>
      <div className="navbar-links-wrapper">
        <a href="/avatar-page" className="layout-navbar-links layout-links">
          {name ? name : "Install"}
        </a>
        <a href="/avatar-page" className="layout-navbar-links layout-links">
          {name ? name : "Components"}
        </a>
      </div>
    </div>
  );
};
export const ResponsiveHeader = (props) => {
  const { linkName } = props;
  return (
    <div className="main-wrapper">
      <div className="responsive-header-container">
        <div className="header-logo">LOGO</div>
        <div className="links-wrapper">
          <a href="#Home" className=" home">
            {linkName ? linkName : "Home"}
          </a>
          <a href="#Contact" className="responsive-links contact">
            {linkName ? linkName : "Contact"}
          </a>
          <a href="#About" className="responsive-links">
            {linkName ? linkName : "About"}
          </a>
        </div>
      </div>
    </div>
  );
};
export { TataLogoNavbar, TeaIconNavbar };
