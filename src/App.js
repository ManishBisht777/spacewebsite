import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import { Route, Routes, Navigate } from "react-router-dom";
import Planet from "./pages/destination/planet";
import Dest from "./components/destination/dest";
import data from "./data/data.json";
import Crew from "./pages/crew/crew";
import Tech from "./pages/technology/tech";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Planet />}>
          <Route
            path="/destination"
            element={<Navigate to="/destination/moon" />}
          />
          <Route path="moon" element={<Dest props={data.destinations[0]} />} />
          <Route path="mars" element={<Dest props={data.destinations[1]} />} />
          <Route
            path="europia"
            element={<Dest props={data.destinations[2]} />}
          />
          <Route path="titan" element={<Dest props={data.destinations[3]} />} />
        </Route>
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Tech />} />
      </Routes>
    </div>
  );
}

export default App;
