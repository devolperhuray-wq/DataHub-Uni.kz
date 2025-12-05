import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Trophy, 
  ArrowRight, 
  Building2, 
  Globe, 
  Sparkles,
  ChevronRight
} from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "50+", label: "Университетов" },
  { icon: BookOpen, value: "500+", label: "Программ" },
  { icon: Users, value: "100K+", label: "Студентов" },
  { icon: Trophy, value: "95%", label: "Трудоустройство" },
];

const features = [
  {
    icon: Building2,
    title: "Информация об университетах",
    description: "Подробные данные о миссии, истории, достижениях и инфраструктуре ведущих вузов.",
  },
  {
    icon: BookOpen,
    title: "Академические программы",
    description: "Бакалавриат, магистратура, докторантура — найдите программу своей мечты.",
  },
  {
    icon: Globe,
    title: "Виртуальные туры",
    description: "Исследуйте кампусы университетов не выходя из дома с нашими 3D турами.",
  },
  {
    icon: Sparkles,
    title: "Умное сравнение",
    description: "Сравнивайте университеты по ключевым параметрам и принимайте взвешенные решения.",
  },
];

const universities = [
  { name: "МГУ им. Ломоносова", location: "Москва", rating: 4.9, programs: 120 },
  { name: "СПбГУ", location: "Санкт-Петербург", rating: 4.8, programs: 95 },
  { name: "МФТИ", location: "Москва", rating: 4.9, programs: 45 },
  { name: "ВШЭ", location: "Москва", rating: 4.7, programs: 150 },
];

export default function Index() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="container relative py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-fade-in">
              Найдите университет{" "}
              <span className="text-accent">вашей мечты</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              DataHub — ваш персональный помощник в выборе образования. 
              Сравнивайте университеты, изучайте программы и принимайте взвешенные решения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/programs">
                  Изучить программы
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/virtual-tour">
                  Виртуальный тур
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Всё для вашего выбора
            </h2>
            <p className="text-muted-foreground text-lg">
              Мы собрали все необходимые инструменты, чтобы помочь вам сделать правильный выбор.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="group card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border-0"
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                Топ университеты
              </h2>
              <p className="text-muted-foreground">
                Ведущие учебные заведения страны
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex">
              <Link to="/comparison">
                Смотреть все
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {universities.map((uni, index) => (
              <Card 
                key={uni.name}
                className="group card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border-0 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {uni.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{uni.location}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <span className="text-accent">★</span>
                      <span className="font-medium">{uni.rating}</span>
                    </span>
                    <span className="text-muted-foreground">{uni.programs} программ</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link to="/comparison">
                Смотреть все университеты
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Card className="hero-gradient border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
            <CardContent className="relative p-8 md:p-12 lg:p-16 text-center text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Готовы начать свой путь?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к тысячам студентов, которые уже нашли университет своей мечты с помощью DataHub.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/admission">
                    Подать заявку
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/programs">
                    Узнать больше
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
