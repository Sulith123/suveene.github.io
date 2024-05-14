import Image from "next/image";
import ExpeirenceCard from "./components/experience-card";
import ProjectCard from "./components/projects-card";
import StuffCard from "./components/stuff-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24 font-mono bg-white">
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
              AI-powered in-depth qualitative interviews
            </span>
            . I am passionaite about LLMs, Deep Learning, AI agents, Human
            Computer Interaction and Startups.
          </p>
          <p className="mt-3">
            I am passionaite about LLMs, Deep Learning, AI agents, Human
            Computer Interaction and Startups.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-5 p-3">
        <a
          href="https://github.com/SuveenE"
          className="group w-fit rounded-lg border border-transparent py-3 px-1"
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
          className="group w-fit rounded-lg border border-transparent py-3 px-1 "
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
          className="group w-fit rounded-lg border border-transparent py-3 px-1 "
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
          className="group rounded-lg border border-transparent py-3 px-1"
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
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl font-bold m-3  my-8 flex">
        <p
          id="experience"
          className="mx-auto justify-center p-3 my-5 underline"
        >
          EXPERIENCE
        </p>
      </div>
      {/* Add location, website URL to Exp card */}
      <div className="grid  grid-cols-1 lg:grid-cols-2 lg:mx-auto lg:gap-5 gap-3 items-center">
        <ExpeirenceCard
          company="Augmented Human Lab"
          role="Research Intern"
          period="2024 May - present"
          image="/augmented-human-lab.jpg"
          url="https://www.ahlab.org/"
        />
        <ExpeirenceCard
          company="FoloUp"
          role="Co-Founder"
          period="2023 Nov - present"
          image="/FoloUp.png"
          url="https://www.folo-up.co/"
        />
        <ExpeirenceCard
          company="Aristotle"
          role="Software Engineer (part-time)"
          period="2023 Feb - 2024 May"
          image="/aristotle.jpg"
          url="https://aristotlehq.com/"
        />
        <ExpeirenceCard
          company="Nat. Univeristy of Singapore"
          role="Teaching Assistant"
          period="2023 Aug - 2023 Dec"
          image="/nus-logo.jpg"
          url="https://www.nus.edu.sg/"
        />
        <ExpeirenceCard
          company="MyStorage"
          role="Software Engineer Intern"
          period="2023 May - 2023 Jul"
          image="/mystorage.jpg"
          url="https://www.mystorage.vn"
        />
        <ExpeirenceCard
          company="Nat. Univeristy of Singapore"
          role="Research Assistant"
          period="2022 Nov - 2023 Aug"
          image="/nus-logo.jpg"
          url="https://www.nus.edu.sg/"
        />
        <div className="lg:col-span-2 lg:col-start-1 flex justify-center">
          <ExpeirenceCard
            company="oDoc"
            role="Product and Operations Intern"
            period="2021 Sep - 2022 Jul"
            image="/odoc.png"
            url="https://www.odoc.life/"
          />
        </div>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl font-bold m-3  my-8 flex">
        <p id="projects" className="mx-auto justify-center p-3 underline">
          PROJECTS
        </p>
      </div>
      <div className="grid lg:w-[70%] grid-cols-1 lg:grid-cols-1 lg:mx-auto lg:gap-5 gap-3 items-center">
        <ProjectCard
          name="Bera Tiles"
          image="/beratiles.jpg"
          description="Bera Tiles is a mobile app that gamifies the essence of Sri Lankan traditional drums. The app features digital renditions of over 6 Sri Lankan traditional drums, coupled with a reflex-testing game akin to Piano Tiles."
          period="2022"
          url="https://play.google.com/store/apps/details?id=com.suveen.bera_tiles_1"
        />
        {/* <ProjectCard
          name="Bera Tiles"
          image="/beratiles.jpg"
          description="Bera Tiles is a mobile app that gamifies the essence of Sri Lankan traditional drums. The app features digital renditions of over 6 Sri Lankan traditional drums, coupled with a reflex-testing game akin to Piano Tiles."
          period="2022"
          url="https://play.google.com/store/apps/details?id=com.suveen.bera_tiles_1"
        />
        <ProjectCard
          name="Bera Tiles"
          image="/beratiles.jpg"
          description="Bera Tiles is a mobile app that gamifies the essence of Sri Lankan traditional drums. The app features digital renditions of over 6 Sri Lankan traditional drums, coupled with a reflex-testing game akin to Piano Tiles."
          period="2022"
          url="https://play.google.com/store/apps/details?id=com.suveen.bera_tiles_1"
        /> */}
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl font-bold m-3  my-8 flex">
        <p id="other-stuff" className="mx-auto justify-center p-3 underline">
          OTHER STUFF
        </p>
      </div>
      <div className="grid lg:w-[70%] grid-cols-1 lg:grid-cols-2 lg:mx-auto lg:gap-5 gap-3 mb-10 items-center">
        <StuffCard
          name="I like to take PHOTOS!"
          description="Follow my instagram page where I share some photos I take from my phone and my papershoot camera"
          image="/snapbysuv.jpeg"
          url="https://www.instagram.com/snapsbysuv?igsh=OGkwMjVwMWVvaHk="
        />
      </div>
      <div className="p-2 border-t-2 border-t-slate-500">
        Built by{" "}
        <a className="underline" href="#about-me">
          Suveen
        </a>{" "}
        with Next.js and tailwind.
      </div>
    </main>
  );
}
