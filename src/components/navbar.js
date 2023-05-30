import { SlCup } from "react-icons/sl";
const TataNavbar = () => {
  return (
    <div className="navbar-header">
      <div className="tata-header">
        <a className="tata-link" href="/">TATA</a>
      </div>
      <div className="links-header">
        <a href="/" className="main-Links">
          Link
        </a>
        <a href="/" className="main-Links">
          Download
        </a>
        <a href="/" className="main-Links">
          Blog
        </a>
      </div>
    </div>
  );
};
const ReactNavbar = () => {
  return (
    <div className="react-navbar-header">
      <div className="react-logo">
        <h2> React</h2>
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
const MrfNavbar =()=>{
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
const ResturantNavbar =()=>{
  return (
    <div className="resturantNavbar-header">
        <a className="logo-link" href="/" ><SlCup className="tea-icon"/></a>

      <div className="link-wrapper">
        <a className="resturatNavbar-links" href="/">Home</a>
        <a className="resturatNavbar-links" href="/">Pages</a>
        <a className="resturatNavbar-links" href="/">Gallery</a>
        <a className="resturatNavbar-links" href="/">Contact</a>
        <a className="resturatNavbar-links" href="/">About</a>
        <a className="resturatNavbar-links" href="/">Menu</a>
      </div>
    </div>
  )
}
const CafeNavbar =()=>{
  return ( <div className="cafeNavbar">
    <h1>Guftagu <span>Cafe</span></h1>
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


export { TataNavbar, ReactNavbar,MrfNavbar, ResturantNavbar,CafeNavbar };
