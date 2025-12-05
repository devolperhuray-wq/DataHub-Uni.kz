import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Calendar, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Award,
  HelpCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Выберите программу",
    description: "Изучите доступные программы и выберите подходящую для вас специальность.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Подготовьте документы",
    description: "Соберите необходимые документы: аттестат, результаты ЕНТ, портфолио.",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Подайте заявку онлайн",
    description: "Заполните анкету и загрузите документы через личный кабинет.",
    icon: Calendar,
  },
  {
    number: "04",
    title: "Оплатите обучение",
    description: "После зачисления оплатите обучение удобным способом.",
    icon: CreditCard,
  },
];

const deadlines = [
  { date: "20 июня", event: "Начало приёма документов", status: "active" },
  { date: "20 июля", event: "Окончание приёма на грант", status: "upcoming" },
  { date: "25 августа", event: "Окончание приёма на платное", status: "upcoming" },
  { date: "1 сентября", event: "Начало учебного года", status: "upcoming" },
];

const scholarships = [
  {
    title: "Государственный грант",
    amount: "100% обучения",
    description: "Для абитуриентов с высокими баллами ЕНТ",
  },
  {
    title: "Стипендия «Болашак»",
    amount: "полное покрытие",
    description: "Для обучения за рубежом",
  },
  {
    title: "Ректорская стипендия",
    amount: "от 50 000 ₸/мес",
    description: "Для студентов с отличной успеваемостью",
  },
];

const faqs = [
  {
    question: "Какие документы нужны для поступления?",
    answer: "Удостоверение личности, аттестат, сертификат ЕНТ, фото 3x4, медицинская справка 086-У.",
  },
  {
    question: "Можно ли подать документы онлайн?",
    answer: "Да, вы можете подать документы через портал edu.gov.kz или напрямую на сайте университета.",
  },
  {
    question: "Какой минимальный балл ЕНТ для поступления?",
    answer: "Минимальный проходной балл зависит от специальности и университета, обычно от 50 до 100 баллов.",
  },
];

export default function AdmissionPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Приём и <span className="text-gradient">поступление</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Всё, что вам нужно знать о процессе поступления в университет.
          </p>
        </div>

        {/* Steps */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">
            Как поступить
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card 
                key={step.number}
                className="relative card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
                <CardContent className="p-6 pt-8">
                  <span className="text-5xl font-bold text-primary/10 absolute top-4 right-4">
                    {step.number}
                  </span>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Deadlines & Scholarships */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Deadlines */}
          <Card className="card-shadow border-0">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Важные даты</h3>
              </div>
              <div className="space-y-4">
                {deadlines.map((item, index) => (
                  <div 
                    key={item.event}
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      item.status === "active" ? "bg-primary/10" : "bg-muted"
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === "active" ? "bg-primary animate-pulse" : "bg-muted-foreground/30"
                    }`} />
                    <div className="flex-1">
                      <p className="font-medium">{item.event}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Scholarships */}
          <Card className="card-shadow border-0">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Стипендии и гранты</h3>
              </div>
              <div className="space-y-4">
                {scholarships.map((item) => (
                  <div 
                    key={item.title}
                    className="p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium">{item.title}</p>
                      <span className="text-sm font-semibold text-primary">{item.amount}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <HelpCircle className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold">
              Часто задаваемые вопросы
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question} className="card-shadow border-0">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Card className="hero-gradient border-0 overflow-hidden">
          <CardContent className="p-8 md:p-12 text-center text-primary-foreground">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Готовы к поступлению?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Начните свой путь к успешной карьере уже сегодня. Изучите программы и выберите свой вуз.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/programs">
                  Изучить программы
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/comparison">Сравнить вузы</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
