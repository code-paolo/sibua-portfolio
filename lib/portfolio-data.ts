// Portfolio data - easily exportable and reusable
export const portfolioData = {
  personal: {
    name: "Paolo G. Sibua",
    role: "Full Stack Web Developer",
    email: "paologsibs@gmail.com",
    github: "https://github.com/code-paolo",
    linkedin: "https://www.linkedin.com/in/paolo-sibua-268309222/",
    location:
      "Available for remote work worldwide | Philippines | Hybrid or Onsite Work in Manila",
  },

  about: {
    summary:
      "Full-stack developer with experience building scalable web applications using React.js, Next.js, TypeScript, and Laravel. Skilled in AI integration, secure payment systems, and responsive UI/UX, delivering solutions that improve engagement and conversions.",
    experience: "1+ year(s) coding",
    projectsBuilt: "8+",
    principles: [
      "Clean, maintainable code",
      "Industry best practices",
      "Constant learning",
      "Meaningful impact",
    ],
  },

  education: [
    {
      school: "National University - Baliwag",
      degree:
        "Bachelor of Information Technology with Specialization in Mobile and Web Application",
      period: "2021 - 2025",
      status: "Graduated",
    },
    {
      school: "FEU Institute of Technology",
      degree:
        "Bachelor of Information Technology with Specialization in Mobile and Web Application",
      period: "2021",
    },
  ],

  skills: {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Vue.js",
      "Tailwind CSS",
      "shadcn/ui",
      "FluxUI",
    ],
    backend: [
      "Node.js",
      "PHP",
      "Laravel",
      "Express",
      "Firebase",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
    fullstack: ["Next.js", "Laravel"],
    tools: ["Git", "GitHub", "GitLab", "VS Code", "Postman", "Docker"],
  },

  projects: [
    {
      title: "TBPillPal",
      subtitle: "Tuberculosis Companion",
      problem:
        "Baliwag RHU relied on manual TB monitoring workflows, making patient tracking and follow-ups harder to manage.",
      solution:
        "Developed and deployed TBPillPal to streamline TB treatment management through digital patient tracking, real-time notifications, and role-specific dashboards.",
      impact: [
        "Improved monitoring of medication adherence and patient follow-ups",
        "Enabled healthcare staff to work from a centralized dashboard",
        "Introduced gamified adherence features to encourage consistent medication intake",
        "Implemented AI-based result summarization for faster interpretation",
      ],
      highlights: [
        "Real-time notifications and monitoring dashboards",
        "Gamified adherence feature for improved patient participation",
        "AI-based test result summarization",
        "Built and deployed for Baliwag Rural Health Unit",
      ],
      metrics: [
        { label: "Features Built", value: "20+" },
        { label: "Tech Stack", value: "5" },
        { label: "Project Duration", value: "6mo" },
      ],
      technologies: [
        "Firebase",
        "Tailwind CSS",
        "shadcn/ui",
        "React",
        "TypeScript",
      ],
      githubUrl: "https://github.com/code-paolo/tbpillpal",
      featured: true,
    },
    {
      title: "BookTix",
      subtitle: "Modern Movie Ticket Booking Platform",
      problem:
        "Users needed a faster, simpler movie booking flow with better discovery and checkout reliability.",
      solution:
        "Built a full-stack MVP with advanced search/filtering, Groq-powered AI assistance, and secure Stripe payment flow.",
      impact: [
        "Reduced booking friction with faster movie discovery and checkout",
        "Improved customer support with instant AI chatbot responses",
        "Minimized payment errors through secure Stripe integration",
        "Increased booking completion and successful transactions",
      ],
      highlights: [
        "Advanced movie search and filtering",
        "Groq-powered AI chatbot assistant",
        "Secure Stripe payment gateway",
        "Automated transaction confirmations",
      ],
      metrics: [
        { label: "Features Built", value: "15+" },
        { label: "Reusable Components", value: "30+" },
        { label: "Tech Stack", value: "10+ tools" },
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Zustand",
        "Groq AI",
        "Stripe API",
      ],
      githubUrl: "https://github.com/code-paolo/movie-ticketing-system",
      liveUrl: "https://movie-ticketing-system-tau.vercel.app/",
    },
    {
      title: "Beati Cafe",
      subtitle: "Modern Cafe Web Application",
      problem:
        "Cafe ordering needed better product discovery, streamlined cart flow, and faster customer support.",
      solution:
        "Built a full-stack e-commerce cafe platform with advanced filtering, secure authentication, and AI-assisted support.",
      impact: [
        "Improved product discovery through advanced filtering",
        "Streamlined checkout using better cart management flows",
        "Enhanced engagement with Groq AI chatbot support",
        "Reduced input errors with strong form validation",
      ],
      highlights: [
        "Groq AI chatbot for menu recommendations and inquiries",
        "Advanced filtering and cart management",
        "Secure authentication using Zod and React Hook Form",
        "Responsive full-stack Next.js implementation",
      ],
      metrics: [
        { label: "AI Response Time", value: "<3s" },
        { label: "Features Implemented", value: "15+" },
        { label: "Reusable Components", value: "25+" },
        { label: "Tech Stack", value: "8 tools" },
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Groq AI",
        "Zod",
        "react-hook-form",
      ],
      githubUrl: "https://github.com/code-paolo/beati-cafe",
      liveUrl: "https://beati-cafe.vercel.app/",
    },
  ],

  experience: [
    {
      year: "Dec 2025 - Mar 2026",
      title: "App Developer",
      company: "Coral System Technologies Inc.",
      current: true,
      description: [
        "Engineered real-time communication features using Laravel Broadcasting, Echo, and Reverb within containerized Docker environments.",
        "Drove development of core HRIS modules, focusing on system enhancements and optimized workflows.",
        "Crafted a library of reusable UI components using ShadCN and Vue.js to ensure interface consistency.",
        "Architected multitenant security layers with robust RBAC using Laravel Spatie Permissions.",
        "Enhanced system reliability by implementing automated unit testing suites with Laravel Pest.",
        "Streamlined business logic through the Repository Pattern, ensuring a clean and maintainable codebase.",
        "Facilitated Agile delivery through iterative development and active participation in continuous feedback loops.",
        "Orchestrated GitLab workflows, including strategic branching, merge request management, and peer code reviews.",
        "Leveraged CI/CD pipelines and Linux CLI for efficient Docker management and deployment tasks.",
        "Successfully delivered 20+ pull requests spanning complex UI/UX and backend performance upgrades."
      ],
    },
    {
      year: "Apr 2025 - Jul 2025",
      title: "WordPress Development Intern",
      company: "Knowles Training Institute",
      description: [
        "Modernized the institute's digital presence by designing intuitive, high-conversion web pages.",
        "Transformed brand guidelines into creative, high-impact layouts in collaboration with the marketing team.",
        "Curated and optimized service-oriented content and promotional materials for better visual storytelling.",
        "Boosted cross-device accessibility and user engagement through responsive design improvements.",
        "Executed SEO strategies by refining content structure and metadata to drive organic search rankings.",
        "Maintained platform integrity through timely updates of course data and event schedules."
      ],
    },
    {
      year: "Nov 2024 - Mar 2025",
      title: "IT Operations Intern",
      company: "Concentrix Cyberwest",
      description: [
        "Resolved critical hardware, software, and network issues through dedicated technical support for end-users.",
        "Administered secure IT systems and user accounts to maintain operational continuity.",
        "Developed deep technical troubleshooting skills by managing server and network configurations."
      ],
    },
    {
      year: "Sep 2024 - Dec 2024",
      title: "Software Development Lead",
      company: "GDSC - National University - Baliwag",
      description: [
        "Spearheaded student-led development projects by defining comprehensive scopes and strategic goals.",
        "Translated university needs into actionable technical requirements and project objectives.",
        "Facilitated high-level planning meetings to establish clear team responsibilities and delivery timelines.",
        "Provided technical mentorship on documentation standards and software architecture.",
        "Coordinated cross-functional efforts between faculty and student teams to ensure project alignment."
      ],
    },
  ],
};

export type PortfolioData = typeof portfolioData;
