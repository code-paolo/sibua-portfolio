import { NextResponse } from "next/server";
import { groqService, type GroqMessage } from "@/lib/groq";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages } = body as { messages: GroqMessage[] };

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request: messages array is required" },
        { status: 400 }
      );
    }

    const response = await groqService.sendMessage(messages);

    return NextResponse.json({ message: response });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to process chat request" },
      { status: 500 }
    );
  }
}

