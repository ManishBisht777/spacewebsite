import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Planet from "./pages/destination/planet";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Planet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
