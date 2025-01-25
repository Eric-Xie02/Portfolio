import "../App.css";
import About from "./About";
import Experience from "./Experience";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function Summary() {
  return (
    <Container fluid className="summary-container" id="about">
      <Row className="h-100">
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-start"
        >
          <div className="about-col">
            <About />
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-start"
        >
          <div className="experience-col">
            <Experience />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
