import { Link } from "react-router-dom";

export const LayoutSidebar = () => {
  return (
    <div className="layout-sidebar-wrapper">
      <h2>Components</h2>

      <Link to="/button-page" className="layout-sidebar-links">Buttons</Link>
      <Link to="/input-page" className="layout-sidebar-links">Inputs</Link>
      <Link to="/navbar-page" className="layout-sidebar-links">Navbars</Link>
      <Link to="/avatar-page" className="layout-sidebar-links">Avatar</Link>
    </div>
  );
};
