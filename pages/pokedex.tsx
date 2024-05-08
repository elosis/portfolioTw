import Image from "next/image";
import React from "react";
// import pokedexImg from "/public/assets/projects/pokedex.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const pokedex = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={"/assets/projects/pokedex.jpg"}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Pokedex</h2>
          <h3>React JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-4">
            Developed a Pokemon application using JavaScript and React to
            showcase dynamic Pokemon with PokeAPI. Conducted a refactoring
            process to integrate TypeScript for improved code quality and
            maintainability. Utilized React Hooks, including `useState,
            useEffect, useContext` for global state management. Utilized Axios
            for fetching Pokemon data. While refactoring, retained key features
            such as multi-view screens for displaying Pokemon names and images,
            detailed statistics, types, and evolutionary trees.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <Link href="https://pokedex-dv8vbyrvw-elosis.vercel.app/">
              Demo
            </Link>
          </button>
          <button className="px-8 py-2 mt-4">
            <Link href="https://github.com/elosis/pokedex">Code</Link>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center front-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default pokedex;
