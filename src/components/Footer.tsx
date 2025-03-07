
import React from 'react';
import { Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jetclean-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-bold text-2xl block mb-4">
              <span className="text-jetclean-orange">Jet</span>Clean
            </a>
            <p className="text-gray-400 mb-6">
              A revolução na limpeza do banheiro. Diga adeus ao esforço e olá à praticidade, higiene e eficiência.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-jetclean-orange transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-jetclean-orange transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-jetclean-orange transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Recursos</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#comparison" className="text-gray-400 hover:text-white transition-colors">Comparação</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Garantia</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Devolução</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="text-jetclean-orange mr-3" />
                <a href="mailto:contato@jetclean.com.br" className="text-gray-400 hover:text-white transition-colors">
                  contato@jetclean.com.br
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-jetclean-orange mr-3" />
                <a href="tel:+551199999999" className="text-gray-400 hover:text-white transition-colors">
                  (11) 9999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} JetClean. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
