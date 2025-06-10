
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  Plus, 
  Search,
  ThumbsUp,
  MessageCircle,
  Clock,
  User,
  BookOpen,
  Filter,
  Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Forum = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const forumPosts = [
    {
      id: 1,
      title: "Como resolver equações do segundo grau?",
      content: "Estou com dificuldades para entender a fórmula de Bhaskara. Alguém pode me explicar passo a passo?",
      author: "João Silva",
      subject: "Matemática",
      date: "2024-01-15T10:30:00",
      likes: 12,
      replies: 5,
      solved: true,
      tags: ["equação", "bhaskara", "matemática"]
    },
    {
      id: 2,
      title: "Período Composto - Português",
      content: "Preciso de ajuda para identificar orações subordinadas em períodos compostos.",
      author: "Maria Santos",
      subject: "Português",
      date: "2024-01-14T14:20:00",
      likes: 8,
      replies: 3,
      solved: false,
      tags: ["português", "gramática", "sintaxe"]
    },
    {
      id: 3,
      title: "Guerra Fria - Resumo",
      content: "Alguém tem um bom resumo sobre a Guerra Fria? Principalmente sobre os principais eventos.",
      author: "Pedro Costa",
      subject: "História",
      date: "2024-01-13T16:45:00",
      likes: 15,
      replies: 8,
      solved: false,
      tags: ["história", "guerra-fria", "século-xx"]
    },
    {
      id: 4,
      title: "Fotossíntese - Processo",
      content: "Como explicar o processo de fotossíntese de forma simples?",
      author: "Ana Lima",
      subject: "Ciências",
      date: "2024-01-12T09:15:00",
      likes: 6,
      replies: 4,
      solved: true,
      tags: ["ciências", "biologia", "fotossíntese"]
    }
  ];

  const topContributors = [
    { name: "Prof. Carlos", points: 245, answers: 18, badge: "Especialista" },
    { name: "Maria Eduarda", points: 189, answers: 12, badge: "Colaboradora" },
    { name: "João Pedro", points: 156, answers: 9, badge: "Ajudante" },
    { name: "Ana Carolina", points: 134, answers: 8, badge: "Participativa" }
  ];

  const subjects = [
    { name: "Matemática", posts: 45, color: "bg-blue-500" },
    { name: "Português", posts: 38, color: "bg-green-500" },
    { name: "História", posts: 32, color: "bg-purple-500" },
    { name: "Ciências", posts: 28, color: "bg-orange-500" },
    { name: "Geografia", posts: 22, color: "bg-red-500" }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Agora há pouco";
    if (diffInHours < 24) return `${diffInHours}h atrás`;
    return `${Math.floor(diffInHours / 24)} dias atrás`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Fórum de Dúvidas
              </h1>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
              <Plus className="h-4 w-4 mr-2" />
              Nova Pergunta
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Pesquisar dúvidas..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="recent">Recentes</TabsTrigger>
                <TabsTrigger value="unsolved">Não Resolvidas</TabsTrigger>
                <TabsTrigger value="popular">Populares</TabsTrigger>
                <TabsTrigger value="my-posts">Minhas Perguntas</TabsTrigger>
              </TabsList>
              
              <TabsContent value="recent" className="space-y-4">
                {forumPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">{post.subject}</Badge>
                            {post.solved && (
                              <Badge className="bg-green-500">
                                Resolvida
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {post.content}
                          </CardDescription>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="h-4 w-4 text-gray-400" />
                            <span className="text-sm">{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4 text-gray-400" />
                            <span className="text-sm">{post.replies}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="unsolved" className="space-y-4">
                {forumPosts.filter(post => !post.solved).map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    {/* Same structure as above but filtered */}
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="popular" className="space-y-4">
                {forumPosts.sort((a, b) => b.likes - a.likes).map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    {/* Same structure as above but sorted by likes */}
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="my-posts" className="space-y-4">
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Você ainda não fez nenhuma pergunta
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comece fazendo sua primeira pergunta para a comunidade!
                  </p>
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
                    <Plus className="h-4 w-4 mr-2" />
                    Fazer Pergunta
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-500" />
                  Top Colaboradores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{contributor.name}</h4>
                        <p className="text-sm text-gray-600">{contributor.answers} respostas</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold">{contributor.points} pts</div>
                        <Badge variant="outline" className="text-xs">
                          {contributor.badge}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Subjects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  Matérias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {subjects.map((subject, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${subject.color}`}></div>
                        <span className="font-medium">{subject.name}</span>
                      </div>
                      <Badge variant="secondary">{subject.posts}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Forum Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Diretrizes do Fórum</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-gray-600">
                  <li>• Seja respeitoso com todos os participantes</li>
                  <li>• Use títulos descritivos para suas perguntas</li>
                  <li>• Marque como resolvida quando sua dúvida for esclarecida</li>
                  <li>• Ajude outros estudantes sempre que possível</li>
                  <li>• Evite spam ou conteúdo irrelevante</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
