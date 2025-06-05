
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
  X
} from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Gamepad2 className="h-8 w-8 text-blue-500" />,
      title: "Quizzes Gamificados",
      description: "Crie quizzes interativos com pontuação, tempo e elementos de jogo que mantêm os alunos engajados."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-500" />,
      title: "Relatórios Detalhados", 
      description: "Acompanhe o progresso com gráficos e análises completas de desempenho dos alunos."
    },
    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      title: "Rankings e Pódios",
      description: "Motivação extra com rankings por turma e pódios destacando os melhores desempenhos."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Gestão de Turmas",
      description: "Organize alunos, professores e gestores com perfis personalizados para cada função."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
      title: "Material de Apoio",
      description: "Anexe vídeos, PDFs e links para complementar o aprendizado dos estudantes."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "100% Gratuito",
      description: "Plataforma totalmente gratuita, desenvolvida para democratizar o ensino gamificado."
    }
  ];

  const benefits = [
    "Interface responsiva para web e mobile",
    "Feedback imediato aos alunos", 
    "Suporte a até 10.000 usuários simultâneos",
    "Conformidade com padrões de acessibilidade",
    "Backup automático e segurança avançada"
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
              <a href="#recursos" className="text-gray-700 hover:text-blue-600 transition-colors">Recursos</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Começar Agora
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
                <a href="#recursos" className="text-gray-700 hover:text-blue-600 transition-colors">Recursos</a>
                <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
                <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  Começar Agora
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
            🎯 Plataforma Educacional Gamificada
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforme o 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Aprendizado </span>
            em Diversão
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A Saber+ é uma plataforma gratuita que usa gamificação para tornar o ensino mais eficaz e divertido. 
            Crie quizzes interativos, acompanhe o progresso e motive seus alunos com rankings e desafios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-4">
              <PlayCircle className="mr-2 h-5 w-5" />
              Experimentar Grátis
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 hover:bg-gray-50">
              <Target className="mr-2 h-5 w-5" />
              Ver Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recursos Poderosos para o Ensino Moderno
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra como a Saber+ pode revolucionar a experiência educacional em sua instituição
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

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Por que escolher a Saber+?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Nossa plataforma foi desenvolvida especificamente para atender às necessidades do ensino brasileiro, 
                combinando tecnologia de ponta com facilidade de uso.
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
                  <h4 className="text-lg font-semibold text-gray-900">Quiz: Matemática Básica</h4>
                  <Badge className="bg-green-100 text-green-700">Ativo</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Participantes:</span>
                    <span className="font-semibold text-blue-600">127 alunos</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Média de pontos:</span>
                    <span className="font-semibold text-green-600">8.4/10</span>
                  </div>
                  <div className="bg-gray-100 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{width: '84%'}}></div>
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm text-gray-600">Excelente engajamento!</span>
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

      {/* About Section */}
      <section id="sobre" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre a Saber+
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A Saber+ nasceu da necessidade de democratizar o ensino gamificado no Brasil. 
              Nossa plataforma gratuita permite que escolas públicas e privadas tenham acesso 
              às mesmas ferramentas tecnológicas avançadas para tornar o aprendizado mais eficaz e divertido.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Usuários Simultâneos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Gratuito</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Revolucionar sua Sala de Aula?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de educadores que já estão transformando o aprendizado com a Saber+
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            <PlayCircle className="mr-2 h-5 w-5" />
            Começar Gratuitamente
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
                Transformando o ensino através da gamificação e tecnologia.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Plataforma</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Suporte</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Saber+. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
