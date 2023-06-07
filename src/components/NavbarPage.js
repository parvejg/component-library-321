import { Layout } from "./Layout";
import './Navbar.css';
import { GugtaguLogoNavbar, TeaIconNavbar,MrfLogoNavbar,TataLogoNavbar,ReactLogoNavbar} from './Navbar';


export const NavbarPage = () => {
  return (
    <Layout>
      <div>
        <h2>Navbars</h2>
        <TataLogoNavbar />
        <div></div>
        <ReactLogoNavbar />
        <div></div>
        <MrfLogoNavbar />
        <div></div>
        <TeaIconNavbar />
        <div></div>
        <GugtaguLogoNavbar />
      </div>
    </Layout>
  );
};
