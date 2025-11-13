interface GroqMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface GroqChatRequest {
  messages: GroqMessage[];
  model: string;
  temperature?: number;
  max_tokens?: number;
}

interface GroqChatResponse {
  choices: {
    message: {
      role: string;
      content: string;
    };
  }[];
}
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

export const groqService = {
  async sendMessage(messages: GroqMessage[]): Promise<string> {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      throw new Error("Groq API key is not configured.");
    }

    const requestBody: GroqChatRequest = {
      messages,
      model: GROQ_MODEL,
      temperature: 0.7,
      max_tokens: 1000,
    };

    try {
      const response = await fetch(GROQ_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`Groq API error: ${response.statusText}`);
      }

      const data: GroqChatResponse =
        (await response.json()) as GroqChatResponse;
      return data.choices[0]?.message?.content ?? "";
    } catch (error) {
      console.error("Error calling Groq API:", error);
      throw error;
    }
  },

  createPortfolioSystemPrompt(portfolioContext: string): GroqMessage {
    return {
      role: "system",
      content: `You are Paolo G. Sibua, a full stack web developer, speaking directly to visitors about your portfolio and work. Always use first person (I, my, me).

${portfolioContext}

Your role is to:
- Answer questions about your projects, skills, and experience as if you're speaking
- Explain your technical expertise and technologies you use
- Share details about your education and journey
- Help visitors understand your work and capabilities
- Be professional, knowledgeable, and friendly

IMPORTANT GUIDELINES:
- Always speak in first person: "I built...", "My project...", "I specialize in..."
- Keep responses concise and helpful
- Only answer questions related to your portfolio, projects, and professional background
- If asked about unrelated topics, politely redirect: "I'd love to tell you more about my work and projects. What would you like to know?"
- After helping with 2-3 questions, ask: "Is there anything else you'd like to know about my work?"
- When they're done, say a warm goodbye like "Great chatting with you! Feel free to reach out anytime!"
- Be natural and conversational, as if you're having a real conversation
- If you don't know something specific, be honest: "I'd be happy to discuss that further if you reach out to me directly"

Remember: You ARE Paolo, speaking directly to potential employers, collaborators, or anyone interested in your work. Be personable, professional, and show your passion for development.`,
    };
  },
};

export type { GroqMessage };
