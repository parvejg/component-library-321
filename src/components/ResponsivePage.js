import { Link } from "react-router-dom";
import "./Responsive.css";
import { BiMenu } from "react-icons/bi";

export const ResponsivePage = () => {
  return (
    <>
  
      <div className="components-header">
        <h2 className="component-heading">Components</h2>
        <a href="/" className=" components-links">
          Button
        </a>
        <a href="/" className="  components-links">
          Input
        </a>
        <a href="/" className=" components-links">
          Navbar
        </a>
        <a href="/" className=" components-links">
          Avatar
        </a>
        <a href="/" className="components-links">
          List
        </a>
      </div>
    </>
  );
};
