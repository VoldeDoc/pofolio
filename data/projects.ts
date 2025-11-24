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
    type: "backend",
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
    title: "Predictive Finance",
    type: "frontend",
    description:
      "A preicitve financeial sitew where ai is used for financial budget analysis.",
    image: "https://i.ibb.co/VYgjWZbW/fina.jpg",
    link: "https://predictif.ai/",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      
    ],
  },
  {
    title: "RoboRush",
    type: "game",
    description:
      "RoboRush is a futuristic browser-based arcade game where players control a robot to collect energy orbs, avoid rotating hazards, and race against time in a dynamic maze environment.",
    image: "https://i.ibb.co/4ZsfSf25/roborush.png",
    link: "https://roborush-ashen.vercel.app/",
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
    title: "Axero",
    type: "fullstack",
    description:
      "Axero is a fully responsive, animated intranet homepage designed to improve internal communication, team collaboration, and productivity within an organisation.",
    image: "https://i.ibb.co/JwZhP0vP/axe.jpg",
    link: "https://axero.vercel.app/",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Genetic tool",
    type: "fullstack",
    description:
      "A full-stack web application for school students to improve the learning process they have on genetics.",
    image: "https://i.ibb.co/N2ytjM71/gen.jpg",
    link: "https://genetics-tool.vercel.app/punnett-square",
    tech: ["React", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "EstateLuxe",
    type: "frontend",
    description:
      "A responsive and AI-enhanced web application that simplifies estate management for users and admins.",
    image: "https://i.ibb.co/HL7WLvN8/estateluxe.png",
    link: "https://estateluxe.vercel.app/",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "KendoReact"],
  },
  {
    title: "Predicitive ai",
    type: "fullstack",
    description:
      "A web platform designed to help school leavers explore careers in technology by providing curated resources, career guidance, and interactive features.",
    image: "https://i.ibb.co/DHVs7XZP/fantasy.jpg",
    link: "https://predictif-sports.vercel.app/fantasy-league",
    tech: ["React", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Kampus Village",
    type: "frontend",
    description:
      "A site where students connect and buy stuffs",
    image: "https://i.ibb.co/2YkdpvnM/Kampus.jpg",
    link: "https://kampus-six.vercel.app/",
    tech: ["React.js", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "CLI tool",
    type: "backend",
    description:
      "A CLI tool that uses Amazon Q Developer to: Pull open pull requests from a repo Run static analysis on code changes",
    image: "https://i.ibb.co/HDdDzKRB/mappifysql.png",
    link: "https://gitcli-tool.vercel.app/",
    tech: ["Node.js", "JavaScript", "TypeScript", "MySQL"],
  },
  {
    title: "Getlinked",
    type: "frontend",
    description:
      "A site where deveopers can meet up .",
    image: "https://i.ibb.co/ZRGwgtwb/linked.jpg",
    link: "https://hackathon-71ze.onrender.com/",
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
    title: "Voldemart",
    type: "fullstack",
    description:
      "Voldemart is a comprehensive e-commerce platform that allows users to register, log in, view product details, search for products, browse by category, add items to the cart and wishlist, complete the checkout process, receive order confirmation emails and so much more.",
    image: "https://i.ibb.co/0yZjgYtP/vom.jpg",
    link: "https://voldemart.onrender.com/",
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
    title: "Ai  Generated art",
    type: "fullstack",
    description:
      "Ai Voice Generated art is website that showcase art works. This website generates random art works from Unsplash API and display them on the website.",
    image: "https://i.ibb.co/BBZZ8yL/artvibrance.png",
    link: "https://artvibrance.netlify.app/",
    github: "https://github.com/artvibrance",
  tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "KendoReact"],
  },
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Fullstack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "game", label: "Game" },
  // { id: "other", label: "Other" },
] as const;
