import React from 'react';

const SkillCard = ({ title, icon, level, description }) => {
  return (
    <div className="border border-ps2-light-blue/30 bg-ps2-dark-blue/50 p-5 relative group hover:border-ps2-light-blue transition-colors">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-ps2-light-blue font-mono text-lg">{title}</h3>
        {icon && (
          <div className="w-6 h-6 text-ps2-light-blue">
            {icon}
          </div>
        )}
      </div>
      
      {/* Barra de nível */}
      <div className="h-1 bg-gray-700 mb-4">
        <div 
          className="h-full bg-ps2-light-blue"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      
      <p className="text-gray-300 text-sm">{description}</p>
      
      {/* Detalhes no estilo PS2 */}
      <div className="absolute top-0 right-0 border-l border-b border-ps2-light-blue/30 w-8 h-8 group-hover:border-ps2-light-blue transition-colors">
        <div className="absolute top-0 right-0 border-l border-b border-ps2-light-blue/10 w-4 h-4 group-hover:border-ps2-light-blue/30 transition-colors"></div>
      </div>
    </div>
  );
};

export default SkillCard;