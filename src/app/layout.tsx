import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/home/header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
