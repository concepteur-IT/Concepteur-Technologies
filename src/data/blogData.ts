export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  authorName: string;
  authorRole: string;
  authorSlug: string;
  authorImage: string;
  coverImage: string;
  content: string; // HTML string for simplicity in demo
};

export const blogData: Record<string, BlogPost> = {
  "future-of-enterprise-architecture": {
    slug: "future-of-enterprise-architecture",
    title: "The Future of Enterprise Architecture in the Cloud",
    description: "The transition to cloud-native deployments is a fundamental shift in how businesses operate, scale, and deliver value.",
    date: "March 15, 2026",
    readTime: "6 min read",
    authorName: "Provat Das",
    authorRole: "CEO & Head of Operations",
    authorSlug: "provat-das",
    authorImage: "/team/T2.PNG",
    coverImage: "/team/T4.PNG", // Using existing image assets for demo
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">The transition to cloud-native deployments is no longer just an IT upgrade; it is a fundamental shift in how businesses operate, scale, and deliver value. Enterprise architecture in the cloud requires a strategic approach that balances agility, security, and long-term sustainability.</p>
      
      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">The Shift to Microservices</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">Monolithic architectures, while historically reliable, are increasingly becoming bottlenecks for rapid innovation. By breaking applications down into smaller, independently deployable microservices, engineering teams can dramatically reduce deployment times and isolate failures. This isolation is critical for enterprise systems where uptime is non-negotiable.</p>

      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">Serverless and the Edge</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">The next frontier of enterprise architecture involves moving computation closer to the user. Serverless architectures and edge computing allow us to execute logic globally with near-zero latency. This not only improves the user experience but also optimizes resource utilization by dynamically scaling based on demand.</p>

      <blockquote class="border-l-4 border-black pl-6 my-8 italic text-xl text-gray-800">
        "Architecture is not about the code you write; it's about the decisions you make that allow code to be written, changed, and deleted effortlessly."
      </blockquote>

      <p class="text-gray-700 mb-6 leading-relaxed">As we look ahead, the role of the enterprise architect will continue to evolve from enforcing rigid standards to enabling developer autonomy within secure, guardrailed platforms.</p>
    `
  },
  "building-scalable-nextjs-applications": {
    slug: "building-scalable-nextjs-applications",
    title: "Building Scalable Next.js Applications",
    description: "Next.js has revolutionized React, but scaling a Next.js architecture requires careful consideration of data fetching and caching.",
    date: "February 2, 2026",
    readTime: "8 min read",
    authorName: "Provat Das",
    authorRole: "CEO & Head of Operations",
    authorSlug: "provat-das",
    authorImage: "/team/T2.PNG",
    coverImage: "/team/T1.PNG",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">Next.js has revolutionized how we build React applications, offering a hybrid approach that combines static site generation (SSG) with server-side rendering (SSR). However, as applications grow, scaling a Next.js architecture requires careful consideration of data fetching, state management, and edge caching.</p>
      
      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">Optimizing Data Fetching</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">The key to a blazingly fast Next.js application lies in understanding when to fetch data at build time versus request time. Utilizing Incremental Static Regeneration (ISR) allows you to maintain the performance benefits of static pages while ensuring content remains up-to-date without full site rebuilds.</p>

      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">Component Architecture</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">A scalable frontend requires a strict component hierarchy. We advocate for heavily isolating UI components from business logic. By utilizing highly decoupled, "dumb" presentational components and passing data via server components, we ensure that the client-side bundle remains incredibly lightweight.</p>
    `
  },
  "leading-high-performance-engineering-teams": {
    slug: "leading-high-performance-engineering-teams",
    title: "Leading High-Performance Engineering Teams",
    description: "Building a high-performance engineering team requires creating an environment built on psychological safety and aligned goals.",
    date: "November 10, 2025",
    readTime: "5 min read",
    authorName: "Provat Das",
    authorRole: "CEO & Head of Operations",
    authorSlug: "provat-das",
    authorImage: "/team/T2.PNG",
    coverImage: "/team/T3.PNG",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">Building a high-performance engineering team goes far beyond hiring talented individuals. It requires creating an environment built on psychological safety, transparent communication, and aligned goals.</p>
      
      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">Fostering Psychological Safety</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">Engineers must feel safe to experiment, fail, and voice their opinions without fear of retribution. A culture of blameless post-mortems is essential. When an outage occurs, the focus should be on systemic failures, not individual mistakes.</p>
      
      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">Autonomy and Alignment</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">High performers thrive when given autonomy over their work. However, autonomy without alignment leads to chaos. Leaders must clearly articulate the "why" and "what," empowering the team to determine the "how."</p>
    `
  },
  "mastering-framer-motion": {
    slug: "mastering-framer-motion",
    title: "Mastering Framer Motion for Seamless Web Experiences",
    description: "Animation guides the user's attention. Framer Motion is the definitive tool for orchestrating these seamless experiences.",
    date: "April 12, 2026",
    readTime: "7 min read",
    authorName: "Proparna Das",
    authorRole: "CTO & Tech lead",
    authorSlug: "proparna-das",
    authorImage: "/team/T3.PNG",
    coverImage: "/team/T2.PNG",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">In modern web design, animation is no longer just decorative; it is functional. It guides the user's attention, provides feedback, and creates a sense of spatial awareness. Framer Motion is the definitive tool for orchestrating these seamless experiences in React.</p>
      
      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">The Power of AnimatePresence</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">Handling the unmounting of components has historically been the hardest part of UI animation. <code>AnimatePresence</code> solves this elegantly, allowing us to defer the unmounting of a component until its exit animation has completed. This is crucial for modals, tooltips, and page transitions.</p>

      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">Orchestrating Variants</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">For complex animations involving multiple children, variants are indispensable. By defining visual states (e.g., "hidden", "visible") at the parent level, we can easily orchestrate staggered animations across a list of children without managing complex timing logic.</p>
    `
  },
  "nextjs-app-router-architecture": {
    slug: "nextjs-app-router-architecture",
    title: "The Ultimate Guide to Next.js App Router Architecture",
    description: "The App Router represents a paradigm shift in React architecture, moving to a server-first mental model to reduce JavaScript.",
    date: "January 28, 2026",
    readTime: "10 min read",
    authorName: "Proparna Das",
    authorRole: "CTO & Tech lead",
    authorSlug: "proparna-das",
    authorImage: "/team/T3.PNG",
    coverImage: "/team/T4.PNG",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">The introduction of the App Router in Next.js 13 represented a paradigm shift in React architecture. By moving to a server-first mental model, we can dramatically reduce the JavaScript sent to the client.</p>
      
      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">Server Components vs Client Components</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">The golden rule of the App Router is to default to Server Components. Only use Client Components when you explicitly need interactivity (e.g., hooks, event listeners). This architectural pattern enforces strict boundaries and guarantees that heavy dependencies remain safely on the server.</p>

      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">Nested Layouts and Streaming</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">Nested layouts allow us to preserve state across navigations while streaming UI directly from the server. By utilizing <code>loading.tsx</code> and React Suspense, we can instantly display the skeleton of a page while the main content is generated asynchronously.</p>
    `
  },
  "component-driven-design": {
    slug: "component-driven-design",
    title: "Why Component-Driven Design is the Future",
    description: "Component-Driven Design flips UI development, building applications from the bottom up to ensure perfect consistency.",
    date: "September 05, 2025",
    readTime: "4 min read",
    authorName: "Proparna Das",
    authorRole: "CTO & Tech lead",
    authorSlug: "proparna-das",
    authorImage: "/team/T3.PNG",
    coverImage: "/team/T1.PNG",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">Building UIs one page at a time is a recipe for inconsistency and technical debt. Component-Driven Design (CDD) flips this approach, building applications from the bottom up.</p>
      
      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">Building Blocks</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">We start by designing atomic elements—buttons, inputs, avatars. Once these are robust and tested, we combine them into complex features. This guarantees that every part of the application adheres to the exact same design language and interactive behavior.</p>
    `
  }
};
