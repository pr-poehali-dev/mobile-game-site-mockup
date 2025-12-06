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
      brand: 'Mercedes-Benz',
      model: 'E-Class',
      year: 2024,
      price: '4 890 000',
      mileage: '0',
      engine: '2.0 Турбо',
      power: '204 л.с.',
      transmission: 'Автомат',
      fuel: 'Бензин',
      image: 'https://cdn.poehali.dev/projects/ac25bf47-4a2e-4bb0-941e-5e9e02f49ddc/files/d21b80de-e562-45b0-9e81-635d8870f14f.jpg',
      status: 'Хит продаж'
    },
    {
      id: 2,
      brand: 'BMW',
      model: 'X5',
      year: 2024,
      price: '6 350 000',
      mileage: '0',
      engine: '3.0 Дизель',
      power: '249 л.с.',
      transmission: 'Автомат',
      fuel: 'Дизель',
      image: 'https://cdn.poehali.dev/projects/ac25bf47-4a2e-4bb0-941e-5e9e02f49ddc/files/48cc32e1-c60b-4716-bced-94c354ab49a3.jpg',
      status: 'Новинка'
    },
    {
      id: 3,
      brand: 'Audi',
      model: 'A7 Sportback',
      year: 2024,
      price: '5 720 000',
      mileage: '0',
      engine: '3.0 V6 Турбо',
      power: '340 л.с.',
      transmission: 'Автомат',
      fuel: 'Бензин',
      image: 'https://cdn.poehali.dev/projects/ac25bf47-4a2e-4bb0-941e-5e9e02f49ddc/files/f1c203af-cd45-40f6-be91-ee63ce9ef9f1.jpg',
      status: 'В наличии'
    }
  ];

  const services = [
    {
      icon: 'CarTaxiFront',
      title: 'Trade-In',
      description: 'Обменяем ваш автомобиль по выгодной цене'
    },
    {
      icon: 'CreditCard',
      title: 'Кредит и лизинг',
      description: 'Оформление за 30 минут с минимальной ставкой'
    },
    {
      icon: 'ShieldCheck',
      title: 'Гарантия',
      description: 'Расширенная гарантия до 5 лет'
    },
    {
      icon: 'Wrench',
      title: 'Сервис',
      description: 'Техническое обслуживание и ремонт'
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-auto">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Car" size={36} />
              <div>
                <span className="text-2xl font-bold">Мастер-Авто</span>
                <p className="text-xs opacity-90">Премиальные автомобили</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'catalog', 'services', 'about', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all hover:opacity-80 ${
                    activeSection === section ? 'opacity-100' : 'opacity-70'
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
            <Button variant="secondary" className="hidden md:flex items-center gap-2">
              <Icon name="Phone" size={18} />
              8 (800) 555-35-35
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 gradient-hero text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                Ваш путь к автомобилю мечты
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Официальный дилер премиальных автомобилей. Гарантия качества, выгодные условия и безупречный сервис.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Icon name="Search" className="mr-2" size={20} />
                  Подобрать авто
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 bg-white/10 text-lg px-8">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать кредит
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-6 mt-12">
                <div>
                  <div className="text-4xl font-black mb-1">1200+</div>
                  <div className="text-sm opacity-80">Клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-1">15+</div>
                  <div className="text-sm opacity-80">Лет</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-1">200+</div>
                  <div className="text-sm opacity-80">Авто</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-1">24/7</div>
                  <div className="text-sm opacity-80">Онлайн</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Автомобили в наличии
            </h2>
            <p className="text-xl text-muted-foreground">
              Подберите автомобиль, который подходит именно вам
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-auto transition-all hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                    {car.status}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {car.brand} {car.model}
                  </CardTitle>
                  <CardDescription className="text-2xl font-bold text-secondary">
                    {car.price} ₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-muted-foreground" />
                      <span>{car.year} год • {car.mileage} км</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" size={16} className="text-muted-foreground" />
                      <span>{car.engine} • {car.power}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Fuel" size={16} className="text-muted-foreground" />
                      <span>{car.fuel} • {car.transmission}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Icon name="Eye" className="mr-2" size={18} />
                      Подробнее
                    </Button>
                    <Button variant="outline">
                      <Icon name="Phone" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              Показать все автомобили
              <Icon name="ChevronRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр услуг для владельцев автомобилей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-auto transition-all">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Мы работаем на автомобильном рынке уже более 15 лет и являемся официальным дилером 
              ведущих мировых брендов. За это время мы помогли тысячам клиентов найти автомобиль мечты.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Наша команда профессионалов всегда готова помочь с выбором, оформлением и 
              обслуживанием вашего автомобиля. Мы гарантируем прозрачность сделок, выгодные условия 
              и безупречный сервис.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg">
                <Icon name="MapPin" className="mr-2" size={20} />
                Посетить салон
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="FileText" className="mr-2" size={20} />
                Скачать каталог
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Свяжитесь с нами</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Icon name="MapPin" size={24} />
                    Адрес салона
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/90">
                  <p className="text-lg">г. Москва, Ленинградское шоссе, д. 25</p>
                  <p className="mt-2">Пн-Вс: 09:00 - 21:00</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Icon name="Phone" size={24} />
                    Контакты
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/90">
                  <p className="text-lg">8 (800) 555-35-35</p>
                  <p className="mt-2">info@master-auto.ru</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" type="tel" />
                  <Input placeholder="Email" type="email" className="md:col-span-2" />
                  <textarea 
                    placeholder="Сообщение" 
                    rows={4}
                    className="px-4 py-3 rounded-md border bg-background md:col-span-2"
                  />
                  <Button size="lg" className="md:col-span-2">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Car" size={28} />
            <span className="text-2xl font-bold">Мастер-Авто</span>
          </div>
          <p className="text-background/80 mb-4">
            Официальный дилер премиальных автомобилей
          </p>
          <div className="flex justify-center gap-6 text-sm text-background/60 flex-wrap">
            <span>© 2024 Мастер-Авто</span>
            <span>•</span>
            <a href="#" className="hover:text-background">Политика конфиденциальности</a>
            <span>•</span>
            <a href="#" className="hover:text-background">Условия использования</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
