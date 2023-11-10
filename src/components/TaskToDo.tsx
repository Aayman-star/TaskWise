import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { FcCheckmark } from "react-icons/fc";
import { FaRegTrashAlt } from "react-icons/fa";

interface TaskProps {
  id: number;
  taskText: string;
  isChecked: boolean;
  deleteFunction: (id: number) => void;
}

const TaskToDo = ({ id, taskText, isChecked, deleteFunction }: TaskProps) => {
  return (
    <>
      <div key={id} className="w-1/2">
        <Card className="w-3/4 self-start px-2 py-1 shadow-sm">
          <div className="flex items-center justify-between">
            <div>{taskText}</div>
            <div className="flex items-center gap-x-2">
              <Button size="sm" variant="secondary" className="shadow-sm">
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
