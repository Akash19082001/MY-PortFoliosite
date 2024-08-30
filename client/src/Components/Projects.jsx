import React from "react";
import Projectdemo from "./Projectdemo";
import bookImg from "../assets/book.jpg";
import shopImg from "../assets/Shopping.jpg";
import chatImg from "../assets/Chat.jpg";
import projectImg from "../assets/project.jpg";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      id="projects"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl font-bold text-center text-black">Projects</h1>
      <p className="text-center py-8">
        Explore the full project to see detailed visuals, the development
        process, and the impact it made. If you have any questions or would
        like to discuss how I can contribute to your next project, feel free to
        get in touch!
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <a
          href="https://lofer-app-todo.vercel.app"
          className="project-container"
        >
          <Projectdemo img={bookImg} title="LoferNote" />
        </a>
        <a
          href="https://lofer-e-commerce.vercel.app"
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
    </motion.div>
  );
};

export default Projects;
