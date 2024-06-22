import React from "react";
import Image from "next/image";
import Socials from "../socials";
import { ExternalLinkIcon } from "lucide-react";

const AboutMeSection = () => {
  return (
    <>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl font-bold m-3 mb-8 flex">
        <p id="about-me" className="mx-auto justify-center p-3 underline">
          ABOUT ME
        </p>
      </div>

      <div className="flex flex-col lg:flex-row md:w-[70%] mt-3 items-center">
        <div className="lg:w-[50%]">
          <Image
            className="mx-auto rounded-md"
            src="/Suveen.jpg"
            alt="Suveen profile pic"
            width={280}
            height={280}
            priority
          />
        </div>
        <div className="p-3 lg:w-[80%] lg:mx-auto">
          <p className="text-xl font-semibold">Hi, I&apos;m Suveen Ellawela</p>
          <p className="mt-3">
            I study <span className="font-semibold">Computer Engineering</span>{" "}
            at National University of Singapore. Currently, I am working as a{" "}
            <span className="font-semibold">Research Intern</span> on{" "}
            <a
              className="font-semibold underline"
              href="https://ahlab.org/project/aisee/"
              target="_blank"
            >
              AI See
            </a>
            , a wearable device for the visually impaired, at the{" "}
            <a
              className="font-semibold underline"
              href="https://ahlab.org"
              target="_blank"
            >
              Augmented Human Lab
            </a>
            .
          </p>
          <p className="mt-3">
            I also co-founded{" "}
            <a
              className="font-semibold underline"
              href="https://folo-up.co/"
              target="_blank"
            >
              FoloUp
            </a>
            , where we provide{" "}
            <span className="font-semibold">
              AI-powered in-depth qualitative interviews.
            </span>
            <span className="font-medium ml-1"><a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7208456112503685120/"
                target="_blank"
                className="relative text-sm inline-flex items-center transition-all px-2 rounded-sm bg-lime-300 text-black hover:bg-lime-500 gap-1"
              >Demo<ExternalLinkIcon size={14} /></a>
            </span>
          </p>
          <p className="mt-3">
            You can talk to me about{" "}
            <span className="font-semibold">
              LLMs, Deep Learning, AI agents, HCI, Software Engineering
            </span>{" "}
            and <span className="font-semibold">Startups</span>.
          </p>
        </div>
      </div>
      <Socials />
    </>
  );
};

export default AboutMeSection;
