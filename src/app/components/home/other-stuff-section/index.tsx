import React from "react";
import StuffCard from "../../stuff-card";
import SquareStuffCard from "../../square-stuff-card";

const OtherStuffSection = () => {
  return (
    <>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl font-bold m-3  my-8 flex">
        <p id="other-stuff" className="mx-auto justify-center p-3 underline">
          OTHER STUFF
        </p>
      </div>
      <div className="grid lg:w-[70%] grid-cols-1 lg:grid-cols-2 mx-auto gap-3 mb-10 items-center">
          <div  className="md:ml-auto justify-center">
          <StuffCard
            name="I like to take PHOTOS!"
            description="Follow my instagram page where I share some photos I take from my phone and my papershoot camera"
            image="/snapbysuv.jpeg"
            url="https://www.instagram.com/snapsbysuv?igsh=OGkwMjVwMWVvaHk="
          />
          </div>
          <div className="flex flex-col my-auto justify-center gap-3">
          <SquareStuffCard
            name="I like to hike and outdoors!"
            description="Here's me during a hike in Vietnam."
            image="/hike.jpeg"
            url=""
          />
          <SquareStuffCard
            name="I love to take long walks."
            description="Recently, I walked across Singapore!"
            image="/walk.JPG"
            url="https://suveene.github.io/thoughts/the-walk"
          />
          </div>
      </div>
    </>
  );
};

export default OtherStuffSection;
