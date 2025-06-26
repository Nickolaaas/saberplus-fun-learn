
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, 
  ThumbsUp, 
  MessageCircle, 
  Send,
  Search,
  Filter,
  Plus,
  BookOpen,
  LogOut
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Forum = () => {
  const navigate = useNavigate();
  const [newQuestion, setNewQuestion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const questions = [
    {
      id: 1,
      title: "Como resolver equação do 2º grau?",
      content: "Estou com dificuldade em entender o método de Bhaskara. Alguém pode me ajudar?",
      author: "João Silva",
      subject: "Matemática",
      likes: 12,
      replies: 8,
      timeAgo: "2 horas atrás",
      status: "answered"
    },
    {
      id: 2,
      title: "Dúvida sobre Segunda Guerra Mundial",
      content: "Qual foi o papel do Brasil na Segunda Guerra Mundial?",
      author: "Maria Santos",
      subject: "História",
      likes: 8,
      replies: 5,
      timeAgo: "5 horas atrás",
      status: "pending"
    },
    {
      id: 3,
      title: "Sistema Solar - Planetas",
      content: "Por que Plutão não é mais considerado um planeta?",
      author: "Pedro Costa",
      subject: "Ciências",
      likes: 15,
      replies: 12,
      timeAgo: "1 dia atrás",
      status: "answered"
    }
  ];

  const recentAnswers = [
    {
      id: 1,
      questionTitle: "Como resolver equação do 2º grau?",
      content: "Para resolver uma equação do 2º grau, você pode usar a fórmula de Bhaskara...",
      author: "Prof. Maria",
      timeAgo: "1 hora atrás",
      likes: 5
    },
    {
      id: 2,
      questionTitle: "Dúvida sobre Segunda Guerra Mundial",
      content: "O Brasil entrou na guerra em 1942, enviando a FEB (Força Expedicionária Brasileira)...",
      author: "Prof. Carlos",
      timeAgo: "3 horas atrás",
      likes: 8
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Saber+ Fórum
              </h1>
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
        {/* Search and Filter */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar dúvidas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
            <Plus className="h-4 w-4 mr-2" />
            Nova Pergunta
          </Button>
        </div>

        <Tabs defaultValue="questions" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="questions">Perguntas</TabsTrigger>
            <TabsTrigger value="answers">Respostas Recentes</TabsTrigger>
            <TabsTrigger value="ask">Fazer Pergunta</TabsTrigger>
          </TabsList>
          
          <TabsContent value="questions" className="space-y-6">
            <div className="space-y-4">
              {questions.map((question) => (
                <Card key={question.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline">{question.subject}</Badge>
                          <Badge variant={question.status === "answered" ? "default" : "secondary"}>
                            {question.status === "answered" ? "Respondida" : "Pendente"}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg mb-2">{question.title}</CardTitle>
                        <CardDescription className="text-base">{question.content}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{question.author}</span>
                        <span>{question.timeAgo}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-sm">{question.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-sm">{question.replies}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="answers" className="space-y-6">
            <div className="space-y-4">
              {recentAnswers.map((answer) => (
                <Card key={answer.id}>
                  <CardHeader>
                    <CardTitle className="text-base text-blue-600">{answer.questionTitle}</CardTitle>
                    <CardDescription className="text-base mt-2">{answer.content}</CardDescription>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="font-medium">{answer.author}</span>
                        <span>{answer.timeAgo}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-sm">{answer.likes}</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ask" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Faça uma nova pergunta</CardTitle>
                <CardDescription>
                  Descreva sua dúvida com detalhes para receber a melhor ajuda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Título da pergunta</label>
                  <Input placeholder="Ex: Como resolver equação do 2º grau?" />
                </div>
                <div>
                  <label className="text-sm font-medium">Matéria</label>
                  <Input placeholder="Ex: Matemática, História, Ciências..." />
                </div>
                <div>
                  <label className="text-sm font-medium">Descrição detalhada</label>
                  <Textarea
                    placeholder="Descreva sua dúvida com detalhes..."
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    rows={6}
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500">
                  <Send className="h-4 w-4 mr-2" />
                  Publicar Pergunta
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Forum;
