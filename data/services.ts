import { IconType } from "react-icons";
import { BiCodeAlt, BiPalette } from "react-icons/bi";
import { IoTerminalOutline } from "react-icons/io5";
import { LuDatabase, LuSearch } from "react-icons/lu";
import { BsDiagram3 } from "react-icons/bs";

export interface Service {
  title: string;
  description: string;
  icon: IconType;
  features: string[];
}

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Full-stack web development services using modern technologies like React, Next.js, Node.js, and TypeScript.",
    icon: BiCodeAlt,
    features: [
      "Responsive design",
      "Performance optimization",
      "SEO-friendly architecture",
      "Database integration",
      "API development",
    ],
  },
  {
    title: "Front-End Development",
    description:
      "Create beautiful, interactive user interfaces with React, Next.js, and Tailwind CSS.",
    icon: BiPalette,
    features: [
      "UI/UX implementation",
      "Component development",
      "State management",
      "Animation & transitions",
      "Cross-browser compatibility",
    ],
  },
  {
    title: "Back-End Development",
    description:
      "Robust server-side solutions with Node.js, Express.js, Python, and database management.",
    icon: IoTerminalOutline,
    features: [
      "RESTful API design",
      "Database design & optimization",
      "Authentication & security",
      "Microservices architecture",
      "Cloud deployment",
    ],
  },
  {
    title: "Database Design & Optimization",
    description:
      "Design and optimize databases for performance, scalability, and reliability.",
    icon: LuDatabase,
    features: [
      "Schema design",
      "Query optimization",
      "Data modeling",
      "Migration planning",
      "Backup & recovery",
    ],
  },
  {
    title: "API Development & Integration",
    description:
      "Seamlessly integrate third-party APIs and external services to extend functionality, automate workflows, and connect front-end and back-end systems.",
    icon: BsDiagram3,
    features: [
      "REST API integration",
      "Payment gateway setup",
      "Social media integration",
      "Cloud service integration",
      "Error handling & logging",
    ],
  },
  {
    title: "Deployment & DevOps",
    description:
      "Deploy applications to production with confidence using modern DevOps practices and cloud platforms.",
    icon: IoTerminalOutline,
    features: [
      "CI/CD pipeline setup",
      "Docker containerization",
      "Cloud deployment (AWS, Vercel, Heroku)",
      "Performance monitoring",
      "Security hardening",
    ],
  },
  {
    title: "SEO",
    description:
      "Implement SEO best practices to improve website visibility and ranking on search engines.",
    icon: LuSearch,
    features: [
      "Keyword research & analysis",
      "Google Analytics & Search Console setup",
      "On-page SEO optimization",
      "Technical SEO audits",
      "Content strategy & creation",
      "Backlink building",
    ],
  },
];
