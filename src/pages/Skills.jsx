import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" />,
    tooltip: "HTML",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" />,
    tooltip: "CSS",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-500" />,
    tooltip: "Tailwind CSS",
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-500" />,
    tooltip: "React",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500" />,
    tooltip: "JavaScript",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    tooltip: "Node.js",
  },
];

const Skills = () => {
  return (
    <div className="h-full p-8 bg-white dark:bg-gray-800">
      <h1 className="text-3xl text-center font-bold mb-8 text-black dark:text-white">
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="rounded-full p-4 bg-gray-200 dark:bg-gray-700 shadow-md"
              data-tip={skill.tooltip}
            >
              <div className="text-6xl">{skill.icon}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <Tooltip place="top" type="dark" effect="solid" />
    </div>
  );
};

export default Skills;
