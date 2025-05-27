
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Download, FileText, Mail, BarChart3, Database } from 'lucide-react';

const RPASection = () => {
  const rpaFeatures = [
    {
      icon: Settings,
      title: "VBA & Automações",
      description: "Automação de planilhas e processos usando VBA"
    },
    {
      icon: Download,
      title: "Download de Relatórios",
      description: "Extração automática de dados de sistemas"
    },
    {
      icon: Database,
      title: "Tratamento de Dados",
      description: "Processamento e limpeza automática de informações"
    },
    {
      icon: FileText,
      title: "Templates Inteligentes",
      description: "Alimentação automática de modelos de documentos"
    },
    {
      icon: Mail,
      title: "Disparos de E-mail",
      description: "Envio automatizado de comunicações personalizadas"
    },
    {
      icon: BarChart3,
      title: "Relatórios Automáticos",
      description: "Geração de relatórios em tempo real"
    }
  ];

  return (
    <section id="rpas" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Automação RPA
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elimine tarefas repetitivas e ganhe tempo para focar no que realmente importa. 
            Nossos RPAs trabalham com precisão e eficiência 24 horas por dia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-12 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Automação de Processos
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Tecnologias avançadas para automatizar seus fluxos de trabalho
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rpaFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div 
                      key={index} 
                      className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-teal rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Tecnologias Utilizadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-gradient rounded-full mr-3"></div>
                    <span className="text-gray-700">VBA (Visual Basic for Applications)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-gradient rounded-full mr-3"></div>
                    <span className="text-gray-700">Power Query</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-gradient rounded-full mr-3"></div>
                    <span className="text-gray-700">Automações Customizadas</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-gradient rounded-full mr-3"></div>
                    <span className="text-gray-700">Integração com APIs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Benefícios Principais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-gradient rounded-full mr-3"></div>
                    <span className="text-gray-700">Redução de até 80% no tempo de processos</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-gradient rounded-full mr-3"></div>
                    <span className="text-gray-700">Eliminação de erros humanos</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-gradient rounded-full mr-3"></div>
                    <span className="text-gray-700">Disponibilidade 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-gradient rounded-full mr-3"></div>
                    <span className="text-gray-700">ROI rápido e mensurável</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RPASection;
