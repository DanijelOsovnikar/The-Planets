import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

//Pages
import Mercury from "./components/Mercury.jsx";
import Venus from "./components/Venus.jsx";
import Earth from "./components/Earth.jsx";
import Mars from "./components/Mars.jsx";
import Jupiter from "./components/Jupiter.jsx";
import Saturn from "./components/Saturn.jsx";
import Uranus from "./components/Uranus.jsx";
import Neptune from "./components/Neptune.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Mercury />} />
          <Route path="/mercury" element={<Mercury />} />
          <Route path="/venus" element={<Venus />} />
          <Route path="/earth" element={<Earth />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/jupiter" element={<Jupiter />} />
          <Route path="/saturn" element={<Saturn />} />
          <Route path="/uranus" element={<Uranus />} />
          <Route path="/neptune" element={<Neptune />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
