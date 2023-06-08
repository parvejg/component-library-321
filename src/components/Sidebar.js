import { Link } from "react-router-dom";
import './Sidebar.css';
export const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <h2>Components</h2>
      <Link to="/button-page" className=" sidebar-links">Button</Link>
      <Link to="/input-page" className="  sidebar-links">Input</Link>
      <Link to="/navbar-page" className=" sidebar-links">Navbar</Link>
      <Link to="/avatar-page" className=" sidebar-links">Avatar</Link>
      <Link to="/list-page" className="sidebar-links">List</Link>
    </div>
  );
};
