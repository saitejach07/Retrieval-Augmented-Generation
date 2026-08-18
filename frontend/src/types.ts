export type ChatTurn = {
  role: "user" | "assistant";
  content: string;
};

export type IntentResult = {
  intent: string;
  needs_retrieval: boolean;
};

export type SourceChunk = {
  source_id: string;
  filename: string;
  page: number | null;
  chunk_index: number | null;
  content: string;
  score: number | null;
  retrieval_method: string | null;
};

export type ChatResponse = {
  answer: string;
  intent: IntentResult;
  rewritten_question: string;
  sources: SourceChunk[];
};

export type DocumentInfo = {
  source_id: string;
  filename: string;
  chunks: number;
};
