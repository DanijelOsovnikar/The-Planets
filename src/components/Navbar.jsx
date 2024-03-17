import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar({ showSideBar }) {
  const sidebarHandler = () => {
    showSideBar();
  };

  return (
    <header>
      <nav>
        <Link className="logo" to={"/mercury"}>
          THE PLANETS
        </Link>
        <img
          src="src/assets/icon-hamburger.svg"
          alt="hamburgerImg"
          id="hamMenu"
          onClick={sidebarHandler}
        />
        <ul style={{ color: "white" }}>
          <li>
            <Link to={"/The-Planets/mercury"}>Mercury</Link>
          </li>
          <li>
            <Link to={"/The-Planets/venus"}>Venus</Link>
          </li>
          <li>
            <Link to={"/The-Planets/earth"}>Earth</Link>
          </li>
          <li>
            <Link to={"/The-Planets/mars"}>Mars</Link>
          </li>
          <li>
            <Link to={"/The-Planets/jupiter"}>Jupiter</Link>
          </li>
          <li>
            <Link to={"/The-Planets/saturn"}>Saturn</Link>
          </li>
          <li>
            <Link to={"/The-Planets/uranus"}>Uranus</Link>
          </li>
          <li>
            <Link to={"/The-Planets/neptune"}>Neptune</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
