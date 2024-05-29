import React from "react";
import Image from "next/image";

const Socials = () => {
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
    </>
  );
};

export default Socials;