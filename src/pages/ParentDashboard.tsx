
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  TrendingUp, 
  Calendar,
  BookOpen,
  Award,
  Clock,
  Target,
  MessageSquare,
  Bell,
  Download,
  Eye
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ParentDashboard = () => {
  const navigate = useNavigate();

  const studentData = {
    name: "João Silva",
    class: "9º A",
    overallAverage: 85,
    weeklyGoal: 5,
    completedThisWeek: 3,
    streak: 12,
    totalQuizzes: 45,
    badges: 7
  };

  const recentActivity = [
    {
      date: "2024-01-15",
      activity: "Quiz de Matemática",
      score: 92,
      subject: "Matemática",
      time: "12 min"
    },
    {
      date: "2024-01-14",
      activity: "Quiz de História",
      score: 78,
      subject: "História",
      time: "15 min"
    },
    {
      date: "2024-01-13",
      activity: "Quiz de Ciências",
      score: 88,
      subject: "Ciências",
      time: "10 min"
    }
  ];

  const subjectPerformance = [
    { subject: "Matemática", average: 88, quizzes: 12, trend: "+5%" },
    { subject: "Português", average: 82, quizzes: 10, trend: "+2%" },
    { subject: "História", average: 85, quizzes: 8, trend: "+8%" },
    { subject: "Ciências", average: 90, quizzes: 9, trend: "+3%" },
    { subject: "Geografia", average: 79, quizzes: 6, trend: "-1%" }
  ];

  const goals = [
    {
      title: "Meta Semanal",
      description: "Completar 5 quizzes por semana",
      current: 3,
      target: 5,
      progress: 60
    },
    {
      title: "Média Mensal",
      description: "Manter média acima de 80%",
      current: 85,
      target: 80,
      progress: 100
    },
    {
      title: "Sequência de Estudos",
      description: "Estudar 20 dias consecutivos",
      current: 12,
      target: 20,
      progress: 60
    }
  ];

  const notifications = [
    {
      type: "achievement",
      message: "João conquistou a badge 'Especialista em Matemática'",
      date: "2024-01-15",
      read: false
    },
    {
      type: "goal",
      message: "Meta semanal: 3 de 5 quizzes completados",
      date: "2024-01-15",
      read: false
    },
    {
      type: "report",
      message: "Relatório mensal disponível para download",
      date: "2024-01-14",
      read: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Acompanhamento - {studentData.name}
                </h1>
                <p className="text-sm text-gray-600">Turma: {studentData.class}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="relative">
                <Bell className="h-4 w-4" />
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications.filter(n => !n.read).length}
                  </span>
                )}
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
                <Download className="h-4 w-4 mr-2" />
                Relatório
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Média Geral</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentData.overallAverage}%</div>
              <p className="text-xs text-green-600">+3% este mês</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quizzes Realizados</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentData.totalQuizzes}</div>
              <p className="text-xs text-muted-foreground">total no ano</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sequência de Estudos</CardTitle>
              <Calendar className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentData.streak}</div>
              <p className="text-xs text-muted-foreground">dias consecutivos</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Badges Conquistadas</CardTitle>
              <Award className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentData.badges}</div>
              <p className="text-xs text-muted-foreground">conquistas</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="performance">Desempenho</TabsTrigger>
            <TabsTrigger value="goals">Metas</TabsTrigger>
            <TabsTrigger value="activity">Atividades</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Weekly Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Progresso Semanal</CardTitle>
                  <CardDescription>
                    Meta: {studentData.weeklyGoal} quizzes por semana
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm">Completados esta semana</span>
                      <span className="font-medium">{studentData.completedThisWeek} de {studentData.weeklyGoal}</span>
                    </div>
                    <Progress value={(studentData.completedThisWeek / studentData.weeklyGoal) * 100} className="h-3" />
                    <p className="text-sm text-gray-600">
                      Faltam {studentData.weeklyGoal - studentData.completedThisWeek} quizzes para atingir a meta semanal
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Atividade Recente</CardTitle>
                  <CardDescription>
                    Últimos quizzes realizados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.slice(0, 3).map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{activity.activity}</h4>
                          <p className="text-sm text-gray-600">
                            {new Date(activity.date).toLocaleDateString('pt-BR')} • {activity.time}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{activity.score}%</div>
                          <Badge variant="outline">{activity.subject}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Desempenho por Matéria</CardTitle>
                <CardDescription>
                  Acompanhe o progresso em cada disciplina
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {subjectPerformance.map((subject, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{subject.subject}</h3>
                          <p className="text-sm text-gray-600">{subject.quizzes} quizzes realizados</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold">{subject.average}%</div>
                          <div className={`text-sm ${
                            subject.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {subject.trend}
                          </div>
                        </div>
                      </div>
                      <Progress value={subject.average} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="goals" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goals.map((goal, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{goal.title}</CardTitle>
                    <CardDescription>{goal.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm">Progresso</span>
                        <span className="font-medium">{goal.current} / {goal.target}</span>
                      </div>
                      <Progress value={goal.progress} className="h-3" />
                      
                      {goal.progress >= 100 ? (
                        <Badge className="bg-green-500">
                          <Award className="h-3 w-3 mr-1" />
                          Meta Alcançada!
                        </Badge>
                      ) : (
                        <p className="text-sm text-gray-600">
                          {goal.target - goal.current} restantes
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Atividades</CardTitle>
                <CardDescription>
                  Todas as atividades realizadas pelo estudante
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <BookOpen className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{activity.activity}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{new Date(activity.date).toLocaleDateString('pt-BR')}</span>
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {activity.time}
                            </span>
                            <Badge variant="outline">{activity.subject}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">{activity.score}%</div>
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Detalhes
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notificações</CardTitle>
                <CardDescription>
                  Acompanhe as conquistas e atualizações do seu filho
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification, index) => (
                    <div key={index} className={`p-4 border rounded-lg ${
                      !notification.read ? 'bg-blue-50 border-blue-200' : 'bg-gray-50'
                    }`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium">{notification.message}</p>
                          <p className="text-sm text-gray-600 mt-1">
                            {new Date(notification.date).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full ml-4 mt-2"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ParentDashboard;
