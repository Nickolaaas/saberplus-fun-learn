
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Plus, 
  Settings,
  LogOut,
  FileText,
  Clock,
  Target,
  TrendingUp,
  Award,
  Edit,
  Trash2,
  Eye,
  MessageSquare
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ManagerDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { title: "Total de Alunos", value: "156", icon: Users, color: "text-blue-500" },
    { title: "Quizzes Criados", value: "24", icon: FileText, color: "text-green-500" },
    { title: "Taxa de Participação", value: "87%", icon: TrendingUp, color: "text-purple-500" },
    { title: "Média Geral", value: "78%", icon: Award, color: "text-yellow-500" }
  ];

  const recentQuizzes = [
    {
      id: 1,
      title: "Matemática - Equações do 2º Grau",
      subject: "Matemática",
      class: "9º A",
      participants: 28,
      avgScore: 85,
      status: "active"
    },
    {
      id: 2,
      title: "História - Segunda Guerra Mundial",
      subject: "História", 
      class: "9º B",
      participants: 25,
      avgScore: 78,
      status: "completed"
    },
    {
      id: 3,
      title: "Ciências - Sistema Solar",
      subject: "Ciências",
      class: "8º A",
      participants: 30,
      avgScore: 92,
      status: "draft"
    }
  ];

  const classes = [
    { name: "8º A", students: 30, avgScore: 82, activeQuizzes: 3 },
    { name: "8º B", students: 28, avgScore: 79, activeQuizzes: 2 },
    { name: "9º A", students: 32, avgScore: 85, activeQuizzes: 4 },
    { name: "9º B", students: 29, avgScore: 77, activeQuizzes: 3 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Saber+ Gestor
                </h1>
                <p className="text-sm text-gray-600">Bem-vindo, Prof. Maria!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                onClick={() => navigate("/create-quiz")}
              >
                <Plus className="h-4 w-4 mr-2" />
                Criar Quiz
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate("/reports")}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Relatórios
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate("/")}
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Sair</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="quizzes">Meus Quizzes</TabsTrigger>
            <TabsTrigger value="classes">Turmas</TabsTrigger>
            <TabsTrigger value="reports">Relatórios</TabsTrigger>
            <TabsTrigger value="forum">Fórum</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Atividade Recente</CardTitle>
                  <CardDescription>Últimos quizzes criados e resultados</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentQuizzes.slice(0, 3).map((quiz) => (
                    <div key={quiz.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{quiz.title}</h4>
                        <p className="text-sm text-gray-600">{quiz.class} • {quiz.participants} participantes</p>
                      </div>
                      <Badge variant={
                        quiz.status === "active" ? "default" :
                        quiz.status === "completed" ? "secondary" : "outline"
                      }>
                        {quiz.status === "active" ? "Ativo" :
                         quiz.status === "completed" ? "Finalizado" : "Rascunho"}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance das Turmas</CardTitle>
                  <CardDescription>Média de pontuação por turma</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {classes.map((classInfo, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{classInfo.name}</h4>
                        <p className="text-sm text-gray-600">{classInfo.students} alunos</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">{classInfo.avgScore}%</div>
                        <div className="text-sm text-gray-600">{classInfo.activeQuizzes} quizzes ativos</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="quizzes" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Meus Quizzes</h2>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                <Plus className="h-4 w-4 mr-2" />
                Novo Quiz
              </Button>
            </div>
            
            <div className="grid gap-6">
              {recentQuizzes.map((quiz) => (
                <Card key={quiz.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{quiz.title}</CardTitle>
                        <CardDescription>{quiz.subject} • {quiz.class}</CardDescription>
                      </div>
                      <Badge variant={
                        quiz.status === "active" ? "default" :
                        quiz.status === "completed" ? "secondary" : "outline"
                      }>
                        {quiz.status === "active" ? "Ativo" :
                         quiz.status === "completed" ? "Finalizado" : "Rascunho"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {quiz.participants} participantes
                        </span>
                        <span className="flex items-center">
                          <BarChart3 className="h-4 w-4 mr-1" />
                          Média: {quiz.avgScore}%
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Ver
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Editar
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Excluir
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="classes" className="space-y-6">
            <h2 className="text-2xl font-bold">Gerenciar Turmas</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classes.map((classInfo, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{classInfo.name}</CardTitle>
                    <CardDescription>{classInfo.students} alunos matriculados</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Média da turma:</span>
                        <span className="font-medium">{classInfo.avgScore}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Quizzes ativos:</span>
                        <span className="font-medium">{classInfo.activeQuizzes}</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Users className="h-4 w-4 mr-2" />
                        Gerenciar Turma
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reports" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Relatórios Disponíveis</CardTitle>
                  <CardDescription>Gere relatórios detalhados sobre o desempenho</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate("/reports")}
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Relatório de Desempenho Completo
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Relatório Individual de Alunos
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Relatório de Atividades por Período
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Análise de Evolução
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Estatísticas Gerais</CardTitle>
                  <CardDescription>Resumo do mês atual</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Quizzes realizados:</span>
                      <span className="font-medium">84</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Participação média:</span>
                      <span className="font-medium">87%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Melhor turma:</span>
                      <span className="font-medium">9º A (85%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Quiz mais popular:</span>
                      <span className="font-medium">Matemática</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="forum" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fórum de Dúvidas</CardTitle>
                <CardDescription>Gerencie as dúvidas dos alunos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Perguntas Pendentes</h3>
                    <div className="text-2xl font-bold text-orange-600">8</div>
                    <p className="text-sm text-gray-600">aguardando resposta</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Suas Respostas</h3>
                    <div className="text-2xl font-bold text-green-600">24</div>
                    <p className="text-sm text-gray-600">este mês</p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500"
                  onClick={() => navigate("/forum")}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Acessar Fórum
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ManagerDashboard;
