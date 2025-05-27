
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Users, Home, RefreshCw, Heart } from 'lucide-react';

const AIAgentsSection = () => {
  const agents = [
    {
      icon: MessageSquare,
      title: "Agente SDR",
      description: "Atendimento imediato e qualificação de novos leads",
      features: [
        "Atendimento via WhatsApp",
        "Integrado ao CRM (se disponível)",
        "Entende mensagem, áudio, e imagens",
        "Mantém histórico de conversa",
        "Filtra imóveis de acordo com o perfil do cliente",
        "Agenda visitas com o corretor"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Reengajamento de Leads",
      description: "Usa IA para identificar e reativar leads esquecidos no CRM",
      features: [
        "Identifica leads inativos automaticamente",
        "Reativa leads esquecidos no CRM",
        "Apresenta imóveis disponíveis",
        "Baseado no interesse do lead",
        "Aumenta conversão de leads existentes"
      ],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Home,
      title: "Match Imobiliário",
      description: "Notifica possíveis compradores assim que um imóvel entra na base",
      features: [
        "Ativação automática de fluxos",
        "Notificação instantânea",
        "Match baseado em preferências",
        "Acelera processo de vendas",
        "Reduz tempo no mercado"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: RefreshCw,
      title: "Atualização de Imóveis",
      description: "Mantém proprietários informados sobre o status dos imóveis",
      features: [
        "Mensagens sobre imóveis disponíveis",
        "Quantidade de visitas agendadas",
        "Propostas recebidas",
        "Feedback dos clientes",
        "Verificação de disponibilidade"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Heart,
      title: "Acompanhamento Pós-Venda",
      description: "Fortalece relacionamento após finalização da transação",
      features: [
        "Mensagem após finalização",
        "Coleta de feedback",
        "Melhoria contínua",
        "Solicitação de indicações",
        "Depoimentos no site ou Google"
      ],
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="agentes-ia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Agentes de IA
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossos agentes inteligentes trabalham 24/7 para otimizar seus processos, 
            desde a captação até o pós-venda, garantindo nenhuma oportunidade seja perdida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {agents.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${agent.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {agent.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {agent.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {agent.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-brand-gradient rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIAgentsSection;
