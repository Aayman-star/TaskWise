import { NextRequest, NextResponse } from "next/server";
import { db, taskTable, Task, newTask } from "@/lib/schema";
import { eq, and, asc } from "drizzle-orm";
import { sql } from "@vercel/postgres";

/**The GET function is used to fetch data from the database . In this function I have defined a database table in the schema file and
 * also inferred its datatype from InferSelectMdodel and simply imported it into the route.ts file. This way I don't have to manually define the
 * data type. the res variable is receiving data from the table tasktable
 */

export const GET = async (request: NextRequest) => {
  try {
    await sql`CREATE TABLE IF NOT EXISTS tasktable(id serial,tasktext text,is_complete boolean,created_at timestamp)`;
    const res: Array<Task> = await db
      .select()
      .from(taskTable)
      .orderBy(asc(taskTable.id));
    console.log(res);
    if (res.length) {
      return NextResponse.json({ todos: res });
    } else {
      return NextResponse.json({ message: "No todos at the moment" });
    }
  } catch (err) {
    console.log((err as { message: string }).message);
    /*throw new Error("Something went wrong");*/
  }
};

export const POST = async (request: NextRequest) => {
  const req: newTask = await request.json();
  try {
    if (req.tasktext) {
      const res = await db.insert(taskTable).values({
        tasktext: req.tasktext,
        is_complete: false,
        created_at: new Date(),
      });
      return NextResponse.json({ message: "Task added successfully" });
    } else {
      return NextResponse.json({ message: "Please enter a task" });
      /*throw new Error("Please enter a task");*/
    }
  } catch (err) {
    console.log((err as { message: string }).message);
  }
};
