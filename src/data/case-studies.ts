export const caseStudies = [
  {
    slug: "thinkerslane",
    title: "Thinkerslane",
    template: "template1",
    tag: "EdTech Platform",
    shortDesc:
      "Reimagining digital education through structured coaching. We engineered a scalable, high-performance platform that empowers educators to deliver personalized learning paths, track student progress in real-time, and seamlessly integrate diverse multimedia resources for a richer educational experience.",
    gradient: "from-red-900 to-black",
    results: {
      speed: "2x",
      errors: "-75%",
      sales: "Global",
    },
    heroImage: "/case-studies/thinkerslane.png",
    client: "Thinkerslane inc.",
    platform: "Web Application",
    role: "Full-Stack Development",
    stack: "Next.js, Node.js, PostgreSQL",
  },
  {
    slug: "suprokash",
    title: "Suprokash",
    template: "template1",
    tag: "Mobile App",
    shortDesc:
      "A comprehensive retail bookstore billing ecosystem designed to streamline daily operations. The application integrates real-time inventory management, secure digital payment processing, and advanced reporting analytics to significantly reduce manual errors and boost overall operational efficiency.",
    gradient: "from-gray-900 to-black",
    results: {
      speed: "3x",
      errors: "-90%",
      sales: "Digital",
    },
    heroImage: "/case-studies/suprokash.png",
    client: "Suprokash Bookstore",
    platform: "React Native + API",
    role: "Full-Stack Development",
    stack: "React Native, CodeIgniter 4, MySQL",
  },
  {
    slug: "video-upload-optimization",
    title: "Fast Video Upload System",
    template: "template1",
    tag: "Social Media Infrastructure",
    shortDesc:
      "Engineered a high-performance video processing pipeline to handle large-scale media uploads. By transitioning from server-side processing to AWS Presigned URLs and asynchronous FFmpeg compression, we eliminated backend bottlenecks, reduced server load, and achieved superior upload stability for 2GB+ files.",
    gradient: "from-blue-900 to-black",
    results: {
      speed: "Direct",
      errors: "Minimal",
      load: "-90%",
    },
    heroImage: "/case-studies/video-upload.png",
    client: "Social Media Platform",
    platform: "Web Application",
    role: "Full-Stack Development & Architecture",
    stack: "React, CodeIgniter, AWS S3, FFmpeg",
  },
  {
    slug: "nomadquest-mcp-travel-architecture",
    title: "NomadQuest AI – Redefining Travel Infrastructure with MCP",
    template: "template1",
    tag: "AI / Travel Infrastructure",
    shortDesc:
      "A complete architectural transformation from legacy REST-based services to a modular, AI-native MCP-powered travel platform. By integrating unified Azure API Management and secure, isolated Stripe payment workflows, the system now enables intelligent, automated trip planning and highly scalable infrastructure.",
    gradient: "from-indigo-600 to-sky-600",
    country: "Canada",
    results: {
      transformation: "REST → MCP Architecture",
      aiEcosystems: "5+ AI Platforms Validated",
      paymentSecurity: "AI-Isolated Stripe Workflow",
    },

    client: "NomadQuest AI",
    domain: "https://www.f6s.com/company/nomadquest-ai-inc#about",
    platform:
      "Node.js MCP Architecture + Azure API Management + Duffel APIs + Next.js Payment Module",
    role: "System Architect, MCP Implementation Lead, AI Integration & Secure Payment Designer",

    stack: [
      "Node.js",
      "Model Context Protocol (MCP)",
      "Azure API Management",
      "Duffel Flight APIs",
      "Stripe",
      "Next.js",
      "Claude",
      "Azure OpenAI",
      "Gemini",
      "LibreChat",
      "OpenWebUI",
    ],

    overview:
      "NomadQuest AI initially launched as a travel planning platform powered by a traditional Node.js backend, REST APIs, and a React frontend. While Phase 1 successfully enabled AI-driven itinerary planning, increasing system complexity required a more scalable and AI-native foundation. In Phase 2, the platform was fully re-architected using Model Context Protocol (MCP), replacing the conventional API-driven stack with modular MCP tools, unified Azure API Management, and secure AI-triggered Stripe payments. The result is a future-ready travel infrastructure built for intelligent automation, modular growth, and enterprise-grade security.",

    phaseComparison: {
      phase1:
        "Phase 1 was originally developed by **Brainium Infotech Inc**, utilizing a Node.js backend with REST APIs and a React frontend to enable AI-powered trip recommendations and itinerary planning. As the platform evolved, the client sought to transition beyond the traditional REST-based architecture toward a more scalable, AI-native MCP framework — which led them to partner with us for the Phase 2 transformation.",
      phase2:
        "Fully MCP-driven architecture built in Node.js, consolidating Duffel APIs into modular MCP tools and exposing a unified Azure APIM endpoint for multi-AI integration and secure payment orchestration.",
    },

    challenge: [
      "Scaling beyond a traditional REST-based architecture that was not designed for AI-native orchestration.",
      "Managing highly detailed and nested Duffel API payloads that were difficult for AI systems to interpret reliably.",
      "Orchestrating multiple travel APIs without duplication or fragmented endpoint management.",
      "Enabling AI-assisted payments without exposing sensitive passenger or payment data.",
      "Handling Duffel offer intent IDs securely across user sessions to prevent booking-payment mismatches.",
      "Transforming raw technical API responses into clear, user-friendly AI travel outputs.",
    ],

    solution: [
      {
        title: "MCP-Based Modular Flight Architecture",
        points: [
          "Rebuilt each Duffel API as an independent MCP tool.",
          "Created a unified MCP endpoint consolidating all travel operations.",
          "Established a modular system ready for expansion beyond flight services.",
        ],
      },
      {
        title: "Schema-First Payload Engineering",
        points: [
          "Designed structured schemas for complex Duffel request and response payloads.",
          "Enabled consistent interpretation across AI models including Claude, Azure OpenAI, Gemini, LibreChat, and OpenWebUI.",
          "Improved reliability, debugging efficiency, and long-term maintainability.",
        ],
      },
      {
        title: "Azure API Management Integration",
        points: [
          "Managed Duffel APIs through Azure APIM for validation and schema enforcement.",
          "Handled payload transformations and caching at the gateway layer.",
          "Exposed a single scalable endpoint for AI model connectivity.",
        ],
      },
      {
        title: "Secure AI-Connected Stripe Payments",
        points: [
          "Developed a Next.js-based payment module generating Stripe Checkout URLs tied to Duffel offer intent IDs.",
          "Ensured AI triggered payment workflows without accessing sensitive user or passenger data.",
          "Returned only payment success or failure confirmation to the AI layer.",
          "Maintained compliance, privacy, and transaction integrity.",
        ],
      },
      {
        title: "Session & Intent Validation Framework",
        points: [
          "Linked Duffel offer intent IDs to secure user sessions.",
          "Prevented payment misalignment and booking inconsistencies.",
          "Guaranteed that every transaction corresponded to the correct flight selection.",
        ],
      },
      {
        title: "Response Optimization Layer",
        points: [
          "Converted complex Duffel raw responses into structured, human-readable travel insights.",
          "Enhanced AI conversational clarity and actionability.",
        ],
      },
    ],

    aiValidation: {
      modelsIntegrated: [
        "Claude",
        "Azure OpenAI",
        "Gemini",
        "LibreChat",
        "OpenWebUI",
      ],
      description:
        "The unified MCP endpoint was validated across multiple AI ecosystems to ensure robustness, interoperability, and long-term adaptability to evolving AI platforms.",
    },

    architecturalImpact: {
      objective: [
        "Consolidated multiple Duffel APIs into modular MCP tools.",
        "Introduced schema-driven reliability for AI payload handling.",
        "Established secure AI-triggered Stripe payment workflows.",
        "Created a reusable Node.js service structure with caching and environment key management.",
      ],
      strategic: [
        "Positioned NomadQuest AI as a scalable AI-native travel infrastructure.",
        "Reduced orchestration complexity through unified MCP endpoints.",
        "Enhanced user trust through privacy-first payment isolation.",
        "Prepared the platform for expansion into additional travel modules beyond flights.",
      ],
    },
  },
  {
    slug: "flipkart-academy-scoa",
    title:
      "Architecting a Scalable Backend & Frontend for Flipkart Academy SCOA via ViSolutionz",
    template: "template1",
    tag: "Enterprise LMS / EdTech",
    shortDesc:
      "Delivered a mission-critical learning management system (LMS) for Flipkart SCOA. We architected a scalable Node.js backend and a high-performance Next.js frontend, enabling dynamic course creation, resilient multi-channel notifications, and high-concurrency exam processing.",
    gradient: "from-blue-700 to-yellow-500",
    results: {
      scale: "High Concurrency",
      uptime: "Near-perfect",
      delivery: "5 Months",
    },

    client: "Flipkart",
    domain: "https://flipkartacademy-scoa.in/",
    platform: "Next.js Frontend + Node.js Backend + PostgreSQL + Redis",
    role: "Comprehensive Backend Development & End-to-End Frontend Architecture",

    heroImage: "/case-studies/flipkart.png",

    stack: [
      "Next.js (v16)",
      "React 19",
      "Node.js (v22+)",
      "Express 5",
      "PostgreSQL 16+",
      "Redis 7+",
      "BullMQ",
      "Tailwind CSS v4",
      "Zustand",
      "React Hook Form",
      "Zod",
      "TanStack React Table",
      "Recharts",
      "Framer Motion",
      "@dnd-kit",
      "Sharp",
    ],

    overview:
      "Over a rigorous 5-month development cycle in collaboration with ViSolutionz.com, our specialized engineering team delivered a mission-critical platform for Flipkart Academy SCOA. Tasked with building the entire core infrastructure of a modern Learning Management System (LMS), we successfully architected, developed, and deployed a highly scalable, secure, and resilient backend alongside a responsive, interactive frontend. The resulting system effortlessly powers complex workflows ranging from user onboarding and dynamic enrollments to high-concurrency exam processing and automated multi-channel notifications.",

    challenge: [
      "Handling high concurrency during exam windows and major registration drives without locking the database or crashing the server.",
      "Designing a complex data relational model linking students, courses, dynamic forms, quiz attempts, and certificates.",
      "Implementing asynchronous processing for notifications (Emails, SMS, WhatsApp) to avoid synchronous delays and timeouts.",
      "Enforcing granular Role-Based Access Control (RBAC) for administrators versus standard student authentication.",
      "Managing complex nested forms for course creation leading to sluggish UI performance.",
      "Rendering massive datasets in the admin portal (thousands of users/records) without freezing the DOM.",
    ],

    solution: [
      {
        title: "Decoupled Backend Architecture & Tech Stack",
        points: [
          "Engineered a RESTful API built on a layered architecture (Controller → Service → Repository → Model pattern) for testability.",
          "Utilized Node.js (v22+) with Express 5 for lightning-fast, non-blocking I/O.",
          "Deployed PostgreSQL 16+ with Sequelize ORM for ACID compliance and Redis 7+ for high-speed caching and OTPs.",
          "Integrated BullMQ for asynchronous job processing of multi-channel notifications.",
        ],
      },
      {
        title: "Dual-Tier Authentication & RBAC",
        points: [
          "Implemented stateless JWT-based access and OTP verification for the Student Module.",
          "Built a sophisticated Role-Based Access Control (RBAC) system for administrators.",
          "Utilized Redis for real-time invalidation of user sessions and tokens.",
        ],
      },
      {
        title: "Dynamic Course, Form, and Exam Engine",
        points: [
          "Built a dynamic enrollment engine supporting custom form groups and fields.",
          "Created a robust assessment system capable of tracking granular student responses.",
          "Integrated Sharp for server-side generation of personalized student certificates.",
        ],
      },
      {
        title: "Resilient Multi-Channel Notification System",
        points: [
          "Offloaded Email, WhatsApp, and SMS communications to a BullMQ worker architecture.",
          "Configured workers to prioritize critical messages (OTPs) over standard notifications.",
          "Designed the system for graceful degradation with third-party providers using backoff strategies and webhooks.",
          "Implemented dedicated webhook listeners to process real-time delivery callbacks from Gupshup and Karix.",
        ],
      },
      {
        title: "Monitoring, Audit Trails, and Operations",
        points: [
          "Implemented comprehensive audit trails for administrative actions (admin_audit_log) and student activities (student_audit_log, student_login_log).",
          "Tracked every dispatched message in a dedicated notification_log table.",
          "Integrated Bull Board for a visual dashboard to monitor queue health and retry failed jobs.",
        ],
      },
      {
        title: "The Learner Dashboard & Course Consumption",
        points: [
          "Resume-Anywhere Functionality: Seamless state-sync feature to resume videos/modules exactly where left off.",
          "Interactive Modules: UI supports interactive quizzes, downloadable resources, and real-time progress bars via Framer Motion.",
          "Responsive & Accessible: Fully responsive, mobile-first, and adheres to WCAG accessibility standards.",
        ],
      },
      {
        title: "Admin & Instructor Portal",
        points: [
          "Advanced Data Management Grids: Built using TanStack React Table to manage thousands of users/records with server-side pagination.",
          "Dynamic Course Builder: Multi-step form workflow utilizing React Hook Form to seamlessly add modules and assessments.",
          "Drag-and-Drop Assessments: Built interactive question types using @dnd-kit.",
        ],
      },
      {
        title: "Analytics and Reporting",
        points: [
          "Visual Dashboards: Integrated Recharts to display course completion rates, scores, and growth.",
          "Export Capabilities: Implemented client-side CSV generation to export filtered table data for offline analysis.",
        ],
      },
    ],

    frontendChallenges: [
      {
        title: "Challenge 1: Managing Complex Nested Forms",
        issue:
          "The course creation form was massive, involving nested arrays (Courses -> Modules -> Lessons -> Assessments), leading to sluggish UI performance on every keystroke.",
        solution:
          "We leveraged React Hook Form's useFieldArray combined with Zod for validation. This allowed us to isolate re-renders strictly to the specific field being edited, resulting in a buttery-smooth form experience despite the complexity.",
      },
      {
        title: "Challenge 2: Performance with Large Datasets",
        issue:
          "The admin portal needed to display thousands of user records simultaneously, causing the DOM to freeze.",
        solution:
          "We implemented data virtualization alongside TanStack React Table. By only rendering the rows visible in the viewport, we kept the DOM node count low, maintaining a 60fps scrolling experience regardless of dataset size.",
      },
    ],

    methodology: [
      {
        month: "Month 1: Discovery & Architecture",
        description:
          "Collaborated with ViSolutionz to finalize API contracts, define the UI/UX design system, and set up the Next.js repository with CI/CD pipelines.",
      },
      {
        month: "Month 2-3: Core Development (Learner Portal)",
        description:
          "Focused on authentication, the primary dashboard, course consumption interfaces, and video player integration.",
      },
      {
        month: "Month 4: Admin Portal & Complex Workflows",
        description:
          "Shifted focus to the heavy administrative tools, data tables, the course builder, and assessment engine.",
      },
      {
        month: "Month 5: Polish, Optimization & UAT",
        description:
          "Dedicated entirely to performance tuning (Core Web Vitals), cross-browser testing, fixing edge cases, and User Acceptance Testing (UAT) with the client.",
      },
    ],

    businessImpact: [
      "Enhanced User Engagement: The modern, fluid UI drastically improved the learner experience, resulting in higher course completion rates compared to legacy systems.",
      "Operational Efficiency: The powerful admin portal reduced the time required for instructors to create courses and manage learner cohorts.",
      "Future-Proof Scalability: The React 19 / Next.js 16 architecture ensures the platform is ready to scale as Flipkart expands its training programs across new verticals.",
    ],

    architecturalImpact: {
      objective: [
        "Transformed complex business requirements into a highly functional, production-ready enterprise LMS.",
        "Ensured backend could seamlessly handle thousands of concurrent users via Node.js, Redis, and BullMQ.",
        "Achieved near-perfect uptime by decoupling third-party dependencies through job queues.",
      ],
      strategic: [
        "Provided ViSolutionz and Flipkart with a highly maintainable, future-proof codebase ready for feature expansion.",
        "Delivered a consumer-grade user experience that balances complex business logic effortlessly.",
        "Established Flipkart Academy SCOA as a state-of-the-art training ecosystem for supply chain operations.",
      ],
    },
  },
];
