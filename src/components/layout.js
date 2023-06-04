import { LayoutNavbar } from "./Layout-navbar"
import './Layout-navbar.css';
import { LayoutFooter } from "./layout-footer";

 export const Layout =()=>{
    return <div  className="layout-wrapper">
       <LayoutNavbar/>
        <div className="layout-body">
            <div className="layout-sidebar">
                <h2>Components</h2>
                <a href="/" className="layout-sidebar-component-links layout-links">Avatar</a>
                <a href="/" className="layout-sidebar-component-links layout-links">Button</a>
                <a href="/" className="layout-sidebar-component-links layout-links">Input</a>
                <a href="/" className="layout-sidebar-component-links layout-links">Card</a>
                 <a href="/" className="layout-sidebar-component-links layout-links">button</a>
                 <a href="/" className="layout-sidebar-component-links layout-links">button</a>
            </div>
            <div href="/" className="layout-content">contents</div>
        </div>
      <LayoutFooter/>
    </div>
}