import formatTodosForAi from "./formatTodosForAi";

const fetchFakeSuggestion = async (board: Board) => {
  const todos = formatTodosForAi(board);

  const res = await fetch("/api/generateFakeSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todos }),
  });

  const GPTdata = await res.json();
  return GPTdata;
};

export default fetchFakeSuggestion;
