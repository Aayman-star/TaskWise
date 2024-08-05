//import ThemeProvider from "next-themes";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MainComp from "@/components/MainComp";
import ThemeProvider from "@/components/ThemeProvider";
import ContextProvider from "@/context/ContextProvider";
import { ClerkProvider, ClerkLoading } from "@clerk/nextjs";
import { robotoSlab, montserrat } from "@/lib/fonts";
export const metadata: Metadata = {
  title: "TaskWise",
  description: "Your Wise Companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <ContextProvider>{children}</ContextProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
