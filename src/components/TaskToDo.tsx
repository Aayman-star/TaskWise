import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { FcCheckmark } from "react-icons/fc";
import { FaRegTrashAlt } from "react-icons/fa";

interface TaskProps {
  id: number;
  tasktext: string;
  is_complete: boolean;
  created_at: Date;
  deleteFunction: (id: number) => void;
  checkTask: (id: number) => void;
}

const TaskToDo = ({
  id,
  tasktext,
  is_complete,
  created_at,
  deleteFunction,
  checkTask,
}: TaskProps) => {
  /**This is for debugging */
  // console.log(
  //   `THIS IS THE TASKTODO COMPONENT ${id},${tasktext},${is_complete},${created_at}`
  // );
  return (
    <>
      <div key={id} className="w-full">
        <Card className="w-full self-start px-2 py-1 shadow-sm mb-2">
          <div className="flex items-center justify-between">
            <div>{tasktext}</div>
            <div className="flex items-center gap-x-2">
              <Button
                size="sm"
                variant="secondary"
                className="shadow-sm"
                onClick={() => checkTask(id)}>
                <FcCheckmark className="font-bold text-2xl" />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="shadow-sm"
                onClick={() => deleteFunction(id)}>
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
