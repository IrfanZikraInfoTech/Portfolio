import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Element, Events, scrollSpy } from 'react-scroll';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <nav className="bg-gray-800 p-4 fixed w-full z-10 dark:bg-gray-900 -mt-16">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-xl font-bold">Irfan Khan's Portfolio</div>
            <div className="space-x-4 flex items-center">
              <Link to="home" spy={true} smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer" activeClass="text-white">Home</Link>
              <Link to="about" spy={true} smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer" activeClass="text-white">About</Link>
              <Link to="projects" spy={true} smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer" activeClass="text-white">Projects</Link>
              <Link to="skills" spy={true} smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer" activeClass="text-white">Skills</Link>
              <Link to="experience" spy={true} smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer" activeClass="text-white">Experience</Link>
              <Link to="contact" spy={true} smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer" activeClass="text-white">Contact</Link>
              <button onClick={() => setDarkMode(!darkMode)} className="ml-4 p-2 bg-gray-700 text-white rounded">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        </nav>
        <div className="container mx-auto mt-16">
          <Element name="home" className="h-screen">
            <Home />
          </Element>
          <Element name="about" className="h-screen">
            <About />
          </Element>
          <Element name="projects" className="h-screen">
            <Projects />
          </Element>
          <Element name="skills" className="h-screen">
            <Skills />
          </Element>
          <Element name="experience" className="h-screen">
            <Experience />
          </Element>
          <Element name="contact" className="h-screen">
            <Contact />
          </Element>
        </div>
      </div>
    </Router>
  );
};

export default App;
