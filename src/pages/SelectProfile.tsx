import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Settings, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SelectProfile = () => {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedProfile === "student") {
      navigate("/dashboard/student");
    } else if (selectedProfile === "manager") {
      navigate("/dashboard/manager");
    }
  };

  const profiles = [
    {
      id: "student",
      title: "Aluno",
      description: "Acesse quizzes, veja seu progresso e participe de atividades da sua turma",
      icon: <GraduationCap className="h-12 w-12 text-blue-500" />,
      features: [
        "Participar de quizzes",
        "Ver ranking da turma",
        "Acompanhar progresso",
        "Acessar materiais de apoio"
      ]
    },
    {
      id: "manager",
      title: "Professor",
      description: "Gerencie turmas, crie quizzes e acompanhe o desempenho dos alunos",
      icon: <Settings className="h-12 w-12 text-purple-500" />,
      features: [
        "Criar e gerenciar quizzes",
        "Visualizar relatórios detalhados",
        "Gerenciar turmas",
        "Upload de materiais"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Saber+
            </h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Selecione seu perfil</h2>
          <p className="text-gray-600">Escolha como você irá usar a plataforma</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {profiles.map((profile) => (
            <Card 
              key={profile.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedProfile === profile.id 
                  ? "ring-2 ring-blue-500 shadow-lg scale-105" 
                  : "hover:scale-102"
              }`}
              onClick={() => setSelectedProfile(profile.id)}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gray-50 rounded-full w-fit">
                  {profile.icon}
                </div>
                <CardTitle className="text-xl">{profile.title}</CardTitle>
                <CardDescription>{profile.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {profile.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleContinue}
            disabled={!selectedProfile}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-3"
          >
            <Users className="mr-2 h-5 w-5" />
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectProfile;
