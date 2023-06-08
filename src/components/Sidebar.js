import { Link } from "react-router-dom";
import './Sidebar.css';
export const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <h2>Components</h2>
      <Link to="/button-page" className=" sidebar-links">Buttons</Link>
      <Link to="/input-page" className="  sidebar-links">Inputs</Link>
      <Link to="/navbar-page" className=" sidebar-links">Navbars</Link>
      <Link to="/avatar-page" className=" sidebar-links">Avatar</Link>
    </div>
  );
};
