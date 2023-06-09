import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { InputPage } from "./components/InputPage";
import { ButtonPage } from "./components/ButtonPage"; 
import { Layout } from "./components/Layout";
import { NavbarPage } from "./components/NavbarPage";
import { AvatarPage } from "./components/AvatarPage";
import { ListPage } from "./components/ListPage";
import { ImageAvatar } from "./components/Avatar";
import { ImageCard,LinkedInAppCard,ProductDemoCard } from "./components/Card";
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" Component={Layout} />
    //     <Route path="/button-page" Component={ButtonPage} />
    //     <Route path="/input-page"  Component={InputPage} />
    //     <Route path="/navbar-page" Component={NavbarPage}/>
    //     <Route path="/avatar-page" Component={AvatarPage}/>
    //     <Route path="/list-page" Component={ListPage}/>
    //   </Routes>
    // </Router>
    <>
    
    <LinkedInAppCard/>
    </>
   
  );
}

export default App;
