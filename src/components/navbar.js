import { SlCup } from "react-icons/sl";
const TataLogoNavbar = () => {
  return (
    <div className="tata-logo-navbar-wrapper">
      <div className="tata-logo-header">
        <a className="tata-logo" href="/">TATA</a>
      </div>
      <div className="tata-links-wrapper">
        <a href="/" className="tata-main-Links">
          Link
        </a>
        <a href="/" className="tata-main-Links">
          Download
        </a>
        <a href="/" className="tata-main-Links">
          Blog
        </a>
      </div>
    </div>
  );
};
const ReactLogoNavbar = () => {
  return (
    <div className="react-navbar-header">
      <div className="react-logo">
        <h2 className="react-logo"> React</h2>
        </div>
      <div className="react-link-wrapper"></div>
      <a href="/" className=" reactNavbar-links">Home
      </a>
      <a href="/" className=" reactNavbar-links">Features
      </a>
      <a href="/" className=" reactNavbar-links">Services
      </a>
      <a href="/" className=" reactNavbar-links">LogIn
      </a>
    </div>
   
  );
};
const MrfLogoNavbar =()=>{
  return (
    <div className="mrf-header">
      <h1 className="mrf-logo">MRF</h1>
      <div className="mrf-links-wrapper">
        <a  className="mrfNavbar-links" href="/" >Home</a> 
        <a  className="mrfNavbar-links" href="/" >Products</a> 
        <a  className="mrfNavbar-links" href="/" >About</a> 
        <a  className="mrfNavbar-links" href="/" >Sign up</a>

      </div>
    </div>
  )
}
const TeaIconNavbar =()=>{
  return (
    <div className="tea-Navbar-header">
        <a className="tea-logo-link" href="/" ><SlCup className="tea-icon"/></a>

      <div className="tea-link-wrapper">
        <a className="teaNavbar-links" href="/">Home</a>
        <a className="teaNavbar-links" href="/">Pages</a>
        <a className="teaNavbar-links" href="/">Gallery</a>
        <a className="teaNavbar-links" href="/">Contact</a>
        <a className="teaNavbar-links" href="/">About</a>
        <a className="teaNavbar-links" href="/">Menu</a>
      </div>
    </div>
  )
}
const GugtaguLogoNavbar =()=>{
  return ( <div className="cafeNavbar">
    < h1 className="guftagu-logo">Guftagu <span>Cafe</span></h1>
    <ul className="cafe-links-wrapper">
      <li><a className="cafe-links" href="/">Home</a></li>
      <li><a className="cafe-links" href="/">Photos</a></li>
      <li><a className="cafe-links" href="/">Menu</a></li>
      <li><a className="cafe-links" href="/">Order Online</a></li>
      <li><a className="cafe-links" href="/">Log In</a></li>
      <li><a className="cafe-links" href="/">Sign Up</a></li>
    </ul>
  </div>
  
)} 


export { TataLogoNavbar, ReactLogoNavbar,MrfLogoNavbar, TeaIconNavbar,GugtaguLogoNavbar };
