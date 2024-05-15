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
      <div className="flex flex-col md:flex-row p-3 md:max-w-[50%] border-2 border-black rounded-md mx-auto">
        <div className="mx-auto md:mr-6 items-center">
          {/* <a
            className="text-md font-semibold underline"
            target="_blank"
            href={url}
          >
            {name}
          </a> */}
          <div className="font-bold my-2 mx-auto text-center">{name}{"\n"}</div>
          <p className="mx-auto my-2 text-center">{description}</p>
        </div>
        <Image
          className="mx-auto md:mr-auto rounded-md"
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
