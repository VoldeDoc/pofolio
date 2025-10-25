export interface Project {
  title: string;
  type: "fullstack" | "frontend" | "backend" | "game" ;
  description: string;
  image: string;
  link: string;
  github?: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    title: "VizXpress",
    type: "fullstack",
    description:
      "VizXpress is an all-in-one AI-powered media processing platform that allows users to perform advanced image, video, and audio editing. The platform combines intelligent automation with a unified, intuitive interface where users can convert, enhance, and merge files seamlessly. I designed and developed the entire backend and frontend architecture of VizXpress, integrating multiple AI models and APIs for image upscaling, background removal, AI Story Video Generator, text-to-speech, video/audio merging, and format conversion. The project reflects a strong focus on performance, scalability, and real-time user experience.",
    image: "https://i.ibb.co/99mCxYWB/Viz-Xpress.png",
    link: "https://vizxpress.com",
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Flask",
      "Node.js",
      "Express.js",
      "Docker",
      "Hugging Face",
      "FFmpeg",
    ],
  },
  {
    title: "SkillNest",
    type: "backend",
    description:
      "Skillnet is a modern community platform that enables creators, educators, and entrepreneurs to build and manage online learning communities. The app features discussion boards, course management, live events, and real-time messaging. All designed for interactive engagement and monetization through subscriptions. I developed the backend system of Skillnet, focusing on database architecture, API design, authentication, and real-time communication. The backend was built for scalability, performance, and data integrity, ensuring seamless integration with the frontend.",
    image: "https://i.ibb.co/39j1Q86f/skillnest.png",
    link: "https://skillnest-liard.vercel.app/",
    tech: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL (via Prisma ORM)",
      "Socket.io",
      "Redis",
      "ImageKit",
      "Stripe",
      "JWT",
    ],
  },
  {
    title: "RoboRush",
    type: "game",
    description:
      "RoboRush is a futuristic browser-based arcade game where players control a robot to collect energy orbs, avoid rotating hazards, and race against time in a dynamic maze environment.",
    image: "https://i.ibb.co/4ZsfSf25/roborush.png",
    link: "https://nexus-digital-henna.vercel.app/",
    github: "https://github.com/roborush",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Phaser.js",
      "Tailwind CSS",
      "MySQL",
      "MappifySQL ORM",
      "PWA",
    ],
  },
  {
    title: "Nexus Digital",
    type: "frontend",
    description:
      "Nexus Digital is a fully responsive, animated intranet homepage designed to improve internal communication, team collaboration, and productivity within an organisation.",
    image: "https://i.ibb.co/M5CpGkTY/nexus-digital.png",
    link: "https://nexus-digital-henna.vercel.app/",
    github: "https://github.com/nexusedigital",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "DrBike",
    type: "fullstack",
    description:
      "A full-stack web application for a local bike repair and e-bike conversion business, 'Dr. Bike'. The website provides a complete digital solution to showcase services, products, customer reviews, blog, galleries and manage appointments.",
    image: "https://i.ibb.co/Xk8k41Cn/drbike.png",
    link: "https://drbike.vercel.app/",
    github: "https://github.com/drbike",
    tech: ["React", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "EstateLuxe",
    type: "frontend",
    description:
      "A responsive and AI-enhanced web application that simplifies estate management for users and admins.",
    image: "https://i.ibb.co/HL7WLvN8/estateluxe.png",
    link: "https://estateluxe.vercel.app/",
    github: "https://github.com/estateluxe",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "KendoReact"],
  },
  {
    title: "NextGenCareersTech",
    type: "frontend",
    description:
      "A web platform designed to help school leavers explore careers in technology by providing curated resources, career guidance, and interactive features.",
    image: "https://i.ibb.co/YBNvY8Tt/nextgencareerstech.png",
    link: "https://nextgencareerstech.netlify.app/",
    github: "https://github.com/nextgencareerstech",
    tech: ["HTML", "CSS"],
  },
  {
    title: "React Video Audio Player",
    type: "frontend",
    description:
      "React Video Audio Player is a lightweight, customizable React video player and React audio player that supports video, audio, and streaming playback.",
    image: "https://i.ibb.co/Z6s7pLNQ/react-video-audio-player.png",
    link: "https://react-video-audio-player.vercel.app",
    github: "https://github.com/reactvideoaudioplayer",
    tech: ["React.js", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "MappifySQL",
    type: "backend",
    description:
      "MappifySQL is a lightweight, easy-to-use Object-Relational Mapping (ORM) library for MySQL databases, designed for use with Node.js.",
    image: "https://i.ibb.co/HDdDzKRB/mappifysql.png",
    link: "https://www.npmjs.com/package/mappifysql",
    github: "https://github.com/mappifysql",
    tech: ["Node.js", "JavaScript", "TypeScript", "MySQL"],
  },
  {
    title: "AdealTutor",
    type: "fullstack",
    description:
      "AdealTutor is an educational platform providing students with access to past exam papers, revision notes, and AI-powered tools for creating flashcards, quizzes, and personalized notes.",
    image: "https://i.ibb.co/4ZWBkW1/adealtutor.png",
    link: "https://adealtutor.onrender.com",
    github: "https://github.com/adealtutor",
    tech: [
      "HTML",
      "CSS",
      "Bootstrap",
      "TailwindCSS",
      "jQuery",
      "Ajax",
      "Node.js",
      "Express.js",
      "EJS",
      "MySQL",
      "MappifySQL",
      "PassportJS",
    ],
  },
  {
    title: "Alusoft Mall",
    type: "fullstack",
    description:
      "Alusoft Mall is a comprehensive e-commerce platform that allows users to register, log in, view product details, search for products, browse by category, add items to the cart and wishlist, complete the checkout process, receive order confirmation emails and so much more.",
    image: "https://i.ibb.co/ZKLwYXs/alusoftmall.png",
    link: "https://alusoftmall.onrender.com",
    github: "https://github.com/alusoftmall",
    tech: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Ajax",
      "Node.js",
      "Express.js",
      "MySQL",
      "EJS",
    ],
  },
  {
    title: "Nasltes",
    type: "fullstack",
    description:
      "Nasltes is a ticket booking system made for department of science laboratory technicians at LAUTECH University to enable them to book tickets for their events.",
    image: "https://i.ibb.co/B4rp3Qc/nasltes.png",
    link: "https://nasltes.onrender.com",
    github: "https://github.com/nasltes",
    tech: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Node.js",
      "Express.js",
      "MySQL",
      "EJS",
    ],
  },
  {
    title: "ArtVibrance",
    type: "frontend",
    description:
      "ArtVibrance is website that showcase art works. This website generates random art works from Unsplash API and display them on the website.",
    image: "https://i.ibb.co/BBZZ8yL/artvibrance.png",
    link: "https://artvibrance.netlify.app/",
    github: "https://github.com/artvibrance",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Fullstack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "game", label: "Game" },
  { id: "other", label: "Other" },
] as const;
