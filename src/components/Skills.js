import { FaReact, FaPython } from "react-icons/fa";
import { PiFileCpp } from "react-icons/pi";

function Skills() {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <ul className="skill-list">
        <li>
          <FaReact size={30} />
          <span>React</span>
        </li>
        <li>
          <FaPython size={30} />
          <span>Python</span>
        </li>
        <li>
          <PiFileCpp size={30} />
          <span>C++</span>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
