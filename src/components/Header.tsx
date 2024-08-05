"use client";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { useUser } from "@clerk/nextjs";
import { raleway } from "@/lib/fonts";
import { TaskContext } from "@/context/context";
import { currentUser } from "@clerk/nextjs/server";
import { Sun, Moon, SunMoon, MoonStar } from "lucide-react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect, useContext } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  const { isSignedIn, user } = useUser();
  const { theme, setTheme } = useContext(TaskContext);

  const [isOn, setIsOn] = useState(false);
  return (
    <div className="bg-background w-full p-4 md:mx-auto md:max-w-6xl border-b border-[1px]-foreground flex items-center justify-between">
      <h1 className={`${raleway.className} font-extrabold text-xl md:text-2xl`}>
        TaskWise
      </h1>
      <div className="flex items-center">
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant="link"
          size="icon"
          className="">
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
        <div>
          {user ? <SignedIn></SignedIn> : <SignInButton mode="modal" />}
          <SignedIn>
            <div className="flex items-center justify-end">
              <p className="px-2"> {capitalizeFirstLetter(user?.username)}</p>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Header;
const capitalizeFirstLetter = (str: string | null | undefined): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
