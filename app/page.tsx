import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Users, ArrowRight, BookOpen, Briefcase, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Bem-vindo ao <span className="text-primary">CodeWave</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8">
              Descubra tudo sobre o curso de Sistemas de Informação e prepare-se para uma carreira de sucesso na área de
              tecnologia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/areas">
                  Explorar Áreas <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/grade">Ver Grade Curricular</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">O que é Sistemas de Informação?</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Sistemas de Informação é um curso interdisciplinar que combina tecnologia, gestão e negócios. Forma
              profissionais capazes de desenvolver, implementar e gerenciar sistemas computacionais que atendem às
              necessidades organizacionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Desenvolvimento</h3>
                <p className="text-muted-foreground">
                  Criação de sistemas e aplicações usando as mais modernas tecnologias
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Banco de Dados</h3>
                <p className="text-muted-foreground">
                  Modelagem e gerenciamento de dados para suporte à tomada de decisões
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gestão</h3>
                <p className="text-muted-foreground">Administração de projetos e equipes de tecnologia da informação</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Inovação</h3>
                <p className="text-muted-foreground">Implementação de soluções tecnológicas inovadoras para negócios</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-primary mr-2" />
                <span className="text-4xl font-bold text-primary">8</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Semestres</h3>
              <p className="text-muted-foreground">Duração média do curso</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-primary mr-2" />
                <span className="text-4xl font-bold text-primary">95%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Empregabilidade</h3>
              <p className="text-muted-foreground">Taxa de inserção no mercado</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary mr-2" />
                <span className="text-4xl font-bold text-primary">R$ 8k</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Salário Médio</h3>
              <p className="text-muted-foreground">Para profissionais iniciantes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para começar sua jornada?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Explore as diferentes áreas de atuação e descubra qual caminho seguir na sua carreira em tecnologia
            </p>
            <Button size="lg" asChild>
              <Link href="/areas">
                Explorar Áreas de Atuação <ArrowRight className="ml-2 h-4 w-4" />
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
