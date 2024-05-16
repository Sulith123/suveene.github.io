import MovieCard from "./movie-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 lg:pb-12 lg:px-24 lg:pt-16 font-mono bg-white">
      <p className="font-semibold text-2xl mb-4">MY MOVIE RECCOMENDATIONS 📽️</p>
      <p className="md:w-[60%] my-3">
        I actually don&apos;t expect many people to visit this webpage. So if
        you are here, I do not want dissapoint you with some famous good
        movies. Here are some lesser known movies.
      </p>
      <MovieCard
        name="12 Angry Men (1957)"
        description="Amazing B&W movie. Felt like reading a book."
        emoji="👿"
      />
    </main>
  );
}
