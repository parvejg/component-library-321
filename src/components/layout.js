import { LayoutNavbar } from "./Layout-navbar";
import { LayoutSidebar } from "./Layout-sidebar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <LayoutNavbar />
      <div className="layout-body">
        <LayoutSidebar />
        <div  className="layout-content">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};
