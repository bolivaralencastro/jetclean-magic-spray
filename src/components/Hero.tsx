
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-white to-gray-50"
    >
      <div className="absolute w-64 h-64 rounded-full bg-jetclean-orange/10 -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 rounded-full bg-jetclean-orange/5 bottom-10 -right-20"></div>
      
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="section-tag">Revolucionário</div>
            <h1 className="font-bold">
              Transforme Sua Rotina de Limpeza com 
              <span className="text-jetclean-orange"> JetClean</span>
            </h1>
            <p className="text-xl">
              A Solução Definitiva para um Banheiro Impecável! Diga adeus ao trabalho pesado.
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
            <div className="text-sm text-jetclean-darkgray/70 flex items-center gap-4">
              <span className="flex items-center">
                <span className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full w-5 h-5 mr-2 text-xs">
                  ✓
                </span>
                Frete grátis
              </span>
              <span className="flex items-center">
                <span className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full w-5 h-5 mr-2 text-xs">
                  ✓
                </span>
                Garantia de 1 ano
              </span>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://source.unsplash.com/photo-1485827404703-89b55fcc595e" 
                alt="JetClean em ação" 
                className="w-full h-auto rounded-3xl hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            
            <div className="absolute -bottom-4 right-4 bg-white p-3 rounded-xl shadow-md">
              <div className="text-sm font-medium text-jetclean-orange">Promoção</div>
              <div className="text-sm font-bold">Kit Premium Grátis!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
