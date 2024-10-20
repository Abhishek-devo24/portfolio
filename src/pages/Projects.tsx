import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js',
    image: 'https://source.unsplash.com/random/800x600/?ecommerce',
    category: 'Full Stack',
    link: 'https://github.com/yourusername/ecommerce-platform',
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'A React-based weather application using OpenWeatherMap API',
    image: 'https://source.unsplash.com/random/800x600/?weather',
    category: 'Frontend',
    link: 'https://github.com/yourusername/weather-app',
  },
  {
    id: 3,
    title: 'Task Management API',
    description: 'RESTful API for task management built with Express and MongoDB',
    image: 'https://source.unsplash.com/random/800x600/?task',
    category: 'Backend',
    link: 'https://github.com/yourusername/task-management-api',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with React and Tailwind CSS',
    image: 'https://source.unsplash.com/random/800x600/?portfolio',
    category: 'Frontend',
    link: 'https://github.com/yourusername/portfolio-website',
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h1>
        <div className="flex justify-center mb-8">
          {['All', 'Frontend', 'Backend', 'Full Stack'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 hover:bg-blue-100'
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;