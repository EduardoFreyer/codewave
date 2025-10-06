"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  DollarSign,
  Code2,
  Database,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
} from "lucide-react"

interface Area {
  id: string
  title: string
  iconName: string
  description: string
  skills: string[]
  opportunities: string[]
  salary: string
  growth: string
}

interface AreasCarouselProps {
  areas: Area[]
}

const iconMap = {
  Code2,
  Database,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
}

export function AreasCarousel({ areas }: AreasCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % areas.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + areas.length) % areas.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentArea = areas[currentIndex]
  const Icon = iconMap[currentArea.iconName as keyof typeof iconMap] || Code2

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Card */}
      <Card className="min-h-[500px] p-6 md:p-8">
        <CardHeader className="text-center pb-6">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Icon className="h-12 w-12 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold">{currentArea.title}</CardTitle>
          <p className="text-muted-foreground text-lg">{currentArea.description}</p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Principais Tecnologias</h3>
            <div className="flex flex-wrap gap-2">
              {currentArea.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Opportunities */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Oportunidades de Carreira</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {currentArea.opportunities.map((opportunity) => (
                <div key={opportunity} className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  {opportunity}
                </div>
              ))}
            </div>
          </div>

          {/* Salary and Growth */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
              <DollarSign className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Faixa Salarial</p>
                <p className="font-semibold">{currentArea.salary}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Perspectiva</p>
                <p className="font-semibold">{currentArea.growth}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6">
        <Button variant="outline" size="icon" onClick={prevSlide} className="h-12 w-12 bg-transparent">
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {areas.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={nextSlide} className="h-12 w-12 bg-transparent">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Area Tabs */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {areas.map((area, index) => {
          const TabIcon = iconMap[area.iconName as keyof typeof iconMap] || Code2
          return (
            <button
              key={area.id}
              onClick={() => goToSlide(index)}
              className={`p-3 rounded-lg text-center transition-colors ${
                index === currentIndex
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              }`}
            >
              <TabIcon className="h-6 w-6 mx-auto mb-1" />
              <p className="text-xs font-medium">{area.title.split(" ")[0]}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
