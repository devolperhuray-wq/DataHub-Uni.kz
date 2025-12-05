import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-serif text-xl font-bold">
              <GraduationCap className="h-8 w-8" />
              <span>DataHub</span>
            </Link>
            <p className="text-background/70 text-sm">
              Ваш путеводитель в мир образования. Сравнивайте университеты, выбирайте программы и стройте свое будущее.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/programs" className="hover:text-background transition-colors">Программы</Link></li>
              <li><Link to="/admission" className="hover:text-background transition-colors">Поступление</Link></li>
              <li><Link to="/comparison" className="hover:text-background transition-colors">Сравнение</Link></li>
              <li><Link to="/virtual-tour" className="hover:text-background transition-colors">3D Тур</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Ресурсы</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Поддержка</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@datahub.edu</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>© 2024 DataHub. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
