import { SlCup } from "react-icons/sl";
import "./Navbar.css";

const TataLogoNavbar = (props) => {
  const {  href, tataLogoNavbarWrapperClass,tataLogoWrapperClass,tataLogoClass ,tataLinksWrapperClass ,tataMainLinksClass   } = props;
  return (
    <div className={`tata-logo-navbar-wrapper ${tataLogoNavbarWrapperClass}`}>
      <div className={`tata-logo-wrapper ${tataLogoWrapperClass}`}>
        <a className={`tata-logo ${tataLogoClass}`} href={href}>
          TATA
        </a>
      </div>
      <div className={`tata-links-wrapper ${tataLinksWrapperClass}`}>
        <a href={href} className={`tata-main-Links ${tataMainLinksClass}`}>
          Link
        </a>
        <a href={href} className={`tata-main-Links ${tataMainLinksClass}`}>
          Download
        </a>
        <a href={href} className={`tata-main-Links ${tataMainLinksClass}`}>
          Blog
        </a>
      </div>
    </div>
  );
};
const TeaIconNavbar = (props) => {
  const { className, href,teaNavbarHeaderClass ,teaLogoLinkClass ,teaIconClass ,teaNavbarLinksClass  } = props;
  return (
    <div className={`tea-Navbar-header ${teaNavbarHeaderClass}`}>
      <a className={`tea-logo-link ${teaLogoLinkClass}`} href={href}>
        <SlCup className={`tea-icon ${className}`} />
      </a>

      <div className={`tea-link-wrapper ${teaIconClass}`}>
        <a className={`teaNavbar-links ${teaNavbarLinksClass}`} href={href}>
          Home
        </a>
        <a className={`teaNavbar-links ${teaNavbarLinksClass}`} href={href}>
          Pages
        </a>
        <a className={`teaNavbar-links ${teaNavbarLinksClass}`} href={href}>
          Gallery
        </a>
        <a className={`teaNavbar-links ${teaNavbarLinksClass}`} href={href}>
          Contact
        </a>
        <a className={`teaNavbar-links ${teaNavbarLinksClass}`} href={href}>
          About
        </a>
        <a className={`teaNavbar-links ${teaNavbarLinksClass}`} href={href}>
          Menu
        </a>
      </div>
    </div>
  );
};
export const LayoutNavbar = (props) => {
  const {  href ,layoutNavbarHeaderClass, uiNavbarLogoClass ,navbarLinksWrapperClass, layoutLinksClass} = props;
  return (
    <div className={`layout-navbar-header ${layoutNavbarHeaderClass}`}>
      <h2 className={`ui-navbar-logo ${uiNavbarLogoClass}`}>UI</h2>
      <div className={`navbar-links-wrapper ${navbarLinksWrapperClass}`}>
        <a
          href={href}
          className={`layout-navbar-links layout-links ${layoutLinksClass}`}
        >
          Install
        </a>
        <a
          href={href}
          className={`layout-navbar-links layout-links ${layoutLinksClass}`}
        >
          Components
        </a>
      </div>
    </div>
  );
};

export { TataLogoNavbar, TeaIconNavbar };
