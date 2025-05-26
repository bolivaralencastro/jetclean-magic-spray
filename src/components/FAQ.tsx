
import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-jetclean-lightgray last:border-0">
      <button 
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <div className="ml-4">
          {isOpen ? (
            <div className="w-8 h-8 bg-jetclean-orange rounded-full flex items-center justify-center">
              <Minus size={18} className="text-white" />
            </div>
          ) : (
            <div className="w-8 h-8 bg-jetclean-lightgray rounded-full flex items-center justify-center">
              <Plus size={18} className="text-jetclean-darkgray" />
            </div>
          )}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-jetclean-darkgray">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question: "Quanto tempo a pressão dura?",
      answer: "A pressão do JetClean dura até 10 minutos de uso contínuo por pressurização. Isso é mais que suficiente para limpar completamente um banheiro médio. Caso precise de mais tempo, basta pressurizar novamente."
    },
    {
      question: "Posso usar com produtos químicos como água sanitária?",
      answer: "Sim, o JetClean é compatível com a maioria das soluções de limpeza, incluindo água sanitária, desinfetantes e produtos específicos para banheiro. Seu reservatório é fabricado com materiais resistentes a produtos químicos comuns."
    },
    {
      question: "É fácil limpar o JetClean?",
      answer: "Sim! Basta enxaguar o reservatório e o bico com água após o uso. Para uma limpeza mais profunda, você pode adicionar um pouco de água morna com detergente neutro, agitar suavemente e enxaguar bem."
    },
    {
      question: "Qual é o alcance do jato?",
      answer: "O JetClean oferece um alcance de até 3 metros no modo de jato concentrado, permitindo atingir áreas de difícil acesso sem precisar se aproximar demais."
    },
    {
      question: "Posso usar o JetClean em outras áreas além do banheiro?",
      answer: "Absolutamente! Embora tenha sido projetado com foco na limpeza de banheiros, o JetClean é versátil e pode ser usado em várias outras áreas da casa, como cozinha, janelas, pisos e até mesmo para regar plantas em modo de névoa."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="section-title">
          <div className="section-tag">Tire Suas Dúvidas</div>
          <h2 className="font-bold">Perguntas Frequentes</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o JetClean.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 bg-white rounded-2xl shadow-md p-8 scroll-reveal">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center scroll-reveal">
          <p className="mb-6 text-lg">
            Ainda tem dúvidas? Entre em contato com nossa equipe de suporte!
          </p>
          <a href="mailto:contato@jetclean.com.br" className="text-jetclean-orange hover:underline font-medium">
            contato@jetclean.com.br
          </a>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
