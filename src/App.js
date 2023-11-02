import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import ProductPage from "./page/ProductPage";
import AboutPage from "./page/AboutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index Component={HomePage}/>
          <Route path="/home" Component={HomePage}/>
          <Route path="/product" Component={ProductPage} />
          <Route path="/about" Component={AboutPage}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
