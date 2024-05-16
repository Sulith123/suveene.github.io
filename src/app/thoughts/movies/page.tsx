import MovieCard from "./movie-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 lg:pb-12 lg:px-24 lg:pt-16 font-mono bg-white">
      <p className="font-semibold text-2xl mb-4">MY MOVIE RECCOMENDATIONS 📽️</p>
      <p className="md:w-[60%] my-5">
        I actually don&apos;t expect many people to visit this webpage. So if
        you are here, I do not want dissapoint you with some famous good
        movies. Here are some lesser known movies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      <MovieCard
        name="12 Angry Men (1957)"
        description="Amazing B&W movie. Felt like reading a book."
      />
      <MovieCard
        name="Mystic River (2003)"
        description="Great performance by Sean Penn."
      />
      <MovieCard
        name="1917 (2019)"
        description="The movie is shot in a way that it looks like a single continous shot."
      />
      </div>
    </main>
  );
}
