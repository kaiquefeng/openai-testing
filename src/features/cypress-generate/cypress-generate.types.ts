type CompletionUsage = {
  completion_tokens: number;
  prompt_tokens: number;
  total_tokens: number;
};

type ChatCompletionMessage = {
  content: string | null;
};

type Choice = {
  message: ChatCompletionMessage;
};

export interface ChatCompletion {
  id: string;
  choices: Array<Choice>;
  created: number;
  model: string;
  object: string;
  usage?: CompletionUsage;
}

export type OpenAICypressResponse = ({
  content,
}: {
  content: string;
}) => Promise<ChatCompletion>;
