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
      <div className="grid grid-cols-2 mx-auto gap-5">
        <ExpeirenceCard
          company="Augmented Human Lab"
          role="Research Intern"
          period="2024 May - present"
          image="/augmented-human-lab.jpg"
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
