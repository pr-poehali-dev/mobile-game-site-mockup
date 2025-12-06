import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const cars = [
    {
      id: 1,
      brand: 'BMW',
      model: 'X5 M50i',
      year: 2023,
      price: '7 890 000',
      mileage: '1 200',
      engine: '4.4 V8 Twin-Turbo',
      power: '530 л.с.',
      transmission: 'Автомат',
      fuel: 'Бензин',
      image: 'https://cdn.poehali.dev/projects/ac25bf47-4a2e-4bb0-941e-5e9e02f49ddc/files/ed5ad0b8-16dd-419a-a871-39ef45ff3f5f.jpg',
      status: 'В наличии'
    },
    {
      id: 2,
      brand: 'Mercedes-Benz',
      model: 'AMG GT 63 S',
      year: 2024,
      price: '12 500 000',
      mileage: '500',
      engine: '4.0 V8 Twin-Turbo',
      power: '639 л.с.',
      transmission: 'Автомат',
      fuel: 'Бензин',
      image: 'https://cdn.poehali.dev/projects/ac25bf47-4a2e-4bb0-941e-5e9e02f49ddc/files/40eadc9f-ea46-4a17-b44c-8ed95dbd2ad0.jpg',
      status: 'В наличии'
    },
    {
      id: 3,
      brand: 'Audi',
      model: 'RS Q8',
      year: 2023,
      price: '9 200 000',
      mileage: '2 500',
      engine: '4.0 V8 Twin-Turbo',
      power: '600 л.с.',
      transmission: 'Автомат',
      fuel: 'Бензин',
      image: 'https://cdn.poehali.dev/projects/ac25bf47-4a2e-4bb0-941e-5e9e02f49ddc/files/ed5ad0b8-16dd-419a-a871-39ef45ff3f5f.jpg',
      status: 'Под заказ'
    }
  ];

  const services = [
    {
      icon: 'Car',
      title: 'Trade-In',
      description: 'Выкупаем ваш автомобиль по рыночной цене'
    },
    {
      icon: 'CreditCard',
      title: 'Кредит и лизинг',
      description: 'Помогаем оформить автокредит с минимальной ставкой'
    },
    {
      icon: 'ShieldCheck',
      title: 'Страхование',
      description: 'КАСКО и ОСАГО с выгодными условиями'
    },
    {
      icon: 'Wrench',
      title: 'Сервис и ТО',
      description: 'Профессиональное обслуживание и ремонт'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Car" className="text-primary" size={36} />
              <div>
                <span className="text-2xl font-bold text-secondary">Мастер-Авто</span>
                <p className="text-xs text-muted-foreground">Премиальные автомобили</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'catalog', 'services', 'about', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'services' && 'Услуги'}
                  {section === 'about' && 'О нас'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Icon name="Phone" className="mr-2" size={18} />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 gradient-hero">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                Премиальные автомобили в Москве
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Более 15 лет на рынке. Гарантия качества и безопасности сделки
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                  <Icon name="Search" className="mr-2" size={20} />
                  Подобрать авто
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать кредит
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-4xl font-black mb-1">350+</div>
                  <div className="text-sm opacity-80">Автомобилей</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-1">2400+</div>
                  <div className="text-sm opacity-80">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-1">15</div>
                  <div className="text-sm opacity-80">Лет на рынке</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/ac25bf47-4a2e-4bb0-941e-5e9e02f49ddc/files/9481c54c-a18b-4149-9793-6a17df25249d.jpg"
                alt="Автосалон"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Автомобили в наличии
            </h2>
            <p className="text-xl text-muted-foreground">
              Премиальные модели с проверенной историей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <Card key={car.id} className="bg-card overflow-hidden hover:shadow-primary transition-all hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {car.status}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {car.brand} {car.model}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {car.price} ₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      <span>{car.year} год</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Gauge" size={16} />
                      <span>{car.mileage} км</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" size={16} />
                      <span>{car.engine} • {car.power}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Fuel" size={16} />
                      <span>{car.fuel} • {car.transmission}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Показать весь каталог
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр услуг для автовладельцев
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card hover:shadow-primary transition-all hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                О компании Мастер-Авто
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы специализируемся на продаже премиальных автомобилей класса люкс с 2008 года. 
                За это время помогли более 2400 клиентам найти автомобиль мечты.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="BadgeCheck" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Юридическая чистота</h3>
                    <p className="text-muted-foreground">Все автомобили проходят полную проверку документов</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Гарантия качества</h3>
                    <p className="text-muted-foreground">Гарантия на все автомобили до 2 лет</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Headphones" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Поддержка 24/7</h3>
                    <p className="text-muted-foreground">Всегда на связи для решения любых вопросов</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary text-primary-foreground p-6 text-center">
                <div className="text-5xl font-black mb-2">15+</div>
                <div className="text-sm opacity-90">Лет опыта</div>
              </Card>
              <Card className="bg-secondary text-secondary-foreground p-6 text-center">
                <div className="text-5xl font-black mb-2">350+</div>
                <div className="text-sm opacity-90">Авто в наличии</div>
              </Card>
              <Card className="bg-accent text-accent-foreground p-6 text-center">
                <div className="text-5xl font-black mb-2">2400+</div>
                <div className="text-sm opacity-90">Клиентов</div>
              </Card>
              <Card className="bg-primary text-primary-foreground p-6 text-center">
                <div className="text-5xl font-black mb-2">98%</div>
                <div className="text-sm opacity-90">Довольных</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовы ответить на ваши вопросы
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-card p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-6">Оставьте заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="w-full" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" className="w-full" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="w-full" />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Комментарий"
                      className="w-full min-h-[120px] px-3 py-2 rounded-md border border-input bg-background"
                    />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, Ленинградский проспект, д. 39, стр. 5</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-68</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 21:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 10:00 - 19:00</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@master-auto.ru</p>
                    <p className="text-muted-foreground">sales@master-auto.ru</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Car" size={28} />
                <span className="text-xl font-bold">Мастер-Авто</span>
              </div>
              <p className="text-sm opacity-80">
                Премиальные автомобили класса люкс в Москве с 2008 года
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Автомобили в наличии</li>
                <li>Под заказ</li>
                <li>Trade-In</li>
                <li>С пробегом</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Кредит и лизинг</li>
                <li>Страхование</li>
                <li>Сервис и ТО</li>
                <li>Гарантия</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@master-auto.ru</li>
                <li>Москва, Ленинградский пр-т, 39</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-80">
            <p>© 2024 Мастер-Авто. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
