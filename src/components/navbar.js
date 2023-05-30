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

export { TataNavbar, ReactNavbar,MrfNavbar };
