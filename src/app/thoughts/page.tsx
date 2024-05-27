"use client"
import { useRouter } from "next/navigation";


export default function Thoughts() {
    const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-start p-6 lg:pb-12 lg:px-24 lg:pt-16 font-mono bg-white">
      <p className="mx-auto text-center text-lg mb-5">Some things I wanted to write about</p>
      <div className="md:w-[60%] mx-auto">
      <p  className="underline cursor-pointer" onClick={()=> {router.push("/thoughts/movies")}}>🍿 My Movie Recommedations</p>
      <p  className="underline cursor-pointer" onClick={()=> {router.push("/thoughts/life")}}>🌍 My life in bullet points</p>
      <p  className="underline cursor-pointer" onClick={()=> {router.push("/thoughts/vietnam")}}>💥 My 3 months in Vietnam</p>
      </div>
    </main>
  );
}
