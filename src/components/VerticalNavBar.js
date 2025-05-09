import "boxicons/css/boxicons.min.css";
import SocialMediaButton from "./SocialMediaButton";
import InitialsLogo from "./InitialsLogo";

export default function VerticalNavBar() {
  return (
    <div className="vertical-navbar">
      <div className="top-section">
        <InitialsLogo />
      </div>
      <div className="navbar-list-container">
        <div className="navbar-list">
          <a className="nav-item" href="#home">
            Home
          </a>
          <a className="nav-item" href="#about">
            About Me
          </a>
          <a className="nav-item" href="#projects">
            Projects
          </a>
        </div>
      </div>
      <div className="bottom-section">
        <SocialMediaButton />
      </div>
    </div>
  );
}
