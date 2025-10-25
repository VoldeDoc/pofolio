export interface Experience {
  title: string
  company: string
  companyUrl?: string
  location: string
  period: string
  description: string[]
}

export const experiences: Experience[] = [
  {
    title: "Founder & Full-Stack Developer",
    company: "VizXpress",
    companyUrl: "https://vizxpress.com/",
    location: "United Kingdom",
    period: "Oct 2024 – Present",
    description: [
      "Built a cloud-deployed platform enabling automated image/video/audio edits for creators, serving ~5,000+ users.",
      "Architected full-stack system (Next.js frontend, Node.js & Flask microservices, PostgreSQL) and deployed with Docker.",
      "Integrated 30+ processing tools (background removal, TTS, AI Story to Video) and Hugging Face models for AI features.",
      "Improved Lighthouse performance from 72 to 95 via code-splitting and lazy loading.",
    ],
  },
  {
    title: "Front-End Team Lead (Social Impact Week)",
    company: "Accenture",
    companyUrl: "https://www.accenture.com/",
    location: "Birmingham, United Kingdom",
    period: "Mar 2024",
    description: [
      "Led development and implementation of a Technology Careers Hub website, securing 1st place.",
      "Built an accessible, user-friendly platform for school leavers.",
      "Applied Agile methodologies in a collaborative team environment.",
      "Gained insights from a mock interview and personal branding in the tech industry.",
    ],
  },
  {
    title: "CodeCamp",
    company: "Kainos",
    companyUrl: "https://www.hiveit.co.uk/",
    location: "Birmingham, United Kingdom",
    period: "Aug 2023",
    description: [
      "Built responsive websites using HTML, CSS, and JavaScript.",
      "Leveraged Microsoft Power Apps to create custom forms and functionalities.",
    ],
  },
  {
    title: "Work Experience Placement",
    company: "Hive IT",
    companyUrl: "https://www.hiveit.co.uk/",
    location: "Sheffield, United Kingdom",
    period: "Jul 2023",
    description: [
      "Enhanced proficiency in database design (MySQL) and Node.js through hands-on project work.",
      "Expanded knowledge by learning AWS S3 buckets for cloud storage solutions and improving GitHub collaboration skills for managing team-based projects effectively.",
    ],
  },
  {
    title: "Boolean Coding Week",
    company: "Boolean Technologies LTD",
    companyUrl: "https://www.hiveit.co.uk/",
    location: "Remote",
    period: "Jun 2023",
    description: [
      "Developed interactive web app interfaces using HTML, CSS, and JavaScript.",
      "Built an AI-powered quote and image generator using JavaScript's Fetch API and OpenAI's API.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company: "Alusoft Technologies Ltd",
    companyUrl: "https://www.alusofttechnologies.com/",
    location: "Akobo Ojurin, Olopomeji, Ibadan, Oyo, Nigeria",
    period: "Feb 2022 – Oct 2022",
    description: [
      "Developed production-ready web applications using HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, Node.js, Express.js, MySQL, and EJS.",
      "Delivered e-commerce platform (Alusoft Mall) with authentication, cart, orders, and admin panels.",
      "Collaborated with cross-functional teams to deliver real client solutions.",
      "Mentored 4 junior developers in front-end development and code quality.",
    ],
  },
]
