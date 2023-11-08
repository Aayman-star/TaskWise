// "use client";
// import React, { ReactNode, useEffect, useState } from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
// // import { type ThemeProviderProps } from "next-themes/dist/types";
// interface ThemeProps {
//   children: ReactNode;
// }

// const ThemeProviders = ({ children }: ThemeProps) => {

//   }
//   return <NextThemesProvider>{children}</NextThemesProvider>;
// };

// export default ThemeProviders;

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
