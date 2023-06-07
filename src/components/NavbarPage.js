import {Layout } from './components/Layout';
import {TataLogoNavbar, ReactLogoNavbar,MrfLogoNavbar,TeaIconNavbar,GugtaguLogoNavbar} from './components/Navbar';
export const NavbarPage=()=>{
    return <Layout>
<div>
    <h2>Navbars</h2>
    <TataLogoNavbar/>
    <div></div>
    <ReactLogoNavbar/>
    <div></div>
    <MrfLogoNavbar/>
    <div></div>
    <TeaIconNavbar/>
    <div></div>
    <GugtaguLogoNavbar/>
</div>
    </Layout>
}