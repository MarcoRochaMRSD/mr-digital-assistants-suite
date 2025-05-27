
import React from 'react';
import { Mail, Phone, MessageCircle, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/d78f29ae-29ae-4a21-a4e4-54da6a7e5371.png" 
                alt="MR Soluções Digitais" 
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-xl font-bold">MR Soluções Digitais</h3>
                <p className="text-gray-400 text-sm">Automação Inteligente</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Transformamos negócios através de soluções inteligentes de automação, 
              proporcionando eficiência e resultados excepcionais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#agentes-ia" className="hover:text-white transition-colors">
                  Agentes de IA
                </a>
              </li>
              <li>
                <a href="#rpas" className="hover:text-white transition-colors">
                  Automação RPA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Consultoria Especializada
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Suporte Técnico
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>contato@mrsolucoes.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>(11) 9 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle size={16} />
                <span>WhatsApp: (11) 9 9999-9999</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MR Soluções Digitais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
