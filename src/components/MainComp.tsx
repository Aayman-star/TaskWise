"use client";
import MyDate from "./MyDate";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import TaskToDo from "./TaskToDo";
import CompleteTasks from "./CompleteTasks";
import { TaskContext } from "@/context/context";
import React, { useState, useContext } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

type tasks = {
  id: number;
  tasktext: string;
  is_complete: boolean;
  created_at?: Date;
};
const MainComp = () => {
  const { theme, setTheme, addTask, Tasks, signedIn, isLoading } =
    useContext(TaskContext);

  //This is for the text that is enetered in the user input field
  const [text, setText] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //This function prevents the page from reloading
    e.preventDefault();
    //This is just displaying the text in the console
    // console.log(text);
    if (signedIn) {
      setText("");
      addTask(text);
    } else {
      setText("");
    }
  };
  const unCheckedTasks = Tasks.filter((task) => !task.is_complete);
  const checkedTasks = Tasks.filter((task) => task.is_complete);
  // console.log("unChecked", unCheckedTasks);
  // console.log("Checked", checkedTasks);
  return (
    <div className={theme}>
      <div className="bg-background w-full min-h-[85vh] md:max-w-7xl mx-auto ">
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
              placeholder={`${
                signedIn ? "Enter the task" : "Sign In to enter the tasks"
              }`}
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
              <TabsTrigger value="Complete">
                Complete{" "}
                <span
                  className={`${checkedTasks?.length ? "visible" : "hidden"}`}>
                  ({checkedTasks?.length > 0 && checkedTasks.length})
                </span>
              </TabsTrigger>
            </TabsList>
            {isLoading && signedIn ? (
              <p className="text-center">Waiting for data...</p>
            ) : (
              <TabsContent value="InComplete">
                {unCheckedTasks.length > 0 ? (
                  unCheckedTasks.map((task, id) => (
                    <TaskToDo {...task} key={id} />
                  ))
                ) : (
                  <h2 className="text-foreground font-medium text-center p-2">
                    Start adding tasks to see the magic 😊
                  </h2>
                )}
              </TabsContent>
            )}

            <TabsContent value="Complete">
              {checkedTasks.length > 0 ? (
                checkedTasks.map((task, id) => (
                  <CompleteTasks {...task} key={id} />
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
