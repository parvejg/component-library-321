import { LayoutNavbar } from "./Layout-navbar"
import { LayoutSidebar } from "./Layout-sidebar";
import { LayoutFooter } from "./layout-footer";


 export const Layout =({children})=>{
    return <div  className="layout-wrapper">
       <LayoutNavbar/>
        <div className="layout-body">
           <LayoutSidebar/>
            <div href="/" className="layout-content">{children}</div>
        </div>
      <LayoutFooter/>
    </div>
}