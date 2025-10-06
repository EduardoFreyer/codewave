"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight, Heart, MessageCircle, Share2 } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  likes: number
  comments: number
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "As 10 Linguagens de Programação Mais Demandadas em 2024",
    excerpt:
      "Descubra quais linguagens estão dominando o mercado de trabalho e como se preparar para as oportunidades futuras.",
    author: "Ana Silva",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Tecnologia",
    image: "/programming-languages-code.jpg",
    likes: 124,
    comments: 18,
    featured: true,
  },
  {
    id: "2",
    title: "Como Construir um Portfólio Impressionante para Sistemas de Informação",
    excerpt:
      "Dicas práticas para criar um portfólio que chame a atenção dos recrutadores e demonstre suas habilidades.",
    author: "Carlos Santos",
    date: "2024-01-12",
    readTime: "6 min",
    category: "Carreira",
    image: "/portfolio-website-design.png",
    likes: 89,
    comments: 12,
    featured: true,
  },
  {
    id: "3",
    title: "Inteligência Artificial no Mercado de Trabalho: Oportunidade ou Ameaça?",
    excerpt:
      "Análise sobre como a IA está transformando o mercado e criando novas oportunidades para profissionais de TI.",
    author: "Maria Oliveira",
    date: "2024-01-10",
    readTime: "10 min",
    category: "Mercado",
    image: "/ai-robot.png",
    likes: 156,
    comments: 24,
    featured: true,
  },
  {
    id: "4",
    title: "Metodologias Ágeis: Scrum vs Kanban na Prática",
    excerpt: "Comparação detalhada entre as principais metodologias ágeis e quando usar cada uma em seus projetos.",
    author: "João Costa",
    date: "2024-01-08",
    readTime: "7 min",
    category: "Estudos",
    image: "/agile-methodology-scrum-board.jpg",
    likes: 67,
    comments: 9,
    featured: false,
  },
  {
    id: "5",
    title: "Segurança Cibernética: Tendências e Desafios para 2024",
    excerpt: "Principais ameaças digitais e como os profissionais de SI podem se preparar para enfrentá-las.",
    author: "Pedro Lima",
    date: "2024-01-05",
    readTime: "9 min",
    category: "Tecnologia",
    image: "/cybersecurity-shield.png",
    likes: 98,
    comments: 15,
    featured: false,
  },
  {
    id: "6",
    title: "Salários em TI: Guia Completo por Área e Experiência",
    excerpt: "Levantamento atualizado dos salários nas principais áreas de tecnologia no Brasil.",
    author: "Lucia Ferreira",
    date: "2024-01-03",
    readTime: "12 min",
    category: "Carreira",
    image: "/salary-money-calculator.jpg",
    likes: 203,
    comments: 31,
    featured: false,
  },
]

export function BlogGrid() {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set())

  const handleLike = (postId: string) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
      }
      return newSet
    })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Tecnologia":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Carreira":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Mercado":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "Estudos":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="space-y-12">
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-6">Destaques</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(post.category)}`}>{post.category}</Badge>
                </div>

                <CardHeader className="pb-3">
                  <h4 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-1 hover:text-red-500 transition-colors ${
                          likedPosts.has(post.id) ? "text-red-500" : ""
                        }`}
                      >
                        <Heart className={`h-4 w-4 ${likedPosts.has(post.id) ? "fill-current" : ""}`} />
                        <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                      </button>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                      <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                    <Button size="sm" variant="ghost" className="text-xs">
                      Ler mais <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-6">Todos os Posts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(post.category)}`}>{post.category}</Badge>
                </div>

                <CardHeader className="pb-3">
                  <h4 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-1 hover:text-red-500 transition-colors ${
                          likedPosts.has(post.id) ? "text-red-500" : ""
                        }`}
                      >
                        <Heart className={`h-4 w-4 ${likedPosts.has(post.id) ? "fill-current" : ""}`} />
                        <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                      </button>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                      <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                    <Button size="sm" variant="ghost" className="text-xs">
                      Ler mais <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Load More Button */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Carregar mais posts
        </Button>
      </div>
    </div>
  )
}
