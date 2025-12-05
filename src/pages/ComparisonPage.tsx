import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  GraduationCap, 
  MapPin, 
  Users, 
  Building2, 
  Trophy,
  Star,
  ChevronDown,
  ChevronUp,
  Scale
} from "lucide-react";

const universities = [
  {
    id: 1,
    name: "Назарбаев Университет",
    location: "Астана",
    founded: 2010,
    students: 6000,
    rating: 4.9,
    worldRanking: 207,
    programs: 65,
    faculties: 6,
    tuition: "бесплатно (грант)",
    dormitory: true,
    features: ["Международные стандарты", "Исследования", "Партнёрства", "Стипендии"],
  },
  {
    id: 2,
    name: "КазНУ им. аль-Фараби",
    location: "Алматы",
    founded: 1934,
    students: 25000,
    rating: 4.8,
    worldRanking: 150,
    programs: 120,
    faculties: 16,
    tuition: "от 800 000 ₸/год",
    dormitory: true,
    features: ["Историческое наследие", "Наука", "Международные обмены"],
  },
  {
    id: 3,
    name: "КБТУ",
    location: "Алматы",
    founded: 2001,
    students: 5500,
    rating: 4.7,
    worldRanking: 501,
    programs: 35,
    faculties: 5,
    tuition: "от 2 500 000 ₸/год",
    dormitory: true,
    features: ["IT-направление", "Бизнес", "Нефтегаз", "Стартапы"],
  },
  {
    id: 4,
    name: "СДУ",
    location: "Алматы",
    founded: 1996,
    students: 8000,
    rating: 4.6,
    worldRanking: 601,
    programs: 45,
    faculties: 8,
    tuition: "от 1 800 000 ₸/год",
    dormitory: true,
    features: ["Инженерия", "Педагогика", "Экономика", "Право"],
  },
];

export default function ComparisonPage() {
  const [selectedIds, setSelectedIds] = useState<number[]>([1, 3]);
  const [showAll, setShowAll] = useState(false);

  const toggleSelection = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id));
    } else if (selectedIds.length < 3) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedUniversities = universities.filter((u) => selectedIds.includes(u.id));

  return (
    <main className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-gradient">Сравнение</span> университетов
          </h1>
          <p className="text-muted-foreground text-lg">
            Выберите до 3 университетов для детального сравнения по ключевым параметрам.
          </p>
        </div>

        {/* University Selection */}
        <Card className="card-shadow border-0 mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-5 w-5 text-primary" />
              <h2 className="font-semibold text-lg">Выберите университеты для сравнения</h2>
              <Badge variant="secondary" className="ml-auto">
                {selectedIds.length}/3 выбрано
              </Badge>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {universities.map((uni) => (
                <div
                  key={uni.id}
                  onClick={() => toggleSelection(uni.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedIds.includes(uni.id)
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={selectedIds.includes(uni.id)}
                      disabled={!selectedIds.includes(uni.id) && selectedIds.length >= 3}
                    />
                    <div>
                      <p className="font-medium">{uni.name}</p>
                      <p className="text-sm text-muted-foreground">{uni.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        {selectedUniversities.length > 0 && (
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* University Headers */}
              <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${selectedUniversities.length}, 1fr)` }}>
                <div></div>
                {selectedUniversities.map((uni) => (
                  <Card key={uni.id} className="card-shadow border-0">
                    <CardContent className="p-6 text-center">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{uni.name}</h3>
                      <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {uni.location}
                      </div>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <Star className="h-4 w-4 text-accent fill-accent" />
                        <span className="font-semibold">{uni.rating}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Comparison Rows */}
              <div className="mt-6 space-y-2">
                <ComparisonRow 
                  label="Год основания"
                  values={selectedUniversities.map((u) => u.founded.toString())}
                  icon={Building2}
                />
                <ComparisonRow 
                  label="Мировой рейтинг (QS)"
                  values={selectedUniversities.map((u) => `#${u.worldRanking}`)}
                  icon={Trophy}
                  highlight
                />
                <ComparisonRow 
                  label="Студентов"
                  values={selectedUniversities.map((u) => u.students.toLocaleString())}
                  icon={Users}
                />
                <ComparisonRow 
                  label="Программ"
                  values={selectedUniversities.map((u) => u.programs.toString())}
                  icon={GraduationCap}
                />
                <ComparisonRow 
                  label="Факультетов"
                  values={selectedUniversities.map((u) => u.faculties.toString())}
                  icon={Building2}
                />
                <ComparisonRow 
                  label="Стоимость"
                  values={selectedUniversities.map((u) => u.tuition)}
                  icon={Trophy}
                  highlight
                />

                {showAll && (
                  <>
                    <ComparisonRow 
                      label="Общежитие"
                      values={selectedUniversities.map((u) => u.dormitory ? "Есть" : "Нет")}
                      icon={Building2}
                    />
                    <div 
                      className="grid gap-4 py-4 px-4 bg-muted/50 rounded-lg"
                      style={{ gridTemplateColumns: `200px repeat(${selectedUniversities.length}, 1fr)` }}
                    >
                      <div className="text-sm font-medium text-muted-foreground">Особенности</div>
                      {selectedUniversities.map((uni) => (
                        <div key={uni.id} className="flex flex-wrap gap-1">
                          {uni.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <Button
                variant="ghost"
                className="w-full mt-4"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? (
                  <>
                    <ChevronUp className="h-4 w-4 mr-2" />
                    Скрыть подробности
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4 mr-2" />
                    Показать все параметры
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {selectedUniversities.length === 0 && (
          <Card className="card-shadow border-0">
            <CardContent className="p-12 text-center">
              <Scale className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Выберите университеты</h3>
              <p className="text-muted-foreground">
                Отметьте минимум 2 университета для сравнения
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}

function ComparisonRow({ 
  label, 
  values, 
  icon: Icon,
  highlight = false 
}: { 
  label: string; 
  values: string[];
  icon: React.ElementType;
  highlight?: boolean;
}) {
  return (
    <div 
      className={`grid gap-4 py-4 px-4 rounded-lg ${highlight ? "bg-primary/5" : "bg-muted/50"}`}
      style={{ gridTemplateColumns: `200px repeat(${values.length}, 1fr)` }}
    >
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Icon className="h-4 w-4" />
        {label}
      </div>
      {values.map((value, index) => (
        <div key={index} className={`text-center font-semibold ${highlight ? "text-primary" : ""}`}>
          {value}
        </div>
      ))}
    </div>
  );
}
