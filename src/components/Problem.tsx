
import React from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Problem: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-jetclean-white py-24">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="section-title">
          <div className="section-tag">O Desafio</div>
          <h2 className="font-bold">O Problema com a Limpeza Tradicional</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Limpar o banheiro não precisa ser uma tarefa frustrante. Métodos tradicionais trazem mais problemas do que soluções.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-2xl shadow-md p-8 scroll-reveal transition-all duration-500 hover:shadow-lg">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <X size={24} className="text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Esfregões Anti-higiênicos</h3>
            <p>
              Acumulam sujeira e bactérias que permanecem mesmo após o uso, tornando a limpeza um risco à saúde em vez de uma solução.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 scroll-reveal transition-all duration-500 hover:shadow-lg" style={{ transitionDelay: '150ms' }}>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <X size={24} className="text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Mangueiras Difíceis</h3>
            <p>
              São complicadas de manusear, frequentemente escapam do controle e não oferecem a pressão necessária para uma limpeza eficaz.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 scroll-reveal transition-all duration-500 hover:shadow-lg" style={{ transitionDelay: '300ms' }}>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <X size={24} className="text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Esforço Excessivo</h3>
            <p>
              Métodos tradicionais exigem força física e movimentos repetitivos que causam fadiga e podem levar a problemas de saúde a longo prazo.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center scroll-reveal">
          <p className="text-lg font-medium mb-6">
            Você merece uma solução que facilite sua vida e torne a limpeza uma tarefa simples e eficiente!
          </p>
          <Button asChild variant="outline" size="lg">
            <a href="#features">Conheça a Solução</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Problem;
