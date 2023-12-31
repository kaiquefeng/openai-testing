import { openai } from "../../lib/openai";

export const OpenAIRequest = async () => {
  return await openai.chat.completions.create({
    model: "gpt-4",
    temperature: 0.6,
    messages: [
      {
        role: "user",
        content: "Brainstorm some ideas combining VR and fitness.",
      },
    ],
    max_tokens: 2048,
  });
};
