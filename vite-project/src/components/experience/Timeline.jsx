import React from 'react';
import ExperienceCard from './ExperienceCard';
import TimelineConnector from './TimelineConnector';

const Timeline = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Linha vertical central */}
      <TimelineConnector />
      
      {/* Cards de experiência */}
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={index} 
            experience={experience} 
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;