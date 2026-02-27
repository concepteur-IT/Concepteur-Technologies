export type ServiceData = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  fullDescription: string;
  benefits: string[];
  features: string[];
  stats: { label: string; value: string }[];
  projects: {
    title: string;
    client: string;
    description: string;
    image: string;
    link?: string;
  }[];
};

export const servicesData: ServiceData[] = [
  {
    id: "ai",
    slug: "ai-intelligent-automation",
    title: "AI & Intelligent Automation",
    shortDescription:
      "Harness the power of machine learning, generative AI, and intelligent automation frameworks to unlock unprecedented operational efficiency and measurable performance advantages across your organization.",
    image: "/services/ai.jpg",
    fullDescription:
      "In the era of rapid technological advancement, AI is not just an upgrade; it's a fundamental shift in how businesses operate. Our Artificial Intelligence and Intelligent Automation services are designed to integrate seamlessly into your existing workflows, transforming massive unstructured datasets into actionable intelligence and automating complex, repetitive tasks with precision.",
    benefits: [
      "Reduce operational costs through intelligent automation.",
      "Enhance decision-making with AI-driven insights.",
      "Improve customer experience using responsive AI agents.",
      "Accelerate workflows with automated task execution.",
      "Scalable AI systems adaptable to business growth.",
    ],

    features: [
      "LLM Integration (OpenAI, Gemini, OpenRouter, Ollama)",
      "Custom AI Agent Development",
      "Retrieval-Augmented Generation (RAG) Systems",
      "Conversational AI & Smart Assistants",
      "AI Workflow Automation & API Integrations",
    ],
    stats: [
      { label: "AI Models Used", value: "12+" },
      { label: "Avg. Efficiency Gain", value: "280%" },
      { label: "Processes Automated", value: "110+" },
    ],
    projects: [
      {
        title: "AIME",
        client: "From Brainuminfotech",
        description:
          "An AI-powered teaching assistant platform built using GPT and Gemini models, delivering interactive learning experiences and personalized tutoring workflows.",
        image: "/services/ai.jpg",
      },
      {
        title: "NOMADQUEST",
        client: "From Brainuminfotech",
        description:
          "An AI-driven travel assistant that generates intelligent tour plans, recommendations, and dynamic itineraries using advanced LLM integrations.",
        image: "/services/ai.jpg",
      },
      {
        title: "AIDO",
        client: "From AIDO",
        description:
          "Custom AI agent system designed for task automation, smart responses, and workflow optimization using OpenRouter and Ollama models.",
        image: "/services/ai.jpg",
      },
      {
        title: "KEYSALE PRO",
        client: "From RETAILBOX SWEDEN",
        description:
          "AI-powered sales assistant that enhances lead qualification, automated follow-ups, and customer interaction using conversational AI models.",
        image: "/services/ai.jpg",
      },
      {
        title: "MCP",
        client: "From Brainuminfotech",
        description:
          "Multi-agent AI framework enabling coordinated task execution, contextual memory handling, and scalable AI-driven operations.",
        image: "/services/ai.jpg",
      },
    ],
  },
  {
    id: "web",
    slug: "next-gen-web-platforms",
    title: "Next-Gen Web Platforms",
    shortDescription:
      "Performance-optimized, highly scalable web architectures engineered to deliver rapid load times, flawless functionality, and deep user engagement.",
    image: "/services/web.jpg",
    fullDescription:
      "Your digital storefront is often the first interaction a client has with your brand. We engineer Next-Generation Web Platforms that are blazing fast, accessible, and architected on modern technology stacks. From complex single-page applications to highly scalable corporate portals, we build systems that perform flawlessly under heavy traffic while maintaining a pristine user experience.",
    benefits: [
      "Fast-loading pages optimized for better conversions.",
      "Modern, scalable architecture using React and Next.js.",
      "SEO-friendly structure with Core Web Vitals optimization.",
      "Improved user engagement through smooth interactions.",
      "Flexible frontend systems ready for future expansion.",
    ],

    features: [
      "Custom React & Next.js Development",
      "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
      "Headless CMS Integration",
      "Progressive Web App (PWA) Development",
      "API-First Frontend Integration",
    ],
    stats: [
      { label: "Web Platforms Built", value: "41+" },
      { label: "Uptime Guaranteed", value: "99.99%" },
      { label: "Avg. Load Time", value: "< 0.8s" },
    ],
    projects: [
      {
        title: "Toyo Support",
        client: "From Brainuminfotech",
        description:
          "Developed a fully customized WordPress website with optimized performance, structured content architecture, and scalable backend management.",
        image: "/services/web.jpg",
      },
      {
        title: "The 1 And Only Publishing",
        client: "From Brainuminfotech",
        description:
          "Built a hybrid platform using React, Laravel, and WordPress, integrating dynamic frontend components with a scalable backend API architecture.",
        image: "/services/web.jpg",
      },
      {
        title: "Gemsby",
        client: "From Brainuminfotech",
        description:
          "Engineered a high-performance eCommerce platform using React and Phalcon, focusing on speed optimization and modular backend services.",
        image: "/services/backend.jpg",
      },
      {
        title: "Thinkerslane",
        client: "From Thinkerslane",
        description:
          "Developed a bookstore platform using CodeIgniter with custom product management, order workflows, and optimized server-side rendering.",
        image: "/services/web.jpg",
      },
      {
        title: "Keysale",
        client: "From RETAILBOX SWEDEN",
        description:
          "Built a scalable retail platform using Angular and Yii framework, implementing secure APIs and dynamic product management systems.",
        image: "/services/backend.jpg",
      },
      {
        title: "Stuffy Rider",
        client: "From Brainuminfotech",
        description:
          "Created a robust commerce platform powered by Laravel and CodeIgniter with optimized database handling and seamless checkout integration.",
        image: "/services/web.jpg",
      },
    ],
  },
  {
    id: "mobile",
    slug: "cross-platform-mobile-apps",
    title: "Mobile App Development",
    shortDescription:
      "API-driven mobile applications built with React Native and Flutter, engineered for performance, scalability, and real-time synchronization.",
    image: "/services/mobile.jpg",
    fullDescription:
      "We develop cross-platform mobile applications designed around structured backend APIs and scalable system architecture. Our apps prioritize performance, clean UI implementation, and real-time data synchronization. From commerce platforms and inventory systems to AI-powered applications, we build mobile experiences that are stable, maintainable, and production-ready.",
    benefits: [
      "Unified codebase for faster iOS and Android deployment.",
      "Real-time synchronization with backend and AI systems.",
      "Secure authentication and payment workflows.",
      "Optimized performance across devices.",
      "Scalable architecture for future feature growth.",
    ],

    features: [
      "React Native & Flutter Development",
      "REST API & WebSocket Integration",
      "Authentication & Role-Based Access",
      "Push Notifications & Real-Time Updates",
      "Payment Gateway Integration",
    ],
    stats: [
      { label: "Mobile Apps Built", value: "7+" },
      { label: "API Integrations", value: "40+" },
      { label: "Crash-Free Stability", value: "99%+" },
    ],
    projects: [
      {
        title: "AIDO Mobile",
        client: "AI Automation Platform",
        description:
          "Developed a Flutter-based AI agent application featuring real-time conversational workflows, structured API communication, and secure authentication systems.",
        image: "/services/mobile.jpg",
      },
      {
        title: "Thinkerslane App",
        client: "Book Store Platform",
        description:
          "Built a React Native bookstore application integrated with structured commerce APIs for product browsing, cart management, and secure checkout.",
        image: "/services/mobile.jpg",
      },
      {
        title: "Keysale App",
        client: "Retailbox Sweden",
        description:
          "Developed a React Native retail application connected to backend inventory and order APIs with real-time product synchronization.",
        image: "/services/mobile.jpg",
      },
      {
        title: "Keysale INC",
        client: "Retail Platform",
        description:
          "Engineered an Ionic-based commerce application with secure payment workflows and scalable backend API integration.",
        image: "/services/mobile.jpg",
      },
      {
        title: "Mindfully",
        client: "Wellness Platform",
        description:
          "Created a React Native mobile application focused on structured user flows and backend-driven content delivery.",
        image: "/services/mobile.jpg",
      },
      {
        title: "Stuffy Rider",
        client: "E-Commerce Brand",
        description:
          "Integrated React Native mobile commerce flows with secure payment APIs and dynamic order tracking systems.",
        image: "/services/mobile.jpg",
      },
      {
        title: "QuickKart",
        client: "Retail Platform",
        description:
          "Engineered a React Native real-time cart and checkout system connected to scalable backend services.",
        image: "/services/mobile.jpg",
      },
      {
        title: "Ghola SKUS",
        client: "Inventory Management",
        description:
          "Built a React Native SKU and product management mobile interface powered by structured backend API architecture.",
        image: "/services/mobile.jpg",
      },
    ],
  },
  {
    id: "backend",
    slug: "api-first-backend-architecture",
    title: "API-First Backend Engineering",
    shortDescription:
      "Designing scalable, secure, and high-performance API-driven systems powering web, mobile, and AI applications.",
    image: "/services/backend.jpg",
    fullDescription:
      "All our projects are built on an API-first architecture. We design structured, secure, and scalable backend systems that act as the core engine behind web platforms, mobile applications, and AI products. From authentication systems and payment integrations to complex business logic and third-party service integrations, our APIs are built for performance, maintainability, and long-term scalability.",
    benefits: [
      "Decoupled architecture for frontend and mobile scalability.",
      "Secure APIs with structured authentication and validation.",
      "Seamless integration with payments and third-party tools.",
      "High-performance systems optimized for production traffic.",
      "Modular backend design for long-term maintainability.",
    ],

    features: [
      "RESTful API Architecture Design",
      "JWT & Role-Based Authentication Systems",
      "Payment & Subscription API Integrations",
      "Database Modeling & Query Optimization",
      "Webhook & Third-Party Integrations",
    ],
    stats: [
      { label: "APIs Designed & Deployed", value: "150+" },
      { label: "Production Systems", value: "30+" },
      { label: "System Uptime", value: "99.6%" },
    ],
    projects: [
      {
        title: "E-commerce API Engine",
        client: "Retail Platform",
        description:
          "Built a modular API backend handling product management, orders, payments, and real-time status updates.",
        image: "/services/backend.jpg",
      },
      {
        title: "AI Application Backend",
        client: "AI Product Suite",
        description:
          "Developed secure API layers integrating LLM services, user authentication, usage tracking, and workflow automation.",
        image: "/services/backend.jpg",
      },
    ],
  },
  {
    id: "cloud",
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    shortDescription:
      "Cloud-native deployment strategies, comprehensive DevOps automation, and resilient infrastructure management.",
    image: "/services/cloud.jpg",
    fullDescription:
      "Modernizing IT infrastructure requires strategically migrating and managing assets in the cloud. We provide comprehensive Cloud and Infrastructure services encompassing strategic migration planning, DevOps automation, and robust container orchestration. By utilizing infrastructure-as-code, we ensure that your deployment environments remain consistent, recoverable, and infinitely scalable.",
    benefits: [
      "Faster deployments with CI/CD automation.",
      "Scalable and performance-optimized infrastructure.",
      "Cost-efficient cloud resource management.",
      "High availability with reliable failover systems.",
    ],
    features: [
      "AWS, Google Cloud, and Azure Architecture",
      "Docker Containerization & Kubernetes Orchestration",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Continuous Integration & Continuous Deployment (CI/CD)",
    ],
    stats: [
      { label: "Migrations Completed", value: "20+" },
      { label: "Infrastructure Cost Savings", value: "40%" },
      { label: "Deploy Time Reduction", value: "85%" },
    ],
    projects: [
      {
        title: "Enterprise Cloud Migration",
        client: "Financial Institution",
        description:
          "Led a zero-downtime migration of a massive legacy monolith into a containerized Kubernetes AWS architecture.",
        image: "/services/cloud.jpg",
      },
      {
        title: "DevOps Pipeline Automation",
        client: "Dev Studio",
        description:
          "Implemented strict Infrastructure as Code rules combining Terraform with GitHub Actions for fully automated deployments.",
        image: "/services/backend.jpg",
      },
    ],
  },
  {
    id: "ecommerce",
    slug: "api-driven-ecommerce-systems",
    title: "API-Driven E-Commerce Systems",
    shortDescription:
      "Scalable, custom-built commerce platforms powered by secure APIs, optimized checkout flows, and modular backend architecture.",
    image: "/services/ecommerce.jpg",
    fullDescription:
      "We build fully customized e-commerce systems designed around API-first architecture. From product management and dynamic pricing to secure payment processing and order workflows, our platforms are engineered for performance and long-term scalability. Instead of relying on rigid templates, we develop flexible backend systems that integrate seamlessly with frontend frameworks, mobile apps, and third-party services.",
    benefits: [
      "Secure and optimized checkout systems.",
      "Scalable architecture for traffic growth.",
      "Full control over pricing and inventory logic.",
      "Seamless integration with third-party services.",
      "Improved performance and faster response times.",
    ],

    features: [
      "Custom E-Commerce API Development",
      "Stripe & Payment Gateway Integration",
      "Product, Cart & Order Management",
      "Role-Based Admin & Vendor Panels",
      "Inventory & Stock Synchronization",
    ],
    stats: [
      { label: "Commerce Platforms Built", value: "15+" },
      { label: "Payment Systems Integrated", value: "20+" },
      { label: "Orders Processed via APIs", value: "80K+" },
    ],
    projects: [
      {
        title: "Keysale",
        client: "From RETAILBOX SWEDEN",
        description:
          "Built a scalable retail platform using Angular and Yii with custom cart logic, secure payments, and dynamic product management APIs.",
        image: "/services/ecommerce.jpg",
      },
      {
        title: "Gemsby",
        client: "From Brainuminfotech",
        description:
          "Developed a high-performance e-commerce backend using Phalcon with React frontend integration and optimized product query handling.",
        image: "/services/ecommerce.jpg",
      },
      {
        title: "Stuffy Rider",
        client: "From Brainuminfotech",
        description:
          "Engineered a Laravel-based commerce system with structured APIs for products, orders, and payment workflows.",
        image: "/services/ecommerce.jpg",
      },
      {
        title: "The 1 And Only Publishing",
        client: "From Brainuminfotech",
        description:
          "Developed a hybrid React, Laravel, and WordPress commerce system with custom APIs handling products, digital content delivery, and secure payment processing.",
        image: "/services/ecommerce.jpg",
      },
    ],
  },
  {
    id: "uiux",
    slug: "product-ui-ux-design",
    title: "Product UI / UX Design",
    shortDescription:
      "Clean, conversion-focused interfaces designed for real-world applications and seamless backend integration.",
    image: "/services/uiux.jpg",
    fullDescription:
      "We design practical, high-performance user interfaces that align closely with backend architecture and business workflows. Our approach focuses on clarity, usability, and scalability — ensuring dashboards, commerce systems, and AI-powered applications remain intuitive and efficient. Instead of overcomplicating design, we prioritize structured layouts, consistent components, and smooth user journeys.",
    benefits: [
      "Intuitive user flows aligned with backend logic.",
      "Reduced friction in checkout and onboarding.",
      "Consistent design systems for scalable growth.",
      "Optimized interfaces for better engagement.",
    ],

    features: [
      "Responsive Web & Dashboard UI Design",
      "Admin Panel & Data Visualization Interfaces",
      "E-Commerce UX Optimization",
      "AI Product Interface Design",
    ],
    stats: [
      { label: "Interfaces Designed", value: "40+" },
      { label: "Dashboards Built", value: "25+" },
      { label: "Production Deployments", value: "30+" },
    ],
    projects: [
      {
        title: "Keysale Retail Dashboard",
        client: "From RETAILBOX SWEDEN",
        description:
          "Designed and implemented a structured retail management interface integrated with secure backend APIs and dynamic product controls.",
        image: "/services/uiux.jpg",
      },
      {
        title: "AIME",
        client: "From Brainuminfotech",
        description:
          "Developed an interactive learning interface powered by real-time AI responses with structured content navigation and user-centric workflows.",
        image: "/services/uiux.jpg",
      },
      {
        title: "AIDO",
        client: "From AIDO",
        description:
          "Designed a clean conversational interface for AI agents, focusing on clarity, workflow visibility, and seamless backend API integration.",
        image: "/services/uiux.jpg",
      },
      {
        title: "Thinkerslane",
        client: "From Thinkerslane",
        description:
          "Created a streamlined bookstore interface with optimized product discovery, checkout flow, and structured admin management panels.",
        image: "/services/uiux.jpg",
      },
    ],
  },
];
