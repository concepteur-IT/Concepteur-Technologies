"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Loader2,
  User,
  Mail,
  ArrowRight,
} from "lucide-react";

type Message = {
  role: "user" | "model";
  text: string;
};

type HistoryItem = {
  role: "user" | "model";
  parts: { text: string }[];
};

// --- Custom Cute Robot SVG Component ---
const CuteRobot = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Antenna */}
    <path
      d="M50 15 L50 25"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="50" cy="12" r="4" />

    {/* Head */}
    <rect
      x="25"
      y="25"
      width="50"
      height="40"
      rx="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
    />

    {/* Eyes */}
    <circle cx="38" cy="40" r="5" fill="currentColor" />
    <circle cx="62" cy="40" r="5" fill="currentColor" />

    {/* Smile */}
    <path
      d="M 40 52 Q 50 58 60 52"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Floating Hands/Paws (Waving) */}
    <motion.path
      d="M 15 50 Q 5 40 10 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      animate={{ rotate: [0, 20, -10, 20, 0] }}
      transition={{
        repeat: Infinity,
        duration: 2,
        repeatDelay: 1,
        ease: "easeInOut",
      }}
      style={{ originX: 0.15, originY: 0.5 }}
    />
    <path
      d="M 85 50 Q 95 60 90 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreetingBubble, setShowGreetingBubble] = useState(true);

  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // Chat State
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when chat opens or loading finishes
  useEffect(() => {
    if (isOpen && isAuthenticated && !isLoading) {
      // Small timeout ensures the DOM has updated before focusing
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen, isAuthenticated, isLoading]);

  // Check LocalStorage for returning users
  useEffect(() => {
    if (isOpen) {
      const storedName = localStorage.getItem("chat_user_name");
      const storedEmail = localStorage.getItem("chat_user_email");

      if (storedName && storedEmail) {
        setUserName(storedName);
        setUserEmail(storedEmail);
        setIsAuthenticated(true);
        if (messages.length === 0) {
          setMessages([
            {
              role: "model",
              text: `Welcome back, ${storedName}! I'm the Concepteur AI assistant. How can I help you today?`,
            },
          ]);
        }
      } else if (messages.length === 0) {
        setMessages([
          {
            role: "model",
            text: "Hello! I'm the Concepteur AI assistant. How can I help you today?",
          },
        ]);
      }
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowGreetingBubble(false);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userEmail.trim()) return;

    setIsVerifying(true);

    // Simulate a quick verification delay for UX
    setTimeout(() => {
      localStorage.setItem("chat_user_name", userName.trim());
      localStorage.setItem("chat_user_email", userEmail.trim());

      setMessages([
        {
          role: "model",
          text: `Hi ${userName.trim()}! I'm the Concepteur AI assistant. How can I help you today?`,
        },
      ]);

      setIsAuthenticated(true);
      setIsVerifying(false);
    }, 600);
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");

    // Add user message to UI
    const newMessages: Message[] = [
      ...messages,
      { role: "user", text: userMsg },
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Format history for Gemini API (only last 5 messages to save tokens/keep context tight)
      const recentContext = newMessages.slice(-5);
      const historyToSend: HistoryItem[] = recentContext
        .slice(0, -1)
        .map((msg) => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          history: historyToSend,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch response");
      }

      setMessages((prev) => [...prev, { role: "model", text: data.text }]);
    } catch (err: unknown) {
      console.error(err);
      const message =
        err instanceof Error ? err.message : "Failed to fetch response";
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text:
            message === "Failed to fetch response"
              ? "I'm having trouble connecting to my servers right now."
              : message,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button & Greeting Bubble */}
      <AnimatePresence>
        {!isOpen && (
          <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 flex items-end gap-3 sm:gap-4 max-w-[calc(100vw-0.75rem)]">
            {/* Waving Greeting Bubble */}
            <AnimatePresence>
              {showGreetingBubble && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 90, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 24,
                  }}
                  className="relative flex items-center max-w-[17rem] sm:max-w-[22rem] bg-white px-4 py-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-gray-100"
                >
                  <span className="text-xs sm:text-sm font-medium text-black pr-1">
                    Hey, ready to start your project?
                  </span>
                  {/* Little triangle pointer pointing right */}
                  <div className="absolute right-[-6px] bottom-4 w-3 h-3 bg-white border-r border-b border-gray-100 transform -rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Circular Bot Button */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 sm:w-16 sm:h-16 bg-black text-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.25)] flex items-center justify-center hover:bg-neutral-800 transition-colors shrink-0 outline-none"
              aria-label="Open AI Assistant"
            >
              <CuteRobot className="w-8 h-8 sm:w-9 sm:h-9" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Main Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-3 left-3 right-3 sm:bottom-6 sm:left-auto sm:right-6 md:bottom-8 md:right-8 z-50 h-[550px] max-h-[88vh] sm:w-[420px] sm:max-w-[calc(100vw-3rem)] md:w-[380px] bg-white border border-gray-200 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-black p-4 flex items-center justify-between z-10 relative">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <CuteRobot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Concepteur AI
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[11px] text-gray-300">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Auth Form View */}
            {!isAuthenticated ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 overflow-y-auto bg-[#FAFAFA] flex flex-col p-4 sm:p-6"
              >
                <div className="flex-1 flex flex-col justify-center">
                  <div className="mb-6 sm:mb-8 text-center">
                    <h4 className="text-lg sm:text-xl font-semibold text-black mb-2 tracking-tight">
                      Before starting...
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Please let us know who we are speaking with to personalize
                      your experience.
                    </p>
                  </div>

                  <form onSubmit={handleAuthSubmit} className="space-y-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Your Full Name"
                        className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                        disabled={isVerifying}
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        required
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                        disabled={isVerifying}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={
                        !userName.trim() || !userEmail.trim() || isVerifying
                      }
                      className="w-full mt-2 bg-black text-white font-semibold flex items-center justify-center gap-2 py-3.5 rounded-xl hover:bg-neutral-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      {isVerifying ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Start Conversation
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-[10px] text-gray-400 text-center mt-6">
                    By continuing, you agree to our Terms of Service and Privacy
                    Policy.
                  </p>
                </div>
              </motion.div>
            ) : (
              /* Chat Interface View */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 flex flex-col min-h-0 bg-[#FAFAFA]"
              >
                {/* Message List */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4">
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl px-3.5 sm:px-4 py-2.5 text-[13px] sm:text-[14px] leading-relaxed break-words ${
                          msg.role === "user"
                            ? "bg-black text-white rounded-br-sm shadow-sm"
                            : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                        <Loader2 className="w-4 h-4 text-gray-400 animate-spin" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-3 sm:p-4 bg-white border-t border-gray-100 z-10 shrink-0">
                  <form
                    onSubmit={handleChatSubmit}
                    className="relative flex items-center"
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about our services..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-full pl-5 pr-12 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition-all"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="absolute right-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center disabled:opacity-50 disabled:bg-gray-200 disabled:text-gray-400 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                  <div className="text-center mt-3">
                    <span className="text-[10px] text-gray-400">
                      AI responses may not be 100% accurate.
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
