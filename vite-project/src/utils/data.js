// Dados para o portfólio

// Informações pessoais
export const personalInfo = {
    name: "Heitor",
    title: "Fullstack Developer & Automation Specialist",
    email: "contato@htrheitor.com",
    location: "Fortaleza, Ceará - Brasil",
    about: `Fullstack developer focado em soluções escaláveis e automação de processos, 
           combinando 2 anos de experiência em projetos freelance. Especializado em 
           Python, JavaScript, Node.js, React e AWS.`,
    social: {
      github: "https://github.com/HTRheitor",
      linkedin: "https://linkedin.com/in/HTRheitor",
      twitter: "https://twitter.com/HTRheitor",
      instagram: "https://instagram.com/HTRheitor"
    }
  };
  
  // Habilidades
  export const skills = {
    frontend: [
      {
        title: "HTML & CSS",
        level: 90,
        description: "Desenvolvimento de interfaces responsivas e semânticas com foco em acessibilidade e boas práticas."
      },
      {
        title: "JavaScript",
        level: 85,
        description: "Programação orientada a objetos, ES6+, manipulação DOM, AJAX e consumo de APIs."
      },
      {
        title: "React",
        level: 80,
        description: "Desenvolvimento de aplicações SPA com React, Hooks, Context API e integração com APIs REST."
      },
      {
        title: "Tailwind CSS",
        level: 75,
        description: "Utilização do framework utilitário para criação de interfaces modernas e responsivas."
      },
      {
        title: "Next.js",
        level: 70,
        description: "Desenvolvimento de aplicações React com SSR, SSG e recursos avançados."
      }
    ],
    backend: [
      {
        title: "Python",
        level: 85,
        description: "Desenvolvimento back-end, automações, análise de dados e script utilitários."
      },
      {
        title: "Node.js",
        level: 80,
        description: "APIs RESTful, Express, manipulação de arquivos e integração com bancos de dados."
      },
      {
        title: "SQL",
        level: 75,
        description: "Consultas complexas, modelagem de dados e otimização de performance em bancos relacionais."
      },
      {
        title: "NoSQL",
        level: 70,
        description: "MongoDB, Firebase e outros bancos não relacionais para aplicações escaláveis."
      },
      {
        title: "APIs",
        level: 85,
        description: "Design, documentação e implementação de APIs RESTful seguindo boas práticas."
      }
    ],
    devops: [
      {
        title: "Git & GitHub",
        level: 85,
        description: "Fluxo de trabalho Git, branchs, merges, resolução de conflitos e integração com GitHub."
      },
      {
        title: "AWS",
        level: 65,
        description: "EC2, S3, Lambda e outros serviços para hospedagem e implantação de aplicações."
      },
      {
        title: "Docker",
        level: 60,
        description: "Containerização de aplicações para desenvolvimento e implantação consistentes."
      },
      {
        title: "CI/CD",
        level: 70,
        description: "Pipelines de integração e entrega contínua com GitHub Actions."
      }
    ]
  };
  
  // Projetos
  export const projects = [
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
  
  // Experiências
  export const experiences = [
    {
      title: "Front-End Engineer",
      company: "Hubfy",
      period: "Out 2024 - Presente",
      description: "Desenvolvimento front-end com Tailwind e React em uma aplicação Next.js, participando da implementação de novos recursos e melhorias de experiência do usuário.",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Software Engineer",
      company: "Autônoma",
      period: "Jan 2022 - Presente",
      description: "Como desenvolvedora fullstack autônoma, aplico uma ampla gama de tecnologias para criar soluções web robustas e escaláveis, utilizando conhecimentos tanto em back-end quanto em front-end.",
      technologies: ["Python", "JavaScript", "React", "Node.js", "AWS", "APIs"]
    },
    {
      title: "Desenvolvedora Front-End",
      company: "Centro Universitário Vale do Salgado",
      period: "Mar 2021 - Fev 2022",
      description: "Como estagiária em desenvolvimento front-end na UNIVS, comecei minha jornada na criação de interfaces web interativas e responsivas.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    }
  ];
  
  // Educação
  export const education = [
    {
      title: "Análise e Desenvolvimento de Sistemas",
      company: "Centro Universitário X",
      period: "2020 - 2022",
      description: "Formação técnica em desenvolvimento de software, com foco em programação, banco de dados, análise de sistemas e engenharia de software.",
      technologies: []
    },
    {
      title: "Especialização em Desenvolvimento Web",
      company: "Curso Online",
      period: "2022",
      description: "Especialização em tecnologias web modernas, incluindo frameworks JavaScript, APIs RESTful e arquiteturas escaláveis.",
      technologies: []
    }
  ];
  
  // Certificações
  export const certifications = [
    {
      title: "JavaScript Moderno",
      institution: "Udemy",
      description: "ES6+, assincronismo, módulos e boas práticas para desenvolvimento JavaScript moderno."
    },
    {
      title: "Python para Automação",
      institution: "Coursera",
      description: "Utilização de Python para automação de tarefas, processamento de dados e criação de scripts utilitários."
    },
    {
      title: "React Avançado",
      institution: "Rocketseat",
      description: "Desenvolvimento de aplicações React com hooks, context API, performance e arquitetura escalável."
    },
    {
      title: "AWS Cloud Practitioner",
      institution: "Amazon Web Services",
      description: "Fundamentos dos serviços AWS, incluindo EC2, S3, Lambda e melhores práticas de segurança na nuvem."
    }
  ];

  import React from 'react';
import Section from '../components/ui/Section';
import ProjectGrid from '../components/projects/ProjectGrid';
import { projects } from '../utils/data';

const ProjectsPage = () => {
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
            href="mailto:contato@htrheitor.com" 
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