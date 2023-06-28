import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { todos } = await req.json();
  const message = `Welcome to the Ultimate Ai ToDo App! SaKiB. You currently have ${
    todos?.todo
  } task${todos?.todo > 1 && "s"} to do, ${todos?.inprogress} in progress and ${
    todos?.done
  } task${todos?.done > 1 && "s"} completed. Have a productive day!`;

  console.log(todos);
  return NextResponse.json(message);
};
