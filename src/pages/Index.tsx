
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  BarChart3, 
  Gamepad2, 
  Shield, 
  Star,
  PlayCircle,
  CheckCircle,
  Target,
  Zap,
  Menu,
  X,
  Building2,
  Palette,
  Settings
} from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Building2 className="h-8 w-8 text-blue-500" />,
      title: "Plataforma Personalizada",
      description: "Sistema exclusivo para sua instituição com identidade visual, domínio próprio e funcionalidades adaptadas ao seu método de ensino."
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-green-500" />,
      title: "Quizzes Customizados", 
      description: "Crie avaliações gamificadas alinhadas com o currículo e metodologia específica da sua escola."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      title: "Relatórios Institucionais",
      description: "Dashboard exclusivo com métricas e indicadores de desempenho personalizados para sua gestão pedagógica."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Gestão Completa",
      description: "Controle total de usuários, turmas e permissões adaptado à estrutura organizacional da sua instituição."
    },
    {
      icon: <Palette className="h-8 w-8 text-red-500" />,
      title: "Identidade Visual",
      description: "Interface com as cores, logo e elementos visuais da sua escola para uma experiência integrada."
    },
    {
      icon: <Settings className="h-8 w-8 text-indigo-500" />,
      title: "Configuração Flexível",
      description: "Ajustes e parametrizações específicas para atender às necessidades pedagógicas da sua instituição."
    }
  ];

  const benefits = [
    "Ambiente exclusivo com domínio próprio da escola",
    "Customização completa da identidade visual", 
    "Integração com sistemas acadêmicos existentes",
    "Suporte técnico dedicado para sua instituição",
    "Treinamento personalizado para professores",
    "Controle total de dados e privacidade"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Saber+
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#solucoes" className="text-gray-700 hover:text-blue-600 transition-colors">Soluções</a>
              <a href="#personalizacao" className="text-gray-700 hover:text-blue-600 transition-colors">Personalização</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Solicitar Demonstração
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#solucoes" className="text-gray-700 hover:text-blue-600 transition-colors">Soluções</a>
                <a href="#personalizacao" className="text-gray-700 hover:text-blue-600 transition-colors">Personalização</a>
                <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  Solicitar Demonstração
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            🏫 Solução Exclusiva para sua Instituição
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sua Escola com
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Tecnologia Própria</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Desenvolvemos uma plataforma educacional gamificada exclusiva para sua instituição, 
            com identidade visual personalizada, domínio próprio e funcionalidades adaptadas à sua metodologia de ensino.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-4">
              <Building2 className="mr-2 h-5 w-5" />
              Agendar Reunião
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 hover:bg-gray-50">
              <PlayCircle className="mr-2 h-5 w-5" />
              Ver Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="solucoes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soluções Personalizadas para sua Instituição
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada escola é única. Por isso, desenvolvemos uma plataforma exclusiva que reflete a identidade e necessidades da sua instituição
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section id="personalizacao" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Por que escolher uma solução personalizada?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Sua instituição merece mais do que uma plataforma genérica. Oferecemos uma solução 
                completamente customizada que se integra à cultura e metodologia da sua escola.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Colégio São Francisco</h4>
                  <Badge className="bg-green-100 text-green-700">Personalizado</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Alunos Ativos:</span>
                    <span className="font-semibold text-blue-600">850 estudantes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Engajamento:</span>
                    <span className="font-semibold text-green-600">94% participação</span>
                  </div>
                  <div className="bg-gray-100 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{width: '94%'}}></div>
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm text-gray-600">Plataforma exclusiva em funcionamento</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3">
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como Funciona o Processo
            </h3>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Desenvolvemos sua plataforma em 3 etapas simples, garantindo que cada detalhe 
              reflita a identidade e necessidades da sua instituição.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Análise & Planejamento</h4>
                <p className="text-gray-600">Reunião para entender suas necessidades específicas e metodologia de ensino</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Desenvolvimento</h4>
                <p className="text-gray-600">Criação da plataforma personalizada com sua identidade visual e funcionalidades</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Implementação</h4>
                <p className="text-gray-600">Treinamento da equipe e lançamento da plataforma em seu domínio próprio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Ter sua Plataforma Exclusiva?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Agende uma reunião para descobrir como podemos criar a solução perfeita para sua instituição
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            <Building2 className="mr-2 h-5 w-5" />
            Agendar Reunião Gratuita
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold">Saber+</h4>
              </div>
              <p className="text-gray-400">
                Desenvolvendo plataformas educacionais exclusivas para instituições de ensino.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Soluções</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Plataforma Personalizada</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Identidade Visual</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Treinamento</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Suporte</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Suporte Técnico</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Treinamentos</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Agendar Reunião</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Saber+. Desenvolvendo soluções educacionais personalizadas.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
