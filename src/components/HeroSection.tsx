
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Zap, Target } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Soluções Digitais
              </span>
              <br />
              <span className="text-gray-900">Inteligentes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transforme seu negócio com Agentes de IA e Automação RPA. 
              Aumente a eficiência, reduza custos e melhore a experiência do cliente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-brand-gradient hover:opacity-90 text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection('agentes-ia')}
              >
                Conhecer Soluções
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection('contato')}
              >
                Falar com Especialista
              </Button>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center group animate-slide-in">
              <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Agentes IA Avançados</h3>
              <p className="text-gray-600">
                Atendimento automatizado 24/7 com inteligência artificial que entende contexto e nuances
              </p>
            </div>
            
            <div className="text-center group animate-slide-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automação RPA</h3>
              <p className="text-gray-600">
                Processos automatizados que eliminam tarefas repetitivas e aumentam a produtividade
              </p>
            </div>
            
            <div className="text-center group animate-slide-in" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resultados Precisos</h3>
              <p className="text-gray-600">
                Soluções personalizadas que geram resultados mensuráveis e ROI comprovado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
