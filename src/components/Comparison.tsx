
import React from 'react';
import { Check, X } from 'lucide-react';
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Comparison: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="comparison" className="py-24 bg-jetclean-gray">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="section-title">
          <div className="section-tag">Comparação</div>
          <h2 className="font-bold">JetClean x Métodos Tradicionais</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Veja por que o JetClean é a escolha superior para revolucionar sua experiência de limpeza.
          </p>
        </div>
        
        <div className="mt-16 overflow-x-auto scroll-reveal">
          <table className="w-full min-w-[700px] bg-white rounded-2xl shadow-md overflow-hidden">
            <thead>
              <tr className="bg-jetclean-lightgray">
                <th className="px-6 py-5 text-left text-lg font-medium">Característica</th>
                <th className="px-6 py-5 text-center text-lg font-medium">
                  <span className="text-jetclean-orange">Jet</span>Clean
                </th>
                <th className="px-6 py-5 text-center text-lg font-medium">Esfregões</th>
                <th className="px-6 py-5 text-center text-lg font-medium">Mangueiras</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-jetclean-lightgray">
                <td className="px-6 py-5 font-medium">Higiene</td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check size={18} className="text-green-600" />
                    </div>
                    <span className="ml-2">Limpeza sem contato</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <X size={18} className="text-red-600" />
                    </div>
                    <span className="ml-2">Acumula bactérias</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <X size={18} className="text-red-600" />
                    </div>
                    <span className="ml-2">Exige contato manual</span>
                  </div>
                </td>
              </tr>
              
              <tr className="border-b border-jetclean-lightgray">
                <td className="px-6 py-5 font-medium">Facilidade de Uso</td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check size={18} className="text-green-600" />
                    </div>
                    <span className="ml-2">Processo simples</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <X size={18} className="text-red-600" />
                    </div>
                    <span className="ml-2">Esforço físico necessário</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <X size={18} className="text-red-600" />
                    </div>
                    <span className="ml-2">Difícil de manusear</span>
                  </div>
                </td>
              </tr>
              
              <tr className="border-b border-jetclean-lightgray">
                <td className="px-6 py-5 font-medium">Eficácia</td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check size={18} className="text-green-600" />
                    </div>
                    <span className="ml-2">Remove sujeira pesada</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <X size={18} className="text-red-600" />
                    </div>
                    <span className="ml-2">Deixa resíduos</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <X size={18} className="text-red-600" />
                    </div>
                    <span className="ml-2">Pressão inconsistente</span>
                  </div>
                </td>
              </tr>
              
              <tr>
                <td className="px-6 py-5 font-medium">Versatilidade</td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check size={18} className="text-green-600" />
                    </div>
                    <span className="ml-2">Três modos de jato</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <X size={18} className="text-red-600" />
                    </div>
                    <span className="ml-2">Apenas esfrega</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <X size={18} className="text-red-600" />
                    </div>
                    <span className="ml-2">Função limitada</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
