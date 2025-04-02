import React from 'react';

const ExperienceCard = ({ experience, isLast }) => {
  const { title, company, period, description, technologies } = experience;

  return (
    <div className="relative pl-16 pb-10">
      {/* Círculo da timeline */}
      <div className="absolute left-0 top-0 w-3 h-3 bg-ps2-light-blue rounded-full z-10"></div>
      
      {/* Linha da timeline */}
      {!isLast && <div className="absolute left-1.5 top-3 bottom-0 w-px bg-ps2-light-blue/30 z-0"></div>}
      
      {/* Conteúdo */}
      <div className="border border-ps2-light-blue/30 bg-ps2-dark-blue/50 p-5 hover:border-ps2-light-blue transition-colors">
        <div className="text-gray-400 font-mono text-sm mb-1">{period}</div>
        <h3 className="text-ps2-light-blue font-mono text-xl mb-1">{company}</h3>
        <div className="text-white mb-3">{title}</div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs font-mono bg-ps2-blue/20 text-ps2-light-blue px-2 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        {/* Detalhes no estilo PS2 */}
        <div className="absolute top-0 right-0 border-l border-b border-ps2-light-blue/30 w-8 h-8"></div>
      </div>
    </div>
  );
};

export default ExperienceCard;