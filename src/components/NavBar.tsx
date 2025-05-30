
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-bold text-2xl text-jetclean-black">
          <span className="text-jetclean-orange">Jet</span>Clean
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-jetclean-darkgray hover:text-jetclean-orange transition-colors">
            Recursos
          </a>
          <a href="#how-it-works" className="text-jetclean-darkgray hover:text-jetclean-orange transition-colors">
            Como Funciona
          </a>
          <a href="#comparison" className="text-jetclean-darkgray hover:text-jetclean-orange transition-colors">
            Comparação
          </a>
          <a href="#faq" className="text-jetclean-darkgray hover:text-jetclean-orange transition-colors">
            FAQ
          </a>
          <a href="#cta" className="btn-primary py-2 px-6">
            Compre Agora
          </a>
        </div>

        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-jetclean-darkgray hover:text-jetclean-orange transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Recursos
            </a>
            <a 
              href="#how-it-works" 
              className="text-jetclean-darkgray hover:text-jetclean-orange transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a 
              href="#comparison" 
              className="text-jetclean-darkgray hover:text-jetclean-orange transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Comparação
            </a>
            <a 
              href="#faq" 
              className="text-jetclean-darkgray hover:text-jetclean-orange transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#cta" 
              className="btn-primary inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Compre Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
