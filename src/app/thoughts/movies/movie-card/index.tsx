import React from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "lucide-react";

type MovieCardprops = {
  name: string;
  description: string;
  emoji: string;
};

const MovieCard = ({
  name,
  description,
  emoji,
}: MovieCardprops) => {
  return (
    <div>
      <div className="flex flex-col p-3 md:max-w-[50%] border-2 border-black rounded-md mx-auto">
        <div className="flex flex-row justify-between mx-auto md:mr-6 items-center">
          {/* <a
            className="text-md font-semibold underline"
            target="_blank"
            href={url}
          >
            {name}
          </a> */}
          <div className="font-bold my-2">{name}{"\n"}</div>
          <p className="text-4xl">{emoji}</p>
          
        </div>
        <p className="mx-auto my-2">{description}</p>
        {/* <Image
          className="mx-auto md:mr-auto rounded-md"
          src={image}
          alt="company logo"
          width={120}
          height={120}
          priority
        /> */}
      </div>
    </div>
  );
};

export default MovieCard;