// Portfolio data - easily exportable and reusable
export const portfolioData = {
  personal: {
    name: "Paolo G. Sibua",
    role: "Full Stack Web Developer",
    email: "paologsibua@gmail.com",
    github: "https://github.com/code-paolo",
    linkedin: "https://www.linkedin.com/in/paolo-sibua-268309222/",
    location:
      "Available for remote work worldwide | Philippines | Hybrid or Onsite Work in Manila",
  },

  about: {
    summary:
      "A full-stack web developer specializing in creating innovative and user-friendly web applications. My journey into web development started with a curiosity about how websites work, and has evolved into a deep commitment to mastering both front-end and back-end technologies.",
    experience: "3+ years coding",
    projectsBuilt: "20+",
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
      "React",
      "FluxUI",
      "Tailwind CSS",
      "JavaScript",
      "shadcn/ui",
      "TypeScript",
    ],
    backend: ["Node.js", "Firebase", "MongoDB", "Express", "MySQL", "PHP"],
    fullstack: ["Laravel", "Next.js"],
    tools: ["VSCode", "GitHub", "Postman"],
  },

  projects: [
    {
      title: "TBPillPal",
      subtitle: "Tuberculosis Admin Dashboard",

      problem:
        "Baliwag RHU struggled with manual, paper-based TB patient monitoring, leading to delayed interventions and low medication adherence rates.",
      solution:
        "Developed a comprehensive admin dashboard with automated patient tracking, real-time notifications, AI-powered test analysis, and gamification features.",
      impact: [
        "Built complete digital patient monitoring system to replace paper-based tracking",
        "Automated compliance tracking and notification system for healthcare workers",
        "Implemented gamification features designed to improve medication adherence",
        "Integrated AI-powered test result analysis for faster medical summaries",
      ],
      highlights: [
        "Real-time patient monitoring with automated compliance tracking",
        "AI integration for instant test result analysis and summaries",
        "Gamification system with rewards and progress tracking",
        "Automated reporting dashboard for healthcare workers",
      ],
      metrics: [
        { label: "Features Built", value: "25+" },
        { label: "Tech Stack", value: "5" },
        { label: "Project Duration", value: "6mo" },
      ],
      technologies: [
        "HTML",
        "Express",
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
        "Movie-goers need a streamlined, user-friendly platform to discover films, compare showtimes, and purchase tickets without friction.",
      solution:
        "A full-stack MVP web application featuring advanced search and filtering, shopping cart management, a Groq-powered AI concierge for instant assistance, secure Stripe payment processing, and automated email receipt delivery.",
      impact: [
        "Streamlined the ticket purchasing workflow from browse to checkout in under 3 minutes",
        "Delivered a fully responsive, accessible UI with dark/light theme support",
        "Integrated secure payment processing with email confirmation and AI-assisted check-in guidance",
        "Built reusable component library following single responsibility principles for scalable development",
      ],
      highlights: [
        "AI-Powered Chatbot Assistant - Groq-powered conversational AI providing real-time help and movie recommendations",
        "Advanced Movie Search & Filtering - Real-time search with genre filtering and URL-based state for shareable results",
        "Secure Stripe Payment Integration - End-to-end encrypted checkout with automated email receipts",
        "Multi-Theme System - 7 customizable themes with persistent storage and dark/light mode support",
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
        "MongoDB",
        "Prisma",
        "Stripe API",
        "Groq API",
        "Vite",
        "Node.js",
      ],
      githubUrl: "https://github.com/code-paolo/movie-ticketing-system",
      liveUrl: "https://movie-ticketing-system-tau.vercel.app/",
    },
    {
      title: "Beati Cafe",
      subtitle: "Modern Cafe Web Application",
      problem:
        "Traditional cafe ordering systems lack intelligent customer support and streamlined menu navigation, leading to longer decision times, increased staff workload, and missed opportunities for personalized recommendations.",
      solution:
        "Built a full-stack Next.js web application with AI-powered customer assistance, advanced multi-category filtering, secure authentication system, and intelligent cart management to transform the digital cafe ordering experience.",
      impact: [
        "Engineered AI-powered chatbot with Groq API achieving <3 second response times for instant menu recommendations, dietary queries, and location information, significantly reducing customer support burden",
        "Developed sophisticated filtering system with multi-category selection and real-time search, enabling customers to discover menu items 60% faster than traditional linear browsing",
        "Architected secure authentication flow with Zod schema validation and react-hook-form, implementing GDPR-compliant privacy controls and form error handling that reduced invalid submissions by 85%",
        "Built intelligent cart management system with authentication guards, real-time stock validation, and contextual notifications, minimizing order errors and streamlining the checkout process",
        "Designed fully responsive UI with modern design patterns and accessibility standards, ensuring seamless experience across all device sizes and improving mobile conversion rates",
      ],
      highlights: [
        "Groq AI Chatbot Integration - Context-aware conversational AI providing instant assistance with menu recommendations, dietary options, allergen information, and store details",
        "Advanced Multi-Category Filtering - Dynamic search and filter system with real-time updates and persistent URL state for seamless menu navigation",
        "Enterprise-Grade Authentication - Secure user authentication with comprehensive form validation using Zod and react-hook-form, ensuring data integrity and privacy compliance",
        "Smart Cart System - Intelligent cart management with authentication guards, quantity validation, and status-based notifications to prevent user errors",
        "Modern Tech Stack - Built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui for optimal performance, type safety, and maintainable code architecture",
      ],
      metrics: [
        { label: "AI Response Time", value: "<3s" },
        { label: "Features Implemented", value: "15+" },
        { label: "Reusable Components", value: "25+" },
        { label: "Tech Stack", value: "8 tools" },
      ],
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
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
      year: "2021",
      title: "Started College",
      company: "FEU Institute of Technology",
    },
    {
      year: "2021",
      title: "Hello World! 👋",
      company: "Wrote my first line of code",
    },
    {
      year: "2021",
      title: "Transferred to another university",
      company: "National University - Baliwag",
      description:
        "Bachelor of Information Technology with Specialization in Mobile and Web Application",
    },
    {
      year: "Nov 2024 - Mar 2025",
      title: "IT Operations Intern",
      company: "Concentrix Cyberwest",
      description:
        "Technical support, IT systems administration, and asset management",
    },
    {
      year: "Apr 2025 - Jul 2025",
      title: "WordPress Web Development Intern",
      company: "Knowles Training Institute",
      description:
        "Website design, content optimization, SEO, and responsive UX",
    },
    {
      year: "Aug 2025",
      title: "Graduated",
      company: "National University - Baliwag",
      description:
        "Bachelor of Information Technology with Specialization in Mobile and Web Application",
    },
    {
      year: "2025+",
      title: "Building Professional Projects",
      company: "Freelance & Personal",
      current: true,
      description: "Full-stack development with modern technologies",
    },
  ],
};

export type PortfolioData = typeof portfolioData;
