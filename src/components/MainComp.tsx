"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

import { useTheme } from "next-themes";
import CardComponent from "./CardComponent";
import { Card, CardContent } from "./ui/card";
import TestText from "./TestText";
import { RevealWrapper } from "next-reveal";
import { Input } from "./ui/input";

import { FcCheckmark } from "react-icons/fc";
import { FaRegTrashAlt } from "react-icons/fa";
import TaskToDo from "./TaskToDo";
import CompleteTasks from "./CompleteTasks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import MyDate from "./MyDate";
import {
  fetchTasks,
  sendTask,
  deleteTask,
  toggleTaskCompletion,
} from "@/app/data/data";
import { Task } from "@/lib/schema";

type tasks = {
  id: number;
  tasktext: string;
  is_complete: boolean;
  created_at: Date;
};
const MainComp = () => {
  const { theme, setTheme } = useTheme();

  //This is for the Actual Task
  const [tasks, setTasks] = useState<tasks[]>([]);

  //This is for the text that is enetered in the user input field
  const [text, setText] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //This function prevents the page from reloading
    e.preventDefault();
    //This is just displaying the text in the console
    console.log(text);
    //Setting text taken from the input field to the state variable task
    // const singleTask: tasks = {
    //   id: tasks.length + 1,
    //   taskText: text,
    //   isChecked: false,
    // };
    // console.log(singleTask);
    // setTasks([...tasks, singleTask]);
    //Setting the input field to empty string again
    setText("");
    const res = await sendTask(text);
    console.log(res);
    await fetchTodos();
  };
  /*This fucntion deletes the task*/
  const deleteTodo = async (index: number) => {
    //setTasks(tasks.filter((task) => task.id !== index));
    console.log(index);
    const res = await deleteTask(index);
    console.log(res);
    await fetchTodos();
  };

  /**This function marks the task as checked */
  const checkTheTask = async (task: Task) => {
    const res = await toggleTaskCompletion(task);
    // console.log(res); added for debugging
    await fetchTodos();
  };
  /**Function to unCheck the task */
  const unCheckTheTask = async (task: Task) => {
    const res = await toggleTaskCompletion(task);
    /*console.log(res);* added for debugging*/
    await fetchTodos();
  };
  const fetchTodos = async () => {
    const todos = await fetchTasks();
    /**For debugging purpose */
    // console.log(`I AM HERE IN THE MAIN COMP`);
    // console.log(todos);
    setTasks(todos);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const unCheckedTasks = tasks?.length
    ? tasks.filter((task) => task.is_complete !== true)
    : [];
  // const unCheckedTasks = newTasks;
  const checkedTasks = tasks?.length
    ? tasks.filter((task) => task.is_complete !== false)
    : [];
  // console.log(tasks);
  // console.log(checkedTasks);

  return (
    <div className={theme}>
      <div className="bg-background w-full min-h-screen md:max-w-7xl mx-auto border-r border-l border-2-foreground">
        <div className="flex flex-col items-center gap-4 md:gap-y-4 md:mb-10">
          <div className="mt-6 p-2">
            {" "}
            <MyDate />
          </div>

          <form
            method="post"
            onSubmit={handleSubmit}
            className="mt-10 w-4/5 md:w-1/2 flex items-center gap-x-4">
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
              {unCheckedTasks.length > 0 ? (
                unCheckedTasks.map((task, id) => (
                  <TaskToDo
                    {...task}
                    deleteTodo={deleteTodo}
                    checkTask={checkTheTask}
                    key={id}
                  />
                ))
              ) : (
                <h2 className="text-foreground font-medium text-center p-2">
                  Start adding tasks to see the magic 😊
                </h2>
              )}
            </TabsContent>
            <TabsContent value="Complete">
              {checkedTasks.length > 0 ? (
                checkedTasks.map((task, id) => (
                  <CompleteTasks
                    {...task}
                    deleteFunction={deleteTodo}
                    unCheckTask={unCheckTheTask}
                    key={id}
                  />
                ))
              ) : (
                <h2 className="text-foreground font-medium text-center p-2">
                  No completed tasks for now!
                </h2>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MainComp;
