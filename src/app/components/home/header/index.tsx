"use client"
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <>
      <div className="flex flex-row mx-auto gap-3 md:gap-6 font-mono text-xs md:text-base font-bold p-3 w-full mt-5 sticky top-0 z-20 bg-white">
        <a
          href="/#about-me"
          className={`cursor-pointer ml-auto ${
            pathname.includes("/#about-me") ? "border-b-2 border-red-500" : ""
          }hover:scale-110 text-center`}
        >
          About Me
        </a>
        <a
          href="/#experience"
          className="cursor-pointer hover:scale-110 text-center"
        >
          Experience
        </a>
        <a
          href="/#projects"
          className="cursor-pointer hover:scale-110 text-center"
        >
          Projects
        </a>
        <a
          href="/#other-stuff"
          className="cursor-pointer hover:scale-110 text-center"
        >
          Other Stuff
        </a>
        <a
          href="/thoughts"
          className={`cursor-pointer mr-auto border-lime-300 ${
            pathname.includes("/thoughts") ? "border-b-4 " : ""
          }hover:scale-110 text-center`}
        >
          Thoughts
        </a>
      </div>
    </>
  );
};

export default Header;
