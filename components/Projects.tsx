import React from "react";
import ProjectItem from "./ProjectItem";
// import bookstoreImg from "/public/assets/projects/bookstore.png";
// import passaportImg from "/public/assets/projects/passaport.png";
// import pokedexImg from "/public/assets/projects/pokedex.png";
// import pokemonsImg from "/public/assets/projects/pokemons.png";
// import ticketlessImg from "/public/assets/projects/ticketless.png";
// import todosImg from "/public/assets/projects/todos.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have Built</h2>
        <div className=" grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="bookstore"
            backgroundImg={"https://imgur.com/tI9vw9i"}
            projectUrl="/Bookstore"
            tech="React / TypeScript / Bootstrap"
          />
          <ProjectItem
            title="passaport"
            backgroundImg={"https://imgur.com/zcsGMXb"}
            projectUrl="/Passaport"
            tech="React"
          />
          <ProjectItem
            title="pokedex"
            backgroundImg={"https://imgur.com/1zWMsCr"}
            projectUrl="/Pokedex"
            tech="React"
          />
          <ProjectItem
            title="pokemons"
            backgroundImg={"https://imgur.com/0CyQK5c"}
            projectUrl="/Pokemons"
            tech="React / TypeScript"
          />
          <ProjectItem
            title="ticketless"
            backgroundImg={"https://imgur.com/kAWFbee"}
            projectUrl="/Ticketless"
            tech="React / TypeScript"
          />
          <ProjectItem
            title="todos"
            backgroundImg={"https://imgur.com/KNbA7eM"}
            projectUrl="/Todos"
            tech="React / TypeScript"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
