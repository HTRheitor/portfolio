import { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showSquares, setShowSquares] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Mostrar quadrados após um breve atraso
    setTimeout(() => {
      setShowSquares(true);
    }, 1000);

    // Mostrar logo após outro atraso
    setTimeout(() => {
      setShowLogo(true);
    }, 2000);

    // Atualizar a barra de progresso
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          
          // Iniciar desaparecimento após finalizar carregamento
          setTimeout(() => {
            setFadeOut(true);
          }, 800);
          
          // Completar carregamento
          setTimeout(() => {
            if (onLoadingComplete) onLoadingComplete();
          }, 1500);
          
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-50 transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Grade de quadrados inspirada no PS2 */}
        {showSquares && (
          <div className="grid grid-cols-4 gap-1 mb-8">
            {Array(16).fill(0).map((_, index) => (
              <div 
                key={index} 
                className="w-4 h-4 bg-ps2-light-blue animate-grid-pulse"
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0.6 + (index % 5) * 0.1
                }}
              ></div>
            ))}
          </div>
        )}

        {/* Logo e texto */}
        {showLogo && (
          <div className="mb-8 text-center">
            <div className="text-ps2-light-blue text-4xl font-mono mb-2">(HTRheitor)<sup>2</sup></div>
            <div className="text-gray-400 text-sm font-mono">DEVELOPER.SYSTEM</div>
          </div>
        )}

        {/* Barra de carregamento */}
        <div className="w-64 h-1 bg-gray-800 mb-2">
          <div 
            className="h-full bg-ps2-light-blue transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-gray-400 text-xs font-mono">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;