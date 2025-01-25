export default function About() {
  return (
    <div>
      <h2 style={{ fontWeight: "bold", fontFamily: "Rubik" }}>About Me</h2>
      <p style={{ paddingTop: "30px", color: "gray" }}>
        I was born and raised on Long Island, New York, until I went to Boston
        University where I earned my B.S. in Computer Engineering. During my
        time in Boston I developed a strong foundation in software development,
        algorithms, and the engineering design process, while gaining hands-on
        experience through various projects and research work. I also had the
        opportunity to collaborate with peers, faculty, and industry
        professionals, enhancing my problem-solving skills and using my
        engineering abilities to create impactful work.
        <br />
        <br />
        asd
        <br />
        <br />
        <a
          href={"Eric_Xie_Resume.pdf"}
          target="_blank" // Open in a new tab
          rel="noopener noreferrer"
          className="resume-button"
        >
          Take a copy of my resume
        </a>
      </p>
    </div>
  );
}
