
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d78f29ae-29ae-4a21-a4e4-54da6a7e5371.png" 
              alt="MR Soluções Digitais" 
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                MR Soluções Digitais
              </h1>
              <p className="text-sm text-gray-600">Automação Inteligente</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('agentes-ia')}
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              Agentes IA
            </button>
            <button 
              onClick={() => scrollToSection('rpas')}
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              RPAs
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              Contato
            </button>
            <Button className="bg-brand-gradient hover:opacity-90 text-white">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('agentes-ia')}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors"
              >
                Agentes IA
              </button>
              <button 
                onClick={() => scrollToSection('rpas')}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors"
              >
                RPAs
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors"
              >
                Contato
              </button>
              <Button className="bg-brand-gradient hover:opacity-90 text-white w-full">
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
