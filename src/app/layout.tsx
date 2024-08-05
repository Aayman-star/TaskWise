//import ThemeProvider from "next-themes";
import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";
import ContextProvider from "@/context/ContextProvider";
import { ClerkProvider, ClerkLoading } from "@clerk/nextjs";
import { montserrat } from "@/lib/fonts";
export const metadata: Metadata = {
  metadataBase: new URL("https://task-wise-alpha.vercel.app/"),
  title: "TaskWise",
  description: "Your Wise Companion",
  openGraph: {
    title: "TaskWise",
    description: "Your Wise Companion",
    url: "https://task-wise-alpha.vercel.app/",
    siteName: "TaskWise",
    locale: "en_US",
    type: "website",
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaskWise",
    description: "Your Wise Companion",
  },
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
