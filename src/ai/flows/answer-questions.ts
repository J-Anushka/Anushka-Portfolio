// src/ai/flows/answer-questions.ts
'use server';
/**
 * @fileOverview A flow to answer questions about Anushka.
 *
 * - askAnushka - A function that answers questions about Anushka.
 * - AskAnushkaInput - The input type for the askAnushka function.
 * - AskAnushkaOutput - The return type for the askAnushka function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskAnushkaInputSchema = z.object({
  question: z.string().describe('The question to ask about Anushka.'),
});
export type AskAnushkaInput = z.infer<typeof AskAnushkaInputSchema>;

const AskAnushkaOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about Anushka.'),
});
export type AskAnushkaOutput = z.infer<typeof AskAnushkaOutputSchema>;

export async function askAnushka(input: AskAnushkaInput): Promise<AskAnushkaOutput> {
  return askAnushkaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askAnushkaPrompt',
  input: {schema: AskAnushkaInputSchema},
  output: {schema: AskAnushkaOutputSchema},
  prompt: `You are Anushka's AI assistant. Answer the following question about Anushka:

Question: {{{question}}}

Answer:`,
});

const askAnushkaFlow = ai.defineFlow(
  {
    name: 'askAnushkaFlow',
    inputSchema: AskAnushkaInputSchema,
    outputSchema: AskAnushkaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
