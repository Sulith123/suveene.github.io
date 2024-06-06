import React from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "lucide-react";

type StuffCardprops = {
  name: string;
  description: string;
  image: string;
  url: string;
};

const SquareStuffCard = ({
  name,
  description,
  image,
  url,
}: StuffCardprops) => {
  return (
    <div>
      <div className="flex flex-col p-3 w-fit border-2 border-black rounded-md">
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
        <a href={url} target="_blank">
        <Image
          className="mx-auto md:mr-auto rounded-md max-h[240px] max-w[240px]"
          src={image}
          alt="company logo"
          width={240}
          height={240}
          priority
        />
        </a>
      </div>
    </div>
  );
};

export default SquareStuffCard;