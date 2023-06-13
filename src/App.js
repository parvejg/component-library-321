import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { InputPage } from "./components/InputPage";
import { ButtonPage } from "./components/ButtonPage";
import { Layout } from "./components/Layout";
import { NavbarPage } from "./components/NavbarPage";
import { AvatarPage } from "./components/AvatarPage";
import { ListPage } from "./components/ListPage";
import { CardPage } from "./components/CardPage";
import { AlertPage } from "./components/AlertPage";
import { RatingPage } from "./components/RatingPage";
import { SmallBoyImage, StreetImage } from "./components/Image";
import { ImagePage } from "./components/ImagePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Layout} />
        <Route path="/button-page" Component={ButtonPage} />
        <Route path="/input-page" Component={InputPage} />
        <Route path="/navbar-page" Component={NavbarPage} />
        <Route path="/avatar-page" Component={AvatarPage} />
        <Route path="/list-page" Component={ListPage} />
        <Route path="/card-page" Component={CardPage} />
        <Route path="/alert-page" Component={AlertPage} />
        <Route path="/rating-page" Component={RatingPage} />
        <Route path="/image-page" Component={ImagePage} />
      </Routes>
    </Router>
    
   

  );
}

export default App;
