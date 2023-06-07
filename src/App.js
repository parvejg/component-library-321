import "./App.css";
import { InputPage } from "./components/InputPage";
import { ButtonPage } from "./components/ButtonPage"; 
import { Layout } from "./components/Layout";
import './components/Layout.css';
import './components/Footer.css';
import './components/Layout-navbar.css';
import './components/Sidebar.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavbarPage } from "./components/NavbarPage";
import { AvatarPage } from "./components/AvatarPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Layout} />
        <Route path="/button-page" Component={ButtonPage} />
        <Route path="/input-page"  Component={InputPage} />
        <Route path="/navbar-page" Component={NavbarPage}/>
        <Route path="/avatar-page" Component={AvatarPage}/>
      </Routes>
    </Router>
  );
}

export default App;
