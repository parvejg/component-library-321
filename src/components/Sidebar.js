import { Link } from "react-router-dom";
import "./Sidebar.css";
export const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <h2 className="components-heading">Components</h2>
      <Link to="/avatar-page" className=" sidebar-links">
        Avatar
      </Link>
      <Link to="/alert-page" className="sidebar-links">
        Alert
      </Link>
      <Link to="/badge-page" className="sidebar-links">
        Badge
      </Link>
      <Link to="/button-page" className=" sidebar-links">
        Button
      </Link>
      <Link to="/card-page" className="sidebar-links">
        Card
      </Link>
      <Link to="/image-page" className="sidebar-links">
        Image
      </Link>
      <Link to="/input-page" className="  sidebar-links">
        Input
      </Link>
      <Link to="/list-page" className="sidebar-links">
        List
      </Link>
      <Link to="/modal-page" className="sidebar-links">
        Modal
      </Link>
      <Link to="/navbar-page" className=" sidebar-links">
        Navbar
      </Link>

      <Link to="/rating-page" className="sidebar-links">
        Rating
      </Link>

      <Link to="/toast-page" className="sidebar-links">
        Toast
      </Link>
    </div>
  );
};
