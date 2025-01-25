import { Container, Row, Col } from "react-bootstrap";

export default function Banner() {
  return (
    <section className="banner" id="home">
      <Container
        fluid
        style={{ padding: "0px", height: "100vh", font: "Kaushan Script" }}
      >
        <Row>
          <Col className="header-text-column">
            <h1>Hi I'm Eric!</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
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
