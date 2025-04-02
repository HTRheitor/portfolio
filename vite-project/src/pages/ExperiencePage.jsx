import React from 'react';
import Section from '../components/ui/Section';
import Timeline from '../components/experience/Timeline';

const ExperiencePage = () => {
  // Dados das experiências
  const experiences = [
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

  // Dados da educação
  const education = [
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

  return (
    <div className="pt-20">
      <Section title="Experiência Profissional">
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-300 text-center">
            Minha trajetória profissional inclui experiências diversificadas no desenvolvimento de software,
            com foco em criar soluções eficientes e escaláveis.
          </p>
        </div>
        
        <Timeline experiences={experiences} />
      </Section>
      
      <Section className="bg-ps2-dark-blue/70" title="Formação Acadêmica">
        <Timeline experiences={education} />
      </Section>
      
      <Section title="Certificações & Cursos">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Certificação 1 */}
          <div className="border border-ps2-light-blue/30 p-5 bg-ps2-dark-blue/30 hover:border-ps2-light-blue transition-colors">
            <div className="text-ps2-light-blue font-mono text-lg mb-2">JavaScript Moderno</div>
            <div className="text-white mb-1">Udemy</div>
            <p className="text-gray-300 text-sm">ES6+, assincronismo, módulos e boas práticas para desenvolvimento JavaScript moderno.</p>
          </div>
          
          {/* Certificação 2 */}
          <div className="border border-ps2-light-blue/30 p-5 bg-ps2-dark-blue/30 hover:border-ps2-light-blue transition-colors">
            <div className="text-ps2-light-blue font-mono text-lg mb-2">Python para Automação</div>
            <div className="text-white mb-1">Coursera</div>
            <p className="text-gray-300 text-sm">Utilização de Python para automação de tarefas, processamento de dados e criação de scripts utilitários.</p>
          </div>
          
          {/* Certificação 3 */}
          <div className="border border-ps2-light-blue/30 p-5 bg-ps2-dark-blue/30 hover:border-ps2-light-blue transition-colors">
            <div className="text-ps2-light-blue font-mono text-lg mb-2">React Avançado</div>
            <div className="text-white mb-1">Rocketseat</div>
            <p className="text-gray-300 text-sm">Desenvolvimento de aplicações React com hooks, context API, performance e arquitetura escalável.</p>
          </div>
          
          {/* Certificação 4 */}
          <div className="border border-ps2-light-blue/30 p-5 bg-ps2-dark-blue/30 hover:border-ps2-light-blue transition-colors">
            <div className="text-ps2-light-blue font-mono text-lg mb-2">AWS Cloud Practitioner</div>
            <div className="text-white mb-1">Amazon Web Services</div>
            <p className="text-gray-300 text-sm">Fundamentos dos serviços AWS, incluindo EC2, S3, Lambda e melhores práticas de segurança na nuvem.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ExperiencePage;