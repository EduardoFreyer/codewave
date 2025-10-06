import { Navigation } from "@/components/navigation"
import { AreasCarousel } from "@/components/areas-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AreasPage() {
  const areas = [
    {
      id: "desenvolvimento",
      title: "Desenvolvimento de Software",
      iconName: "lucide:code-2",
      description: "Criação de aplicações web, mobile e desktop usando tecnologias modernas",
      skills: ["JavaScript/TypeScript", "React/Angular/Vue", "Node.js", "Python", "Java", "C#"],
      opportunities: [
        "Desenvolvedor Full-Stack",
        "Desenvolvedor Frontend",
        "Desenvolvedor Backend",
        "Arquiteto de Software",
      ],
      salary: "R$ 6.000 - R$ 15.000",
      growth: "Alta demanda no mercado",
    },
    {
      id: "dados",
      title: "Ciência de Dados e BI",
      iconName: "lucide:bar-chart-3",
      description: "Análise de dados, machine learning e business intelligence para tomada de decisões",
      skills: ["Python/R", "SQL", "Power BI", "Tableau", "Machine Learning", "Estatística"],
      opportunities: ["Cientista de Dados", "Analista de BI", "Engenheiro de Dados", "Analista de Dados"],
      salary: "R$ 7.000 - R$ 18.000",
      growth: "Crescimento exponencial",
    },
    {
      id: "seguranca",
      title: "Segurança da Informação",
      iconName: "lucide:shield",
      description: "Proteção de sistemas, dados e infraestrutura contra ameaças cibernéticas",
      skills: ["Ethical Hacking", "Criptografia", "Firewall", "ISO 27001", "LGPD", "Forense Digital"],
      opportunities: ["Analista de Segurança", "Consultor em Segurança", "Auditor de TI", "CISO"],
      salary: "R$ 8.000 - R$ 20.000",
      growth: "Demanda crescente",
    },
    {
      id: "mobile",
      title: "Desenvolvimento Mobile",
      iconName: "lucide:smartphone",
      description: "Criação de aplicativos para dispositivos móveis iOS e Android",
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "UI/UX Mobile"],
      opportunities: ["Desenvolvedor Mobile", "Desenvolvedor iOS", "Desenvolvedor Android", "Mobile Architect"],
      salary: "R$ 6.500 - R$ 16.000",
      growth: "Mercado em expansão",
    },
    {
      id: "web",
      title: "Desenvolvimento Web",
      iconName: "lucide:globe",
      description: "Criação de sites, portais e sistemas web responsivos e modernos",
      skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "PHP", "WordPress"],
      opportunities: ["Desenvolvedor Web", "Frontend Developer", "Webmaster", "UI Developer"],
      salary: "R$ 5.000 - R$ 12.000",
      growth: "Base sólida do mercado",
    },
    {
      id: "banco-dados",
      title: "Administração de Banco de Dados",
      iconName: "lucide:database",
      description: "Gerenciamento, otimização e manutenção de sistemas de banco de dados",
      skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Oracle", "Performance Tuning"],
      opportunities: ["DBA", "Arquiteto de Dados", "Administrador de BD", "Especialista em SQL"],
      salary: "R$ 7.500 - R$ 17.000",
      growth: "Sempre necessário",
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
              Áreas de <span className="text-primary">Atuação</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Descubra as diversas oportunidades de carreira que o curso de Sistemas de Informação oferece
            </p>
          </div>
        </div>
      </section>

      {/* Areas Carousel */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore as Áreas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Cada área oferece oportunidades únicas de crescimento profissional e desenvolvimento de habilidades
              especializadas
            </p>
          </div>
          <AreasCarousel areas={areas} />
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Panorama do Mercado</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              O mercado de tecnologia está em constante crescimento, oferecendo excelentes oportunidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">500k+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Vagas abertas em TI no Brasil</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">25%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Crescimento anual do setor</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">R$ 12k</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Salário médio nacional</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para se especializar?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Conheça a grade curricular completa e veja como o curso prepara você para essas áreas
            </p>
            <Button size="lg" asChild>
              <Link href="/grade">
                Ver Grade Curricular <ArrowRight className="ml-2 h-4 w-4" />
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
