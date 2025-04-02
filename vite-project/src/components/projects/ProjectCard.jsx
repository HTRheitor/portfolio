import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, githubUrl, liveUrl } = project;

  return (
    <div className="border border-ps2-light-blue/30 bg-ps2-dark-blue/50 overflow-hidden group hover:border-ps2-light-blue transition-colors">
      {/* Imagem do projeto */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image || 'https://via.placeholder.com/400x200?text=Project'} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/400x200?text=Project';
          }}
        />
        <div className="absolute inset-0 bg-ps2-blue/40 mix-blend-overlay"></div>
        <div className="absolute inset-0 grid grid-bg opacity-30"></div>
      </div>
      
      {/* Conteúdo */}
      <div className="p-5">
        <h3 className="text-ps2-light-blue font-mono text-xl mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs font-mono bg-ps2-blue/20 text-ps2-light-blue px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
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
      
      {/* Detalhes no estilo PS2 */}
      <div className="absolute top-0 right-0 border-l border-b border-ps2-light-blue/30 w-10 h-10 group-hover:border-ps2-light-blue transition-colors">
        <div className="absolute top-0 right-0 border-l border-b border-ps2-light-blue/10 w-5 h-5 group-hover:border-ps2-light-blue/30 transition-colors"></div>
      </div>
    </div>
  );
};

export default ProjectCard;