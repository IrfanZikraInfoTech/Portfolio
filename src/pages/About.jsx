import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="h-full p-8 bg-white dark:bg-gray-800 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl text-center font-bold mb-4 text-black dark:text-white">
          About Me
        </h1>
        <p className="text-lg text-black dark:text-white mb-4">
          Hi, I'm a React Frontend Developer based in Faridabad, Haryana. I have
          completed my B.Tech in Computer Science and Engineering. I enjoy
          learning new things and expanding my knowledge.
        </p>
        <p className="text-lg text-black dark:text-white mb-4">
          I completed my 12th grade from Vidya Niketan with CBSE, specializing
          in Non-Medical with Computer Science. I also completed my 10th grade
          from the same school.
        </p>
        <p className="text-lg text-black dark:text-white">
          I have a passion for technology and enjoy working on innovative
          projects that challenge my skills and knowledge.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
