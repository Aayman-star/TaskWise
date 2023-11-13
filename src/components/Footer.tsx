"use client";
import React from "react";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={theme}>
      <div className="w-full p-4 border-t-2 text-center">
        Copyright © TaskWise 2023{" "}
      </div>
    </div>
  );
};

export default Footer;
