import Script from "next/script";
import { experiences as importedExperiences } from "@/data/experience";
import { skills } from "@/data/skills";
import { education } from "@/data/education";
import { personalInfo, socialLinks } from "@/data/personal";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const sameAs = socialLinks.map(link => link.url);

const personData = {
  name: personalInfo.name,
  alternateName: "Volde.dev",
  description: personalInfo.intro,
  image: `${baseUrl}${personalInfo.profileImage}`,
  sameAs: sameAs,
  jobTitle: personalInfo.title,
  email: personalInfo.email,
  url: baseUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Maitaima",
    addressRegion: "Nigeria",
    addressCountry: "Abuja",
  },
  alumniOf: education.map(edu => ({
    "@type": "EducationalOrganisation",
    name: edu.institution,
  })),
  knowsAbout: skills.map(skill => skill.name),
  workLocation: {
    "@type": "Place",
    name: personalInfo.location,
  },
};

const organisationData = {
  name: "Edun Yusuf - Full-Stack Developer",
  alternateName: "Volde.dev",
  description:
    "Professional full-stack web development services specialising in React, Next.js, Node.js, TypeScript, and cloud technologies. Building modern, scalable web applications.",
  logo: `${baseUrl}/images/logo.webp`,
  url: baseUrl,
  sameAs: sameAs,
  founder: {
    "@type": "Person",
    name: personalInfo.name,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Maitaima",
    addressRegion: "Nigeria",
    addressCountry: "Abuja",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: personalInfo.email,
    contactType: "customer service",
  },
};

// Ensure experiences is always an array
const experiences = Array.isArray(importedExperiences)
  ? importedExperiences
  : [];

// Generate work experience data
const workExperienceData = experiences.map((exp) => {
  // Parse "Oct 2024 – Present" or "Mar 2024" format
  const [startPart] = exp.period.split(" – ");
  const startMatch = startPart.match(/(\w+)\s+(\d{4})/);
  
  return {
    "@type": "WorkPosition",
    name: exp.title,
    worksFor: {
      "@type": "Organisation",
      name: exp.company,
      url: exp.companyUrl,
    },
    startDate: startMatch ? `${startMatch[2]}-${(
      ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        .indexOf(startMatch[1]) + 1
    ).toString().padStart(2, "0")}` : undefined,
    description: exp.description.join(" "),
    location: exp.location,
  };
});

// Define skills data from imported skills
const skillsData = skills.map((skill) => ({
  "@type": "DefinedTerm",
  name: skill.name,
}));

// Define website data
const websiteData = {
  name: "Edun Yusuf - Full-Stack Developer Portfolio",
  description:
    "Professional portfolio of Edun Yusuf, a full-stack developer with expertise in React, Next.js, Node.js, TypeScript, and cloud technologies. Building modern, scalable web applications.",
  url: baseUrl,
  author: {
    "@type": "Person",
    name: personalInfo.name,
  },
  publisher: {
    "@type": "Person",
    name: personalInfo.name,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/logo.webp`,
    },
  },
  inLanguage: "en-GB",
  copyrightYear: new Date().getFullYear(),
  mainEntity: {
    "@type": "Person",
    name: personalInfo.name,
  },
};

// Define breadcrumb data
const breadcrumbData = {
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${baseUrl}/#about`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Skills",
      item: `${baseUrl}/#skills`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Services",
      item: `${baseUrl}/#services`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Resume",
      item: `${baseUrl}/#resume`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Projects",
      item: `${baseUrl}/#projects`,
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Contact",
      item: `${baseUrl}/#contact`,
    },
  ],
};

// Generate the full schema markup
export function generateSchemaMarkup() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      ...websiteData,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      ...personData,
      hasOccupation: workExperienceData,
      hasCredential: education.map(edu => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: edu.degree,
        recognizedBy: {
          "@type": "EducationalOrganisation",
          name: edu.institution,
        },
      })),
      hasSkill: skillsData,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organisation",
      ...organisationData,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      ...breadcrumbData,
    },
  ];
}

// Component to add schema markup to the page
export default function SchemaMarkup() {
  const schemaData = generateSchemaMarkup();

  return (
    <>
      {schemaData.map((schema, index) => (
        <Script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}


