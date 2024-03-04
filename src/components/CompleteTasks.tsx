import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { FaRegTrashAlt } from "react-icons/fa";
import { FcUndo } from "react-icons/fc";
import { FaUndo } from "react-icons/fa";

interface TaskProps {
  id: number;
  tasktext: string;
  is_complete: boolean;
  created_at: Date;
  deleteFunction: (id: number) => void;
  unCheckTask: (id: number) => void;
}

const CompleteTasks = ({
  id,
  tasktext,
  is_complete,
  created_at,
  deleteFunction,
  unCheckTask,
}: TaskProps) => {
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
                onClick={() => unCheckTask(id)}>
                <FaUndo className="font-normal text-lg text-green-500" />
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

export default CompleteTasks;
