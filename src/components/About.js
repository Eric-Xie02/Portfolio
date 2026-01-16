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
        I feel most comfortable working with C++ and Python, leveraging them for
        both personal and academic projects. For frontend development, I have
        experience with JavaScript, HTML, and CSS, and I have built applications
        using React—including this website. Through my coursework and projects,
        I have also gained experience picking up new programming languages
        quickly, including Verilog for hardware design and MATLAB for numerical
        computing. I enjoy applying these skills to build efficient and
        intuitive software solutions while continuously expanding my technical
        expertise.
        <br />
        <br />
        In my free time, I enjoy reading books, watching soccer, and playing
        board games with friends.
        <br />
        <br />
        <a
          href={"EricXieResume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          Have a copy of my resume
        </a>{" "}
        or{" "}
        <a
          href={"https://www.linkedin.com/in/ericxie02/"}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          Connect with me on LinkedIn
        </a>
      </p>
    </div>
  );
}
