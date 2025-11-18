
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
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Text content - reduced to 5 columns */}
          <div className="md:col-span-5 space-y-6">
            <div className="text-sm font-semibold text-jetclean-orange bg-jetclean-orange/10 px-4 py-1.5 rounded-full inline-block">Revolucionário</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Transforme Sua Rotina de Limpeza com 
              <span className="text-jetclean-orange"> JetClean</span>
            </h1>
            <p className="text-lg text-gray-700">
              A Solução Definitiva para um Banheiro Impecável! Diga adeus ao trabalho pesado.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#cta" className="bg-jetclean-orange hover:bg-jetclean-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                Compre Agora 
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#how-it-works" className="bg-white border border-jetclean-orange text-jetclean-orange hover:bg-jetclean-orange/5 px-6 py-3 rounded-lg font-medium transition-colors">
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
          
          {/* Product image - increased to 7 columns */}
          <div className="md:col-span-7 relative flex justify-center">
            <div className="relative w-full">
              <img 
                src="/jetclean-magic-spray/lovable-uploads/23c8f26d-427c-414f-8d83-5c452879bbdc.png" 
                alt="JetClean - Pulverizador de pressão para limpeza" 
                className="w-full h-auto object-contain max-h-[600px] hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              
              <div className="absolute -bottom-4 right-4 bg-white p-3 rounded-xl shadow-md">
                <div className="text-sm font-medium text-jetclean-orange">Promoção</div>
                <div className="text-sm font-bold">Kit Premium Grátis!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
