"use server";

import { askAnushka, AskAnushkaInput } from "@/ai/flows/answer-questions";
import { z } from "zod";

const AskSchema = z.object({
  question: z.string().min(1, "Question cannot be empty."),
});

interface ChatState {
  answer?: string;
  error?: string;
}

export async function handleAskAnushka(
  prevState: ChatState,
  formData: FormData
): Promise<ChatState> {
  const validatedFields = AskSchema.safeParse({
    question: formData.get("question"),
  });

  if (!validatedFields.success) {
    return {
      error: "Please enter a valid question.",
    };
  }
  
  const input: AskAnushkaInput = {
    question: validatedFields.data.question,
  };

  try {
    const result = await askAnushka(input);
    return { answer: result.answer };
  } catch (e) {
    console.error(e);
    return {
      error: "Sorry, I couldn't answer that question. Please try again.",
    };
  }
}
