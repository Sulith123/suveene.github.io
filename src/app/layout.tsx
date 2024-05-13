import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <div className="flex flex-row mx-auto gap-6 font-mono font-bold p-3 w-full mt-5 sticky top-0 bg-white">
          <div className="cursor-pointer ml-auto">About Me</div>
          <div className="cursor-pointer">Experience</div>
          <div className="cursor-pointer">Projects</div>
          <div className="cursor-pointer mr-auto">Other Stuff</div>
        </div>
        {children}
      </body>
    </html>
  );
}
