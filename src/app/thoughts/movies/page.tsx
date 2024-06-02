const Movies = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 lg:pb-12 lg:px-24 lg:pt-16 font-mono bg-white">
      <p className="font-semibold text-2xl mb-4"><span className="text-3xl mr-2">🍿</span>MY MOVIE RECCOMENDATIONS</p>
      <div className="md:w-[60%]">
        <p className="my-5">
          I don&apos;t expect many visitors here, but for those who do, I
          don&apos;t want to disappoint with the usual famous movies. Instead,
          here are some <span className="italic font-semibold">lesser-known gems</span> in no particular order.
        </p>

        <div>
          <span className="font-bold mb-1">12 Angry Men </span>(1957) - Amazing
          B&W movie. Felt like reading a book.
        </div>
        <div>
          <span className="font-bold mb-1">Mystic River </span>(2003) - Great
          performance by Sean Penn.
        </div>
        <div>
          <span className="font-bold mb-1">1917 </span>(2019) - The war movie is
          filmed to appear as if it was done in a single continuous shot.
        </div>
        <div>
          <span className="font-bold mb-1">Bangalore Days </span>(2014) -
          Arguably the best Malayalam movie.
        </div>
        <div>
          <span className="font-bold mb-1">Ratsasan </span>(2018) - Super well
          scripted. One of the best psychological thrillers I&apos;ve ever
          watched.
        </div>
        <div>
          <span className="font-bold mb-1">The Breakfast Club </span>(1985) - Great coming-of-age movie from the 80s.
          Got to know about this classic from the movie Pitch Perfect.
        </div>
      </div>
      <p className=" my-2 mt-6 mx-auto">- 21st May 2024 -</p>
    </main>
  );
};

export default Movies;
