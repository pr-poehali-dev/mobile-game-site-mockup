import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const achievements = [
    { id: 1, name: 'Первая помощь', description: 'Помоги 10 людям в игре', progress: 100, unlocked: true, icon: 'Heart' },
    { id: 2, name: 'Эко-герой', description: 'Убери 50 единиц мусора', progress: 100, unlocked: true, icon: 'Leaf' },
    { id: 3, name: 'Наставник', description: 'Обучи 5 новых волонтёров', progress: 60, unlocked: false, icon: 'GraduationCap' },
    { id: 4, name: 'Друг животных', description: 'Спаси 20 животных', progress: 35, unlocked: false, icon: 'Dog' },
    { id: 5, name: 'Легенда добра', description: 'Сделай 1000 добрых дел', progress: 42, unlocked: false, icon: 'Star' },
  ];

  const activities = [
    { 
      id: 1, 
      name: 'Помощь пожилым', 
      description: 'Помогай бабушкам и дедушкам с покупками', 
      participants: 1250, 
      impact: 'Высокий',
      color: 'primary',
      icon: 'Users',
      image: 'https://cdn.poehali.dev/projects/ac25bf47-4a2e-4bb0-941e-5e9e02f49ddc/files/3fbb24d2-c888-4afb-9234-47a0e8e3aa9d.jpg'
    },
    { 
      id: 2, 
      name: 'Чистый город', 
      description: 'Убирай мусор и делай город чище', 
      participants: 980, 
      impact: 'Средний',
      color: 'secondary',
      icon: 'Trash2',
      image: 'https://cdn.poehali.dev/projects/ac25bf47-4a2e-4bb0-941e-5e9e02f49ddc/files/1b6183b4-524e-4e77-a858-5751e16829be.jpg'
    },
    { 
      id: 3, 
      name: 'Приют для животных', 
      description: 'Заботься о брошенных питомцах', 
      participants: 742, 
      impact: 'Высокий',
      color: 'accent',
      icon: 'Heart',
      image: 'https://cdn.poehali.dev/projects/ac25bf47-4a2e-4bb0-941e-5e9e02f49ddc/files/bf16e7bc-fc36-4d0e-b6af-845e7d6654a1.jpg'
    },
  ];

  const heroes = [
    { rank: 1, username: 'ДобрыйСамаритянин', goodDeeds: 3420, avatar: '❤️' },
    { rank: 2, username: 'ЭкоВоин', goodDeeds: 2890, avatar: '🌱' },
    { rank: 3, username: 'ДругЖивотных', goodDeeds: 2560, avatar: '🐕' },
    { rank: 4, username: 'ГородскойГерой', goodDeeds: 2180, avatar: '🏙️' },
    { rank: 5, username: 'СветлыйПуть', goodDeeds: 1920, avatar: '⭐' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">Добрые Дела</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'mission', 'activities', 'achievements', 'heroes', 'download'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'mission' && 'О миссии'}
                  {section === 'activities' && 'Как помогать'}
                  {section === 'achievements' && 'Достижения'}
                  {section === 'heroes' && 'Герои добра'}
                  {section === 'download' && 'Скачать'}
                </button>
              ))}
            </div>
            <Button className="bg-primary text-primary-foreground shadow-warm hover:bg-primary/90">
              Начать помогать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="text-7xl mb-4">🌟</div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-primary">
            Добрые Дела
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Игра, которая меняет мир! Совершай добрые дела и вдохновляй других помогать
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary text-primary-foreground shadow-warm hover:bg-primary/90 text-lg px-8">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать игру
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 text-lg px-8">
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть видео
            </Button>
          </div>
          
          <Card className="max-w-3xl mx-auto bg-gradient-warm text-white shadow-warm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-black mb-2">12,847</div>
                  <div className="text-sm opacity-90">Активных волонтёров</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-2">89,342</div>
                  <div className="text-sm opacity-90">Добрых дел совершено</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-2">156</div>
                  <div className="text-sm opacity-90">Городов участвуют</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="mission" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Наша миссия
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Сделать волонтёрство весёлым, доступным и вдохновляющим
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-primary/20 shadow-warm hover:scale-105 transition-transform">
              <CardHeader>
                <Icon name="Heart" className="text-primary mb-4" size={48} />
                <CardTitle className="text-2xl">Помогай с радостью</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Превращай добрые дела в увлекательное приключение с наградами и достижениями
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-secondary/20 shadow-kind hover:scale-105 transition-transform">
              <CardHeader>
                <Icon name="Users" className="text-secondary mb-4" size={48} />
                <CardTitle className="text-2xl">Найди единомышленников</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Присоединяйся к сообществу добрых людей и меняйте мир вместе
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-accent/20 shadow-soft hover:scale-105 transition-transform">
              <CardHeader>
                <Icon name="TrendingUp" className="text-accent mb-4" size={48} />
                <CardTitle className="text-2xl">Расти и развивайся</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Прокачивай навыки, получай опыт и становись лучшей версией себя
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="activities" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Как ты можешь помогать
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выбирай активности по душе и начинай творить добро
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <Card key={activity.id} className="bg-card border-border hover:scale-105 transition-all shadow-lg">
                <CardHeader>
                  <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl">{activity.name}</CardTitle>
                  <CardDescription className="text-base">{activity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Участников</span>
                      <Badge variant="outline" className="font-bold">{activity.participants}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Влияние</span>
                      <Badge className={`bg-${activity.color}`}>{activity.impact}</Badge>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Начать помогать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Твои достижения
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Получай награды за каждое доброе дело
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className={`bg-card ${achievement.unlocked ? 'border-primary shadow-warm' : 'border-border opacity-70'}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${achievement.unlocked ? 'bg-primary/10' : 'bg-muted/50'}`}>
                      <Icon name={achievement.icon as any} className={achievement.unlocked ? 'text-primary' : 'text-muted-foreground'} size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{achievement.name}</h3>
                        {achievement.unlocked && (
                          <Badge className="bg-primary">Получено!</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-3">{achievement.description}</p>
                      <div className="flex items-center gap-3">
                        <Progress value={achievement.progress} className="h-2 flex-1" />
                        <span className="text-sm font-medium">{achievement.progress}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="heroes" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Герои добра
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Рейтинг самых активных волонтёров
          </p>
          <Card className="max-w-2xl mx-auto bg-card border-border shadow-lg">
            <CardContent className="p-6">
              <div className="space-y-3">
                {heroes.map((hero) => (
                  <div
                    key={hero.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all hover:scale-105 ${
                      hero.rank === 1 ? 'bg-primary/10 shadow-warm' :
                      hero.rank === 2 ? 'bg-secondary/10 shadow-kind' :
                      hero.rank === 3 ? 'bg-accent/10 shadow-soft' :
                      'bg-muted/30'
                    }`}
                  >
                    <div className="text-3xl font-black w-12 text-center">
                      {hero.rank === 1 && '🥇'}
                      {hero.rank === 2 && '🥈'}
                      {hero.rank === 3 && '🥉'}
                      {hero.rank > 3 && hero.rank}
                    </div>
                    <div className="text-4xl">{hero.avatar}</div>
                    <div className="flex-1">
                      <div className="font-bold text-lg">{hero.username}</div>
                      <div className="text-sm text-muted-foreground">Добрых дел: {hero.goodDeeds.toLocaleString()}</div>
                    </div>
                    <Icon name="ChevronRight" className="text-muted-foreground" size={24} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="download" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Начни творить добро прямо сейчас
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Скачай игру и присоединяйся к сообществу добрых людей
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Card className="w-64 bg-card border-border hover:scale-105 transition-transform cursor-pointer shadow-warm">
              <CardHeader>
                <Icon name="Smartphone" className="text-primary mx-auto" size={64} />
                <CardTitle className="text-2xl">iOS</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary shadow-warm">
                  <Icon name="Download" className="mr-2" size={20} />
                  App Store
                </Button>
              </CardContent>
            </Card>
            <Card className="w-64 bg-card border-border hover:scale-105 transition-transform cursor-pointer shadow-kind">
              <CardHeader>
                <Icon name="Smartphone" className="text-secondary mx-auto" size={64} />
                <CardTitle className="text-2xl">Android</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-secondary shadow-kind">
                  <Icon name="Download" className="mr-2" size={20} />
                  Google Play
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <Card className="max-w-3xl mx-auto bg-gradient-warm text-white shadow-warm">
            <CardContent className="p-12 text-center">
              <Icon name="Sparkles" className="mx-auto mb-6" size={64} />
              <h3 className="text-3xl font-bold mb-4">Присоединяйся к движению добра!</h3>
              <p className="text-lg mb-8 opacity-90">
                Каждое доброе дело делает мир лучше. Начни своё путешествие уже сегодня!
              </p>
              <div className="flex gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Твой email"
                  className="flex-1 max-w-sm px-4 py-3 rounded-lg border-0 text-foreground focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-primary hover:bg-white/90 font-bold px-8">
                  Подписаться
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border bg-card">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-primary" size={24} />
              <span className="font-bold text-foreground">Добрые Дела</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">© 2024 Добрые Дела. Делаем мир лучше вместе</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;