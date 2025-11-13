"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { groqService, type GroqMessage } from "@/lib/groq";
import { portfolioData } from "@/lib/portfolio-data";
import Image from "next/image";

export function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    {
      role: "assistant",
      content: "Hi! I'm Paolo. Ask me anything about my projects, skills, or experience!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Allow vertical scroll when chat is open on mobile, lock on desktop
  useEffect(() => {
    if (isOpen) {
      const isMobile = window.innerWidth < 768;
      
      if (!isMobile) {
        // Only lock scroll on desktop where chatbot is a floating window
        document.body.style.overflow = "hidden";
      }
      
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  // Generate portfolio context for the system prompt
  const generatePortfolioContext = () => {
    const projectsInfo = portfolioData.projects
      .map((p) => {
        const projectDetails = [
          `Title: ${p.title}`,
          `Subtitle: ${p.subtitle}`,
          `Problem: ${p.problem}`,
          `Solution: ${p.solution}`,
        ];
        if (p.impact && p.impact.length > 0)
          projectDetails.push(`Impact: ${p.impact.join(", ")}`);
        if (p.highlights && p.highlights.length > 0)
          projectDetails.push(`Features: ${p.highlights.join(", ")}`);
        projectDetails.push(`Technologies: ${p.technologies.join(", ")}`);
        projectDetails.push(`GitHub: ${p.githubUrl || "N/A"}`);
        if (p.liveUrl) projectDetails.push(`Live Demo: ${p.liveUrl}`);
        if (p.featured) projectDetails.push("Type: Capstone Project");
        return projectDetails.join(" | ");
      })
      .join("\n\n");

    const skillsInfo = `Frontend: ${portfolioData.skills.frontend.join(", ")}. Backend: ${portfolioData.skills.backend.join(", ")}. Full Stack: ${portfolioData.skills.fullstack.join(", ")}. Tools: ${portfolioData.skills.tools.join(", ")}.`;

    const educationInfo = portfolioData.education
      .map((e) => `${e.school} - ${e.degree} (${e.period})`)
      .join("\n");

    const experienceInfo = portfolioData.experience
      .map((e) => `${e.year}: ${e.title} - ${e.company}`)
      .join("\n");

    return `
PERSONAL INFO:
Name: ${portfolioData.personal.name}
Role: ${portfolioData.personal.role}
Email: ${portfolioData.personal.email}
GitHub: ${portfolioData.personal.github}
LinkedIn: ${portfolioData.personal.linkedin}
Location: ${portfolioData.personal.location}

ABOUT:
${portfolioData.about.summary}
Experience: ${portfolioData.about.experience}
Projects Built: ${portfolioData.about.projectsBuilt}

SKILLS:
${skillsInfo}

EDUCATION:
${educationInfo}

EXPERIENCE:
${experienceInfo}

PROJECTS:
${projectsInfo}
`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const portfolioContext = generatePortfolioContext();
      const systemPrompt = groqService.createPortfolioSystemPrompt(portfolioContext);

      const chatMessages: GroqMessage[] = [
        systemPrompt,
        ...messages.map((msg) => ({
          role: msg.role === "user" ? ("user" as const) : ("assistant" as const),
          content: msg.content,
        })),
        { role: "user" as const, content: userMessage },
      ];

      // Call the API route instead of directly calling groqService
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: chatMessages }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from API");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try asking again or reach out to me directly via email!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 rounded-full w-14 h-14 md:w-auto md:h-14 md:px-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 md:gap-3"
          size="lg"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden md:inline font-semibold">Chat with Paolo</span>
        </Button>
      )}

      {/* Chat Window - Messenger Style */}
      {isOpen && (
        <Card className="fixed inset-0 md:inset-auto md:bottom-6 md:right-6 z-50 w-full md:w-[380px] h-[100dvh] md:h-[600px] max-h-screen md:rounded-2xl shadow-2xl flex flex-col overflow-hidden touch-none overscroll-none">
            {/* Messenger-style Header with Profile */}
          <div className="shrink-0 flex items-center gap-3 p-4 pt-[env(safe-area-inset-top)] border-b bg-background">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/hero-img.webp"
                  alt="Paolo G. Sibua"
                  fill
                  className="rounded-full object-cover"
                  sizes="40px"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">Paolo G. Sibua</h3>
                <p className="text-xs text-muted-foreground">Active now</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="shrink-0"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div 
              ref={chatContainerRef}
              className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3 bg-muted/20 flex flex-col"
            >
              {/* Show quick questions only if no messages besides initial greeting */}
              {messages.length === 1 && (
                <div className="space-y-2 mt-auto mb-auto">
                  <p className="text-xs font-semibold text-muted-foreground px-2">Suggested Questions:</p>
                  {[
                    "What are your main projects?",
                    "Tell me about TBPillPal",
                    "What technologies do you use?",
                    "What's your experience level?",
                  ].map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setInputValue(question);
                        setTimeout(() => {
                          const input = document.querySelector("textarea");
                          if (input) input.focus();
                        }, 0);
                      }}
                      className="w-full text-left text-sm p-3 rounded-lg bg-background border hover:border-primary hover:bg-primary/5 transition-all hover:scale-105 active:scale-95"
                    >
                      <span className="text-muted-foreground group-hover:text-primary">💬 {question}</span>
                    </button>
                  ))}
                </div>
              )}
              
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="relative w-7 h-7 shrink-0 mt-auto">
                      <Image
                        src="/hero-img.webp"
                        alt="Paolo"
                        fill
                        className="rounded-full object-cover"
                        sizes="28px"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] md:max-w-[80%] rounded-2xl px-4 py-2 ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-background border rounded-bl-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="relative w-7 h-7 shrink-0 mt-auto">
                    <Image
                      src="/hero-img.webp"
                      alt="Paolo"
                      fill
                      className="rounded-full object-cover"
                      sizes="28px"
                    />
                  </div>
                  <div className="bg-background border rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="shrink-0 p-3 md:p-4 pb-[env(safe-area-inset-bottom)] border-t bg-background">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  disabled={isLoading}
                  className="flex-1 rounded-full"
                />
                <Button 
                  onClick={handleSendMessage} 
                  disabled={isLoading || !inputValue.trim()} 
                  size="icon"
                  className="rounded-full shrink-0"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </Card>
      )}
    </>
  );
}

