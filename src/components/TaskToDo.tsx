import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { raleway } from "@/lib/fonts";
import React, { useContext } from "react";
import { FcCheckmark } from "react-icons/fc";
import { FaRegTrashAlt } from "react-icons/fa";

import { TaskContext } from "@/context/context";
interface TaskProps {
  id: number;
  tasktext: string;
  is_complete: boolean;
  created_at?: Date;
}

const TaskToDo = ({ id, tasktext, is_complete, created_at }: TaskProps) => {
  const { checkTask, deleteTask, theme } = useContext(TaskContext);
  return (
    <>
      <div key={id} className="w-full">
        <Card className="w-full self-start px-2 py-1 shadow-sm mb-2">
          <div className="flex items-center justify-between">
            <p
              className={`${raleway.className} ${
                theme === "dark" ? "font-light" : "font-normal"
              }`}>
              {tasktext}
            </p>
            <div className="flex items-center gap-x-2">
              <Button
                size="icon"
                variant="ghost"
                className="shadow-sm"
                onClick={() => checkTask(id)}>
                <FcCheckmark className="font-bold text-2xl" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="shadow-sm"
                onClick={() => deleteTask(id)}>
                <FaRegTrashAlt className="text-red-500 font-bold text-lg" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default TaskToDo;
