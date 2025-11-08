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
      "ReactJS",
      "FluxUI",
      "TailwindCSS",
      "JavaScript",
      "ShadCN",
      "TypeScript",
    ],
    backend: ["NodeJS", "Firebase", "MongoDB", "Express", "MySQL", "PHP"],
    fullstack: ["Laravel", "NextJS"],
    tools: ["VSCode", "Github", "Postman"],
  },

  projects: [
    {
      title: "TBPillPal",
      subtitle: "Tuberculosis Admin Dashboard",
      status: "Completed",
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
        "TailwindCSS",
        "ShadCN-UI",
        "ReactJS",
        "TypeScript",
      ],
      githubUrl: "https://github.com/code-paolo/tbpillpal",
      featured: true,
    },
    {
      title: "BookTix",
      subtitle: "Modern Movie Ticket Booking Platform",
      status: "In Development",
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
        "ShadCN",
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
      mvp: true,
    },
    {
      title: "Task Management Platform",
      subtitle: "Real-time Collaboration Tool",
      status: "Completed",
      problem:
        "Teams needed a scalable solution for real-time task management with drag-and-drop functionality.",
      solution:
        "Built a full-stack collaborative platform with real-time synchronization, intuitive UI, and enterprise-grade scalability.",
      impact: [
        "Supports 1000+ concurrent users without performance degradation",
        "Real-time updates ensure team-wide synchronization",
        "Reduced task assignment time by 70%",
      ],
      highlights: [
        "Drag-and-drop task organization",
        "Real-time collaboration with WebSocket integration",
        "Scalable microservices architecture",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com",
    },
    {
      title: "Weather Dashboard",
      subtitle: "Interactive Weather Visualization",
      status: "Completed",
      problem:
        "Users needed a unified platform to view weather data from multiple sources with interactive visualizations.",
      solution:
        "Created a responsive dashboard integrating multiple weather APIs with real-time updates and interactive maps.",
      impact: [
        "Aggregates data from 3+ weather APIs for accuracy",
        "Real-time updates every 5 minutes",
        "Mobile-first responsive design",
      ],
      highlights: [
        "Multi-API integration for comprehensive data",
        "Interactive map visualization",
        "7-day forecast with hourly breakdowns",
      ],
      technologies: ["React", "TailwindCSS", "Weather API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
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
      year: "2022",
      title: "Built First Web Application",
      company: "HTML, CSS, JavaScript",
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
      year: "2025+",
      title: "Building Professional Projects",
      company: "Freelance & Personal",
      current: true,
      description: "Full-stack development with modern technologies",
    },
  ],
};

export type PortfolioData = typeof portfolioData;
