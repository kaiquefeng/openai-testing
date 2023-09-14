import { openai } from "../../lib  /openai";

export const OpenAIRequest = async () => {
  return await openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    temperature: 0.6,
    messages: [{ content: "Brainstorm some ideas combining VR and fitness." }],
    max_tokens: 256,
  });
};
