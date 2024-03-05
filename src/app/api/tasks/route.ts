import { NextRequest, NextResponse } from "next/server";
import { db, taskTable, Task, newTask } from "@/lib/schema";
import { eq, and, asc } from "drizzle-orm";
import { sql } from "@vercel/postgres";

/**The GET function is used to fetch data from the database . In this function I have defined a database table in the schema file and
 * also inferred its datatype from InferSelectMdodel and simply imported it into the route.ts file. This way I don't have to manually define the
 * data type. the res variable is receiving data from the table tasktable
 */
type task = {
  id: number;
  tasktext: string;
  is_complete: boolean;
  created_At: Date;
};
export const GET = async (request: NextRequest) => {
  try {
    await sql`CREATE TABLE IF NOT EXISTS tasktable(id serial,tasktext text,is_complete boolean,created_at timestamp)`;
    const todos: Array<Task> = await db
      .select()
      .from(taskTable)
      .orderBy(asc(taskTable.id));

    //console.log(todos);
    if (todos.length) {
      return NextResponse.json({ todos }, { status: 200 });
    } else {
      return NextResponse.json({ message: "No todos at the moment" });
    }
  } catch (err) {
    console.log((err as { message: string }).message);
    /*throw new Error("Something went wrong");*/
  }
};
/**This function is for sending data to the table named tasktable in the database. from the client side the text for the task is received,
 * the is_complete status is added by default,so is the time stamp. The point to remember is that apis deal with data in json format.
 * so the data sent to the api should be in json format as the data received from the api is in json format as well.
 */
export const POST = async (request: NextRequest) => {
  const req = await request.json();
  try {
    /**Check if the user has sent the task text */
    if (req.tasktext) {
      const res = await db
        .insert(taskTable)
        .values({
          tasktext: req.tasktext,
          is_complete: false,
          created_at: new Date(),
        })
        .returning();
      //console.log(res);
      return NextResponse.json({
        message: "Task added successfully",
        data: res,
      });
    } else {
      return NextResponse.json({ message: "Please enter a task" });
      /*throw new Error("Please enter a task");*/
    }
  } catch (err) {
    console.log((err as { message: string }).message);
  }
};

/**This the delete function for deleting the task from the database. The id of the task is received from the client side. */
export const DELETE = async (request: NextRequest) => {
  const req = request.nextUrl;
  const Id = req.searchParams.get("id");

  try {
    if (Id) {
      const res = await db
        .delete(taskTable)
        .where(eq(taskTable.id, Id as unknown as number))
        .returning();

      return NextResponse.json(
        { Message: `Data deleted successfully` },
        { status: 200 }
      );
    } else {
      if ("product_id") {
        throw new Error(`Login required to procees`);
      } else {
        throw new Error(`Product not found`);
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { Message: `Failed to remove data` },
      { status: 405 }
    );
  }
};
/**This is a patch function to  update the is_complete status of the task */
export const PATCH = async (request: NextRequest) => {
  const req = await request.json();
  try {
    if (req.id) {
      const res = await db
        .update(taskTable)
        .set({ is_complete: !req.is_complete })
        .where(eq(taskTable.id, req.id))
        .returning();
      return NextResponse.json({
        message: "Task updated successfully",
        data: res,
      });
    } else {
      return NextResponse.json({ message: "Please enter a task" });
    }
  } catch (err) {
    console.log((err as { message: string }).message);
  }
  return NextResponse.json({ message: "Task updated successfully" });
};
