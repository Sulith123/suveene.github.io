import Image from "next/image";

const Walk = () => {
  return (
    <main className="flex min-h-screen flex-col md:w-[66%] mx-auto p-6 lg:pb-12 lg:px-24 lg:pt-16 font-mono bg-white">
      <p className="font-semibold text-2xl mb-4 mx-auto">
        <span className="text-3xl mr-2 ">🚶</span>HOW WE WALKED ACROSS
        SINGAPORE?
      </p>
      <p className="mb-4 text-lg font-bold">TL;DR</p>
      <div className=" flex flex-col gap-2 md:flex-row">
        <div className="flex flex-col md:w-[60%]">
          <p className="mb-4">
            We embarked on an adventurous walk across Singapore, starting from
            the west and ending in the east. Eighteen of us began the journey,
            and eight of us made it to the end. It took us 16 sleepless hours.
          </p>
          <p>
            <span className="font-semibold">Start:</span> 7.30 PM May 31st 2024
            @Tuas Link MRT
          </p>
          <p>
            <span className="font-semibold">End:</span> 11.30 AM June 1st 2024
            @Changi City Point
          </p>
          <p>
            <span className="font-semibold">Distance:</span> 50km+
          </p>
          <p>
            <span className="font-semibold">Step count:</span> 67,000+
          </p>
          <p>
            <span className="font-semibold">Route:</span> Tuas Link MRT ={">"} -
            Spring Leaf Prata, West Coast (Dinner) ={">"}Commenwealth ={">"}{" "}
            Clarke Quay ={">"} East Coast Park ={">"} Changi City Point
          </p>
          <p className="mt-4">
            <span className="font-semibold ">What we gained:</span> Sore legs,
            blistered feet, and{" "}
            <span className="font-bold ">
              THE ULTIMATE BRAGGING RIGHTS FOR WALKING ACROSS AN ENTIRE COUNTRY.
            </span>
          </p>
        </div>
        <div>
          <Image
            className="mx-auto md:mr-auto rounded-md"
            src="/thoughts/the-walk/map.jpg"
            alt="company logo"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
      <div>
        <p className="my-4 text-lg font-bold">Why did we even do this?</p>
        <p className="my-1">
          About two months ago, a few of us stumbled upon an Instagram reel
          where a group of friends walked 64km across the country in 15 hours.
          Inspired, we decided to give it a try. 
        </p>
        <p className="my-1">
        We pitched the idea to others, our group grew to
          18 adventurous souls ready to embark on this not-so-common-Friday-night-activity.
        </p>
        
        <p className="my-1">
          But why did we do this? We still don’t have a clear answer. Maybe, like
          Forrest Gump felt like running, we just felt like walking a long
          distance.
        </p>
        <Image
            className="mx-auto md:mr-auto rounded-md my-4"
            src="/thoughts/the-walk/why.gif"
            alt="company logo"
            width={320}
            height={320}
            priority
          />
      </div>
    </main>
  );
};

export default Walk;
