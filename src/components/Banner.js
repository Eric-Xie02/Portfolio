import { Container, Row, Col } from "react-bootstrap";

export default function Banner() {
  return (
    <section className="banner" id="home">
      <Container fluid style={{ padding: "0px", height: "100vh" }}>
        <Row>
          <Col className="header-text-column">
            <h1 style={{ fontFamily: "Rubik", fontSize: "50px" }}>
              Hi I'm Eric!
            </h1>
            <p style={{ color: "gray", maxWidth: "600px" }}>
              I am a Boston University graduate with a degree in computer
              engineering and a focus on software development.
            </p>
            <img
              style={{ width: "300px", height: "auto" }}
              src="./assets/img/BUEngLogo.jpg"
              alt=" BU Logo"
            />
          </Col>
          <Col className="headshot-column">
            <img
              className="headshot-image"
              src="./assets/img/Headshot.jpg"
              alt="Eric Xie"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
