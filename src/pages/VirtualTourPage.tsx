import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  MapPin, 
  Eye, 
  Clock, 
  ChevronRight,
  Building2,
  TreePine,
  BookOpen,
  Dumbbell,
  Coffee
} from "lucide-react";

const tours = [
  {
    id: 1,
    university: "МГУ им. Ломоносова",
    location: "Москва",
    duration: "15 мин",
    views: 12500,
    spots: ["Главное здание", "Библиотека", "Ботанический сад", "Спорткомплекс"],
    thumbnail: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: 2,
    university: "МФТИ",
    location: "Долгопрудный",
    duration: "12 мин",
    views: 8300,
    spots: ["Главный корпус", "Лаборатории", "Общежития", "Столовая"],
    thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: 3,
    university: "ВШЭ",
    location: "Москва",
    duration: "10 мин",
    views: 9800,
    spots: ["Покровка", "Мясницкая", "Шаболовка", "Библиотека"],
    thumbnail: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: 4,
    university: "СПбГУ",
    location: "Санкт-Петербург",
    duration: "14 мин",
    views: 7200,
    spots: ["Двенадцать коллегий", "Василеостровский кампус", "Петергоф"],
    thumbnail: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop",
    featured: true,
  },
];

const spotIcons = {
  "Главное здание": Building2,
  "Библиотека": BookOpen,
  "Ботанический сад": TreePine,
  "Спорткомплекс": Dumbbell,
  "Столовая": Coffee,
};

export default function VirtualTourPage() {
  const [selectedTour, setSelectedTour] = useState(tours[0]);

  return (
    <main className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Виртуальные <span className="text-gradient">3D туры</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Исследуйте кампусы ведущих университетов, не выходя из дома.
          </p>
        </div>

        {/* Featured Tour */}
        <Card className="card-shadow border-0 mb-12 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto">
              <img
                src={selectedTour.thumbnail}
                alt={selectedTour.university}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="xl" 
                  className="rounded-full h-20 w-20 bg-primary-foreground/90 hover:bg-primary-foreground text-primary"
                >
                  <Play className="h-8 w-8 ml-1" fill="currentColor" />
                </Button>
              </div>
              <Badge className="absolute top-4 left-4 bg-primary">
                {selectedTour.featured ? "Популярный" : "3D Тур"}
              </Badge>
            </div>
            <CardContent className="p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                {selectedTour.university}
              </h2>
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {selectedTour.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {selectedTour.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {selectedTour.views.toLocaleString()}
                </span>
              </div>

              <h4 className="font-semibold mb-3">Локации тура:</h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {selectedTour.spots.map((spot) => {
                  const Icon = spotIcons[spot as keyof typeof spotIcons] || Building2;
                  return (
                    <div
                      key={spot}
                      className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-sm">{spot}</span>
                    </div>
                  );
                })}
              </div>

              <Button size="lg" className="w-full sm:w-auto">
                Начать тур
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </div>
        </Card>

        {/* All Tours */}
        <h3 className="text-2xl font-serif font-bold mb-6">Все виртуальные туры</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              onClick={() => setSelectedTour(tour)}
              className={`group cursor-pointer card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden ${
                selectedTour.id === tour.id ? "ring-2 ring-primary" : ""
              }`}
            >
              <div className="relative aspect-video">
                <img
                  src={tour.thumbnail}
                  alt={tour.university}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="font-semibold text-primary-foreground text-sm mb-1">
                    {tour.university}
                  </h4>
                  <div className="flex items-center gap-2 text-primary-foreground/80 text-xs">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {tour.views.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-12 w-12 rounded-full bg-primary-foreground/90 flex items-center justify-center">
                    <Play className="h-5 w-5 text-primary ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <Card className="mt-12 hero-gradient border-0 overflow-hidden">
          <CardContent className="p-8 md:p-12 text-center text-primary-foreground">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Хотите добавить свой университет?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Мы помогаем университетам создавать интерактивные 3D туры для привлечения абитуриентов.
            </p>
            <Button variant="hero" size="lg">
              Связаться с нами
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
