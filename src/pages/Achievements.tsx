
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Award, 
  Trophy, 
  Star, 
  Target,
  Flame,
  BookOpen,
  Users,
  Clock,
  Share2,
  Download
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Achievements = () => {
  const navigate = useNavigate();

  const badges = [
    {
      id: 1,
      name: "Primeira Vitória",
      description: "Complete seu primeiro quiz",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      earned: true,
      earnedDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Sequência de 5",
      description: "Acerte 5 questões seguidas",
      icon: Target,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      earned: true,
      earnedDate: "2024-01-18"
    },
    {
      id: 3,
      name: "Especialista em Matemática",
      description: "Complete 10 quizzes de matemática",
      icon: BookOpen,
      color: "text-green-500",
      bgColor: "bg-green-50",
      earned: true,
      earnedDate: "2024-01-25"
    },
    {
      id: 4,
      name: "Velocista",
      description: "Complete um quiz em menos de 5 minutos",
      icon: Clock,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      earned: false,
      progress: 75
    },
    {
      id: 5,
      name: "Colaborativo",
      description: "Ajude 3 colegas no fórum",
      icon: Users,
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      earned: false,
      progress: 33
    },
    {
      id: 6,
      name: "Sequência de Fogo",
      description: "Mantenha uma sequência de 30 dias",
      icon: Flame,
      color: "text-red-500",
      bgColor: "bg-red-50",
      earned: false,
      progress: 60
    }
  ];

  const goals = [
    {
      id: 1,
      title: "Meta Semanal",
      description: "Complete 5 quizzes esta semana",
      current: 3,
      target: 5,
      type: "weekly"
    },
    {
      id: 2,
      title: "Meta Mensal",
      description: "Mantenha média acima de 80%",
      current: 85,
      target: 80,
      type: "monthly"
    },
    {
      id: 3,
      title: "Meta Anual",
      description: "Complete 200 quizzes no ano",
      current: 45,
      target: 200,
      type: "yearly"
    }
  ];

  const earnedBadges = badges.filter(badge => badge.earned);
  const unlockedBadges = badges.filter(badge => !badge.earned);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Conquistas e Badges
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
                <Download className="h-4 w-4 mr-2" />
                Certificado
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
              <CardTitle className="text-sm font-medium">Badges Conquistadas</CardTitle>
              <Award className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{earnedBadges.length}</div>
              <p className="text-xs text-muted-foreground">de {badges.length} disponíveis</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pontos Totais</CardTitle>
              <Star className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,450</div>
              <p className="text-xs text-muted-foreground">+150 esta semana</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sequência Atual</CardTitle>
              <Flame className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">dias consecutivos</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próximo Nível</CardTitle>
              <Trophy className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">faltam 130 pontos</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Badges Conquistadas */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Badges Conquistadas</CardTitle>
                <CardDescription>
                  Suas conquistas e marcos alcançados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {earnedBadges.map((badge) => (
                    <div 
                      key={badge.id}
                      className={`${badge.bgColor} p-4 rounded-lg border-2 border-dashed border-gray-200 text-center relative`}
                    >
                      <div className="absolute top-2 right-2">
                        <Badge variant="default" className="text-xs">
                          Conquistada
                        </Badge>
                      </div>
                      <badge.icon className={`h-8 w-8 mx-auto mb-2 ${badge.color}`} />
                      <h3 className="font-medium text-sm">{badge.name}</h3>
                      <p className="text-xs text-gray-600 mt-1">{badge.description}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        {new Date(badge.earnedDate).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Badges para Desbloquear */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Próximas Conquistas</CardTitle>
                <CardDescription>
                  Badges que você pode desbloquear
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {unlockedBadges.map((badge) => (
                    <div 
                      key={badge.id}
                      className="p-4 border rounded-lg bg-gray-50 relative opacity-75"
                    >
                      <div className="flex items-center space-x-4">
                        <badge.icon className={`h-8 w-8 ${badge.color}`} />
                        <div className="flex-1">
                          <h3 className="font-medium">{badge.name}</h3>
                          <p className="text-sm text-gray-600">{badge.description}</p>
                          {badge.progress && (
                            <div className="mt-2">
                              <div className="flex justify-between text-xs mb-1">
                                <span>Progresso</span>
                                <span>{badge.progress}%</span>
                              </div>
                              <Progress value={badge.progress} className="h-2" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Metas de Estudo */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Metas de Estudo</CardTitle>
            <CardDescription>
              Acompanhe seu progresso em relação às metas estabelecidas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {goals.map((goal) => (
                <div key={goal.id} className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">{goal.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{goal.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>{goal.current} / {goal.target}</span>
                    </div>
                    <Progress 
                      value={(goal.current / goal.target) * 100} 
                      className="h-2" 
                    />
                    
                    {goal.current >= goal.target ? (
                      <Badge className="bg-green-500">
                        <Trophy className="h-3 w-3 mr-1" />
                        Meta Alcançada!
                      </Badge>
                    ) : (
                      <p className="text-xs text-gray-500">
                        Faltam {goal.target - goal.current} para completar
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Achievements;
