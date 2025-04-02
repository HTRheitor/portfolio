import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProject = ({ project }) => {
  const { title, description, image, technologies, githubUrl, liveUrl } = project;

  return (
    <div className="relative border border-ps2-light-blue/50 bg-ps2-dark-blue bg-opacity-50 overflow-hidden group">
      <div className="p-6">
        <h3 className="text-ps2-light-blue font-mono text-xl mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs font-mono bg-ps2-blue/30 text-ps2-light-blue px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3 mt-4">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-ps2-light-blue text-white text-sm font-mono px-4 py-1 hover:bg-ps2-blue transition-colors"
            >
              VER SITE
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-ps2-light-blue/50 text-ps2-light-blue text-sm font-mono px-4 py-1 hover:border-ps2-light-blue transition-colors"
            >
              GITHUB
            </a>
          )}
        </div>
      </div>
      
      <div className="absolute top-0 right-0 border-l border-b border-ps2-light-blue/50 w-12 h-12 flex items-center justify-center">
        <span className="text-ps2-light-blue font-mono text-xs">PS2</span>
      </div>
    </div>
  );
};

export default FeaturedProject;