import React from "react";
import Image from "next/image";

type ExperienceCardprops = {
  company: string;
  role: string;
  period: string;
  image: string;
  url: string;
};

const ExpeirenceCard = ({
  company,
  role,
  period,
  image,
  url
}: ExperienceCardprops) => {
  return (
    <div>
      <div className="flex flex-row p-3 border-2 border-black rounded-md mx-auto">
        <div className="mr-6">
          <a className="text-md font-semibold" href={url}>{company}</a>
          <p>{role}</p>
          <p>{period}</p>
        </div>
        <Image
          className="ml-auto rounded-md"
          src={image}
          alt="company logo"
          width={70}
          height={70}
          priority
        />
      </div>
    </div>
  );
};

export default ExpeirenceCard;