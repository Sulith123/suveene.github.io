import React from "react";

const FeaturesSection = () => {
  return (
    <>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl font-bold m-3  my-8 flex">
        <p id="other-stuff" className="mx-auto justify-center p-3 underline">
          FEATURES
        </p>
      </div>
      <div className="flex md:w-[60%] flex-col mx-auto gap-3 mb-10 items-start">
        <p>
            2023 Nov -{" "}
          <a
            href="https://www.tandfonline.com/doi/abs/10.1080/10447318.2023.2286090"
            target="_blank"
            className="underline"
          >
            Can AI Models Summarize Your Diary Entries? Investigating Utility of
            Abstractive Summarization for Autobiographical Text
          </a>{" "}
          [Publication]
        </p>
        <p>
            2022 Jul -{" "}
          <a
            href="https://ceylontoday.lk/2022/07/09/exploring-the-future/"
            target="_blank"
            className="underline"
          >
            Exploring the future
          </a>{" "}
          [News paper article]
        </p>
        <p>
            2021 Aug -{" "}
          <a
            href="https://royalcollege.lk/featured/news/2021/05/2020-al-results/"
            target="_blank"
            className="underline"
          >
            Recognizing Reid Avenue’s Finest
          </a>{" "}
        </p>
        <p>
            2017 Jan -{" "}
          <a
            href="https://fragmenteyes.blogspot.com/2017/01/pentathlon-five-rounds-one-finale.html"
            target="_blank"
            className="underline"
          >
            &apos;Pentathlon&apos;: Five rounds, one finale
          </a>{" "}
        </p>
        <p>
            2017 Jan -{" "}
          <a
            href="https://royalcollege.lk/2017/01/sirasa-pentathalon-quiz-competition-2016/"
            target="_blank"
            className="underline"
          >
            SIRASA Pentathlon Quiz Competition 2016
          </a>{" "}
        </p>
      </div>
    </>
  );
};

export default FeaturesSection;
