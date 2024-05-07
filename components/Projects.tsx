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
            backgroundImg={"/assets/projects/bookstore.png"}
            projectUrl="/Bookstore"
            tech="React / TypeScript / Bootstrap"
          />
          <ProjectItem
            title="passaport"
            backgroundImg={"/assets/projects/passaport.png"}
            projectUrl="/Passaport"
            tech="React"
          />
          <ProjectItem
            title="pokedex"
            backgroundImg={"/assets/projects/pokedex.png"}
            projectUrl="/Pokedex"
            tech="React"
          />
          <ProjectItem
            title="pokemons"
            backgroundImg={"/assets/projects/pokemons.png"}
            projectUrl="/Pokemons"
            tech="React / TypeScript"
          />
          <ProjectItem
            title="ticketless"
            backgroundImg={"/assets/projects/ticketless.png"}
            projectUrl="/Ticketless"
            tech="React / TypeScript"
          />
          <ProjectItem
            title="todos"
            backgroundImg={"/assets/projects/todos.png"}
            projectUrl="/Todos"
            tech="React / TypeScript"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
