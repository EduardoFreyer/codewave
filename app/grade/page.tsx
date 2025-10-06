import { Navigation } from "@/components/navigation"
import { CurriculumGrid } from "@/components/curriculum-grid"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Clock, BookOpen, Award, Users } from "lucide-react"
import Link from "next/link"

export default function GradePage() {
  const courseInfo = {
    duration: "8 semestres",
    totalHours: "3.200 horas",
    type: "Bacharelado",
    modality: "Presencial/EAD",
  }

  const highlights = [
    {
      icon: BookOpen,
      title: "Formação Completa",
      description: "Currículo abrangente que combina teoria e prática",
    },
    {
      icon: Users,
      title: "Projetos Práticos",
      description: "Desenvolvimento de sistemas reais durante o curso",
    },
    {
      icon: Award,
      title: "Certificações",
      description: "Preparação para certificações do mercado",
    },
    {
      icon: Clock,
      title: "Flexibilidade",
      description: "Opções de horários para diferentes perfis",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Grade <span className="text-primary">Curricular</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Conheça todas as disciplinas que compõem o curso de Sistemas de Informação, organizadas por semestre
            </p>
          </div>
        </div>
      </section>

      {/* Course Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{courseInfo.duration}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Duração do curso</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{courseInfo.totalHours}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Carga horária total</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{courseInfo.type}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Tipo de graduação</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{courseInfo.modality}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Modalidade</p>
              </CardContent>
            </Card>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight) => {
              const Icon = highlight.icon
              return (
                <Card key={highlight.title} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Curriculum Grid */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Disciplinas por Semestre</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Grade curricular estruturada para formar profissionais completos e preparados para o mercado
            </p>
          </div>
          <CurriculumGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interessado no curso?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Acompanhe nosso blog para ficar por dentro das novidades e curiosidades sobre Sistemas de Informação
            </p>
            <Button size="lg" asChild>
              <Link href="/blog">
                Acessar Blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">CodeWave</h3>
          <p className="text-secondary-foreground/80 mb-6">Sua jornada em Sistemas de Informação começa aqui</p>
          <div className="flex justify-center space-x-6">
            <Link href="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <Link href="/areas" className="hover:text-white transition-colors">
              Áreas
            </Link>
            <Link href="/grade" className="hover:text-white transition-colors">
              Grade
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
