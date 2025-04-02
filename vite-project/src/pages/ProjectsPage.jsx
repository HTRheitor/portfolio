import React from 'react';
import Section from '../components/ui/Section';
import ProjectGrid from '../components/projects/ProjectGrid';

const ProjectsPage = () => {
  // Dados dos projetos
  const projects = [
    {
      title: "Portfolio PS2",
      description: "Portfolio pessoal com design inspirado no PlayStation 2, utilizando React e TailwindCSS.",
      image: "/assets/images/projects/project1.jpg",
      technologies: ["React", "TailwindCSS", "Vite"],
      githubUrl: "https://github.com/HTRheitor/portfolio",
      liveUrl: "#"
    },
    {
      title: "Sylvanian Families Store",
      description: "E-commerce para a venda de produtos da linha Sylvanian Families com recursos de carrinho e pagamento.",
      image: "/assets/images/projects/project2.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/HTRheitor/sylvanian-store",
      liveUrl: "#"
    },
    {
      title: "TicTacToe",
      description: "Jogo da velha online para jogar contra amigos ou contra a máquina.",
      image: "/assets/images/projects/project3.jpg",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/HTRheitor/tictactoe",
      liveUrl: "#"
    },
    {
      title: "Auto Financial Reports",
      description: "Ferramenta de automação para processamento e análise de relatórios financeiros.",
      image: "/assets/images/projects/project1.jpg",
      technologies: ["Python", "Pandas", "Automation"],
      githubUrl: "https://github.com/HTRheitor/auto_financial_reports",
      liveUrl: null
    },
    {
      title: "API Integration Tool",
      description: "Ferramenta para facilitar a integração entre diferentes sistemas via APIs REST.",
      image: "/assets/images/projects/project2.jpg",
      technologies: ["Node.js", "Express", "API"],
      githubUrl: "https://github.com/HTRheitor/api-integration",
      liveUrl: null
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard para visualização de dados de negócios com gráficos interativos.",
      image: "/assets/images/projects/project3.jpg",
      technologies: ["React", "Chart.js", "Firebase"],
      githubUrl: "https://github.com/HTRheitor/dashboard-analytics",
      liveUrl: "#"
    }
  ];

  return (
    <div className="pt-20">
      <Section title="Projetos">
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-300 text-center">
            Uma seleção dos meus projetos recentes incluindo trabalhos pessoais, open-source e soluções de automação.
            Use os filtros abaixo para navegar pelos diferentes tipos de projetos.
          </p>
        </div>
        
        <ProjectGrid projects={projects} />
      </Section>
      
      <Section className="bg-ps2-dark-blue/70" title="Procurando Colaboração?">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 mb-6">
            Estou sempre aberto a novos projetos e colaborações. Se você tem uma ideia ou projeto em mente, 
            ou precisa de ajuda com desenvolvimento fullstack, automação ou integrações, entre em contato!
          </p>
          
          <a 
            href="mailto:seu-email@exemplo.com" 
            className="bg-ps2-light-blue hover:bg-ps2-blue text-white font-mono px-6 py-2 inline-block transition-colors"
          >
            VAMOS CONVERSAR
          </a>
        </div>
      </Section>
    </div>
  );
};

export default ProjectsPage;