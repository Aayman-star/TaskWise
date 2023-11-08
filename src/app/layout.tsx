//import ThemeProvider from "next-themes";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import { Open_Sans } from "next/font/google";
import MainComp from "@/components/MainComp";

// const inter = Inter({ subsets: ["latin"] });
//const roboto = Roboto_Slab({ subsets: ["latin"] });
const opensans = Open_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "My Test App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={opensans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {/* <MainComp /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
