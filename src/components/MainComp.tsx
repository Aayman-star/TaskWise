"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import CardComponent from "./CardComponent";
import TestText from "./TestText";
import { RevealWrapper } from "next-reveal";
const MainComp = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={theme}>
      <div className="bg-background w-full min-h-screen md:max-w-7xl    mx-auto border-r border-l border-2-foreground grid place-content-center">
        <div className="flex flex-col items-center gap-4 md:flex-row mb-10">
          {" "}
          <RevealWrapper origin="left" duration={1500}>
            <h2 className="text-3xl font-semibold">Hello from the component</h2>
          </RevealWrapper>
          {/* <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={buttonVariants({ variant: "default", size: "default" })}>
            {theme === "dark" ? (
              <MoonIcon className="h-7 text-gray-800" />
            ) : (
              <SunIcon className="h-7 text-gray-50" />
            )}
          </Button> */}
        </div>{" "}
        <CardComponent />
      </div>
    </div>
  );
};

export default MainComp;

{
  /* <div className="flex items-center gap-4">
        <p>Hero Sun Icon</p>
        <SunIcon className="h-9 text-gray-50 bg-gray-900 p-2 rounded-md" />
      </div>
      <div className="flex items-center gap-4">
        <p>Lucide-react Sun Icon</p>
        <Sun className="h-8 text-gray-50 bg-gray-800  rounded-md px-1" />
      </div> */
}
