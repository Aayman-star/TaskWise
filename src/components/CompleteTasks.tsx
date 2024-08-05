import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { FaRegTrashAlt } from "react-icons/fa";
import { FcUndo } from "react-icons/fc";
import { FaUndo } from "react-icons/fa";
import { Task } from "@/lib/schema";
import { useContext } from "react";
import { TaskContext } from "@/context/context";

interface TaskProps {
  id: number;
  tasktext: string;
  is_complete: boolean;
  created_at?: Date;
}

const CompleteTasks = ({
  id,
  tasktext,
  is_complete,
  created_at,
}: TaskProps) => {
  const { unCheckTask, deleteTask, theme } = useContext(TaskContext);

  return (
    <>
      <div key={id} className="w-full">
        <Card className="w-full self-start px-2 py-1 shadow-sm mb-2">
          <div className="flex items-center justify-between">
            <p className={`${theme === "dark" ? "font-light" : "font-normal"}`}>
              {tasktext}
            </p>
            <div className="flex items-center gap-x-2">
              <Button
                size="icon"
                variant="ghost"
                className="shadow-sm"
                onClick={() => unCheckTask(id)}>
                <FaUndo className="font-normal text-lg text-green-500" />
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

export default CompleteTasks;
