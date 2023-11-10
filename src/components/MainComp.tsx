"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import CardComponent from "./CardComponent";
import { Card, CardContent } from "./ui/card";
import TestText from "./TestText";
import { RevealWrapper } from "next-reveal";
import { Input } from "./ui/input";
import { Check } from "lucide-react";
import { FcCheckmark } from "react-icons/fc";
import { FaRegTrashAlt } from "react-icons/fa";
import TaskToDo from "./TaskToDo";

interface tasks {
  id: number;
  taskText: string;
  isChecked: boolean;
}
const MainComp = () => {
  const { theme, setTheme } = useTheme();

  //This is for the Actual Task
  const [task, setTask] = useState<tasks[]>([]);

  //This is for the text that is enetered in the user input field
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //This function prevents the page from reloading
    e.preventDefault();
    //This is just displaying the text in the console
    console.log(text);
    //Setting text taken from the input field to the state variable task
    const singleTask: tasks = {
      id: task.length + 1,
      taskText: text,
      isChecked: false,
    };
    console.log(singleTask);
    setTask([...task, singleTask]);
    //Setting the input field to empty string again
    setText("");
  };
  // const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const temp = event.target.value;
  //   const text = temp;
  //   console.log(text);
  // };
  const deleteTask = (index: number) => {
    setTask(task.filter((t) => t.id !== index));
  };

  return (
    <div className={theme}>
      <div className="bg-background w-full min-h-screen md:max-w-7xl mx-auto border-r border-l border-2-foreground">
        <div className="flex flex-col items-center gap-4 md:gap-6 md:mb-10">
          <form
            method="post"
            onSubmit={handleSubmit}
            className="mt-20 w-1/2 flex items-center gap-x-4">
            <Input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter the task..."
            />
            <Button
              variant={theme === "light" ? "default" : "secondary"}
              size="default"
              type="submit">
              Task+
            </Button>
          </form>
          {task.length > 0 &&
            task.map((task, i) => (
              <TaskToDo {...task} deleteFunction={deleteTask} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainComp;
