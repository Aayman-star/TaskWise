import { Task } from "@/context/context";

export const testData: Task[] = [
  {
    id: 1,
    tasktext: "Task 1",
    is_complete: false,
    created_at: new Date() as any,
  },
  {
    id: 2,
    tasktext: "Task 2",
    is_complete: false,
    created_at: new Date() as any,
  },
  {
    id: 3,
    tasktext: "Task 3",
    is_complete: false,
    created_at: new Date() as any,
  },
  {
    id: 4,
    tasktext: "Task 4",
    is_complete: true,
    created_at: new Date() as any,
  },
  {
    id: 5,
    tasktext: "Task 5",
    is_complete: true,
    created_at: new Date() as any,
  },
];
