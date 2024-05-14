import React from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "lucide-react";

type StuffCardprops = {
  name: string;
  description: string;
  image: string;
  url: string;
};

const StuffCard = ({
  name,
  description,
  image,
  url,
}: StuffCardprops) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row p-3 border-2 border-black rounded-md mx-auto">
        <div className="mr-6">
          {/* <a
            className="text-md font-semibold underline"
            target="_blank"
            href={url}
          >
            {name}
          </a> */}
          <div>{name}</div>
          <p className="font-bold">{description}</p>
        </div>
        <Image
          className="mr-auto rounded-md"
          src={image}
          alt="company logo"
          width={280}
          height={280}
          priority
        />
      </div>
    </div>
  );
};

export default StuffCard;
