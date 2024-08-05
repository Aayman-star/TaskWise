import { createContext } from "react";
export type Task = {
  id: number;
  user_id?: string;
  tasktext: string;
  is_complete: boolean;
  created_at?: Date;
};
type TaskContextState = {
  isLoading: boolean;
  signedIn: boolean;
  theme: string | undefined;
  Tasks: Array<Task>;
  setTheme: (theme: string) => void;
  addTask: (task: string) => void;
  unCheckTask: (id: number) => void;
  checkTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

export const TaskContext = createContext<TaskContextState>({
  isLoading: true,
  signedIn: false,
  Tasks: [],
  theme: "",
  setTheme: () => {},
  addTask: () => {},
  unCheckTask: () => {},
  checkTask: () => {},
  deleteTask: () => {},
});
