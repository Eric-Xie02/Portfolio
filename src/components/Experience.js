import experienceData from "../data/experienceData";

export default function Experience() {
  return (
    <div>
      <h2 style={{ fontWeight: "bold", fontFamily: "Rubik" }}>Experience</h2>
      <div style={{ paddingTop: "30px" }}>
        {experienceData.map((obj, i) => (
          <ExperienceItem
            experienceObj={obj}
            isLastItem={i === experienceData.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

function ExperienceItem({ experienceObj, isLastItem }) {
  return (
    <div
      className={`experience-item ${isLastItem ? "experience-item-last" : ""}`}
    >
      <div className="experience-time">{`${experienceObj.startDate}—${experienceObj.endDate}`}</div>
      <h5 style={{ fontFamily: "Rubik" }}>
        {experienceObj.title}
        <span
          style={{ color: "gray", fontSize: "1.2rem" }}
        >{` / ${experienceObj.company}`}</span>
      </h5>
      <p style={{ color: "#777" }}>{experienceObj.description}</p>
    </div>
  );
}
