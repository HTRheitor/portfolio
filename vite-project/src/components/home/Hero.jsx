import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden flex items-center">
      {/* Grid de fundo estilo PS2 */}
      <div className="absolute inset-0 grid grid-bg opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-6xl font-mono mb-2">
              <span className="text-white">Hello World.</span>
            </h1>
            
            <div className="flex items-baseline mb-4">
              <h2 className="text-3xl md:text-4xl font-mono text-ps2-light-blue mr-2">I'm Heitor</h2>
              <div className="text-ps2-light-blue/70 text-xl font-mono">
                (Fullstack Developer)<sup>2</sup>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-xl mb-8">
              Fullstack developer focado em soluções escaláveis e automação de processos, 
              combinando 2 anos de experiência em projetos freelance. Especializado em 
              Python, JavaScript, Node.js, React e AWS.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-ps2-dark-blue px-4 py-2 border border-ps2-light-blue flex items-center">
                <span className="text-ps2-light-blue font-mono">Python</span>
                <span className="text-ps2-light-blue ml-2">²</span>
              </div>
              
              <div className="bg-ps2-dark-blue px-4 py-2 border border-ps2-light-blue flex items-center">
                <span className="text-ps2-light-blue font-mono">JavaScript</span>
                <span className="text-ps2-light-blue ml-2">²</span>
              </div>
              
              <div className="bg-ps2-dark-blue px-4 py-2 border border-ps2-light-blue flex items-center">
                <span className="text-ps2-light-blue font-mono">React</span>
                <span className="text-ps2-light-blue ml-2">²</span>
              </div>
            </div>
            
            <div className="flex space-x-5">
              <Link 
                to="/projects" 
                className="bg-ps2-light-blue hover:bg-ps2-blue text-white font-mono px-6 py-2 transition-colors"
              >
                VER PROJETOS
              </Link>
              <Link 
                to="/contact" 
                className="border border-ps2-light-blue text-ps2-light-blue hover:text-white hover:bg-ps2-blue font-mono px-6 py-2 transition-colors"
              >
                CONTATO
              </Link>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center">
            <div className="w-64 h-64 relative">
              {/* Foto de perfil com estilo PS2 */}
              <div className="w-full h-full border-4 border-ps2-light-blue overflow-hidden relative">
                <img 
                  src="/assets/images/profile.jpg" 
                  alt="Foto de perfil de Heitor" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/250x250?text=HTRheitor';
                  }}
                />
                
                {/* Overlay grid */}
                <div className="absolute inset-0 bg-ps2-blue/30 mix-blend-overlay"></div>
                <div className="absolute inset-0 grid grid-bg opacity-30"></div>
              </div>
              
              {/* Símbolos do PS2 */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-ps2-dark-blue flex items-center justify-center border border-ps2-light-blue">
                <span className="text-ps2-light-blue">△</span>
              </div>
              <div className="absolute bottom-10 -right-4 w-8 h-8 bg-ps2-dark-blue flex items-center justify-center border border-ps2-light-blue">
                <span className="text-ps2-light-blue">○</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-ps2-dark-blue flex items-center justify-center border border-ps2-light-blue">
                <span className="text-ps2-light-blue">×</span>
              </div>
              <div className="absolute -bottom-4 right-10 w-8 h-8 bg-ps2-dark-blue flex items-center justify-center border border-ps2-light-blue">
                <span className="text-ps2-light-blue">□</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;