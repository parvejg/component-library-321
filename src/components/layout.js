import { LayoutNavbar } from "./layout-navbar"

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
        <div href="/" className="layout-footer">
            <a href="/" className="layout-footer-links layout-links">LinkedIn</a>
            <a href="/" className="layout-footer-links layout-links">Github</a>
            <a href="/" className="layout-footer-links layout-links">Instagram</a>
        
        </div>
    </div>
}