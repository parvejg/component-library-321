import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { LayoutNavbar } from "./Navbar";
export const Homepage = () => {
  const naviget = useNavigate();
  return (
    <div>
      <LayoutNavbar />

      <div className="home-page-content-wrapper">
        <h1>
          Welcome to my
          <span className="components-txt"> Components Library</span>
        </h1>
        <button
          onClick={() => naviget("/avatar-page")}
          className="home-page-links"
        >
          Get Start
        </button>
      </div>
    </div>
  );
};
