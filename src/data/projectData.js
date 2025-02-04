const projectData = [
  {
    header: "Langolio",
    description: `Langolio, my senior capstone project at Boston University, is a language-learning platform \
    developed with my team in collaboration with our client, a linguist, whose expertise helped ensure our product \
    met real-world educational needs. Langolio’s mission is to connect language learners for immersive \
    conversations in a safe, educational setting.\
    \n
    I primarily worked on the frontend, contributing to the planning phase and designing a dynamic user interface for \
    students and teachers. This included integrating the frontend with API endpoints to manage data flow and enable \
    real-time messaging. I focused on creating an intuitive, responsive design that made the platform visually appealing \
    and easy to navigate while supporting structured classroom learning. The project culminated in our team successfully \
    delivering a product to our client that met all of the project objectives`,
    imageSource: "./assets/img/LangolioHome.png",
    skills: ["React", "Python", "FastAPI, MongoDB"],
  },
  {
    header: "Langolio Features",
    description: `Langolio offers real-time grammar checking and correction as a key feature to support language learners. \
    As students engage in conversations with their peers, the platform provides instant feedback on grammar, suggesting improvements to help \
    learners refine their language skills. Another important feature is the censorship of personal information and profane language. To maintain a safe learning space, \
    Langolio automatically filters out sensitive data and inappropriate language. This promotes respectful communication and \
    ensures that the platform remains conducive to positive, professional learning experiences. This feature was implemented \
    using the ChatGPT API, leveraging its ability to flag and remove harmful content in real-time.\
    \n
    Langolio also tracks and displays student statistics for both teachers and learners. This feature allows educators to monitor \
    progress, engagement, and language skills over time. Students can view their own statistics to track their improvement and set \
    goals. The statistics are stored in MongoDB, including metrics such as the number of messages exchanged, the languages used in \
    the conversations, and the level of grammatical accuracy. 
    `,
    imageSource: "./assets/img/LangolioCollage.png",
    skills: [""],
  },
  {
    header: "3duf",
    description: `As a research assistant at CIDAR labs during my time at Boston University, one project I worked on was 3duf, a \
    visual design tool for modeling microfluidic devices, allowing users to create and fabricate microfluidic devices.\
    \n
    My work on 3duf resulted in implementing 3 key features that enhanced 3duf's usability. \
    First, I added mirroring functionality, enabling users to reflect microfluidic components horizontally or vertically, allowing \
    for more efficient connection routing. Second, I introduced black-box rendering for unknown components, allowing users to visualize \
    and place components that have not been added to 3duf. Lastly, I refined the rotation and mirroring of components to operate based \
    on the geometric center, providing more uniform behavior across different components. These improvements expanded 3duf’s capabilities, \
    allowing users to design a wider range of microfluidic devices more efficiently while maintaining precision and consistency in their layouts.
`,
    imageSource: "./assets/img/3duf.png",
    skills: ["TypeScript", "Paper.js", "JSON"],
  },
  {
    header: "Fluigi",
    description: `Fluigi, my second project at CIDAR Lab, is a design automation toolchain for microfluidic devices, enabling the transition \
    from high-level behavioral descriptions (LFR) to structural representations (MINT) and ultimately generating JSON files for visualization \
    in 3duf. This toolchain streamlines the microfluidic design process by automating the conversion between these formats.\
    \n \
    My role focused on software toolchain integration, ensuring that each stage produced valid outputs compatible with the next. I worked on \
    debugging inconsistencies, refining data transformations, and verifying that generated MINT and JSON files accurately reflected the \
    intended designs.\
    \n \
    Through this experience, I gained insight into working with a large, pre-existing codebase, understanding its structure, and making meaningful \
    contributions without disrupting existing functionality. I also developed a stronger grasp of data flow in complex software pipelines and the \
    importance of robust integration between interconnected tools.`,
    imageSource: "./assets/img/Fluigi.png",
    skills: ["Python", "JSON Processing", "Design Automation"],
  },
];

export default projectData;
