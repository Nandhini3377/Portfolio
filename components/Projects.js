import React from 'react';

const projects = [
  {
    title: 'FaceAuth',
    description: 'A Flutter App with Google Teachable Machine to train face recognition models, enabling student authentication within the app for daily attendance tracking.',
    link: '#',
    technologies: ['Flutter', 'Google Teachable Machine', 'Provider']
  },
  {
    title: 'Nutraclan',
    description: 'An Restaurant booking app with food nutrition check and fitness integration',
    link: '#',
    technologies: ['Firebase', 'Flutter', 'Google Fit']
  },
  {
    title: 'Cabzzo',
    description: 'An Cab booking Flutter application',
    link: '#',
    technologies: ['Flutter', 'Dart-Frog','Mongo-DB','AWS']
  },
  {
    title: 'Zooba Restaurant Admin App',
    description: 'A Restaurant Admin app to manage orders',
    link: '#',
    technologies: ['Flutter', 'Dart-Frog','Mongo-DB','AWS']
  },{
    title: 'SmartSecure-Web Security Scanner with AI Assistance',
    description: 'An web security scanner for AI-driven identification and remediation of security bugs',
    link: '#',
    technologies: ['Flutter', 'Flask','Google-Gemini']
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-white transition-colors group-hover:text-blue-400">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a 
          href={project.link} 
          className="group/link inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
        >
          Learn More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2 transition-transform group-hover/link:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </a>
      </div>
      
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

const Projects = () => {
  return (
    <div 
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16" 
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;