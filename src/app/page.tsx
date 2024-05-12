import Image from "next/image";
import ExpeirenceCard from "./components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-mono">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl font-bold m-3 lg:flex">
        <p className="mx-auto justify-center p-3">ABOUT ME</p>
      </div>

      <div className="flex flex-row md:w-[70%] mt-3">
        <div className="w-[50%]">
          <Image
            className="mx-auto rounded-md"
            src="/Suveen.jpg"
            alt="Suveen profile pic"
            width={280}
            height={280}
            priority
          />
        </div>
        <div className="p-3 w-[80%] mx-auto">
          <p className="text-xl font-semibold">Hi, I&apos;m Suveen Ellawela</p>
          <p className="mt-3">
            I study Computer Engineering at National University of Singapore.
            Currently I am working as a Research Intern at the Augmented Human
            Lab.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-5 ">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group w-fit rounded-lg border border-transparent p-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mb-3 text-md font-semibold ">Github</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group w-fit rounded-lg border border-transparent p-3 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mb-3 text-md font-semibold">Twitter</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group w-fit rounded-lg border border-transparent p-3 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mb-3 text-md font-semibold">Linkedin</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mb-3 text-md font-semibold">Google Scholar</p>
        </a>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl font-bold m-3  my-5 lg:flex">
        <p className="mx-auto justify-center p-3 my-5">EXPERIENCE</p>
      </div>
      {/* Add location to Exp card */}
      <div className="grid grid-cols-2 mx-auto gap-5">
        <ExpeirenceCard
          company="Augmented Human Lab"
          role="Research Intern"
          period="2024 May - present"
          image="/augmented-human-lab.jpg"
        />
        <ExpeirenceCard
          company="FoloUp"
          role="Co-Founder"
          period="2023 Nov - present"
          image="/FoloUp.png"
        />
        <ExpeirenceCard
          company="Aristotle"
          role="Software Engineer (part-time)"
          period="2023 Feb - 2024 May"
          image="/aristotle.jpg"
        />
        <ExpeirenceCard
          company="Nat. Univeristy of Singapore"
          role="Teaching Assistant"
          period="2023 Aug - 2023 Dec"
          image="/nus-logo.jpg"
        />
        <ExpeirenceCard
          company="MyStorage"
          role="Software Engineer Intern"
          period="2023 May - 2023 Jul"
          image="/mystorage.jpg"
        />
        <ExpeirenceCard
          company="Nat. Univeristy of Singapore"
          role="Research Assistant"
          period="2022 Nov - 2023 Aug"
          image="/nus-logo.jpg"
        />
        <ExpeirenceCard
          company="oDoc"
          role="Product and Operations Intern"
          period="2021 Sep - 2022 Jul"
          image="/odoc.png"
        />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl font-bold m-3  my-5 lg:flex">
        <p className="mx-auto justify-center p-3">PROJECTS</p>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl font-bold m-3  my-5 lg:flex">
        <p className="mx-auto justify-center p-3">OTHER STUFF</p>
      </div>
    </main>
  );
}
