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
    projects: { title: string; client: string; description: string; image: string; link?: string }[];
  };
  
  export const servicesData: ServiceData[] = [
    {
      id: "ai",
      slug: "ai-intelligent-automation",
      title: "AI & Intelligent Automation",
      shortDescription: "Harness the power of machine learning, generative AI, and intelligent automation frameworks to unlock unprecedented operational efficiency and measurable performance advantages across your organization.",
      image: "/services/ai.jpg",
      fullDescription: "In the era of rapid technological advancement, AI is not just an upgrade; it's a fundamental shift in how businesses operate. Our Artificial Intelligence and Intelligent Automation services are designed to integrate seamlessly into your existing workflows, transforming massive unstructured datasets into actionable intelligence and automating complex, repetitive tasks with precision.",
      benefits: [
        "Significantly reduce operational costs through process automation.",
        "Enhance decision-making with predictive analytics and data modeling.",
        "Improve customer experiences with intelligent, responsive agentic systems."
      ],
      features: [
        "Custom Machine Learning Model Training",
        "Generative AI Integration (LLMs, RAG Architectures)",
        "Robotic Process Automation (RPA)",
        "Natural Language Processing (NLP) & Computer Vision"
      ],
      stats: [
        { label: "AI Models Deployed", value: "45+" },
        { label: "Avg. Efficiency Gain", value: "280%" },
        { label: "Processes Automated", value: "110+" }
      ],
      projects: [
        { title: "Predictive Supply Chain", client: "Global Logistics Co.", description: "Engineered a predictive model forecasting supply chain disruptions accurately 94% of the time, saving $4.2M annually.", image: "/services/ai.jpg" },
        { title: "Automated Underwriting", client: "Fin-Tech Group", description: "Deployed a secure LLM pipeline that scans unstructured financial documents to reduce underwriting times by 80%.", image: "/services/cloud.jpg" }
      ]
    },
    {
      id: "web",
      slug: "next-gen-web-platforms",
      title: "Next-Gen Web Platforms",
      shortDescription: "Performance-optimized, highly scalable web architectures engineered to deliver rapid load times, flawless functionality, and deep user engagement.",
      image: "/services/web.jpg",
      fullDescription: "Your digital storefront is often the first interaction a client has with your brand. We engineer Next-Generation Web Platforms that are blazing fast, accessible, and architected on modern technology stacks. From complex single-page applications to highly scalable corporate portals, we build systems that perform flawlessly under heavy traffic while maintaining a pristine user experience.",
      benefits: [
        "Unparalleled page load speeds to increase conversion rates.",
        "Future-proof architecture using modern frameworks like Next.js and React.",
        "Built-in Technical SEO and Core Web Vitals optimization."
      ],
      features: [
        "Custom React & Next.js Development",
        "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
        "Headless CMS Integration",
        "Progressive Web Apps (PWA)"
      ],
      stats: [
        { label: "Web Platforms Built", value: "150+" },
        { label: "Uptime Guaranteed", value: "99.99%" },
        { label: "Avg. Load Time", value: "< 0.8s" }
      ],
      projects: [
        { title: "Global Corporate Portal", client: "Enterprise Corp", description: "Architected a headless Next.js portal capable of serving localized content to 3M+ authenticated monthly users globally.", image: "/services/web.jpg" },
        { title: "Dynamic Web Application", client: "SaaS Startup", description: "Built a fully SSR dashboard integrating complex D3.js data visualizations without sacrificing client-side performance.", image: "/services/backend.jpg" }
      ]
    },
    {
      id: "mobile",
      slug: "mobile-experiences",
      title: "Mobile Experiences",
      shortDescription: "Native and unified mobile ecosystems crafted for reliability, immersive responsiveness, and rapid business growth.",
      image: "/services/mobile.jpg",
      fullDescription: "We craft mobile experiences that transcend the limitations of traditional applications. By focusing on intuitive design, fluid animations, and rock-solid backend synchronization, we deploy apps that users actually want to keep on their devices. Whether engineering a high-performance native iOS application or a versatile cross-platform solution, our development methodology prioritizes stability and scale.",
      benefits: [
        "Reach users wherever they are with a consistent brand experience.",
        "High user retention through deeply engaging, intuitive interfaces.",
        "Seamless integration with diverse hardware features (GPS, AR, Biometrics)."
      ],
      features: [
        "Native iOS (Swift) & Android (Kotlin) Development",
        "Cross-Platform Solutions (React Native, Flutter)",
        "Real-time Data Synchronization",
        "Enterprise Mobility Management"
      ],
      stats: [
        { label: "Mobile Apps Launched", value: "65+" },
        { label: "Downloads Facilitated", value: "10M+" },
        { label: "Crash-Free Sessions", value: "99.8%" }
      ],
      projects: [
        { title: "Telehealth Hub", client: "Health Provider Network", description: "Built a HIPAA-compliant cross-platform mobile app enabling secure direct-to-physician messaging and video calls.", image: "/services/mobile.jpg" },
        { title: "Retail Inventory App", client: "National Retailer", description: "Developed an internal iOS app using barcode scanning frameworks to manage multi-warehouse inventory in real-time.", image: "/services/ecommerce.jpg" }
      ]
    },
    {
      id: "backend",
      slug: "backend-data-engineering",
      title: "Backend & Data Engineering",
      shortDescription: "Robust API development, highly scalable server architecture, and performant data processing pipelines designed for security, velocity, and enterprise-grade resilience.",
      image: "/services/backend.jpg",
      fullDescription: "The invisible foundation of every great digital product is its backend architecture. We design and deploy high-availability server infrastructures and intricate data pipelines that guarantee data integrity and operational velocity. Our engineering focuses on building secure, decoupled microservices that empower front-end platforms to operate at maximum efficiency without bottlenecking.",
      benefits: [
        "Support massive concurrent user bases without service degradation.",
        "Secure sensitive data with enterprise-grade encryption and compliance adherence.",
        "Enable seamless communication between disparate enterprise systems."
      ],
      features: [
        "Microservices Architecture Design",
        "RESTful and GraphQL API Development",
        "Data Warehouse Modeling & ETL Pipelines",
        "Real-time Event Streaming Architecture (Kafka, RabbitMQ)"
      ],
      stats: [
        { label: "API Endpoints Served", value: "5B+" },
        { label: "Terabytes Processed", value: "850+" },
        { label: "Sub-ms Latency", value: "Achieved" }
      ],
      projects: [
        { title: "Real-time Bidding Engine", client: "AdTech Platform", description: "Engineered a low-latency microservice cluster in Go processing over 200,000 req/sec during peak traffic slots.", image: "/services/backend.jpg" },
        { title: "Unified Data Warehouse", client: "Consumer Goods Brand", description: "Migrated legacy on-premise databases into a scalable scalable architecture resolving data fragmentation.", image: "/services/cloud.jpg" }
      ]
    },
    {
      id: "cloud",
      slug: "cloud-infrastructure",
      title: "Cloud & Infrastructure",
      shortDescription: "Cloud-native deployment strategies, comprehensive DevOps automation, and resilient infrastructure management.",
      image: "/services/cloud.jpg",
      fullDescription: "Modernizing IT infrastructure requires strategically migrating and managing assets in the cloud. We provide comprehensive Cloud and Infrastructure services encompassing strategic migration planning, DevOps automation, and robust container orchestration. By utilizing infrastructure-as-code, we ensure that your deployment environments remain consistent, recoverable, and infinitely scalable.",
      benefits: [
        "Drastically reduce time-to-market with automated CI/CD pipelines.",
        "Optimize cloud expenditure through intelligent resource allocation.",
        "Guarantee unparalleled uptime with multi-region redundancy and failover systems."
      ],
      features: [
        "AWS, Google Cloud, and Azure Architecture",
        "Docker Containerization & Kubernetes Orchestration",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Continuous Integration & Continuous Deployment (CI/CD)"
      ],
      stats: [
        { label: "Migrations Completed", value: "80+" },
        { label: "Infrastructure Cost Savings", value: "40%" },
        { label: "Deploy Time Reduction", value: "95%" }
      ],
      projects: [
        { title: "Enterprise Cloud Migration", client: "Financial Institution", description: "Led a zero-downtime migration of a massive legacy monolith into a containerized Kubernetes AWS architecture.", image: "/services/cloud.jpg" },
        { title: "DevOps Pipeline Automation", client: "Dev Studio", description: "Implemented strict Infrastructure as Code rules combining Terraform with GitHub Actions for fully automated deployments.", image: "/services/backend.jpg" }
      ]
    },
    {
      id: "ecommerce",
      slug: "ecommerce-ecosystems",
      title: "E-Commerce Ecosystems",
      shortDescription: "Conversion-focused digital storefronts and unified commerce platforms built for modern retail dynamics.",
      image: "/services/ecommerce.jpg",
      fullDescription: "We engineer highly customized, conversion-oriented e-commerce platforms designed for velocity and volume. Moving beyond basic templates, we develop headless commerce architectures that decouple the frontend experience from the backend transactional engine. This approach enables truly unique brand experiences, blazing-fast checkouts, and seamless integration with your existing ERP and CRM systems.",
      benefits: [
        "Increase average order value through personalized recommendations and seamless checkout.",
        "Gain deep insights into consumer behavior with comprehensive analytics integration.",
        "Scale effortlessly during peak traffic events (Black Friday, Flash Sales)."
      ],
      features: [
        "Headless Commerce Architecture (Shopify Plus, Commerce Layer)",
        "Custom Payment Gateway Integration",
        "Inventory Management & ERP Synchronization",
        "Subscription & Recurring Revenue Modeling"
      ],
      stats: [
        { label: "GMV Processed", value: "$1.2B+" },
        { label: "Storefronts Launched", value: "50+" },
        { label: "Checkout Speed Increase", value: "3x" }
      ],
      projects: [
        { title: "Headless D2C Brand", client: "Luxury Apparel", description: "Decoupled a Shopify backend with a custom Next.js frontend, increasing conversion rates by 22% within Q1.", image: "/services/ecommerce.jpg" },
        { title: "B2B Procurement Portal", client: "Industrial Supplier", description: "Engineered a custom B2B cart supporting complex multi-tiered pricing, net-terms, and massive scale bulk ordering.", image: "/services/web.jpg" }
      ]
    },
    {
      id: "uiux",
      slug: "strategic-ui-ux-design",
      title: "Strategic UI/UX Design",
      shortDescription: "Data-driven interface design methodologies and expansive UX systems that elevate user interaction.",
      image: "/services/uiux.jpg",
      fullDescription: "Great design isn't just about aesthetics; it's a strategic business advantage. Our Strategic UI/UX Design process marries deep user research with rigorous visual design principles to craft interfaces that are both beautiful and functionally flawless. We develop comprehensive design systems that ensure consistency across all your digital touchpoints, driving user engagement and lowering cognitive load.",
      benefits: [
        "Boost user satisfaction and lower churn through intuitive navigation paths.",
        "Streamline development with a robust, centralized design system.",
        "Minimize development rework by validating prototypes prior to engineering."
      ],
      features: [
        "Comprehensive User Research & Persona Development",
        "Wireframing & High-Fidelity Interactive Prototyping",
        "Design System Creation & Governance",
        "Usability Testing & Accessibility (WCAG) Compliance"
      ],
      stats: [
        { label: "Design Systems Built", value: "40+" },
        { label: "User Interviews Conducted", value: "1,500+" },
        { label: "Client Satisfaction", value: "4.9/5" }
      ],
      projects: [
        { title: "FinTech Dashboard Overhaul", client: "Investment Bank", description: "Conducted extensive UX research to redesign a complex data dashboard, dramatically reducing cognitive friction for stock traders.", image: "/services/uiux.jpg" },
        { title: "Unified Design System", client: "SaaS Conglomerate", description: "Created a component library and token system used across 12 distinct products to guarantee absolute brand consistency.", image: "/services/mobile.jpg" }
      ]
    }
  ];
