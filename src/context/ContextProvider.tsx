"use client";
import { Task } from "./context";
import { useTheme } from "next-themes";
import { useUser } from "@clerk/nextjs";
import { TaskContext } from "./context";
import React, { useState, ReactNode, useEffect } from "react";
import {
  fetchTasks,
  sendTask,
  deleteTaskFromDb,
  toggleTaskCompletion,
} from "@/app/data/data";
type ContextProviderProps = {
  children: ReactNode;
};
import { testData } from "@/app/data/TestData";
const ContextProvider = ({ children }: ContextProviderProps) => {
  const { theme, setTheme } = useTheme();
  const { isLoaded, isSignedIn, user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);
  const [Tasks, setTasks] = useState<Task[]>([]);
  // const [unCheckedTasks, setUncheckedTasks] = useState<Task[]>([]);

  // const [checkedTasks, setCheckedTasks] = useState<Task[]>([]);

  //? Handling with the database
  const fetchTasksFromdb = async (id: string) => {
    const data: Array<Task> = await fetchTasks(id);
    if (data) {
      // console.log("Tasks Array:", data);
    } else {
      console.log("No Data");
    }
    const tempTasks = data?.length ? data : [];
    // console.log(tempTasks);
    setTasks(tempTasks);
  };
  useEffect(() => {
    if (isSignedIn && isLoaded && user) {
      fetchTasksFromdb(user?.id);
    }
    setSignedIn(true);
    setIsLoading(false);
  }, [isSignedIn, user]);
  //? Adding task to the Array
  const addTask = (task: string) => {
    const newTask = {
      id: Tasks.length + 1,
      tasktext: task,
      is_complete: false,
    };
    setTasks([...Tasks, newTask]);
    // setUncheckedTasks([...Tasks, newTask]);
    if (isSignedIn && user) {
      sendTask(user?.id, task);
    }
  };
  //? This is to mark the task as complete and subsequqntly change the status in the databa
  const checkTask = (id: number) => {
    const updatedTasks = Tasks.map((task, i) =>
      task.id === id ? { ...task, is_complete: !task.is_complete } : task
    );

    setTasks(updatedTasks);
    if (isSignedIn && user) {
      const newTask = Tasks.filter(
        (item, i) => item.id === id && { ...item, user_id: user?.id }
      )[0];
      // console.log("IN THE CONTEXT PROVIDER", newTask);
      toggleTaskCompletion(newTask);
    }
  };
  //? This is to mark the task as incomplete and subsequqntly change the status in the database
  const unCheckTask = (id: number) => {
    const updatedTasks = Tasks.map((task, i) =>
      task.id === id ? { ...task, is_complete: !task.is_complete } : task
    );
    setTasks(updatedTasks);
    if (isSignedIn && user) {
      const newTask = Tasks.filter(
        (item, i) => item.id === id && { ...item, user_id: user?.id }
      )[0];
      // console.log("IN THE CONTEXT PROVIDER", newTask);
      toggleTaskCompletion(newTask);
    }
  };
  //?To Delete the task from the array and subsequently from the database
  const deleteTask = (id: number) => {
    const updatedTasks = Tasks.filter((task, i) => task.id !== id);
    setTasks(updatedTasks);
    if (isSignedIn && user) {
      deleteTaskFromDb(id, user?.id);
    }
  };
  return (
    <TaskContext.Provider
      value={{
        theme,
        Tasks,
        isLoading,
        signedIn,
        setTheme,
        addTask,
        checkTask,
        unCheckTask,
        deleteTask,
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export default ContextProvider;
