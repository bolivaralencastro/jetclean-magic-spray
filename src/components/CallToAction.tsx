
import React from 'react';
import { ArrowRight, CheckCircle, Clock, Truck, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CallToAction: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="cta" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-jetclean-gray to-white"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={sectionRef}>
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-jetclean-gray p-10 md:p-12">
              <div className="scroll-reveal">
                <div className="flex items-center mb-6">
                  <Clock size={20} className="text-jetclean-orange" />
                  <span className="ml-2 text-sm font-medium text-jetclean-orange">Oferta por tempo limitado</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">
                  Oferta Especial!
                </h2>
                
                <p className="mb-6 text-lg">
                  Compre agora e leve para casa um kit de limpeza premium <span className="font-bold">grátis!</span>
                </p>
                
                <div className="mb-8 p-4 bg-white rounded-xl">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle size={18} className="text-green-600" />
                    </div>
                    <span className="font-medium">Kit de Limpeza Premium</span>
                    <span className="ml-auto text-gray-500 line-through">R$ 79,99</span>
                    <span className="ml-2 font-bold text-green-600">GRÁTIS</span>
                  </div>
                  
                  <p className="text-sm text-gray-500 pl-11">
                    Inclui soluções exclusivas para turbinar o desempenho do seu JetClean.
                  </p>
                </div>
                
                <div className="text-sm text-jetclean-darkgray">
                  <p className="mb-2"><strong>Atenção:</strong> Oferta válida apenas para os primeiros 100 compradores!</p>
                  <div className="bg-gray-200 w-full h-2 rounded-full overflow-hidden">
                    <div className="bg-jetclean-orange h-full rounded-full" style={{ width: '82%' }}></div>
                  </div>
                  <p className="mt-2">Restam apenas <strong>18 kits</strong> disponíveis</p>
                </div>
              </div>
            </div>
            
            <div className="p-10 md:p-12 flex flex-col justify-between">
              <div className="scroll-reveal">
                <h3 className="text-2xl font-bold mb-4">
                  Compre Agora e Eleve Sua Limpeza a Outro Nível!
                </h3>
                
                <p className="mb-8">
                  Não perca a chance de ter um banheiro impecável com o mínimo de esforço.
                </p>
                
                <div className="mb-8">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 bg-jetclean-orange/10 rounded-full flex items-center justify-center mr-3">
                      <ShieldCheck size={14} className="text-jetclean-orange" />
                    </div>
                    <span>Garantia de 1 ano contra defeitos de fabricação</span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 bg-jetclean-orange/10 rounded-full flex items-center justify-center mr-3">
                      <Truck size={14} className="text-jetclean-orange" />
                    </div>
                    <span>Frete Grátis para todo o Brasil</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-jetclean-orange/10 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle size={14} className="text-jetclean-orange" />
                    </div>
                    <span>Suporte 24/7</span>
                  </div>
                </div>
              </div>
              
              <div className="scroll-reveal">
                <div className="mb-6">
                  <div className="flex items-baseline justify-between">
                    <span className="text-gray-500 line-through text-lg">R$ 299,99</span>
                    <div>
                      <span className="text-3xl font-bold text-jetclean-orange">R$ 249,99</span>
                      <span className="text-sm ml-1">à vista</span>
                    </div>
                  </div>
                  <div className="text-right text-sm">ou 10x de R$ 24,99 sem juros</div>
                </div>
                
                <Button type="button" variant="default" size="lg" className="w-full flex items-center justify-center">
                  Compre Agora
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                
                <p className="text-sm text-center mt-4 text-gray-500">
                  Estoque limitado – Entrega em até 7 dias úteis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
