import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects }) => {
  const [filter, setFilter] = useState('all');
  
  // Extrair tags únicas de todos os projetos
  const allTags = ['all', ...new Set(projects.flatMap(project => project.technologies))];
  
  // Filtrar projetos com base na tag selecionada
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-3 py-1 font-mono text-sm ${
              filter === tag 
                ? 'bg-ps2-light-blue text-white' 
                : 'bg-ps2-dark-blue/70 text-gray-300 hover:bg-ps2-blue/20 hover:text-ps2-light-blue'
            } transition-colors`}
          >
            {tag.toUpperCase()}
          </button>
        ))}
      </div>
      
      {/* Grid de projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      
      {/* Mensagem quando não há projetos */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-400 font-mono">Nenhum projeto encontrado com a tecnologia {filter}.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;