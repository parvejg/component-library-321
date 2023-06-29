import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { InputPage } from "./components/InputPage";
import { ButtonPage } from "./components/ButtonPage";
// import { Layout } from "./components/Layout";
import { NavbarPage } from "./components/NavbarPage";
import { AvatarPage } from "./components/AvatarPage";
import { ListPage } from "./components/ListPage";
import { CardPage } from "./components/CardPage";
import { AlertPage } from "./components/AlertPage";
import { RatingPage } from "./components/RatingPage";
import { ImagePage } from "./components/ImagePage";
import { BadgePage } from "./components/BadgePage";
import { ModalPage } from "./components/ModalPage";
import { ToastPage } from "./components/ToastPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/alert-page" Component={AlertPage} />
        <Route path="/avatar-page" Component={AvatarPage} />
        <Route path="/badge-page" Component={BadgePage} />
        <Route path="/button-page" Component={ButtonPage} />
        <Route path="/card-page" Component={CardPage} />
        <Route path="/image-page" Component={ImagePage} />
        <Route path="/input-page" Component={InputPage} />
        <Route path="/list-page" Component={ListPage} />
        <Route path="/modal-page" Component={ModalPage} />
        <Route path="/navbar-page" Component={NavbarPage} />
        <Route path="/rating-page" Component={RatingPage} />
        <Route path="/toast-page" Component={ToastPage} />
      </Routes>
    </Router>
  );
}

export default App;
