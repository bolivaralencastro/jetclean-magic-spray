
import React, { useEffect, useRef } from 'react';

const HowItWorks: React.FC = () => {
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
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="section-title">
          <div className="section-tag">Simplicidade</div>
          <h2 className="font-bold">Como Funciona o JetClean</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Usar o JetClean é tão simples que qualquer um consegue. Siga estes três passos e transforme sua rotina de limpeza.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-jetclean-orange/20 -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10 scroll-reveal">
            <div className="bg-white rounded-2xl shadow-md p-8 h-full border-t-4 border-jetclean-orange transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-jetclean-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Encha o Reservatório</h3>
              <p className="text-center">
                Adicione até 1 litro da sua solução de limpeza favorita no reservatório de fácil acesso.
              </p>
              <div className="mt-8 max-w-[200px] h-[200px] mx-auto bg-jetclean-gray rounded-full flex items-center justify-center p-4">
                <svg viewBox="0 0 24 24" width="100" height="100" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-jetclean-orange">
                  <path d="M12 2v6m0 12v2M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 scroll-reveal" style={{ transitionDelay: '150ms' }}>
            <div className="bg-white rounded-2xl shadow-md p-8 h-full border-t-4 border-jetclean-orange transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-jetclean-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Pressurize</h3>
              <p className="text-center">
                Bombeie a alavanca ergonômica para criar a pressão necessária para uma limpeza potente.
              </p>
              <div className="mt-8 max-w-[200px] h-[200px] mx-auto bg-jetclean-gray rounded-full flex items-center justify-center p-4">
                <svg viewBox="0 0 24 24" width="100" height="100" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-jetclean-orange">
                  <path d="M2 12h20M12 2v20M20 16l-4-4M4 8l4-4M16 4l4 4M8 20l-4-4"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 scroll-reveal" style={{ transitionDelay: '300ms' }}>
            <div className="bg-white rounded-2xl shadow-md p-8 h-full border-t-4 border-jetclean-orange transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-jetclean-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Ajuste e Limpe</h3>
              <p className="text-center">
                Escolha o modo de jato ideal para sua necessidade e comece a limpeza sem esforço.
              </p>
              <div className="mt-8 max-w-[200px] h-[200px] mx-auto bg-jetclean-gray rounded-full flex items-center justify-center p-4">
                <svg viewBox="0 0 24 24" width="100" height="100" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-jetclean-orange">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center scroll-reveal">
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Com JetClean, você economiza tempo e esforço, garantindo resultados profissionais em minutos.
          </p>
          <a href="#cta" className="btn-primary">
            Transforme Sua Limpeza Hoje!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
