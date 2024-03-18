import "./App.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./core/Sidebar.jsx";
import { useSpring, animated } from "@react-spring/web";

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

  const animationProp = useSpring({
    transform: sidebarShow ? "translateX(1000px)" : "translateX(0)",
  });

  return (
    <div className="app">
      <Navbar showSideBar={sidebarFunction} />
      <Sidebar
        // style={springProps}
        openSidebar={sidebarShow}
        sidebarFucntion={sidebarFunction}
      />
      {!sidebarShow ? (
        <animated.main style={animationProp}>
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
        </animated.main>
      ) : null}
    </div>
  );
}

export default App;
