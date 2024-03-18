import { Link } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import "./Sidebar.scss";

export default function Sidebar({ openSidebar, sidebarFucntion }) {
  const openCloseSidebarHandler = () => {
    sidebarFucntion();
  };

  const animation = useSpring({
    transform: !openSidebar ? "translateX(-1000px)" : "translateX(0)",
  });

  return (
    <animated.div className="sidebar" style={animation}>
      {openSidebar ? (
        <div className="router">
          <div className="link">
            <div className="linkWrapper">
              <div className="circle"></div>
              <Link onClick={openCloseSidebarHandler} to={"/mercury"}>
                Mercury
              </Link>
            </div>
            <img src="assets/icon-chevron.svg" />
          </div>
          <div className="link">
            <div className="linkWrapper">
              <div className="circle"></div>
              <Link onClick={openCloseSidebarHandler} to={"/venus"}>
                Venus
              </Link>
            </div>
            <img src="assets/icon-chevron.svg" />
          </div>
          <div className="link">
            <div className="linkWrapper">
              <div className="circle"></div>
              <Link onClick={openCloseSidebarHandler} to={"/earth"}>
                Earth
              </Link>
            </div>
            <img src="assets/icon-chevron.svg" />
          </div>
          <div className="link">
            <div className="linkWrapper">
              <div className="circle"></div>
              <Link onClick={openCloseSidebarHandler} to={"/mars"}>
                Mars
              </Link>
            </div>
            <img src="assets/icon-chevron.svg" />
          </div>
          <div className="link">
            <div className="linkWrapper">
              <div className="circle"></div>
              <Link onClick={openCloseSidebarHandler} to={"/jupiter"}>
                Jupiter
              </Link>
            </div>
            <img src="assets/icon-chevron.svg" />
          </div>
          <div className="link">
            <div className="linkWrapper">
              <div className="circle"></div>
              <Link onClick={openCloseSidebarHandler} to={"/saturn"}>
                Saturn
              </Link>
            </div>
            <img src="assets/icon-chevron.svg" />
          </div>
          <div className="link">
            <div className="linkWrapper">
              <div className="circle"></div>
              <Link onClick={openCloseSidebarHandler} to={"/uranus"}>
                Uranus
              </Link>
            </div>
            <img src="assets/icon-chevron.svg" />
          </div>
          <div className="link">
            <div className="linkWrapper">
              <div className="circle"></div>
              <Link onClick={openCloseSidebarHandler} to={"/neptune"}>
                Neptune
              </Link>
            </div>
            <img src="assets/icon-chevron.svg" />
          </div>
        </div>
      ) : null}
    </animated.div>
  );
}
