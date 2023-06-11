import { Link } from "react-router-dom";
import "./Responsive.css";

export const ResponsivePage=()=>{

    return <>
    <ResponsiveNavbar/>
    <div className="components-header">
      <h2 className="component-heading">Components</h2>
      <a href="/" className=" components-links">Button</a>
      <a href="/" className="  components-links">Input</a>
      <a href="/" className=" components-links">Navbar</a>
      <a href="/" className=" components-links">Avatar</a>
      <a href="/" className="components-links">List</a>      
    </div>
    </> 
}

export const ResponsiveNavbar = (props) => {
    const { href, name } = props;
    return (
      <div className="responsive-navbar-wrapper">
        <input type="button" id="resposive-toggle-btn"/>
        <label for="resposive-toggle-btn"></label>
        <div  className="ui-logo-wrapper">
            <h2 className="ui-logo">UI</h2>
        </div>
        <div className="resposive-links-wrapper">
          <a href={href} className=" responsive-navbar-links">
            {name ? name : "Install"}
          </a>
          <a href={href} className="responsive-navbar-links">
            {name ? name : "Components"}
          </a>
        </div>
      </div>
    );
  };