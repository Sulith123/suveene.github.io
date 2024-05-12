import React from "react";
import Image from "next/image";

type ExperienceCardprops = {
  company: string;
  role: string;
  period: string;
  image: string;
};

const ExpeirenceCard = ({
  company,
  role,
  period,
  image,
}: ExperienceCardprops) => {
  return (
    <div>
      <div className="flex flex-row p-3 border border-red-400 rounded-md mx-auto">
        <div className="mr-6">
          <p className="text-md font-semibold">{company}</p>
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