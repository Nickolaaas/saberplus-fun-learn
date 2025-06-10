
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Download,
  Calendar,
  Target,
  BookOpen,
  Award,
  Filter
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const studentPerformance = [
    { name: "João Silva", score: 92, quizzes: 15, improvement: "+8%" },
    { name: "Maria Santos", score: 88, quizzes: 14, improvement: "+5%" },
    { name: "Pedro Costa", score: 85, quizzes: 13, improvement: "+12%" },
    { name: "Ana Lima", score: 82, quizzes: 16, improvement: "+3%" },
    { name: "Carlos Mendes", score: 78, quizzes: 12, improvement: "-2%" }
  ];

  const classComparison = [
    { class: "8º A", average: 85, participation: 95, quizzes: 24 },
    { class: "8º B", average: 82, participation: 88, quizzes: 22 },
    { class: "9º A", average: 87, participation: 92, quizzes: 26 },
    { class: "9º B", average: 80, participation: 85, quizzes: 20 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Relatórios de Desempenho
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Period Selection */}
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <Calendar className="h-5 w-5 text-gray-600" />
            <span className="font-medium">Período:</span>
            <div className="flex space-x-2">
              {[
                { id: "week", label: "Última Semana" },
                { id: "month", label: "Último Mês" },
                { id: "quarter", label: "Trimestre" },
                { id: "year", label: "Ano Letivo" }
              ].map((period) => (
                <Button
                  key={period.id}
                  variant={selectedPeriod === period.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPeriod(period.id)}
                >
                  {period.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="individual">Desempenho Individual</TabsTrigger>
            <TabsTrigger value="class">Comparativo Turmas</TabsTrigger>
            <TabsTrigger value="evolution">Evolução Temporal</TabsTrigger>
            <TabsTrigger value="institutional">Institucional</TabsTrigger>
          </TabsList>
          
          <TabsContent value="individual" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Média Geral</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">84.2%</div>
                  <p className="text-xs text-green-600">+5.2% vs período anterior</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Taxa de Participação</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                  <p className="text-xs text-blue-600">156 de 170 alunos</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Quizzes Realizados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-xs text-purple-600">+18% vs período anterior</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12min</div>
                  <p className="text-xs text-gray-600">por quiz</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Ranking de Desempenho</CardTitle>
                <CardDescription>
                  Top 5 alunos com melhor desempenho no período
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentPerformance.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          index === 0 ? "bg-yellow-500 text-white" :
                          index === 1 ? "bg-gray-400 text-white" :
                          index === 2 ? "bg-amber-600 text-white" :
                          "bg-gray-200 text-gray-700"
                        }`}>
                          {index < 3 ? <Award className="h-4 w-4" /> : index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium">{student.name}</h4>
                          <p className="text-sm text-gray-600">{student.quizzes} quizzes realizados</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">{student.score}%</div>
                        <div className={`text-sm ${
                          student.improvement.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {student.improvement}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="class" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Comparativo entre Turmas</CardTitle>
                <CardDescription>
                  Análise do desempenho médio por turma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {classComparison.map((classData, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">{classData.class}</h3>
                        <Badge variant="outline">{classData.quizzes} quizzes</Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-gray-600">Média de Notas</span>
                            <span className="font-medium">{classData.average}%</span>
                          </div>
                          <Progress value={classData.average} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-gray-600">Participação</span>
                            <span className="font-medium">{classData.participation}%</span>
                          </div>
                          <Progress value={classData.participation} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="evolution" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Evolução das Notas</CardTitle>
                <CardDescription>
                  Acompanhe a progressão dos alunos ao longo do tempo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600">Gráfico de evolução será exibido aqui</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="institutional" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-blue-500" />
                    Visão Geral
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total de Alunos:</span>
                    <span className="font-medium">170</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Professores Ativos:</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Turmas:</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Quizzes Criados:</span>
                    <span className="font-medium">156</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-green-500" />
                    Metas Institucionais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Meta de Participação</span>
                      <span className="text-sm">92% / 90%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Meta de Aproveitamento</span>
                      <span className="text-sm">84% / 80%</span>
                    </div>
                    <Progress value={84} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-purple-500" />
                    Por Matéria
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { subject: "Matemática", score: 86 },
                    { subject: "Português", score: 82 },
                    { subject: "História", score: 88 },
                    { subject: "Ciências", score: 85 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{item.subject}</span>
                        <span className="text-sm font-medium">{item.score}%</span>
                      </div>
                      <Progress value={item.score} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Reports;
