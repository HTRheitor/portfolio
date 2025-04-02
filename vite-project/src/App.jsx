import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/layout/LoadingScreen';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simulação de tempo de carregamento da página
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <div className="App font-sans bg-ps2-dark-blue text-white min-h-screen relative">
        {/* Efeito scanline */}
        <div className="scanline"></div>
        
        {loading ? (
          <LoadingScreen onLoadingComplete={() => setLoading(false)} />
        ) : (
          <>
            {/* Cursor personalizado */}
            <div 
              className="fixed w-4 h-4 rounded-full border border-ps2-light-blue pointer-events-none z-50 mix-blend-screen"
              style={{ 
                transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
                opacity: 0.7
              }}
            />
            
            {/* Grid de fundo */}
            <div className="fixed inset-0 bg-ps2-grid bg-grid-32 opacity-10 pointer-events-none" />
            
            <Navbar />
            
            <main className="pt-16 pb-12">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;