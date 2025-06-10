
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Wand2, 
  Plus, 
  FileText, 
  Video, 
  Link as LinkIcon,
  Clock,
  Target,
  Save,
  Eye,
  Trash2
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateQuiz = () => {
  const navigate = useNavigate();
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    text: "",
    type: "multiple",
    options: ["", "", "", ""],
    correct: 0,
    points: 10
  });

  const questionTypes = [
    { id: "multiple", name: "Múltipla Escolha", icon: Target },
    { id: "truefalse", name: "Verdadeiro/Falso", icon: FileText },
    { id: "open", name: "Dissertativa", icon: BookOpen }
  ];

  const supportMaterials = [
    { type: "video", name: "Vídeo Explicativo", icon: Video },
    { type: "pdf", name: "Material PDF", icon: FileText },
    { type: "link", name: "Link Externo", icon: LinkIcon }
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
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Criar Quiz
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate("/dashboard/manager")}>
                Voltar
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
                <Save className="h-4 w-4 mr-2" />
                Salvar Quiz
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
            <TabsTrigger value="questions">Questões</TabsTrigger>
            <TabsTrigger value="materials">Materiais</TabsTrigger>
            <TabsTrigger value="ai">Assistente IA</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações do Quiz</CardTitle>
                <CardDescription>
                  Defina as informações básicas e configurações do seu quiz
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Título do Quiz</label>
                  <input 
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    placeholder="Ex: Matemática - Equações do 2º Grau"
                    value={quizTitle}
                    onChange={(e) => setQuizTitle(e.target.value)}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Matéria</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>Matemática</option>
                      <option>Português</option>
                      <option>História</option>
                      <option>Geografia</option>
                      <option>Ciências</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Turma</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>8º A</option>
                      <option>8º B</option>
                      <option>9º A</option>
                      <option>9º B</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Tempo Limite</label>
                    <input 
                      type="number"
                      className="w-full p-3 border rounded-lg"
                      placeholder="20"
                    />
                    <span className="text-sm text-gray-600">minutos</span>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Dificuldade</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>Fácil</option>
                      <option>Médio</option>
                      <option>Difícil</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Pontuação Máxima</label>
                    <input 
                      type="number"
                      className="w-full p-3 border rounded-lg"
                      placeholder="100"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="questions" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Questões</h2>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
                <Plus className="h-4 w-4 mr-2" />
                Nova Questão
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {questionTypes.map((type) => (
                <Card key={type.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <type.icon className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                    <h3 className="font-medium">{type.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Banco de Questões</CardTitle>
                <CardDescription>
                  Reutilize questões de outros quizzes ou crie novas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Qual é a fórmula de Bhaskara?</h4>
                      <p className="text-sm text-gray-600">Matemática • Múltipla Escolha • 10 pontos</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="materials" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Materiais de Apoio</CardTitle>
                <CardDescription>
                  Adicione vídeos, PDFs e links para auxiliar os alunos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {supportMaterials.map((material) => (
                    <Card key={material.type} className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-4 text-center">
                        <material.icon className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                        <h3 className="font-medium">{material.name}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ai" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wand2 className="h-5 w-5 mr-2 text-purple-500" />
                  Assistente de IA
                </CardTitle>
                <CardDescription>
                  Use inteligência artificial para criar questões automaticamente
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Descreva o conteúdo</label>
                  <textarea 
                    className="w-full p-3 border rounded-lg h-32"
                    placeholder="Ex: Criar 5 questões sobre equações do segundo grau, incluindo resolução por fatoração e fórmula de Bhaskara..."
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Número de questões</label>
                    <input 
                      type="number"
                      className="w-full p-3 border rounded-lg"
                      placeholder="5"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Nível de dificuldade</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>Iniciante</option>
                      <option>Intermediário</option>
                      <option>Avançado</option>
                    </select>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Wand2 className="h-4 w-4 mr-2" />
                  Gerar Questões com IA
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CreateQuiz;
