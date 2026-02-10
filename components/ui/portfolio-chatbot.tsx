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
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 rounded-none w-14 h-14 md:w-auto md:h-14 md:px-6 shadow-2xl hover:scale-105 transition-all md:gap-3 bg-foreground text-background border-none group"
          size="lg"
        >
          <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="hidden md:inline font-bold uppercase tracking-widest text-xs">Chat with Paolo</span>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed inset-0 md:inset-auto md:bottom-24 md:right-8 z-50 w-full md:w-[400px] h-[100dvh] md:h-[600px] max-h-screen rounded-none md:rounded-none shadow-2xl flex flex-col overflow-hidden touch-none overscroll-none border-2 border-foreground bg-card/95 backdrop-blur-xl">
            {/* Header */}
          <div className="shrink-0 flex items-center gap-3 p-6 pt-[calc(env(safe-area-inset-top)+1.5rem)] border-b-2 border-foreground bg-background">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/hero-img.webp"
                  alt="Paolo G. Sibua"
                  fill
                  className="rounded-none object-cover object-center"
                  sizes="40px"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-none border-2 border-background" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm tracking-tight uppercase">Paolo G. Sibua</h3>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">AI Assistant Online</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="shrink-0 rounded-none hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div 
              ref={chatContainerRef}
              className="flex-1 min-h-0 overflow-y-auto p-6 space-y-6 flex flex-col"
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="relative w-8 h-8 shrink-0 mt-auto mb-1">
                      <Image
                        src="/hero-img.webp"
                        alt="Paolo"
                        fill
                        className="rounded-none object-cover object-center"
                        sizes="32px"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-none px-5 py-3 border-2 ${
                      msg.role === "user"
                        ? "bg-foreground text-background border-foreground"
                        : "bg-muted/30 border-border"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">
                        {msg.content}
                    </p>
                  </div>
                </div>
              ))}

              {/* Show quick questions only if no messages besides initial greeting */}
              {messages.length === 1 && (
                <div className="space-y-3 pt-6 mt-auto">
                  <p className="text-[10px] font-bold text-muted-foreground px-2 uppercase tracking-widest mb-4">Suggested Queries</p>
                  <div className="flex flex-col gap-2">
                    {[
                      "Tell me about your projects",
                      "What is TBPillPal?",
                      "What technologies do you use?",
                      "View your experience",
                    ].map((question, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setInputValue(question);
                          setTimeout(() => {
                            const input = document.querySelector("input");
                            if (input) input.focus();
                          }, 0);
                        }}
                        className="w-full text-left text-sm p-4 rounded-none bg-muted/30 border border-border hover:border-foreground hover:bg-muted/50 transition-all duration-200"
                      >
                        <span className="font-bold uppercase tracking-tight">{question}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="relative w-8 h-8 shrink-0 mt-auto mb-1">
                    <Image
                      src="/hero-img.webp"
                      alt="Paolo"
                      fill
                      className="rounded-lg object-cover"
                      sizes="32px"
                    />
                  </div>
                  <div className="bg-muted/30 border border-border rounded-[1.5rem] rounded-bl-none px-5 py-4">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="shrink-0 p-6 border-t border-border/50 bg-background/50 backdrop-blur-md">
              <div className="flex gap-3">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 rounded-full border-border focus-visible:ring-1 focus-visible:ring-foreground h-12 px-6"
                />
                <Button 
                  onClick={handleSendMessage} 
                  disabled={isLoading || !inputValue.trim()} 
                  size="icon"
                  className="rounded-full shrink-0 h-12 w-12 bg-foreground text-background hover:bg-foreground/90 transition-transform hover:scale-105"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </Card>
      )}
    </>
  );
}

