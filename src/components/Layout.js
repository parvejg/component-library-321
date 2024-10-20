import { LayoutNavbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import './Layout.css';

export const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <LayoutNavbar />
      <div className="layout-body">
        <Sidebar />
        <div  className="layout-content">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};
