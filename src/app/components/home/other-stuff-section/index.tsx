import React from "react";
import StuffCard from "../../stuff-card";

const OtherStuffSection = () => {
  return (
    <>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl font-bold m-3  my-8 flex">
        <p id="other-stuff" className="mx-auto justify-center p-3 underline">
          OTHER STUFF
        </p>
      </div>
      <div className="grid lg:w-[70%] grid-cols-1 lg:grid-cols-2 lg:mx-auto lg:gap-5 gap-3 mb-10 items-center">
        <div className="lg:col-span-2 lg:col-start-1 flex justify-center">
          <StuffCard
            name="I like to take PHOTOS!"
            description="Follow my instagram page where I share some photos I take from my phone and my papershoot camera"
            image="/snapbysuv.jpeg"
            url="https://www.instagram.com/snapsbysuv?igsh=OGkwMjVwMWVvaHk="
          />
        </div>
      </div>
    </>
  );
};

export default OtherStuffSection;
