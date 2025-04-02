import React from 'react';

const Section = ({ title, children, className = '', titleClassName = '' }) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="mb-12 text-center">
            <h2 className={`text-3xl font-mono text-ps2-light-blue relative inline-flex items-center ${titleClassName}`}>
              {title}
              <span className="text-sm ml-1 text-ps2-light-blue/70">²</span>
            </h2>
            <div className="mt-2 w-24 h-0.5 bg-ps2-light-blue/50 mx-auto"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;