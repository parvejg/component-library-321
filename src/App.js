import "./App.css";
import "./components/tata-navbar.css";
import "./components/mrfNavbar.css";
import "./components/reactNavbar.css";
import "./components/resturantNavbar.css";
import "./components/cafeNavbar.css";
import "./components/avatar.css";
import { VolumeSlider } from "./components/VolumeSlider";
import {
  CafeNavbar,
  MrfNavbar,
  ReactNavbar,
  ResturantNavbar,
  TataNavbar,
} from "./components/navbar";
import {
  Tavatar,
  PersonAvatar,
  NotificationAvatar,
  ImageAvatar,
} from "./components/avatar";
import "./components/Layout.css";
import "./components/Layout-navbar.css";
import "./components/Footer.css";
import "./components/Layout-sidebar.css";
import { InputPage } from "./components/InputPage";
import { ButtonPage } from "./components/ButtonPage";

import { Layout } from "./components/layout";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Layout} />
        <Route path="/button-page" Component={ButtonPage} />
        <Route path="/input-page"  Component={InputPage} />
        <Route path="/button-page" Component={ButtonPage} />
        <Route path="/button-page" Component={ButtonPage} />
      </Routes>
    </Router>
  );
  {
    /* 

<h1>Inputs</h1>
 <Inputs type="Text"   placeholder="Enter your  First Name" />
 <Inputs type="Text"  placeholder="Enter your Last Name" />
 <Inputs  type="Text"  placeholder="Enter your Email" />
 <Inputs type="Number"  placeholder="Enter your Mobile Number" />
 <Inputs type="Password"  placeholder="Enter your Password"  />
 <Inputs type="Date"    />  
 <hr/>
 </>
 <TataNavbar/>
 <ReactNavbar/>
 <CafeNavbar/>
 <MrfNavbar/>
 <ResturantNavbar/>
 <hr/>
 <VolumeSlider/>
 <hr/>
 <Tavatar/>
 <hr/>
 <PersonAvatar/>
 <hr/>
 <NotificationAvatar/>
 <hr/>
  <ImageAvatar/> */
  }
}

export default App;
