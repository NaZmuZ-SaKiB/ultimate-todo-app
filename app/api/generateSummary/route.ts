import openai from "@/openai";
import { log } from "console";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { todos } = await req.json();
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `When responding, welcome the user as SaKiB and say welcome to the Ultimate Ai ToDo App! Limit the response to 205 characters.`,
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, in progress and done. Then tell the user to have a productive day! Here is the data: ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });

  const { data } = response;

  return NextResponse.json(data.choices[0].message);
};
