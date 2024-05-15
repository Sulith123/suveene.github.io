import React from "react";

const Footer = () => {
  return (
    <>
      <div className="p-2 border-t-2 border-t-slate-500 w-full text-center">
        Built by{" "}
        <a className="underline" href="#about-me">
          Suveen
        </a>{" "}
        with Next.js and tailwind.
      </div>
    </>
  );
};

export default Footer;
