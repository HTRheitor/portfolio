import React from 'react';
import Section from '../components/ui/Section';
import SkillsGrid from '../components/skills/SkillsGrid';

const SkillsPage = () => {
  // Dados das habilidades
  const frontendSkills = [
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
  ];

  const backendSkills = [
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
  ];

  const devOpsSkills = [
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
  ];

  return (
    <div className="pt-20">
      <Section title="Habilidades">
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-300 text-center">
            Como desenvolvedor fullstack, possuo um conjunto diversificado de habilidades que me permitem criar soluções completas, 
            desde interfaces de usuário até sistemas de back-end e automatizações.
          </p>
        </div>
        
        <SkillsGrid skills={frontendSkills} title="Frontend" />
        <SkillsGrid skills={backendSkills} title="Backend" />
        <SkillsGrid skills={devOpsSkills} title="DevOps & Ferramentas" />
      </Section>
      
      <Section className="bg-ps2-dark-blue/70" title="Meu Processo de Trabalho">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-ps2-light-blue/30 p-5 bg-ps2-dark-blue/30">
            <div className="text-ps2-light-blue font-mono text-4xl mb-3">01</div>
            <h3 className="text-white font-mono text-lg mb-2">Planejamento</h3>
            <p className="text-gray-300 text-sm">Entendimento detalhado dos requisitos e definição de escopo claro.</p>
          </div>
          
          <div className="border border-ps2-light-blue/30 p-5 bg-ps2-dark-blue/30">
            <div className="text-ps2-light-blue font-mono text-4xl mb-3">02</div>
            <h3 className="text-white font-mono text-lg mb-2">Design</h3>
            <p className="text-gray-300 text-sm">Desenvolvimento da arquitetura e interfaces alinhadas com os objetivos.</p>
          </div>
          
          <div className="border border-ps2-light-blue/30 p-5 bg-ps2-dark-blue/30">
            <div className="text-ps2-light-blue font-mono text-4xl mb-3">03</div>
            <h3 className="text-white font-mono text-lg mb-2">Desenvolvimento</h3>
            <p className="text-gray-300 text-sm">Codificação com foco em qualidade, testabilidade e manutenção.</p>
          </div>
          
          <div className="border border-ps2-light-blue/30 p-5 bg-ps2-dark-blue/30">
            <div className="text-ps2-light-blue font-mono text-4xl mb-3">04</div>
            <h3 className="text-white font-mono text-lg mb-2">Entrega & Suporte</h3>
            <p className="text-gray-300 text-sm">Implementação, documentação e suporte contínuo para evolução.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SkillsPage;