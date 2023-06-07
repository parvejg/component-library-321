import "./App.css";
import { InputPage } from "./components/InputPage";
import { ButtonPage } from "./components/ButtonPage"; 
import { Layout } from "./components/layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Layout} />
        <Route path="/button-page" Component={ButtonPage} />
        <Route path="/input-page"  Component={InputPage} />
      </Routes>
    </Router>
  );
}

export default App;
