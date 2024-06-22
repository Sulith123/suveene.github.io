"use client";

import React, { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { ClipboardIcon, CopyIcon } from "lucide-react";

const Socials = () => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("suveen.ellawela@u.nus.edu").then(
      () => {
        setCopied(true);
        toast.success("Email copied to clipboard! ✉️", {
          position: "bottom-right",
          duration: 3000,
        });
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (err) => {
        console.log("failed to copy", err.mesage);
      }
    );
  };
  return (
    <>
      <div className="flex flex-row gap-5 mx-auto">
        <a
          href="https://github.com/SuveenE"
          className="group w-fit rounded-lg border border-transparent py-3 px-1 hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <p className="mb-3 text-md font-semibold ">Github</p> */}
          <Image
            className="ml-auto rounded-md"
            src="/github-logo.png"
            alt="company logo"
            width={30}
            height={30}
            priority
          />
        </a>

        <a
          href="https://twitter.com/SuveenE"
          className="group w-fit rounded-lg border border-transparent py-3 px-1 hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="ml-auto rounded-md"
            src="/x-logo.png"
            alt="company logo"
            width={30}
            height={30}
            priority
          />
        </a>

        <a
          href="https://www.linkedin.com/in/suveen-ellawela/"
          className="group w-fit rounded-lg border border-transparent py-3 px-1 hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="ml-auto rounded-md"
            src="/linkedin.jpg"
            alt="company logo"
            width={30}
            height={30}
            priority
          />{" "}
        </a>

        <a
          href="https://scholar.google.com/citations?hl=en&user=EPo-WiEAAAAJ"
          className="group rounded-lg border border-transparent py-3 px-1 hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="ml-auto rounded-md"
            src="/google-scholar.png"
            alt="company logo"
            width={30}
            height={30}
            priority
          />{" "}
        </a>
      </div>
      <p
        className="text-sm inline-flex gap-1 items-center font-medium mx-auto p-1 px-2 bg-lime-200 rounded-md cursor-pointer hover:bg-lime-300"
        onClick={(event) => {
          if (!copied){
            event.stopPropagation();
            copyToClipboard();
          }
        }}
      >
        suveen.ellawela@u.nus.edu <CopyIcon size={14} />
      </p>
    </>
  );
};

export default Socials;
