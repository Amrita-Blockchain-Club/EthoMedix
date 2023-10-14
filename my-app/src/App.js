import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
