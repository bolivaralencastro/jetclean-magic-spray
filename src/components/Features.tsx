
import React, { useEffect, useRef } from 'react';
import { Shield, Droplets, Layout, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="features" className="bg-jetclean-gray py-24">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="section-title">
          <div className="section-tag">Inovação</div>
          <h2 className="font-bold">
            A Solução Inovadora: <span className="text-jetclean-orange">JetClean</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Conheça o pulverizador de pressão que torna a limpeza do banheiro rápida, 
            fácil e incrivelmente eficaz. Design elegante e funcionalidades avançadas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-20">
          <div className="relative scroll-reveal animate-fade-in-left">
            <div className="relative z-10">
              <img 
                src="/jetclean-magic-spray/lovable-uploads/23c8f26d-427c-414f-8d83-5c452879bbdc.png" 
                alt="JetClean - Pulverizador de Pressão" 
                className="rounded-3xl shadow-xl mx-auto"
              />
            </div>
            <div className="absolute w-full h-full top-0 left-0 bg-jetclean-orange opacity-5 rounded-full blur-3xl -z-10"></div>
            
            <div className="absolute top-4 right-4 bg-white p-4 rounded-2xl shadow-lg">
              <div className="text-sm font-medium text-jetclean-orange">Design Premium</div>
              <div className="text-base font-bold">Aço Inoxidável</div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start scroll-reveal" style={{ transitionDelay: '100ms' }}>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Shield size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Higiene Sem Contato</h3>
                  <p>
                    Remove sujeira e bactérias sem que você precise tocar em nada, 
                    garantindo um processo de limpeza mais seguro e higiênico.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start scroll-reveal" style={{ transitionDelay: '200ms' }}>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Droplets size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Controle Total</h3>
                  <p>
                    Bico ajustável com três modos (jato concentrado, médio e névoa fina) 
                    para personalizar sua limpeza de acordo com a necessidade.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start scroll-reveal" style={{ transitionDelay: '300ms' }}>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Layout size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Design Moderno</h3>
                  <p>
                    Feito em aço inoxidável branco com detalhes em laranja e preto, 
                    une estilo e funcionalidade para complementar qualquer banheiro.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start scroll-reveal" style={{ transitionDelay: '400ms' }}>
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Zap size={24} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Facilidade de Uso</h3>
                  <p>
                    Reservatório de 1 litro e alça ergonômica para uma experiência 
                    confortável, mesmo durante longos períodos de limpeza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mt-24 scroll-reveal">
          <div className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-jetclean-orange mb-2">1L</div>
            <p className="text-sm">Capacidade do<br />Reservatório</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-jetclean-orange mb-2">3</div>
            <p className="text-sm">Modos de<br />Pulverização</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-jetclean-orange mb-2">10</div>
            <p className="text-sm">Minutos de<br />Uso Contínuo</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-jetclean-orange mb-2">1</div>
            <p className="text-sm">Ano de<br />Garantia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
