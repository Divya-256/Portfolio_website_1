import { useRef } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { CertificationsSection } from "@/components/certifications-section";
import { AccomplishmentsSection } from "@/components/accomplishments-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { FeaturedSection } from "@/components/featured-section";
import { SkillsSection } from "@/components/skills-section";
import tronImage from "@/assets/Tron.jpg";
import coreThumbnail from "@/assets/core-thumbnail.png";
import coreVideo from "@/assets/core.mp4";
import awardQ2FY26 from "@/assets/awards/Q2FY26_Spot_Award.png";
import awardAwesomeQ1FY26 from "@/assets/awards/Awesome_addition.png";
import awardQ4FY25 from "@/assets/awards/Q4FY25_Spot_Award.png";
import scholarshipImage from "@/assets/awards/carolyn_leighton.png";
import debateAi from "@/assets/projects/debate_ai.png";
import financialResearcher from "@/assets/projects/financial_researcher.png";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Portfolio data
const PORTFOLIO_DATA = {
  name: "Divyasree M",
  title: "Software Engineer | Frontend & Full Stack Developer",
  description: "Proactive and adaptable Software Engineer with strong ownership and leadership qualities. Experienced in delivering end-to-end solutions across frontend, backend, mobile, CMS, and DevOps stacks.",
  about: "Proactive and adaptable Software Engineer with strong ownership and leadership qualities. Experienced in delivering end-to-end solutions across frontend, backend, mobile, CMS, and DevOps stacks. Known for quickly adapting to new technologies, solving complex problems, and delivering high-impact, production-grade applications while maintaining quality and timelines.",
  skillsData: {
    languages: ["React", "Next.js", "Gatsby", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    frameworks: ["Java", "Spring Boot", "Node.js", "NestJS (Basics)", "Python", "Django", "Golang (Gorilla Mux, GORM)"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    tools: ["Docker (Basics)", "GitHub Actions (CI/CD)", "AWS (Basics)", "Git", "Agile/Scrum", "Lighthouse Audits"],
    cloud: ["Strapi (Content Modeling, APIs, Publishing Workflows)", "Headless CMS Integrations"],
    other: ["System Design", "WCAG Accessibility", "SEO"]
  },
  projects: [
    {
      id: "0",
      title: "AI Financial Researcher",
      description: "A multi-agent AI system using CrewAI that generates comprehensive research reports on any company using real-time web search. Features researcher and analyst agents working together with real-time data via Serper API.",
      tags: ["CrewAI", "Groq", "Serper API", "Gradio", "Python"],
      imageUrl: financialResearcher,
      demoUrl: "https://divya256-ai-financial-researcher.hf.space/",
      repoUrl: "https://github.com/Divya-256/financial_researcher",
    },
    {
      id: "1",
      title: "AI Debate System",
      description: "An interactive web application that leverages AI to simulate structured debates on any topic. Users can input a debate topic, and the system generates arguments, counterarguments, and insights in real-time using advanced AI models.",
      tags: ["Python", "Gradio", "FastAPI", "Hugging Face", "OpenAI API"],
      imageUrl: debateAi,
      demoUrl: "https://divya256-ai-debate-system.hf.space/",
      repoUrl: "https://github.com/Divya-256/AI_Debate_System",
    },
    {
      id: "2",
      title: "Sports Mobile Application (Flutter)",
      description: "Co-built a mobile application from scratch, now live and used by 31+ international companies. Led frontend development using Flutter, designing intuitive UX for tournaments, teams, leaderboards, challenges, quizzes, and profiles.",
      tags: ["Flutter", "Firebase", "Hive", "REST APIs"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "3",
      title: "Healthcare Company Website",
      description: "Developed a modern and responsive healthcare platform. Contributed to building and scaling the primary platform.",
      tags: ["React", "Next.js", "Strapi", "AWS"],
      imageUrl: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2274&auto=format&fit=crop",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "4",
      title: "Healthcare Company Website – Website Revamp",
      description: "Led the complete website revamp for a healthcare company, delivering a specialized patient journey platform with a focus on seamless user experience.",
      tags: ["React", "Next.js", "Strapi", "Performance"],
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "5",
      title: "C.O.R.E (TRON Agentic AI Hackathon)",
      description: "Centralized Orchestration and Routing Engine - A centralized AI orchestration and routing platform that unifies multi-purpose agents and LLMs into a governed, scalable enterprise intelligence system. Won 1st Runner Up.",
      tags: ["Agentic AI", "Orchestration", "LLMs", "Hackathon"],
      imageUrl: coreThumbnail,
      videoUrl: coreVideo,
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "6",
      title: "CMS Authoring Tool",
      description: "Designed and developed the complete Flutter Web frontend for a CMS Authoring Tool. Built Golang middleware with JWT-based authentication and role-based authorization.",
      tags: ["Flutter Web", "Golang", "Strapi", "JWT", "REST APIs"],
      imageUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "7",
      title: "Corporate Website Enhancement",
      description: "Contributed to the development and enhancement of a major corporate website, focusing on performance, SEO, and responsive design.",
      tags: ["React", "Gatsby", "Strapi", "SEO"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      demoUrl: "#",
      repoUrl: "#",
    }
  ],
  education: [
    {
      id: "1",
      degree: "B.Tech in Computer Science (CGPA: 8.67)",
      institution: "Government Engineering College, Thrissur",
      location: "Thrissur, Kerala",
      period: "2020 - 2024",
      description: "Completed Bachelor of Technology in Computer Science with focus on software engineering, algorithms, and modern development practices."
    },
    {
      id: "2",
      degree: "Higher Secondary (98.42%)",
      institution: "Municipal GHSS, Payyannur",
      location: "Payyannur, Kerala",
      period: "2017 - 2019",
      description: "Completed higher secondary education with strong foundation in mathematics and science."
    },
    {
      id: "3",
      degree: "High School (CGPA: 10.0)",
      institution: "Chinmaya Vidyalaya",
      location: "Kerala",
      period: "2009 - 2017",
      description: "Completed high school education with excellent academic performance and participation in various extracurricular activities."
    }
  ],
  experiences: [
    {
      id: "1",
      role: "Software Engineer",
      company: "Tarento Group",
      location: "India",
      period: "Oct 2024 -- Present",
      description: "Demonstrated end-to-end ownership across multiple client and internal projects, spanning web, mobile, CMS, and backend systems. Proactively identified gaps, improved system quality, and drove tasks to completion while collaborating with cross-functional teams.",
      achievements: [
        "Led frontend development for a sports mobile app now used by 31+ international companies.",
        "Built and delivered multiple high-performance accelerator pages for various clients using JAMstack (Gatsby + Strapi).",
        "Built multiple healthcare company websites from scratch, delivering modern and compliant user journeys.",
        "Designed and developed the complete Flutter Web frontend and Golang middleware for a CMS Authoring Tool.",
        "Improved responsiveness, accessibility (WCAG), and performance using Lighthouse audits."
      ],
      technologies: ["React", "Next.js", "Gatsby", "Strapi", "Flutter", "Golang", "Java", "Spring Boot", "AWS", "Docker"]
    },
    {
      id: "2",
      role: "Frontend Developer Intern",
      company: "MetaShot",
      location: "Remote",
      period: "July 2023 - September 2023",
      description: "Worked as Frontend developer intern focusing on environmental technology solutions.",
      achievements: [
        "Developed a website for carbon offsetting",
        "Implemented responsive design and user-friendly interfaces",
        "Collaborated with design team to create engaging user experiences"
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "HTML5"]
    },
    {
      id: "3",
      role: "Web Developer",
      company: "ISTE-GECT",
      location: "Thrissur, Kerala",
      period: "July 2023 - May 2024",
      description: "Led web development initiatives for college technical society and events.",
      achievements: [
        "Developed website for ISTE-GECT club",
        "Created website for 21st annual convention (NUEVA)",
        "Served as Joint Convenor and Tech Lead",
      ],
      technologies: ["React.js", "JavaScript", "CSS3"]
    },
    {
      id: "4",
      role: "Full Stack Developer",
      company: "Mezmo Solutions",
      location: "Remote",
      period: "January 2023 - July 2023",
      description: "Developed web applications for startup ecosystem and internship management.",
      achievements: [
        "Developed web app for Summer Startup Festival",
        "Created comprehensive Internship portal",
        "Implemented full-stack solutions with database integration"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"]
    },
    {
      id: "5",
      role: "Web Development Intern",
      company: "Eztro-Tech Robotics",
      location: "Remote",
      period: "December 2021 - March 2022",
      description: "Collaborated on robotics control interface development.",
      achievements: [
        "Collaborated with 5-member team to develop frontend of robot control web app",
        "Integrated with Django backend",
        "Developed MVP of the product",
        "Gained experience in IoT and robotics integration"
      ],
      technologies: ["React.js", "Django", "JavaScript", "CSS3"]
    }
  ],
  certifications: [
    {
      id: "1",
      name: "Create and Manage Cloud Resources",
      issuer: "Google Cloud",
      date: "2024",
      credentialId: "GC-CMR-001",
      credentialUrl: "#",
      description: "Foundational skills in creating and managing Google Cloud resources",
      skills: ["Google Cloud", "Resource Management", "Cloud Computing"]
    },
    {
      id: "2",
      name: "Perform Foundational Infrastructure Tasks in Google Cloud",
      issuer: "Google Cloud",
      date: "2024",
      credentialId: "GC-PFI-002",
      credentialUrl: "#",
      description: "Infrastructure management and deployment on Google Cloud Platform",
      skills: ["Infrastructure", "Google Cloud", "DevOps"]
    },
    {
      id: "3",
      name: "Deploy to Kubernetes in Google Cloud",
      issuer: "Google Cloud",
      date: "2024",
      credentialId: "GC-K8S-003",
      credentialUrl: "#",
      description: "Container orchestration and deployment using Kubernetes",
      skills: ["Kubernetes", "Containers", "Google Cloud", "DevOps"]
    },
    {
      id: "4",
      name: "Engineer Data in Google Cloud",
      issuer: "Google Cloud",
      date: "2024",
      credentialId: "GC-EDG-004",
      credentialUrl: "#",
      description: "Data engineering and processing on Google Cloud Platform",
      skills: ["Data Engineering", "Google Cloud", "Big Data"]
    },
    {
      id: "5",
      name: "Responsive Website Development using HTML5, CSS3, JS and Bootstrap",
      issuer: "Online Certification",
      date: "2023",
      credentialId: "RWD-005",
      credentialUrl: "#",
      description: "Modern web development with responsive design principles",
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"]
    },
  ],
  accomplishments: [
    {
      id: "1",
      title: "1st Runner Up - TRON Agentic AI Hackathon",
      description: "Won 1st Runner Up at TRON Agentic AI Hackathon (Dec 2025 - Jan 2026) for team C.O.R.E. (Centralized Orchestration and Routing Engine).",
      icon: "trophy" as const
    },
    {
      id: "2",
      title: "Spot Award - Q4 FY26",
      description: "Received for exceptional contributions and outstanding performance at Tarento.",
      icon: "lightbulb" as const
    },
    {
      id: "5",
      title: "Awesome Addition to the Team - Q1 FY26",
      description: "Awarded for being a valuable and impactful collaborator within the engineering team.",
      icon: "users" as const
    },
    {
      id: "6",
      title: "Spot Award - Q4 FY25",
      description: "Recognized for commitment to delivery excellence and technical problem-solving.",
      icon: "lightbulb" as const
    },
    {
      id: "3",
      title: "Tech Lead – ISTE GECT",
      description: "Led technical initiatives and coordinated multiple events as Joint Convenor of ISTE GECT and Tech Lead for NUEVA 2023.",
      icon: "users" as const
    },
    {
      id: "4",
      title: "Carolyn Leighton Scholarship",
      description: "Scholarship award recognizing excellence in technology from Women in Technology International (2023).",
      icon: "trophy" as const
    }
  ],
  featuredItems: [
    {
      id: "0",
      title: "AI Debate System",
      description: "An interactive web application that leverages AI to simulate structured debates on any topic with real-time arguments and counterarguments.",
      imageUrl: debateAi,
      demoUrl: "https://divya256-ai-debate-system.hf.space/",
      category: "projects" as const,
      tags: ["Python", "AI", "Gradio"]
    },
    {
      id: "1",
      title: "C.O.R.E - Agentic AI Platform",
      description: "Centralized Orchestration and Routing Engine - unifies multi-purpose agents and LLMs into a governed, scalable enterprise system.",
      imageUrl: coreThumbnail,
      videoUrl: coreVideo,
      category: "projects" as const,
      tags: ["Agentic AI", "LLMs", "Orchestration"]
    },
    {
      id: "1",
      title: "AI Financial Researcher",
      description: "A multi-agent AI system using CrewAI that generates comprehensive research reports on any company using real-time web search. Features researcher and analyst agents working together with real-time data via Serper API.",
      tags: ["CrewAI", "Groq", "Serper API", "Gradio", "Python"],
      imageUrl: financialResearcher,
      demoUrl: "https://divya256-ai-financial-researcher.hf.space/",
      repoUrl: "https://github.com/Divya-256/financial_researcher",
      category: "projects" as const,
    },
    {
      id: "2",
      title: "Sports Mobile App",
      description: "Live mobile application used by 31+ international companies for tournaments and activity tracking.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      demoUrl: "#",
      category: "projects" as const,
      tags: ["Flutter", "Firebase", "Mobile"]
    },
    {
      id: "3",
      title: "Healthcare Company Website",
      description: "Modern healthcare platforms built from scratch delivering responsive and compliant user journeys.",
      imageUrl: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2274&auto=format&fit=crop",
      demoUrl: "#",
      category: "projects" as const,
      tags: ["React", "Next.js", "Strapi"]
    },
    {
      id: "4",
      title: "CMS Authoring Tool",
      description: "Full-stack authoring tool for dynamic content management and schema migrations.",
      imageUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop",
      category: "projects" as const,
      tags: ["Flutter Web", "Golang", "JWT"]
    },
    {
      id: "7",
      title: "Corporate Website",
      description: "Official corporate website enhancement focusing on performance, SEO, and responsive technical architecture.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      demoUrl: "#",
      category: "projects" as const,
      tags: ["React", "Gatsby", "SEO"]
    },
    {
      id: "8",
      title: "Healthcare Company Website – Website Revamp",
      description: "Comprehensive website revamp for a healthcare provider, delivering a seamless patient journey for medical services.",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
      demoUrl: "#",
      category: "projects" as const,
      tags: ["React", "Next.js", "Healthcare"]
    },
    {
      id: "5",
      title: "Google Cloud Certifications",
      description: "Multiple Google Cloud certifications including Kubernetes deployment and data engineering.",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
      category: "certifications" as const,
      tags: ["Google Cloud", "Kubernetes", "DevOps"]
    },
    {
      id: "6",
      title: "Joint Convenor - ISTE GECT",
      description: "Led technical initiatives and coordinated multiple events as Joint Convenor of ISTE GECT.",
      imageUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2076&auto=format&fit=crop",
      category: "achievements" as const,
      tags: ["Leadership", "ISTE", "Technical"]
    },
    {
      id: "a1",
      title: "1st Runner Up - TRON Hackathon",
      description: "Won 1st Runner Up at TRON Agentic AI Hackathon for team C.O.R.E. (Centralized Orchestration and Routing Engine).",
      imageUrl: tronImage,
      videoUrl: coreVideo,
      category: "achievements" as const,
      tags: ["Hackathon", "AI", "Award"]
    },
    {
      id: "a2",
      title: "Spot Award - Q2 FY26",
      description: "Recognized for outstanding technical leadership and contribution to high-impact projects at Tarento.",
      imageUrl: awardQ2FY26,
      category: "achievements" as const,
      tags: ["Tarento", "Award", "Excellence"]
    },
    {
      id: "a4",
      title: "Awesome Addition to the Team",
      description: "Awarded Q1 FY26 for seamless integration, collaboration, and immediate impact on the development team.",
      imageUrl: awardAwesomeQ1FY26,
      category: "achievements" as const,
      tags: ["Tarento", "Teamwork", "Recognition"]
    },
    {
      id: "a5",
      title: "Spot Award - Q4 FY25",
      description: "Awarded for exceptional delivery and commitment to quality during critical project phases.",
      imageUrl: awardQ4FY25,
      category: "achievements" as const,
      tags: ["Tarento", "Award", "Commitment"]
    },
    {
      id: "a3",
      title: "Carolyn Leighton Scholarship",
      description: "Scholarship award recognizing excellence in technology from Women in Technology International (2023).",
      imageUrl: scholarshipImage,
      category: "achievements" as const,
      tags: ["Scholarship", "WITI", "Technology"]
    },
  ],
  contactInfo: {
    email: "256divyasree@gmail.com",
    location: "Bengaluru, Karnataka, India",
  },
  socials: [
    { platform: "linkedin" as const, url: "https://www.linkedin.com/divya-256" },
    { platform: "github" as const, url: "https://github.com/Divya-256/" },
    { platform: "geeksforgeeks" as const, url: "https://www.geeksforgeeks.org/profile/256divy0kii" },
    { platform: "leetcode" as const, url: "https://leetcode.com/u/256divyasree/" },
  ],
  navItems: [
    { label: "Home", href: "home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Accomplishments", href: "#accomplishments" },
  ]
};

export default function PortfolioPage() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
      anchorPlacement: 'top-bottom',
    });

    // Refresh AOS when window is resized
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen">
      <Navbar
        name={PORTFOLIO_DATA.name}
        navItems={PORTFOLIO_DATA.navItems}
      />

      {/* Hero section */}
      <HeroSection
        name={PORTFOLIO_DATA.name}
        title={PORTFOLIO_DATA.title}
        description={PORTFOLIO_DATA.description}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />

      <SectionDivider />

      {/* About section */}
      <AboutSection
        about={PORTFOLIO_DATA.about}
        skills={[]}
      />

      <SectionDivider />

      {/* Skills section */}
      <SkillsSection skills={PORTFOLIO_DATA.skillsData} />

      <SectionDivider />

      {/* Experience section */}
      <div ref={experienceRef}>
        <ExperienceSection experiences={PORTFOLIO_DATA.experiences} />
      </div>

      <SectionDivider />

      {/* Education section */}
      <EducationSection education={PORTFOLIO_DATA.education} />

      <SectionDivider />

      {/* Projects section */}
      <div ref={projectsRef}>
        <ProjectsSection projects={PORTFOLIO_DATA.projects} />
      </div>

      <SectionDivider />

      {/* Certifications section */}
      <CertificationsSection certifications={PORTFOLIO_DATA.certifications} />

      <SectionDivider />

      {/* Accomplishments section */}
      <AccomplishmentsSection accomplishments={PORTFOLIO_DATA.accomplishments} />

      <SectionDivider />

      {/* Featured section */}
      <FeaturedSection featuredItems={PORTFOLIO_DATA.featuredItems} />

      <SectionDivider />

      {/* Contact section */}
      <div ref={contactRef}>
        <ContactSection contactInfo={PORTFOLIO_DATA.contactInfo} />
      </div>

      <Footer
        name={PORTFOLIO_DATA.name}
        socials={PORTFOLIO_DATA.socials}
      />
    </div>
  );
}