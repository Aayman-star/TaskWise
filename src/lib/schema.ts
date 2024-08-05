import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  text,
  varchar,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

import { InferSelectModel, InferInsertModel } from "drizzle-orm";
export const taskTable = pgTable("tasktable", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  tasktext: text("tasktext").notNull(),
  is_complete: boolean("is_complete").default(false).notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

//Exporting the type of the single task...
export type Task = InferSelectModel<typeof taskTable>;
//Infering the type of the task to be added
export type newTask = InferInsertModel<typeof taskTable>;
// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
