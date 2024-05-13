import React from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "lucide-react";

type ExperienceCardprops = {
  name: string;
  description: string;
  period: string;
  image: string;
  url: string;
};

const ProjectCard = ({
  name,
  description,
  period,
  image,
  url,
}: ExperienceCardprops) => {
  return (
    <div>
      <div className="flex flex-row p-3 border-2 border-black rounded-md mx-auto">
        <Image
          className="mr-auto rounded-md"
          src={image}
          alt="company logo"
          width={280}
          height={280}
          priority
        />
        <div className="ml-6">
          <a
            className="text-md font-semibold underline"
            target="_blank"
            href={url}
          >
            {name}
          </a>
          <p>{period}</p>
          <p className="font-bold">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
