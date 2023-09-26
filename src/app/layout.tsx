import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Staffion",
  description: "The next generation vendor management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <Navbar />
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
