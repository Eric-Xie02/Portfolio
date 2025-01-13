import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "boxicons/css/boxicons.min.css";

export default function VerticalNavBar() {
  return (
    <div className="vertical-navbar">
      <a className="nav-item" href="#home">
        Home
      </a>
      <a className="nav-item" href="#aboutme">
        About Me
      </a>
      <a className="nav-item" href="#skills">
        Skills
      </a>
      <a className="nav-item" href="#Experience">
        Experience
      </a>
      <a className="nav-item" href="#projects">
        Projects
      </a>
    </div>
  );
}
