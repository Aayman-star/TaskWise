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
import CompleteTasks from "./CompleteTasks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface tasks {
  id: number;
  taskText: string;
  isChecked: boolean;
}
const MainComp = () => {
  const { theme, setTheme } = useTheme();

  //This is for the Actual Task
  const [tasks, setTasks] = useState<tasks[]>([]);

  //This is for the text that is enetered in the user input field
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //This function prevents the page from reloading
    e.preventDefault();
    //This is just displaying the text in the console
    console.log(text);
    //Setting text taken from the input field to the state variable task
    const singleTask: tasks = {
      id: tasks.length + 1,
      taskText: text,
      isChecked: false,
    };
    console.log(singleTask);
    setTasks([...tasks, singleTask]);
    //Setting the input field to empty string again
    setText("");
  };
  /*This fucntion deletes the task*/
  const deleteTask = (index: number) => {
    setTasks(tasks.filter((task) => task.id !== index));
  };

  /**This function marks the task as checked */
  const checkTheTask = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isChecked: true,
          };
        } else {
          return task;
        }
      })
    );
  };
  /**Function to unCheck the task */
  const unCheckTheTask = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isChecked: false,
          };
        } else {
          return task;
        }
      })
    );
  };

  const unCheckedTasks = tasks.filter((task) => task.isChecked !== true);
  const checkedTasks = tasks.filter((task) => task.isChecked !== false);
  console.log(tasks);
  console.log(checkedTasks);

  return (
    <div className={theme}>
      <div className="bg-background w-full min-h-screen md:max-w-7xl mx-auto border-r border-l border-2-foreground">
        <div className="flex flex-col items-center gap-4 md:gap-6 md:mb-10">
          <form
            method="post"
            onSubmit={handleSubmit}
            className="mt-20 w-4/5 md:w-1/2 flex items-center gap-x-4">
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
          <Tabs defaultValue="InComplete" className="w-4/5 md:w-1/2">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="InComplete">InComplete</TabsTrigger>
              <TabsTrigger value="Complete">Complete</TabsTrigger>
            </TabsList>
            <TabsContent value="InComplete">
              {tasks.length > 0 &&
                unCheckedTasks.map((task, id) => (
                  <TaskToDo
                    {...task}
                    deleteFunction={deleteTask}
                    checkTask={checkTheTask}
                    key={id}
                  />
                ))}
            </TabsContent>
            <TabsContent value="Complete">
              {tasks.length > 0 &&
                checkedTasks.map((task, id) => (
                  <CompleteTasks
                    {...task}
                    deleteFunction={deleteTask}
                    unCheckTask={unCheckTheTask}
                    key={id}
                  />
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MainComp;
