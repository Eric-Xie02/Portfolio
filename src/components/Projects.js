import "../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import projectData from "../data/projectData";
import CompositeImage from "./CompositeImage";

function ProjectItem({
  header,
  description,
  imgSrc,
  skills,
  links,
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
          {skills.length > 0 && (
            <div>
              {skills.map((skill, i) => (
                <span key={i}>
                  {skill}
                  {i !== skills.length - 1 ? " • " : ""}
                </span>
              ))}
            </div>
          )}
          <p
            style={{
              marginTop: "30px",
              whiteSpace: "pre-line",
              marginBottom: "30px",
            }}
          >
            {description}
          </p>
          {links.map((link, i) => (
            <span key={i}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent-color)" }}
              >
                {link.text}
              </a>
              {i !== links.length - 1 && " | "}
            </span>
          ))}
        </Col>
        <Col xs={12} md={7} className="project-image">
          {imgSrc.length > 1 ? (
            <CompositeImage images={imgSrc} backgroundColor="dbeafe" />
          ) : (
            <img src={imgSrc} alt="" style={{ width: "100%" }} />
          )}
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
          links={data.links}
          reverseOrder={!(index % 2)}
        />
      ))}
    </div>
  );
}
