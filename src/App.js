import Banner from "./components/Banner.js";
import VerticalNavBar from "./components/VerticalNavBar.js";
import Skills from "./components/Skills.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Row noGutters>
        <Col className="navbar-column" xs="auto">
          <VerticalNavBar />
        </Col>
        <Col className="main-content">
          <Banner />
          <Skills />
        </Col>
      </Row>
    </Container>
  );
}
export default App;
