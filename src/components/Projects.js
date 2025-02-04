import "../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import projectData from "../data/projectData";

function ProjectItem({
  header,
  description,
  imgSrc,
  skills,
  reverseOrder = false,
}) {
  return (
    <Container fluid className="project-item">
      <Row
        noGutters
        style={{ flexDirection: reverseOrder ? "row-reverse" : "row" }}
      >
        <Col xs={12} md={5}>
          <h4 className="project-header">{header}</h4>
          <div>
            {skills.map((skill, i) => (
              <span>
                {skill}
                {i !== skills.length - 1 ? " • " : ""}
              </span>
            ))}
          </div>
          <p style={{ marginTop: "30px", whiteSpace: "pre-line" }}>
            {description}
          </p>
        </Col>
        <Col xs={12} md={7} className="project-image">
          <img src={imgSrc} alt="" style={{ width: "100%" }} />
        </Col>
      </Row>
    </Container>
  );
}

export default function Projects() {
  return (
    <div id="projects" className="project-wrapper">
      {projectData.map((data, index) => (
        <ProjectItem
          header={data.header}
          description={data.description}
          imgSrc={data.imageSource}
          skills={data.skills}
          reverseOrder={!(index % 2)}
        />
      ))}
    </div>
  );
}
