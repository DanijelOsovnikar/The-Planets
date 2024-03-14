import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link className="logo" to={"/mercury"}>
          THE PLANETS
        </Link>
        <ul style={{ color: "white" }}>
          <li>
            <Link to={"/mercury"}>Mercury</Link>
          </li>
          <li>
            <Link to={"/venus"}>Venus</Link>
          </li>
          <li>
            <Link to={"/earth"}>Earth</Link>
          </li>
          <li>
            <Link to={"/mars"}>Mars</Link>
          </li>
          <li>
            <Link to={"/jupiter"}>Jupiter</Link>
          </li>
          <li>
            <Link to={"/saturn"}>Saturn</Link>
          </li>
          <li>
            <Link to={"/uranus"}>Uranus</Link>
          </li>
          <li>
            <Link to={"/neptune"}>Neptune</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
