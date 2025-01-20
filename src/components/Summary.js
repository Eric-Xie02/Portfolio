import "../App.css";
import About from "./About";
import Experience from "./Experience";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function Summary() {
  return (
    <Container fluid className="summary" id="Experience">
      <Row noGutters>
        <Col>
          <About />
        </Col>
        <Col>
          <Experience />
        </Col>
      </Row>
    </Container>
  );
}
