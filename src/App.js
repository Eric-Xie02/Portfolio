import Banner from "./components/Banner.js";
import VerticalNavBar from "./components/VerticalNavBar.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Projects from "./components/Projects.js";
import Summary from "./components/Summary.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Element } from "react-scroll";

function App() {
  return (
    <Container fluid className="app-container">
      <Row noGutters>
        <Col className="navbar-column" xs="auto">
          <VerticalNavBar />
        </Col>
        <Col className="main-content">
          <Element name="home">
            <Banner />
          </Element>
          <Summary />
          <Projects />
          <a
            href="/Eric_Xie_Resume.pdf" // Ensure the file is in the `public` folder
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Improves security
            className="resume-button"
          >
            Download My Resume
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
