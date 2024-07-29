import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "BHR Code Pvt. Ltd.",
    role: "Internship & Job",
    duration: "July 2022 - April 2023",
    details: ["Completed a 6-month internship followed by 4 months of job."],
  },
  {
    company: "Zikra Infotech",
    role: "Junior Frontend Developer / Senior Frontend Developer",
    duration: "May 2023 - Present",
    details: [
      "Hired as a Junior Frontend Developer.",
      "Promoted to Senior Frontend Developer after 10 months.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="h-full p-8 dark:bg-gray-900">
      <h1 className="text-3xl text-center font-bold mb-8 text-black dark:text-white">
        Experience
      </h1>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">
              {experience.company}
            </h2>
            <h3 className="text-xl text-black dark:text-white">
              {experience.role}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              {experience.duration}
            </p>
            <ul className="list-disc list-inside">
              {experience.details.map((detail, idx) => (
                <li key={idx} className="text-black dark:text-white">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
