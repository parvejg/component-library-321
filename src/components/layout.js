import { LayoutNavbar } from "./Layout-navbar"
import './Layout-navbar.css';
import { LayoutSidebar } from "./Layout-sidebar";
import { LayoutFooter } from "./layout-footer";

 export const Layout =()=>{
    return <div  className="layout-wrapper">
       <LayoutNavbar/>
        <div className="layout-body">
           <LayoutSidebar/>
            <div href="/" className="layout-content">contents</div>
        </div>
      <LayoutFooter/>
    </div>
}