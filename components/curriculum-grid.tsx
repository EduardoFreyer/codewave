"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Users, Code, Database, Shield, Briefcase, TrendingUp, Eye, EyeOff } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Subject {
  name: string
  hours: number
  type: "teorica" | "pratica" | "projeto"
  icon: LucideIcon
  description: string
}

interface Semester {
  number: number
  subjects: Subject[]
  focus: string
}

const curriculum: Semester[] = [
  {
    number: 1,
    focus: "Fundamentos",
    subjects: [
      {
        name: "Introdução à Computação",
        hours: 80,
        type: "teorica",
        icon: BookOpen,
        description: "Conceitos básicos de computação e história da informática",
      },
      {
        name: "Algoritmos e Programação I",
        hours: 80,
        type: "pratica",
        icon: Code,
        description: "Lógica de programação e estruturas básicas",
      },
      {
        name: "Matemática Discreta",
        hours: 80,
        type: "teorica",
        icon: TrendingUp,
        description: "Fundamentos matemáticos para computação",
      },
      {
        name: "Comunicação e Expressão",
        hours: 40,
        type: "teorica",
        icon: Users,
        description: "Técnicas de comunicação oral e escrita",
      },
      {
        name: "Fundamentos de Sistemas",
        hours: 60,
        type: "teorica",
        icon: Database,
        description: "Conceitos básicos de sistemas de informação",
      },
    ],
  },
  {
    number: 2,
    focus: "Programação",
    subjects: [
      {
        name: "Algoritmos e Programação II",
        hours: 80,
        type: "pratica",
        icon: Code,
        description: "Estruturas de dados e programação orientada a objetos",
      },
      {
        name: "Banco de Dados I",
        hours: 80,
        type: "pratica",
        icon: Database,
        description: "Modelagem e criação de bancos de dados relacionais",
      },
      {
        name: "Cálculo I",
        hours: 80,
        type: "teorica",
        icon: TrendingUp,
        description: "Fundamentos de cálculo diferencial e integral",
      },
      {
        name: "Inglês Técnico",
        hours: 40,
        type: "teorica",
        icon: BookOpen,
        description: "Inglês aplicado à área de tecnologia",
      },
      {
        name: "Arquitetura de Computadores",
        hours: 60,
        type: "teorica",
        icon: Database,
        description: "Hardware e organização de computadores",
      },
    ],
  },
  {
    number: 3,
    focus: "Desenvolvimento",
    subjects: [
      {
        name: "Programação Web I",
        hours: 80,
        type: "pratica",
        icon: Code,
        description: "HTML, CSS, JavaScript e desenvolvimento frontend",
      },
      {
        name: "Banco de Dados II",
        hours: 80,
        type: "pratica",
        icon: Database,
        description: "SQL avançado e administração de bancos",
      },
      {
        name: "Estruturas de Dados",
        hours: 80,
        type: "pratica",
        icon: Code,
        description: "Listas, pilhas, filas, árvores e grafos",
      },
      {
        name: "Estatística",
        hours: 60,
        type: "teorica",
        icon: TrendingUp,
        description: "Estatística aplicada à análise de dados",
      },
      {
        name: "Sistemas Operacionais",
        hours: 60,
        type: "teorica",
        icon: Database,
        description: "Conceitos e funcionamento de sistemas operacionais",
      },
    ],
  },
  {
    number: 4,
    focus: "Sistemas",
    subjects: [
      {
        name: "Programação Web II",
        hours: 80,
        type: "pratica",
        icon: Code,
        description: "Frameworks web e desenvolvimento backend",
      },
      {
        name: "Análise de Sistemas",
        hours: 80,
        type: "teorica",
        icon: Briefcase,
        description: "Levantamento e análise de requisitos",
      },
      {
        name: "Redes de Computadores",
        hours: 80,
        type: "teorica",
        icon: Database,
        description: "Protocolos de rede e comunicação",
      },
      {
        name: "Engenharia de Software I",
        hours: 80,
        type: "teorica",
        icon: Briefcase,
        description: "Metodologias de desenvolvimento de software",
      },
      {
        name: "Interface Humano-Computador",
        hours: 40,
        type: "teorica",
        icon: Users,
        description: "Usabilidade e experiência do usuário",
      },
    ],
  },
  {
    number: 5,
    focus: "Gestão",
    subjects: [
      {
        name: "Projeto de Sistemas I",
        hours: 80,
        type: "projeto",
        icon: Briefcase,
        description: "Desenvolvimento de projeto prático",
      },
      {
        name: "Engenharia de Software II",
        hours: 80,
        type: "pratica",
        icon: Briefcase,
        description: "Testes, qualidade e manutenção de software",
      },
      {
        name: "Segurança da Informação",
        hours: 60,
        type: "teorica",
        icon: Shield,
        description: "Conceitos de segurança e proteção de dados",
      },
      {
        name: "Gestão de Projetos",
        hours: 60,
        type: "teorica",
        icon: Users,
        description: "Metodologias ágeis e gestão de equipes",
      },
      {
        name: "Empreendedorismo",
        hours: 40,
        type: "teorica",
        icon: TrendingUp,
        description: "Inovação e criação de negócios em TI",
      },
    ],
  },
  {
    number: 6,
    focus: "Especialização",
    subjects: [
      {
        name: "Projeto de Sistemas II",
        hours: 80,
        type: "projeto",
        icon: Briefcase,
        description: "Continuação do projeto prático",
      },
      {
        name: "Inteligência Artificial",
        hours: 80,
        type: "pratica",
        icon: Code,
        description: "Machine learning e algoritmos inteligentes",
      },
      {
        name: "Governança de TI",
        hours: 60,
        type: "teorica",
        icon: Briefcase,
        description: "ITIL, COBIT e melhores práticas",
      },
      {
        name: "Desenvolvimento Mobile",
        hours: 80,
        type: "pratica",
        icon: Code,
        description: "Aplicações para dispositivos móveis",
      },
      {
        name: "Ética e Legislação",
        hours: 40,
        type: "teorica",
        icon: Shield,
        description: "Aspectos éticos e legais da TI",
      },
    ],
  },
  {
    number: 7,
    focus: "Integração",
    subjects: [
      {
        name: "Trabalho de Conclusão I",
        hours: 80,
        type: "projeto",
        icon: BookOpen,
        description: "Desenvolvimento do TCC",
      },
      {
        name: "Business Intelligence",
        hours: 80,
        type: "pratica",
        icon: TrendingUp,
        description: "Análise de dados e tomada de decisão",
      },
      {
        name: "Auditoria de Sistemas",
        hours: 60,
        type: "teorica",
        icon: Shield,
        description: "Auditoria e compliance em TI",
      },
      {
        name: "Sistemas Distribuídos",
        hours: 80,
        type: "teorica",
        icon: Database,
        description: "Arquiteturas distribuídas e cloud computing",
      },
      {
        name: "Optativa I",
        hours: 40,
        type: "teorica",
        icon: BookOpen,
        description: "Disciplina eletiva de especialização",
      },
    ],
  },
  {
    number: 8,
    focus: "Conclusão",
    subjects: [
      {
        name: "Trabalho de Conclusão II",
        hours: 80,
        type: "projeto",
        icon: BookOpen,
        description: "Finalização e apresentação do TCC",
      },
      {
        name: "Estágio Supervisionado",
        hours: 160,
        type: "pratica",
        icon: Briefcase,
        description: "Experiência prática em empresa",
      },
      {
        name: "Gestão Estratégica de TI",
        hours: 60,
        type: "teorica",
        icon: TrendingUp,
        description: "Alinhamento estratégico de TI com negócios",
      },
      {
        name: "Optativa II",
        hours: 40,
        type: "teorica",
        icon: BookOpen,
        description: "Segunda disciplina eletiva",
      },
    ],
  },
]

export function CurriculumGrid() {
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null)
  const [showAllSubjects, setShowAllSubjects] = useState(false)

  const getTypeColor = (type: Subject["type"]) => {
    switch (type) {
      case "teorica":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "pratica":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "projeto":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getTypeLabel = (type: Subject["type"]) => {
    switch (type) {
      case "teorica":
        return "Teórica"
      case "pratica":
        return "Prática"
      case "projeto":
        return "Projeto"
      default:
        return "Geral"
    }
  }

  return (
    <div className="space-y-8">
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded"></div>
          <span className="text-sm">Teórica</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-sm">Prática</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-purple-500 rounded"></div>
          <span className="text-sm">Projeto</span>
        </div>
      </div>

      <div className="text-center mb-6">
        <Button
          onClick={() => {
            setShowAllSubjects(!showAllSubjects)
            setSelectedSemester(null) // Clear individual semester selection
          }}
          variant={showAllSubjects ? "default" : "outline"}
          size="lg"
          className="gap-2"
        >
          {showAllSubjects ? (
            <>
              <EyeOff className="h-4 w-4" />
              Ocultar Todas as Disciplinas
            </>
          ) : (
            <>
              <Eye className="h-4 w-4" />
              Ver Todas as Disciplinas
            </>
          )}
        </Button>
      </div>

      {showAllSubjects ? (
        // All subjects view
        <div className="space-y-8">
          {curriculum.map((semester) => (
            <Card key={semester.number} className="overflow-hidden">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-xl text-center">
                  {semester.number}º Semestre - {semester.focus}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {semester.subjects.map((subject) => {
                    const Icon = subject.icon
                    return (
                      <Card key={subject.name} className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-3">
                          <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-sm">{subject.name}</h4>
                              <Badge className={`text-xs ${getTypeColor(subject.type)}`}>
                                {getTypeLabel(subject.type)}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">{subject.description}</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              {subject.hours}h
                            </div>
                          </div>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        // Original semester grid view
        <>
          {/* Semesters Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((semester) => (
              <Card
                key={semester.number}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedSemester === semester.number ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedSemester(selectedSemester === semester.number ? null : semester.number)}
              >
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{semester.number}º Semestre</CardTitle>
                  <p className="text-sm text-muted-foreground">{semester.focus}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {semester.subjects.slice(0, 3).map((subject) => {
                      const Icon = subject.icon
                      return (
                        <div key={subject.name} className="flex items-center space-x-2 text-sm">
                          <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="truncate">{subject.name}</span>
                        </div>
                      )
                    })}
                    {semester.subjects.length > 3 && (
                      <p className="text-xs text-muted-foreground text-center pt-2">
                        +{semester.subjects.length - 3} disciplinas
                      </p>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full mt-4 text-xs">
                    {selectedSemester === semester.number ? "Ocultar detalhes" : "Ver detalhes"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed View */}
          {selectedSemester && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  {selectedSemester}º Semestre - {curriculum[selectedSemester - 1].focus}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {curriculum[selectedSemester - 1].subjects.map((subject) => {
                    const Icon = subject.icon
                    return (
                      <Card key={subject.name} className="p-4">
                        <div className="flex items-start space-x-3">
                          <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-sm">{subject.name}</h4>
                              <Badge className={`text-xs ${getTypeColor(subject.type)}`}>
                                {getTypeLabel(subject.type)}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">{subject.description}</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              {subject.hours}h
                            </div>
                          </div>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  )
}
