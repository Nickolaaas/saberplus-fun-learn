import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Trophy, 
  PlayCircle, 
  Clock, 
  Target,
  Award,
  TrendingUp,
  Star,
  LogOut,
  MessageSquare
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const quizzes = [
    {
      id: 1,
      title: "Matemática - Equações do 2º Grau",
      subject: "Matemática",
      questions: 15,
      timeLimit: "20 min",
      difficulty: "Médio",
      completed: false
    },
    {
      id: 2,
      title: "História - Segunda Guerra Mundial",
      subject: "História",
      questions: 20,
      timeLimit: "25 min",
      difficulty: "Fácil",
      completed: true,
      score: 85
    },
    {
      id: 3,
      title: "Ciências - Sistema Solar",
      subject: "Ciências",
      questions: 12,
      timeLimit: "15 min",
      difficulty: "Médio",
      completed: false
    }
  ];

  const ranking = [
    { position: 1, name: "Maria Silva", score: 950 },
    { position: 2, name: "João Santos", score: 920 },
    { position: 3, name: "Você", score: 890 },
    { position: 4, name: "Ana Costa", score: 870 },
    { position: 5, name: "Pedro Lima", score: 850 }
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
                  Saber+ Aluno
                </h1>
                <p className="text-sm text-gray-600">Bem-vindo, João!</p>
              </div>
            </div>
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
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quizzes Realizados</CardTitle>
              <Target className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 desde ontem</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pontuação Total</CardTitle>
              <Trophy className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">890</div>
              <p className="text-xs text-muted-foreground">3º lugar na turma</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Média Geral</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">+5% este mês</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conquistas</CardTitle>
              <Award className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">badges conquistadas</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quizzes Disponíveis */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Quizzes Disponíveis</CardTitle>
                <CardDescription>
                  Complete os quizzes para ganhar pontos e subir no ranking
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {quizzes.map((quiz) => (
                  <div 
                    key={quiz.id}
                    className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{quiz.title}</h3>
                      <Badge variant={quiz.completed ? "default" : "secondary"}>
                        {quiz.completed ? "Concluído" : "Pendente"}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {quiz.subject}
                      </span>
                      <span className="flex items-center">
                        <Target className="h-4 w-4 mr-1" />
                        {quiz.questions} questões
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {quiz.timeLimit}
                      </span>
                    </div>
                    {quiz.completed ? (
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-600">
                          Pontuação: {quiz.score}%
                        </span>
                        <Button variant="outline" size="sm">
                          Ver Resultado
                        </Button>
                      </div>
                    ) : (
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Iniciar Quiz
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Nova seção para acesso rápido */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate("/achievements")}>
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                  <h3 className="font-medium">Conquistas</h3>
                  <p className="text-sm text-gray-600">Ver badges e metas</p>
                </CardContent>
              </Card>
              
              <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate("/forum")}>
                <CardContent className="p-4 text-center">
                  <MessageSquare className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <h3 className="font-medium">Fórum</h3>
                  <p className="text-sm text-gray-600">Tire suas dúvidas</p>
                </CardContent>
              </Card>
              
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                  <h3 className="font-medium">Histórico</h3>
                  <p className="text-sm text-gray-600">Ver resultados anteriores</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Ranking da Turma */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Ranking da Turma</CardTitle>
                <CardDescription>
                  Veja sua posição entre os colegas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ranking.map((student) => (
                    <div 
                      key={student.position}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        student.name === "Você" 
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200" 
                          : "bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          student.position === 1 ? "bg-yellow-500 text-white" :
                          student.position === 2 ? "bg-gray-400 text-white" :
                          student.position === 3 ? "bg-amber-600 text-white" :
                          "bg-gray-200 text-gray-700"
                        }`}>
                          {student.position <= 3 ? (
                            <Trophy className="h-4 w-4" />
                          ) : (
                            student.position
                          )}
                        </div>
                        <span className={`font-medium ${
                          student.name === "Você" ? "text-blue-700" : "text-gray-900"
                        }`}>
                          {student.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="font-bold">{student.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progresso Semanal */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Progresso Semanal</CardTitle>
                <CardDescription>
                  Meta: 5 quizzes por semana
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>3 de 5 quizzes</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <p className="text-xs text-gray-600">
                    Faltam 2 quizzes para bater sua meta!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
