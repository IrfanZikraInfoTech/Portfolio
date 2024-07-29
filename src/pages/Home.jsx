import React from "react";
import { motion } from "framer-motion";
import PersonalImage from "../assets/Images/Personal.jpg"; // Adjust the path and extension as necessary

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full dark:bg-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={PersonalImage}
          alt="Personal Pic"
          className="rounded-full shadow-lg w-56"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-black dark:text-white mb-4">
          Hi, I'm <strong> Irfan Khan </strong>, a <strong>React Frontend Developer</strong>
        </p>
        <p className="text-lg text-black dark:text-white mb-4">
          I specialize in creating amazing web experiences.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
