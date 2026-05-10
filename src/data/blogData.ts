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
  content: string;
};

export const blogData: Record<string, BlogPost> = {
  "building-ai-native-travel-infrastructure": {
    slug: "building-ai-native-travel-infrastructure",
    title: "Building the Future of AI-Powered Travel Infrastructure with MCP",
    description:
      "How we transformed a traditional REST-based travel platform into a scalable AI-native MCP architecture with secure payment orchestration and multi-AI integration.",
    date: "May 10, 2026",
    readTime: "8 min read",
    authorName: "Proparna Das",
    authorRole: "CTO",
    authorSlug: "proparna-das",
    authorImage: "/home/pro.png",
    coverImage: "/blog/mcp.png",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        The travel industry is rapidly changing with the rise of AI-driven experiences. But behind every intelligent travel assistant, there is a complex infrastructure responsible for handling flights, payments, user sessions, APIs, and real-time orchestration.
      </p>

      <p class="text-gray-700 mb-6 leading-relaxed">
        At NomadQuest AI, our goal was not just to build another travel platform. We wanted to create a scalable AI-native infrastructure capable of supporting the next generation of intelligent travel systems.
      </p>

      <p class="text-gray-700 mb-6 leading-relaxed">
        That vision led us to completely transform the platform architecture from a traditional REST-based backend into a modular MCP-powered ecosystem.
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">
        The Problem with Traditional Architectures
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        The original platform was built using a Node.js backend with REST APIs and a React frontend. It successfully supported AI-based itinerary planning and flight recommendations.
      </p>

      <p class="text-gray-700 mb-6 leading-relaxed">
        However, as AI workflows became more advanced, we started facing several challenges:
      </p>

      <ul class="list-disc pl-6 text-gray-700 mb-6 space-y-2">
        <li>Traditional REST APIs were difficult to scale for AI orchestration</li>
        <li>Duffel flight API payloads were extremely large and deeply nested</li>
        <li>Multiple APIs created endpoint duplication and management complexity</li>
        <li>AI systems needed secure payment handling without accessing sensitive data</li>
        <li>Raw API responses were not optimized for conversational AI experiences</li>
      </ul>

      <blockquote class="border-l-4 border-black pl-6 my-8 italic text-xl text-gray-800">
        "The future of scalable software is not just AI-powered applications. It is AI-native infrastructure."
      </blockquote>

      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">
        Moving from REST to MCP
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        To solve these issues, we redesigned the platform around Model Context Protocol (MCP).
      </p>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Instead of relying on isolated REST endpoints, every travel operation was converted into modular MCP tools. This created a unified and AI-friendly architecture that could communicate seamlessly across multiple AI ecosystems.
      </p>

      <p class="text-gray-700 mb-6 leading-relaxed">
        The new system was built using:
      </p>

      <ul class="list-disc pl-6 text-gray-700 mb-6 space-y-2">
        <li>Node.js MCP Architecture</li>
        <li>Azure API Management</li>
        <li>Duffel Flight APIs</li>
        <li>Next.js Payment Services</li>
        <li>Stripe</li>
        <li>Multi-model AI integrations</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">
        Why MCP Changed Everything
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        MCP gave us a structured way to organize travel operations into reusable AI-native tools.
      </p>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Some of the biggest advantages included easier AI orchestration, better schema validation, modular expansion capability, and cleaner communication between AI systems and backend services.
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">
        Building Secure AI-Connected Payments
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        One of the most important parts of the system was designing secure AI-assisted payment workflows.
      </p>

      <p class="text-gray-700 mb-6 leading-relaxed">
        We created a separate Next.js payment module connected with Stripe Checkout. The AI could trigger payment flows, but it never received access to passenger details, card information, or sensitive payment data.
      </p>

      <p class="text-gray-700 mb-6 leading-relaxed">
        The system only returned payment success or failure confirmation back to the AI layer, helping maintain privacy, compliance, and transaction integrity.
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">
        AI Validation Across Multiple Ecosystems
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        The unified MCP endpoint was validated across multiple AI ecosystems including Claude, Azure OpenAI, Gemini, LibreChat, and OpenWebUI.
      </p>

      <p class="text-gray-700 mb-6 leading-relaxed">
        This ensured that the platform remained adaptable and future-ready instead of being locked into a single AI provider.
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">
        Final Thoughts
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        This project was not only about improving a travel platform. It was about building infrastructure for the future of AI-native applications.
      </p>

      <p class="text-gray-700 mb-6 leading-relaxed">
        As AI systems become more autonomous, traditional API-first architectures will increasingly struggle with orchestration, scalability, and maintainability.
      </p>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Leading this transformation as CTO was both a technical and strategic challenge, but it also demonstrated how powerful MCP-based systems can become when designed correctly.
      </p>
    `,
  },
};
