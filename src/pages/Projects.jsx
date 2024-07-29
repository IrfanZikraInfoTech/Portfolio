import React from "react";

const Projects = () => {
  return (
    <div className="h-full p-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl text-center font-bold mb-4 text-black dark:text-white">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Add your projects here */}
        <div className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <h2 className="text-xl font-bold mb-2 text-black dark:text-white">
            Project 1
          </h2>
          <p className="text-black dark:text-white">
            Description of the project.
          </p>
          <a
            href="https://github.com"
            className="text-blue-500 dark:text-blue-300"
          >
            View on GitHub
          </a>
        </div>
        {/* Repeat for other projects */}
      </div>
    </div>
  );
};

export default Projects;
