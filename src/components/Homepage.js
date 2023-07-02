import "./HomePage.css"
import { LayoutNavbar } from "./Navbar"
export const Homepage=()=>{
    return <div>
        <LayoutNavbar />

        <div className="home-page-content-wrapper">
            <h1>Welcome to my<span className="components-txt"> Components Library</span></h1>
            <a href="avatar-page" className="home-page-links">Get Start</a>

        </div>
    </div>
}