import experienceData from "../data/experienceData";

export default function Experience() {
  return (
    <div>
      {experienceData.map((obj) => (
        <ExperienceItem experienceObj={obj} />
      ))}
    </div>
  );
}

function ExperienceItem({ experienceObj }) {
  return (
    <div className="experience-item">
      <div className="experience-time">{`${experienceObj.startDate}—${experienceObj.endDate}`}</div>
      <h5>
        {experienceObj.title} <span>{experienceObj.company}</span>
      </h5>
      <p>{experienceObj.description}</p>
    </div>
  );
}
