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
      <div className="flex flex-col md:flex-row p-3 border-2 border-black rounded-md mx-auto">
        <Image
          className="mx-auto md:mr-auto rounded-md"
          src={image}
          alt="company logo"
          width={280}
          height={280}
          priority
        />
        <div className="md:ml-6">
          <a
            className="text-md font-semibold underline"
            target="_blank"
            href={url}
          >
            {name}
          </a>
          <p>{period}</p>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
