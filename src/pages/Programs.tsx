import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Clock, Users, BookOpen, ArrowRight } from "lucide-react";

const programs = [
  {
    id: 1,
    name: "Компьютерные науки",
    university: "МГУ им. Ломоносова",
    level: "Бакалавриат",
    duration: "4 года",
    students: 250,
    tags: ["IT", "Программирование", "Data Science"],
    description: "Изучение фундаментальных основ информатики, алгоритмов и программирования.",
  },
  {
    id: 2,
    name: "Экономика и финансы",
    university: "ВШЭ",
    level: "Магистратура",
    duration: "2 года",
    students: 120,
    tags: ["Экономика", "Финансы", "Аналитика"],
    description: "Углубленное изучение экономической теории и финансовых рынков.",
  },
  {
    id: 3,
    name: "Искусственный интеллект",
    university: "МФТИ",
    level: "Магистратура",
    duration: "2 года",
    students: 80,
    tags: ["AI", "Machine Learning", "Deep Learning"],
    description: "Разработка и применение систем искусственного интеллекта.",
  },
  {
    id: 4,
    name: "Международные отношения",
    university: "МГИМО",
    level: "Бакалавриат",
    duration: "4 года",
    students: 180,
    tags: ["Политология", "Дипломатия", "Языки"],
    description: "Подготовка специалистов в области международной политики.",
  },
  {
    id: 5,
    name: "Биоинформатика",
    university: "СПбГУ",
    level: "Докторантура",
    duration: "3 года",
    students: 25,
    tags: ["Биология", "IT", "Исследования"],
    description: "Междисциплинарная область на стыке биологии и информатики.",
  },
  {
    id: 6,
    name: "Цифровой маркетинг",
    university: "РАНХиГС",
    level: "Магистратура",
    duration: "2 года",
    students: 95,
    tags: ["Маркетинг", "Digital", "Аналитика"],
    description: "Современные методы продвижения в цифровой среде.",
  },
];

const levels = ["Все", "Бакалавриат", "Магистратура", "Докторантура"];

export default function Programs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("Все");

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch = program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLevel = selectedLevel === "Все" || program.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <main className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Академические <span className="text-gradient">программы</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Найдите программу обучения, которая соответствует вашим целям и интересам.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Поиск по программам, университетам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {levels.map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? "default" : "outline"}
                onClick={() => setSelectedLevel(level)}
                className="h-12"
              >
                {level}
              </Button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-muted-foreground mb-6">
          Найдено программ: <span className="font-semibold text-foreground">{filteredPrograms.length}</span>
        </p>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <Card 
              key={program.id}
              className="group card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border-0"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {program.level}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {program.duration}
                  </div>
                </div>

                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  {program.name}
                </h3>
                <p className="text-sm text-primary/80 font-medium mb-3">
                  {program.university}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {program.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {program.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {program.students} студентов
                  </div>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Подробнее
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Программы не найдены</h3>
            <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>
    </main>
  );
}
