import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suveen",
  description: "About Suv.",
  icons: {
    icon: '/dino.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='light'>
      <head><link rel="shortcut icon" href="/dino.svg" /></head>
      <body className={`${inter.className} bg-white`}>
        <div className="flex flex-row mx-auto gap-3 md:gap-6 font-mono text-sm md:text-base font-bold p-3 w-full mt-5 sticky top-0 z-20 bg-white">
          <a href="/#about-me" className="cursor-pointer ml-auto hover:scale-110 text-center">About Me</a>
          <a href="/#experience" className="cursor-pointer hover:scale-110 text-center">Experience</a>
          <a href="/#projects" className="cursor-pointer hover:scale-110 text-center">Projects</a>
          <a href="/#other-stuff" className="cursor-pointer mr-auto hover:scale-110 text-center">Other Stuff</a>
          {/* <a href="/#other-stuff" className="cursor-pointer mr-auto hover:scale-110 text-center">Thoughts</a> */}
        </div>
        {children}
      </body>
    </html>
  );
}
