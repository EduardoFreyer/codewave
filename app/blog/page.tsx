import { Navigation } from "@/components/navigation"
import { BlogGrid } from "@/components/blog-grid"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp, Users, BookOpen, Code } from "lucide-react"

export default function BlogPage() {
  const categories = [
    { name: "Carreira", count: 12, icon: TrendingUp },
    { name: "Tecnologia", count: 18, icon: Code },
    { name: "Mercado", count: 8, icon: Users },
    { name: "Estudos", count: 15, icon: BookOpen },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Blog <span className="text-primary">CodeWave</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Fique por dentro das novidades, tendências e curiosidades do mundo de Sistemas de Informação
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Buscar artigos..." className="pl-10 bg-background/80 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.name}
                  variant="outline"
                  className="flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Posts em Destaque</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Conteúdos selecionados para ajudar você a se manter atualizado na área de tecnologia
            </p>
          </div>
          <BlogGrid />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <Card className="max-w-2xl mx-auto text-center p-8">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold mb-4">Receba novidades por email</CardTitle>
              <p className="text-muted-foreground">
                Assine nossa newsletter e seja o primeiro a saber sobre novos artigos e oportunidades
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Seu melhor email" className="flex-1" />
                <Button>Assinar</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">Enviamos apenas conteúdo relevante. Sem spam.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">CodeWave</h3>
          <p className="text-secondary-foreground/80 mb-6">Sua jornada em Sistemas de Informação começa aqui</p>
          <div className="flex justify-center space-x-6">
            <a href="/" className="hover:text-white transition-colors">
              Início
            </a>
            <a href="/areas" className="hover:text-white transition-colors">
              Áreas
            </a>
            <a href="/grade" className="hover:text-white transition-colors">
              Grade
            </a>
            <a href="/blog" className="hover:text-white transition-colors">
              Blog
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
