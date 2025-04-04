import React from 'react';
import Section from '../components/ui/Section';

const ContactPage = () => {
  // Handler para o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para processar o formulário
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <div className="pt-20">
      <Section title="Contato">
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-300 text-center">
            Estou sempre aberto a novas oportunidades, colaborações e conversas sobre tecnologia.
            Fique à vontade para entrar em contato comigo através do formulário abaixo ou das redes sociais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulário de contato */}
          <div>
            <h3 className="text-ps2-light-blue font-mono text-xl mb-6 flex items-center">
              <span className="w-2 h-2 bg-ps2-light-blue mr-2"></span>
              Envie uma mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-1 font-mono text-sm">NOME</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full bg-ps2-dark-blue/50 border border-ps2-light-blue/30 p-3 text-white focus:border-ps2-light-blue focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-1 font-mono text-sm">EMAIL</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full bg-ps2-dark-blue/50 border border-ps2-light-blue/30 p-3 text-white focus:border-ps2-light-blue focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-1 font-mono text-sm">ASSUNTO</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="w-full bg-ps2-dark-blue/50 border border-ps2-light-blue/30 p-3 text-white focus:border-ps2-light-blue focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-1 font-mono text-sm">MENSAGEM</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  className="w-full bg-ps2-dark-blue/50 border border-ps2-light-blue/30 p-3 text-white focus:border-ps2-light-blue focus:outline-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-ps2-light-blue hover:bg-ps2-blue text-white font-mono px-6 py-2 transition-colors"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
          
          {/* Informações de contato */}
          <div>
            <h3 className="text-ps2-light-blue font-mono text-xl mb-6 flex items-center">
              <span className="w-2 h-2 bg-ps2-light-blue mr-2"></span>
              Informações de contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-ps2-dark-blue border border-ps2-light-blue/50 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-ps2-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-300 font-mono text-sm mb-1">EMAIL</div>
                  <a href="mailto:seu-email@exemplo.com" className="text-ps2-light-blue hover:underline">contato@htrheitor.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-ps2-dark-blue border border-ps2-light-blue/50 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-ps2-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-300 font-mono text-sm mb-1">LOCALIZAÇÃO</div>
                  <p className="text-white">Fortaleza, Ceará - Brasil</p>
                </div>
              </div>
              
              <div className="pt-6">
                <div className="text-gray-300 font-mono text-sm mb-4">REDES SOCIAIS</div>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/HTRheitor" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-ps2-dark-blue border border-ps2-light-blue/50 flex items-center justify-center text-ps2-light-blue hover:bg-ps2-light-blue hover:text-ps2-dark-blue transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/HTRheitor" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-ps2-dark-blue border border-ps2-light-blue/50 flex items-center justify-center text-ps2-light-blue hover:bg-ps2-light-blue hover:text-ps2-dark-blue transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  
                  <a 
  href="https://twitter.com/HTRheitor" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-10 h-10 bg-ps2-dark-blue border border-ps2-light-blue/50 flex items-center justify-center text-ps2-light-blue hover:bg-ps2-light-blue hover:text-ps2-dark-blue transition-colors"
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 14.01-7.5 14.01-14.007 0-.213-.005-.426-.015-.637.96-.695 1.795-1.562 2.455-2.55z" />
  </svg>
</a>
                  
<a 
  href="https://instagram.com/HTRheitor" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-10 h-10 bg-ps2-dark-blue border border-ps2-light-blue/50 flex items-center justify-center text-ps2-light-blue hover:bg-ps2-light-blue hover:text-ps2-dark-blue transition-colors"
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section className="bg-ps2-dark-blue/70" title="Localização">
        <div className="h-96 border border-ps2-light-blue/30 relative">
          {/* Aqui você poderia integrar um mapa real como Google Maps ou Mapbox */}
          <div className="absolute inset-0 grid grid-bg"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-ps2-light-blue font-mono text-xl mb-2">Fortaleza, Ceará</div>
              <p className="text-gray-300">Brasil</p>
            </div>
          </div>
          
          {/* Detalhes no estilo PS2 */}
          <div className="absolute top-0 right-0 border-l border-b border-ps2-light-blue/30 w-12 h-12"></div>
          <div className="absolute bottom-0 left-0 border-t border-r border-ps2-light-blue/30 w-12 h-12"></div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;