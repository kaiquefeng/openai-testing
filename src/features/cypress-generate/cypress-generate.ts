import { COMMANDS_AI } from "@/constants/commands";
import { openai } from "../../lib/openai";
import { OpenAICypressResponse } from "./cypress-generate.types";

export const OpenAICypress: OpenAICypressResponse = async ({ content }) => {
  return await openai.chat.completions.create({
    model: "gpt-4",
    temperature: 0.6,
    messages: [
      {
        role: "system",
        content: COMMANDS_AI.GENERATE_CYPRESS_TEST,
      },
      {
        role: "user",
        content: content,
      },
    ],
    max_tokens: 2048,
  });
};
