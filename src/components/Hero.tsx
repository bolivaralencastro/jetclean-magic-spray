
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Image lazy loading effect
    const img = imageRef.current;
    if (img) {
      const onLoad = () => {
        img.parentElement?.classList.add('loaded');
      };
      
      img.addEventListener('load', onLoad);
      return () => {
        img.removeEventListener('load', onLoad);
      };
    }

    // Parallax effect
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollY = window.scrollY;
        const speed = 0.3;
        const section = sectionRef.current;
        
        // Apply parallax only if element is in viewport
        if (section.offsetTop - window.innerHeight <= scrollY && 
            section.offsetTop + section.offsetHeight >= scrollY) {
          const yPos = -(scrollY * speed);
          section.style.backgroundPositionY = `${yPos}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      style={{ 
        background: "linear-gradient(to bottom right, #ffffff, #f5f5f7)" 
      }}
    >
      <div className="absolute w-64 h-64 rounded-full bg-jetclean-orange/10 -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 rounded-full bg-jetclean-orange/5 bottom-10 -right-20"></div>
      
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-1 order-2 animate-fade-in-left">
            <div className="section-tag">Revolucionário</div>
            <h1 className="font-bold mb-6">
              Transforme Sua Rotina de Limpeza com 
              <span className="text-jetclean-orange"> JetClean</span>
            </h1>
            <p className="text-xl mb-8">
              A Solução Definitiva para um Banheiro Impecável! Diga adeus ao trabalho pesado e olá à limpeza inteligente.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#cta" className="btn-primary flex items-center">
                Compre Agora 
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#how-it-works" className="btn-secondary">
                Como Funciona
              </a>
            </div>
            <div className="mt-8 text-sm text-jetclean-darkgray/70 flex items-center">
              <span className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full w-6 h-6 mr-2">
                ✓
              </span>
              Frete grátis
              <span className="mx-3">•</span>
              <span className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full w-6 h-6 mr-2">
                ✓
              </span>
              Garantia de 1 ano
            </div>
          </div>
          
          <div className="md:order-2 order-1 animate-fade-in-right">
            <div className="relative">
              <div 
                className="blur-load rounded-3xl overflow-hidden shadow-2xl"
                style={{ 
                  backgroundImage: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAALCAAKAAoBAREA/8QAFgABAQEAAAAAAAAAAAAAAAAAAAkK/8QAIRAAAgICAQQDAAAAAAAAAAAAAQIDBAUGEQcTITFRYXH/2gAIAQEAAD8AUj3Pyo+HUZ1k1cjbzbqTe3rDcb8w0PF7jCZBwGjzRY9m6tZWVXXDvR3KksSIYI5H9JGvBX5pSlf/2Q==')" 
                }}
              >
                <img 
                  ref={imageRef}
                  src="https://source.unsplash.com/photo-1485827404703-89b55fcc595e" 
                  alt="JetClean em ação" 
                  className="w-full h-auto rounded-3xl transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg animate-float">
                <div className="text-sm font-medium text-jetclean-orange">Promoção Especial</div>
                <div className="text-lg font-bold">Kit Limpeza Premium Grátis!</div>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-jetclean-black text-white p-3 rounded-full shadow-lg animate-pulse-slow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.25 7.5L12 16.5L3.75 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
