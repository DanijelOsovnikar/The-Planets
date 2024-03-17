import "./App.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./core/Sidebar.jsx";

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
  const [sidebarShow, setSidebarShow] = useState(false);

  const sidebarFunction = () => {
    setSidebarShow(!sidebarShow);
  };

  return (
    <div className="app">
      <Navbar showSideBar={sidebarFunction} />
      <Sidebar openSidebar={sidebarShow} sidebarFucntion={sidebarFunction} />
      {!sidebarShow ? (
        <main>
          <Routes>
            <Route path="/The-Planets/" element={<Mercury />} />
            <Route path="/The-Planets/mercury" element={<Mercury />} />
            <Route path="/The-Planets/venus" element={<Venus />} />
            <Route path="/The-Planets/earth" element={<Earth />} />
            <Route path="/The-Planets/mars" element={<Mars />} />
            <Route path="/The-Planets/jupiter" element={<Jupiter />} />
            <Route path="/The-Planets/saturn" element={<Saturn />} />
            <Route path="/The-Planets/uranus" element={<Uranus />} />
            <Route path="/The-Planets/neptune" element={<Neptune />} />
          </Routes>
        </main>
      ) : null}
    </div>
  );
}

export default App;
