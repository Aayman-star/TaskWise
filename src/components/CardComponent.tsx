"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Button } from "./ui/button";
const CardComponent = () => {
  const [count, setCount] = useState<number>(0);
  const addOneSimple = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  const addwithUpdater = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const reset = () => {
    setCount(0);
    console.clear();
  };
  console.log(count);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>This is some Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-3">
          <p>This is my number : {count} </p>
          <Button size="sm" onClick={addOneSimple}>
            +1
          </Button>
          <Button size="sm" onClick={addwithUpdater}>
            +1U
          </Button>
          <Button size="sm" onClick={reset}>
            R
          </Button>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardComponent;
