import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <span className="tagline">Welcome to my Portfolio</span>
        <h1>Hi I'm Eric!</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Container>
          <Row>
            <Col>1 of 1</Col>
            <Col>
              <img src="./assets/img/PlaceHolderHeadshot.jpg" alt="Eric Xie" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
