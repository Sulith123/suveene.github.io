import React from "react";
import StuffCard from "../../stuff-card";
import Image from "next/image";

const OtherStuffSection = () => {
  return (
    <>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl font-bold m-3  my-8 flex">
        <p id="other-stuff" className="mx-auto justify-center p-3 underline">
          OTHER STUFF
        </p>
      </div>
      <div className="grid lg:w-[70%] grid-cols-1 lg:grid-cols-3 mx-auto gap-3 mb-10 items-center">
        <div className="flex flex-col my-auto justify-center gap-3">
          <div>
            <div className="flex flex-col p-3 w-fit border-2 border-black rounded-md">
              <div className="mx-auto items-center">
                <div className="font-bold my-2 mx-auto text-center">
                  Anything outdoors.{"\n"}
                </div>
                <p className="mx-auto my-2 text-center">
                  Here&apos;s me during a hike in Vietnam.
                </p>
              </div>
              <Image
                className="mx-auto md:mr-auto rounded-md max-h[240px] max-w[240px]"
                src="/hike.jpeg"
                alt="company logo"
                width={240}
                height={240}
                priority
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col p-3 w-fit border-2 border-black rounded-md">
              <div className="mx-auto items-center">
                <div className="font-bold my-2 mx-auto text-center">
                  Long walks.{"\n"}
                </div>
                <p className="mx-auto my-2 text-center">
                  Recently,{" "}
                  <a
                    href="https://suveene.github.io/thoughts/the-walk"
                    target="_blank"
                    className="underline"
                  >
                    I walked across Singapore!
                  </a>
                </p>
              </div>

              <Image
                className="mx-auto md:mr-auto rounded-md max-h[240px] max-w[240px]"
                src="/walk.JPG"
                alt="company logo"
                width={240}
                height={240}
                priority
              />
            </div>
          </div>
        </div>
        <div className="md:ml-auto flex flex-col my-auto justify-center gap-3">
          <div className="flex flex-col p-3 w-fit border-2 border-black rounded-md mx-auto">
            <div className="mx-auto items-center">
              <div className="font-bold  mx-auto text-center">
                Movies.{"\n"}
              </div>
              <p className="text-center my-2">
                Read{" "}
                <a
                  href="https://suveene.github.io/thoughts/movies"
                  target="_blank"
                  className="underline"
                >
                  my movie recommendations.
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col p-3 w-72 border-2 border-black rounded-md mx-auto">
            <div className="mx-auto items-center">
              <div className="font-bold my-2 mx-auto text-center">
                I like to take PHOTOS!{"\n"}
              </div>
              <p className="mx-auto my-2 text-center">
                Follow my{" "}
                <a
                  href="https://www.instagram.com/snapsbysuv?igsh=OGkwMjVwMWVvaHk="
                  target="_blank"
                  className="underline"
                >
                  instagram page
                </a>{" "}
                where I share some photos I take from my phone and my papershoot
                camera.
              </p>
            </div>
            <Image
              className="mx-auto md:mr-auto rounded-md"
              src="/snapbysuv.jpeg"
              alt="company logo"
              width={280}
              height={280}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col my-auto justify-center gap-3">
          <div>
            <div className="flex flex-col p-3 w-fit border-2 border-black rounded-md mx-auto">
              <div className="mx-auto items-center">
                <div className="font-bold my-2 mx-auto text-center">
                  Ukelele.{"\n"}
                </div>
                <p className="mx-auto my-2 text-center">
                  I am trying to learn these days.
                </p>
              </div>
              <a
                href="https://suveene.github.io/thoughts/the-walk"
                target="_blank"
              >
                <Image
                  className="mx-auto md:mr-auto rounded-md max-h[240px] max-w[240px]"
                  src="/Ukulele.jpg"
                  alt="company logo"
                  width={240}
                  height={240}
                  priority
                />
              </a>
            </div>
          </div>
          <div>
            <div className="flex flex-col p-3 w-fit border-2 border-black rounded-md mx-auto">
              <div className="mx-auto items-center">
                <div className="font-bold my-2 mx-auto text-center">
                  Sports and Board Games.{"\n"}
                </div>
                <p className="mx-auto my-2 text-center">
                  I like anything competitive.
                </p>
              </div>
              <Image
                className="mx-auto md:mr-auto rounded-md max-h[240px] max-w[240px]"
                src="/badminton.JPG"
                alt="company logo"
                width={160}
                height={160}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherStuffSection;
