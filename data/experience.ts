// ...existing code...
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
    title: "Full-Stack Developer",
    company: "VizXpress",
    companyUrl: "https://vizxpress.com/",
    location: "United Kingdom",
    period: "Oct 2024 – Present",
    description: [
      "Built a cloud-deployed platform enabling automated image/video/audio edits for creators, serving ~5,000+ users.",
      "Architected full-stack system (Next.js frontend, Node.js & Flask microservices, PostgreSQL) and deployed with Docker.",
    ],
  },
  {
    title: "Front End Developer",
    company: "Silex Secure Technologies",
    companyUrl: "https://silexsecure.com/company/",
    location: "Abuja, Nigeria",
    period: "Aug 2024- September 2025",
    description: [
      "Developed secure web interfaces for cybersecurity applications using React.js and TypeScript.",
      "Designed and implemented MySQL database schemas for secure data management systems.",
      "Built RESTful APIs with Node.js and Express.js for real-time security monitoring dashboards.",
      "Deployed applications using AWS S3 and implemented CI/CD pipelines with GitHub Actions.",
    ],
  },
  {
    title: "Senior Front-End Developer",
    company: "Kampus Village",
    companyUrl: "",
    location: "Osun State, Nigeria",
    period: "Aug 2023 - Present",
    description: [
      "Developed and maintained responsive web applications using modern JavaScript frameworks and libraries.",
      "Implemented user-centric designs with Next.js React, Tailwind CSS, improving user engagement by 40%.",
      "Collaborated with UX/UI designers to create intuitive and accessible user interfaces.",
      "Integrated Microsoft Power Apps to streamline business processes and create custom solutions.",
    ],
  },
  {
    title: "Front-End Team Lead (Eaststead hackathon)",
    company: "Accenture",
    companyUrl: "https://www.accenture.com/",
    location: "University of Ibadan, Nigeria",
    period: "Oct 2023",
    description: [
      "Led development and implementation of a Technology Careers Hub website, securing 1st place.",
      "Built an accessible, user-friendly platform for school leavers.",
      "Applied Agile methodologies in a collaborative team environment.",
      "Gained insights from a mock interview and personal branding in the tech industry.",
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
