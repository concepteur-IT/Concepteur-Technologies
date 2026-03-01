export const caseStudies = [
  {
    id: "aido",
    slug: "aido",
    title: "AIDO",
    description:
      "Next-Generation Clinical Diagnostics & Automated Triage System",
    tags: ["Healthcare IT", "Medical", "System Integration"],
    tag: "Medical",
    metrics: {
      users: "Clinical",
      growth: "99.9% Uptime",
      retention: "HIPAA Compliant",
    },
    heroImage: "/case-studies/aido-1.png",
    client: "AIDO Medical inc.",
    platform: "Cloud EHR Hybrid",
    role: "System Architecture",
    year: "2026",
    color: "from-teal-900 to-sky-600",
  },
  {
    slug: "thinkerslane",
    title: "Thinkerslane",
    template: "template1",
    tag: "EdTech Platform",
    shortDesc: "Reimagining digital education through structured coaching.",
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
    shortDesc: "Retail bookstore billing ecosystem & operations.",
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
    slug: "nomadquest-mcp-travel-architecture",
    title: "NomadQuest AI – Redefining Travel Infrastructure with MCP",
    template: "template1",
    tag: "AI / Travel Infrastructure",
    shortDesc:
      "A complete architectural transformation from REST-based services to a modular, AI-native MCP-powered travel platform with secure Stripe-integrated payments.",
    gradient: "from-indigo-600 to-sky-600",

    results: {
      transformation: "REST → MCP Architecture",
      aiEcosystems: "5+ AI Platforms Validated",
      paymentSecurity: "AI-Isolated Stripe Workflow",
    },

    client: "NomadQuest AI",
    domain: "www.nomadguest.ai",
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
        "Node.js backend with REST APIs and React frontend enabling AI-powered trip recommendations and itinerary planning.",
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
  // {
  //   slug: "toyosupport",
  //   title: "Toyosupport.ca ",
  //   template: "template1",
  //   tag: "Enterprise Platform",
  //   shortDesc: "Training & reward ecosystem for dealers.",
  //   gradient: "from-cyan-500 to-blue-500",

  //   results: {
  //     growth: "300%",
  //     users: "50k+",
  //     saved: "40hrs",
  //   },
  //   heroImage: "/case-studies/toyosupport.ca.png",

  //   client: "Toyo Tires, Canada ( FROM BRAINIUM INFOTECH PVT LTD)",
  //   platform: "WordPress Multisite +",
  //   role: "Full-stack Developer, Data Migration Specialist",
  //   stack: "Wordpress Multisite++, Mysql",
  //   challenge: [
  //     {
  //       text: "Centralize training, promo tools, and showroom materials",
  //       image: "/project.png",
  //     },
  //     {
  //       text: "Migrate legacy data from CodeIgniter & Magento",
  //       image: "/project2.png",
  //     },
  //     {
  //       text: "Build a reward-based training system",
  //       image: "/project3.png",
  //     },
  //     {
  //       text: "Ensure bilingual accessibility",
  //       image: "/project1.png",
  //     },
  //   ],

  //   solution: [
  //     {
  //       label: "Data Migration",
  //       title: "Migrating Legacy Systems",
  //       points: [
  //         "Custom plugin for CSV-based user migration from CodeIgniter",
  //         "Magento → WooCommerce product & order migration",
  //         "Preserved user-product-order relationships",
  //       ],
  //     },
  //     {
  //       label: "Reward System Integration",
  //       title: "Learning That Pays Off",
  //       points: [
  //         "Wallet credits earned via course completion",
  //         "Redeemable in WooCommerce store",
  //       ],
  //     },
  //     {
  //       label: "UX Enhancements",
  //       title: "Features That Elevate Experience",
  //       points: [
  //         "Instagram feed integration",
  //         "Custom reset password plugin with tracking",
  //         "Full bilingual interface",
  //       ],
  //     },
  //   ],
  //   features: [
  //     {
  //       title: "Multisite Login",
  //       desc: "Seamless access across environments",
  //     },
  //     {
  //       title: "Reward System",
  //       desc: "Wallet credits tied to training",
  //     },
  //     {
  //       title: "Legacy Migration",
  //       desc: "Preserved relationships from old systemsWallets credits tied to training",
  //     },
  //     {
  //       title: "Multilingual Support",
  //       desc: "English–French interface",
  //     },
  //     {
  //       title: "Resource Management",
  //       desc: "Drag-and-drop, instant updates",
  //     },
  //     {
  //       title: "Instagram Integration",
  //       desc: "Real-time engagement",
  //     },
  //     {
  //       title: "Real-time Engagement",
  //       desc: "Role control, bulk updates",
  //     },
  //   ],
  // },
  // {
  //   slug: "toyotires",
  //   title: "Toyotires.ca ",
  //   template: "template1",
  //   tag: "AI / Healthcare",
  //   shortDesc: "AI-powered handwritten prescription system.",
  //   gradient: "from-rose-500 to-pink-500",

  //   results: {
  //     growth: "92%",
  //     users: "Hospitals",
  //     saved: "0 API Cost",
  //   },
  //   heroImage:
  //     "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600",

  //   client: "Toyo Tires, Canada",
  //   platform: "WordPress Multisite +",
  //   role: "Full-stack Developer, Data Migration Specialist",

  //   stack: "React, Node.js, Python, TensorFlow, AWS",
  //   challenge: [
  //     {
  //       text: "Centralize training, promo tools, and showroom materials",
  //       image: "/project.png",
  //     },
  //     {
  //       text: "Migrate legacy data from CodeIgniter & Magento",
  //       image: "/project2.png",
  //     },
  //     {
  //       text: "Build a reward-based training system",
  //       image: "/project3.png",
  //     },
  //     {
  //       text: "Ensure bilingual accessibility",
  //       image: "/project1.png",
  //     },
  //   ],

  //   solution: [
  //     {
  //       label: "Data Migration",
  //       title: "Migrating Legacy Systems",
  //       points: [
  //         "Custom plugin for CSV-based user migration from CodeIgniter",
  //         "Magento → WooCommerce product & order migration",
  //         "Preserved user-product-order relationships",
  //       ],
  //     },
  //     {
  //       label: "Reward System Integration",
  //       title: "Learning That Pays Off",
  //       points: [
  //         "Wallet credits earned via course completion",
  //         "Redeemable in WooCommerce store",
  //       ],
  //     },
  //     {
  //       label: "UX Enhancements",
  //       title: "Features That Elevate Experience",
  //       points: [
  //         "Instagram feed integration",
  //         "Custom reset password plugin with tracking",
  //         "Full bilingual interface",
  //       ],
  //     },
  //   ],

  //   features: [
  //     {
  //       title: "Multisite Login",
  //       desc: "Seamless access across environments",
  //     },
  //     {
  //       title: "Reward System",
  //       desc: "Wallet credits tied to training",
  //     },
  //     {
  //       title: "Legacy Migration",
  //       desc: "Preserved relationships from old systemsWallets credits tied to training",
  //     },
  //     {
  //       title: "Multilingual Support",
  //       desc: "English–French interface",
  //     },
  //     {
  //       title: "Resource Management",
  //       desc: "Drag-and-drop, instant updates",
  //     },
  //     {
  //       title: "Instagram Integration",
  //       desc: "Real-time engagement",
  //     },
  //     {
  //       title: "Real-time Engagement",
  //       desc: "Role control, bulk updates",
  //     },
  //   ],
  // },

  // {
  //   slug: "zoebook.com",
  //   title: "zoebook.com",
  //   template: "template1",
  //   tag: "AI / Healthcare",
  //   shortDesc: "AI-powered handwritten prescription system.",
  //   gradient: "from-rose-500 to-pink-500",

  //   results: {
  //     growth: "92%",
  //     users: "Hospitals",
  //     saved: "0 API Cost",
  //   },

  //   heroImage:
  //     "https://zoebook.com/public/images/front/new-front-image/banner-img.png",

  //   client: "zoebook, USA",
  //   platform: "WordPress Multisite +",
  //   role: "Full-stack Developer, Data Migration Specialist",

  //   stack: "React, Node.js, laravel, TensorFlow, AWS",
  //   challenge: [
  //     {
  //       text: "Centralize training, promo tools, and showroom materials",
  //       image: "/project.png",
  //     },
  //     {
  //       text: "Migrate legacy data from CodeIgniter & Magento",
  //       image: "/project2.png",
  //     },
  //     {
  //       text: "Build a reward-based training system",
  //       image: "/project3.png",
  //     },
  //     {
  //       text: "Ensure bilingual accessibility",
  //       image: "/project1.png",
  //     },
  //   ],

  //   solution: [
  //     {
  //       label: "Data Migration",
  //       title: "Migrating Legacy Systems",
  //       points: [
  //         "Custom plugin for CSV-based user migration from CodeIgniter",
  //         "Magento → WooCommerce product & order migration",
  //         "Preserved user-product-order relationships",
  //       ],
  //     },
  //     {
  //       label: "Reward System Integration",
  //       title: "Learning That Pays Off",
  //       points: [
  //         "Wallet credits earned via course completion",
  //         "Redeemable in WooCommerce store",
  //       ],
  //     },
  //     {
  //       label: "UX Enhancements",
  //       title: "Features That Elevate Experience",
  //       points: [
  //         "Instagram feed integration",
  //         "Custom reset password plugin with tracking",
  //         "Full bilingual interface",
  //       ],
  //     },
  //   ],

  //   features: [
  //     {
  //       title: "Multisite Login",
  //       desc: "Seamless access across environments",
  //     },
  //     {
  //       title: "Reward System",
  //       desc: "Wallet credits tied to training",
  //     },
  //     {
  //       title: "Legacy Migration",
  //       desc: "Preserved relationships from old systemsWallets credits tied to training",
  //     },
  //     {
  //       title: "Multilingual Support",
  //       desc: "English–French interface",
  //     },
  //     {
  //       title: "Resource Management",
  //       desc: "Drag-and-drop, instant updates",
  //     },
  //     {
  //       title: "Instagram Integration",
  //       desc: "Real-time engagement",
  //     },
  //     {
  //       title: "Real-time Engagement",
  //       desc: "Role control, bulk updates",
  //     },
  //   ],
  // },
];
