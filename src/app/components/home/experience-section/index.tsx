import React from "react";
import ExpeirenceCard from "../../experience-card";

const ExperienceSection = () => {
  return (
    <>
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
    </>
  );
};

export default ExperienceSection;
