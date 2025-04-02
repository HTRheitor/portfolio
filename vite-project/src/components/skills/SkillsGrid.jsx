import React from 'react';
import SkillCard from './SkillCard';

const SkillsGrid = ({ skills, title }) => {
  return (
    <div className="mb-12">
      {title && (
        <h3 className="text-ps2-light-blue font-mono text-xl mb-4 flex items-center">
          <span className="w-2 h-2 bg-ps2-light-blue mr-2"></span>
          {title}
        </h3>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard 
            key={index}
            title={skill.title}
            icon={skill.icon}
            level={skill.level}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;