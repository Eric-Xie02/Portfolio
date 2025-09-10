const projectData = [
  {
    header: "Langolio",
    description: `Langolio, my senior capstone project at Boston University, is a language-learning platform developed with my team in collaboration with our client, a linguist, whose expertise helped ensure our product met real-world educational needs. Langolio’s mission is to connect language learners for immersive conversations in a safe, educational setting.
    
    I primarily worked on the frontend, contributing to the planning phase and designing a dynamic user interface for students and teachers. This included integrating the frontend with API endpoints to manage data flow and enable real-time messaging. I focused on creating an intuitive, responsive design that made the platform visually appealing and easy to navigate while supporting structured classroom learning. The project culminated in our team successfully delivering a product to our client that met all of the project objectives`,
    imageSource: ["./assets/img/LangolioLanding.png"],
    skills: ["React", "Python", "FastAPI, MongoDB"],
    links: [],
  },
  {
    header: "Langolio Features",
    description: `Langolio offers real-time grammar checking and correction as a key feature to support language learners. As students engage in conversations with their peers, the platform provides instant feedback on grammar, suggesting improvements to help learners refine their language skills. Another important feature is the censorship of personal information and profane language. To maintain a safe learning space, Langolio automatically filters out sensitive data and inappropriate language. This promotes respectful communication and ensures that the platform remains conducive to positive, professional learning experiences. This feature was implemented using the ChatGPT API, leveraging its ability to flag and remove harmful content in real-time.

    Langolio also tracks and displays student statistics for both teachers and learners. This feature allows educators to monitor progress, engagement, and language skills over time. Students can view their own statistics to track their improvement and set goals. The statistics are stored in MongoDB, including metrics such as the number of messages exchanged, the languages used in the conversations, and the level of grammatical accuracy. 
    `,
    imageSource: [
      "./assets/img/LangolioHome.png",
      "./assets/img/LangolioLogin.png",
      "./assets/img/LangolioChat.png",
      "./assets/img/LangolioStats.png",
    ],
    skills: [],
    links: [],
  },
  {
    header: "3duf",
    description: `As a research assistant at CIDAR labs during my time at Boston University, one project I worked on was 3duf, a visual design tool for modeling microfluidic devices, allowing users to create and fabricate microfluidic devices.

    My work on 3duf resulted in implementing 3 key features that enhanced 3duf's usability. First, I added mirroring functionality, enabling users to reflect microfluidic components horizontally or vertically, allowing for more efficient connection routing. Second, I introduced black-box rendering for unknown components, allowing users to visualize and place components that have not been added to 3duf. Lastly, I refined the rotation and mirroring of components to operate based on the geometric center, providing more uniform behavior across different components. These improvements expanded 3duf’s capabilities, allowing users to design a wider range of microfluidic devices more efficiently while maintaining precision and consistency in their layouts.
`,
    imageSource: ["./assets/img/3duf.png"],
    skills: ["TypeScript", "Paper.js", "JSON"],
    links: [],
  },
  {
    header: "Fluigi",
    description: `Fluigi, my second project at CIDAR Lab, is a design automation toolchain for microfluidic devices, enabling the transition 
    from high-level behavioral descriptions (LFR) to structural representations (MINT) and ultimately generating JSON files for visualization 
    in 3duf. This toolchain streamlines the microfluidic design process by automating the conversion between these formats. My role focused on software toolchain integration, ensuring that each stage produced valid outputs compatible with the next. I worked on debugging inconsistencies, refining data transformations, and verifying that generated MINT and JSON files accurately reflected the intended designs. Through this experience, I gained insight into working with a large, pre-existing codebase, understanding its structure, and making meaningful contributions without disrupting existing functionality. I also developed a stronger grasp of data flow in complex software pipelines and the importance of robust integration between interconnected tools.`,
    imageSource: ["./assets/img/Fluigi.png"],
    skills: ["Python", "JSON Processing", "Design Automation"],
    links: [],
  },

  {
    header: "Wild Oasis — Guest App",
    description: `The Wild Oasis Guest Portal is a demo hotel web application designed to simulate the experience of discovering, booking, and managing cabin stays. Built as part of a full-stack practice project, it recreates the workflows of a real guest-facing site while emphasizing clean design and a smooth user experience.

    Guests can browse detailed information about each cabin, filter listings by capacity, and check availability through an integrated booking calendar. Once signed up, users create a profile stored in the database, making future bookings faster and easier. The portal also allows guests to view upcoming and past reservations, update or cancel existing bookings, and personalize their profiles with notes and preferences, creating a familiar experience comparable to modern hospitality platforms.`,

    imageSource: [
      "./assets/img/WildOasisGuestLanding.png",
      "./assets/img/WildOasisGuestBooking.png",
      "./assets/img/WildOasisGuestCabins.png",
      "./assets/img/WildOasisGuestReservations.png",
    ],
    skills: ["React", "Next.js", "Tailwind"],
    links: [
      {
        url: "https://www.wildoasis-guest.com/",
        text: "Wild Oasis Guest",
      },
    ],
  },
  {
    header: "Wild Oasis — Staff App",
    description: `The Wild Oasis Staff Portal is directly connected to the guest-facing site, providing hotel employees with the tools needed to manage and oversee reservations created by guests. Together, the two portals form a complete system for simulating hotel operations, with data synchronized through a shared PostgreSQL database.

    Staff can view and manage all cabins through a table interface that displays pricing, discounts, photos, and availability, with full support for creating, updating, and deleting entries. A parallel booking management system allows employees to filter and sort reservations, confirm check-ins and checkouts, and verify guest payments. The portal also includes app-wide settings, where staff can configure policies such as breakfast prices and minimum or maximum booking nights. To support decision making, the dashboard provides real-time statistics on occupancy, revenue, and daily activity, all presented in a clean, responsive interface with dark mode for usability.`,
    imageSource: [
      "./assets/img/WildOasisStaffHome.png",
      "./assets/img/WildOasisStaffBookings.png",
      "./assets/img/WildOasisStaffCabins.png",
      "./assets/img/WildOasisStaffAccount.png",
    ],
    skills: ["React", "React Router"],
    links: [
      {
        url: "https://wildoasis-staff.com",
        text: "Wild Oasis Staff",
      },
    ],
  },
  {
    header: "WorldWise",
    description: `WorldWise is a personal project I built to combine my love of travel with web development. It's a travel tracking application that allows users to record and visualize the places they’ve visited around the world. At its core is an interactive map, where users can mark destinations, add notes, and keep a personal travel log. The app makes it easy to look back on past adventures while also planning future trips.

    Key features include searching and selecting cities, viewing details about each location, and adding personal notes to capture memories. With an intuitive interface and clean design, it's simple and enjoyable to navigate, making travel history both interactive and personal.`,
    imageSource: ["./assets/img/Worldwise.png"],
    skills: ["React", "Leaflet"],
    links: [
      {
        url: "https://www.go-worldwise.com/",
        text: "Worldwise",
      },
    ],
  },
];

export default projectData;
