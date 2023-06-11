import { Link } from "react-router-dom";
import './Sidebar.css';
export const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <h2 className="components-heading">Components</h2>
      <Link to="/button-page" className=" sidebar-links">Button</Link>
      <Link to="/input-page" className="  sidebar-links">Input</Link>
      <Link to="/navbar-page" className=" sidebar-links">Navbar</Link>
      <Link to="/avatar-page" className=" sidebar-links">Avatar</Link>
      <Link to="/list-page" className="sidebar-links">List</Link>
      <Link to="/card-page" className="sidebar-links">Card</Link>
      <Link to="/alert-page" className="sidebar-links">Alert</Link>
      <Link to="/rating-page" className="sidebar-links">Rating</Link>
    </div>
  );
};
