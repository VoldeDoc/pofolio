import type { IconType } from "react-icons"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiRedux,
  SiJquery,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiAmazonwebservices,
  SiGooglecloud,
  SiHeroku,
  SiCloudflare,
  SiPostman,
  SiFigma,
  SiDocker,
  SiFlask,
  SiPostgresql,
  SiPassport,
  SiPrisma,
  SiSupabase,
} from "react-icons/si"
import { BiCodeAlt } from "react-icons/bi"
import { TbSeo } from "react-icons/tb";

export interface Skill {
  name: string
  icon: IconType
  category: "frontend" | "backend" | "database" | "devops" | "tools" | "languages"
}

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", icon: SiReact, category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "frontend" },
  { name: "HTML", icon: SiHtml5, category: "frontend" },
  { name: "CSS", icon: SiCss3, category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend" },
  { name: "Bootstrap", icon: SiBootstrap, category: "frontend" },
  { name: "Redux", icon: SiRedux, category: "frontend" },
  { name: "jQuery", icon: SiJquery, category: "frontend" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, category: "backend" },
  { name: "Express.js", icon: SiExpress, category: "backend" },
  { name: "Flask", icon: SiFlask, category: "backend" },
  { name: "EJS", icon: BiCodeAlt, category: "backend" },
  { name: "PassportJS", icon: SiPassport, category: "backend" },

  // Database
  { name: "MongoDB", icon: SiMongodb, category: "database" },
  { name: "MySQL", icon: SiMysql, category: "database" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "database" },
  { name: "Prisma", icon: SiPrisma, category: "database" },
  { name: "Superbase", icon: SiSupabase, category: "database" },
  { name: "MappifySQL", icon: BiCodeAlt, category: "database" },

  // DevOps / Cloud
  { name: "Docker", icon: SiDocker, category: "devops" },
  { name: "Google Cloud", icon: SiGooglecloud, category: "devops" },
  { name: "AWS S3", icon: SiAmazonwebservices, category: "devops" },
  { name: "Heroku", icon: SiHeroku, category: "devops" },
  { name: "Cloudflare", icon: SiCloudflare, category: "devops" },

  // Tools
  { name: "Git", icon: SiGit, category: "tools" },
  { name: "GitHub", icon: SiGithub, category: "tools" },
  { name: "Postman", icon: SiPostman, category: "tools" },
  { name: "Figma", icon: SiFigma, category: "tools" },
  { name: "SEO", icon: TbSeo, category: "tools" },
  { name: "Ajax", icon: BiCodeAlt, category: "tools" },

  // Languages
  { name: "JavaScript", icon: SiJavascript, category: "languages" },
  { name: "TypeScript", icon: SiTypescript, category: "languages" },
  { name: "Python", icon: SiPython, category: "languages" },
  { name: "C++", icon: SiCplusplus, category: "languages" },
]

export const skillCategories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "devops", label: "DevOps / Cloud" },
  { id: "tools", label: "Tools" },
  { id: "languages", label: "Languages" },
] as const
