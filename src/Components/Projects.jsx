import React from "react";
import Projectdemo from "./Projectdemo";
import bookImg from "../assets/book.jpg";
import shopImg from "../assets/Shopping.jpg";
import chatImg from "../assets/Chat.webp";
import projectImg from "../assets/project.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-black">Projects</h1>
      <p className="text-center py-8">
        Explore the full project to see detailed visuals, the development
        process, and the impact it made. If you have any questions or would
        like to discuss how I can contribute to your next project, feel free to
        get in touch!
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <a
          href="https://github.com/Akash19082001/book-store"
          className="project-container"
        >
          <Projectdemo img={bookImg} title="Bookstore Management" />
        </a>
        <a
          href="https://github.com/Akash19082001/e-commerce-project"
          className="project-container"
        >
          <Projectdemo img={shopImg} title="Ecommerce Project" />
        </a>
        <a
          href="https://github.com/Akash19082001/REACT-CHAT-APP"
          className="project-container"
        >
          <Projectdemo img={chatImg} title="React Chat App" />
        </a>
        <a
          href="https://github.com/Akash19082001/Spring-Boot-Advanced-Projects"
          className="project-container"
        >
          <Projectdemo img={projectImg} title="Explore my projects" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
