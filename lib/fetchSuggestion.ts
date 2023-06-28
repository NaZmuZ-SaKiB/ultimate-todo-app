import formatTodosForAi from "./formatTodosForAi";

const fetchSuggestion = async (board: Board) => {
  const todos = formatTodosForAi(board);

  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todos }),
  });

  const GPTdata = await res.json();
  const { content } = GPTdata;
  return content;
};

export default fetchSuggestion;
