import React from "react";
import Socials from "../socials";

const Footer = () => {
  return (
    <div className="flex flex-col font-mono border-t-2 border-t-slate-500 w-full bg-lime-50">
      <Socials />
      <div className="p-2 pb-4 text-center">
        Built by{" "}
        <a className="underline" href="#about-me">
          Suveen
        </a>{" "}
        with Next.js and tailwind.
      </div>
    </div>
  );
};

export default Footer;
