import { SlCup } from "react-icons/sl";
import "./Navbar.css";

const TataLogoNavbar = (props) => {
  const { className, href } = props;
  return (
    <div className={`tata-logo-navbar-wrapper ${className}`}>
      <div className={`tata-logo-header ${className}`}>
        <a className={`tata-logo ${className}`} href={href}>
          TATA
        </a>
      </div>
      <div className={`tata-links-wrapper ${className}`}>
        <a href={href} className={`tata-main-Links ${className}`}>
          Link
        </a>
        <a href={href} className={`tata-main-Links ${className}`}>
          Download
        </a>
        <a href={href} className={`tata-main-Links ${className}`}>
          Blog
        </a>
      </div>
    </div>
  );
};
const TeaIconNavbar = (props) => {
  const { className, href } = props;
  return (
    <div className={`tea-Navbar-header ${className}`}>
      <a className={`tea-logo-link ${className}`} href={href}>
        <SlCup className={`tea-icon ${className}`} />
      </a>

      <div className={`tea-link-wrapper ${className}`}>
        <a className={`teaNavbar-links ${className}`} href={href}>
          Home
        </a>
        <a className={`teaNavbar-links ${className}`} href={href}>
          Pages
        </a>
        <a className={`teaNavbar-links ${className}`} href={href}>
          Gallery
        </a>
        <a className={`teaNavbar-links ${className}`} href={href}>
          Contact
        </a>
        <a className={`teaNavbar-links ${className}`} href={href}>
          About
        </a>
        <a className={`teaNavbar-links ${className}`} href={href}>
          Menu
        </a>
      </div>
    </div>
  );
};
export const LayoutNavbar = (props) => {
  const { className, href } = props;
  return (
    <div className={`layout-navbar-wrapper ${className}`}>
      <h2 className={`ui-navbar-logo ${className}`}>UI</h2>
      <div className={`navbar-links-wrapper ${className}`}>
        <a
          href={href}
          className={`layout-navbar-links layout-links ${className}`}
        >
          Install
        </a>
        <a
          href={href}
          className={`layout-navbar-links layout-links ${className}`}
        >
          Components
        </a>
      </div>
    </div>
  );
};

export { TataLogoNavbar, TeaIconNavbar };
