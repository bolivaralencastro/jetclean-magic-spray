
import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const Testimonial: React.FC = () => {
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
    <section className="py-20 bg-jetclean-white">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10 md:p-12 relative overflow-hidden scroll-reveal">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-jetclean-orange opacity-10 rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-jetclean-orange opacity-10 rounded-full"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-jetclean-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Quote size={32} className="text-jetclean-orange" />
            </div>
            
            <div>
              <h3 className="text-2xl font-medium mb-4">
                "O JetClean mudou minha rotina! É rápido, eficiente e deixa tudo brilhando sem esforço. Melhor compra que já fiz!"
              </h3>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium">João Silva</p>
                  <p className="text-sm text-gray-500">Cliente satisfeito</p>
                </div>
                <div className="ml-auto flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      className="w-5 h-5 text-yellow-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
