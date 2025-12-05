import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const achievements = [
    { id: 1, name: 'Первая победа', description: 'Выиграй свою первую игру', progress: 100, unlocked: true, icon: 'Trophy' },
    { id: 2, name: 'Скоростной бегун', description: 'Пройди уровень за 30 секунд', progress: 100, unlocked: true, icon: 'Zap' },
    { id: 3, name: 'Коллекционер', description: 'Собери все монеты на уровне', progress: 75, unlocked: false, icon: 'Coins' },
    { id: 4, name: 'Мастер комбо', description: 'Сделай 50 комбо подряд', progress: 45, unlocked: false, icon: 'Flame' },
    { id: 5, name: 'Легенда', description: 'Достигни 100 уровня', progress: 20, unlocked: false, icon: 'Star' },
  ];

  const characters = [
    { id: 1, name: 'Нова', role: 'Штурмовик', power: 95, rarity: 'Легендарный', color: 'neon-purple', image: 'https://cdn.poehali.dev/projects/ac25bf47-4a2e-4bb0-941e-5e9e02f49ddc/files/6061dfc2-554f-4429-bd67-cc193e73b8d9.jpg' },
    { id: 2, name: 'Вейв', role: 'Защитник', power: 88, rarity: 'Эпический', color: 'neon-cyan', image: 'https://cdn.poehali.dev/projects/ac25bf47-4a2e-4bb0-941e-5e9e02f49ddc/files/733ed001-1d98-49c2-8fd6-b6ea2c095b22.jpg' },
    { id: 3, name: 'Блэйз', role: 'Поддержка', power: 92, rarity: 'Легендарный', color: 'neon-magenta', image: 'https://cdn.poehali.dev/projects/ac25bf47-4a2e-4bb0-941e-5e9e02f49ddc/files/04b89896-4621-47fd-a550-cbce95749a5f.jpg' },
  ];

  const leaderboard = [
    { rank: 1, username: 'CyberNinja', score: 15240, avatar: '🥷' },
    { rank: 2, username: 'NeonKnight', score: 14890, avatar: '⚔️' },
    { rank: 3, username: 'PixelMaster', score: 13560, avatar: '🎮' },
    { rank: 4, username: 'GlowRider', score: 12780, avatar: '🏍️' },
    { rank: 5, username: 'SkyBreaker', score: 11920, avatar: '⚡' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] via-[#1e2534] to-[#1A1F2C]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Gamepad2" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-glow-purple">NEON RUSH</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'characters', 'achievements', 'leaderboard', 'download', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'Об игре'}
                  {section === 'characters' && 'Персонажи'}
                  {section === 'achievements' && 'Достижения'}
                  {section === 'leaderboard' && 'Рейтинг'}
                  {section === 'download' && 'Скачать'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="bg-primary text-primary-foreground glow-purple hover:bg-primary/90">
              Играть сейчас
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 animate-float">
            <Icon name="Sparkles" className="text-primary" size={64} />
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-glow-purple animate-glow-pulse">
            NEON RUSH
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Погрузись в футуристический мир неоновых гонок и эпических сражений
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground glow-purple hover:bg-primary/90 text-lg px-8">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать игру
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary glow-cyan hover:bg-secondary/10 text-lg px-8">
              <Icon name="Play" className="mr-2" size={20} />
              Трейлер
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-glow-cyan">
            Об игре
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-primary/30 glow-purple hover:scale-105 transition-transform">
              <CardHeader>
                <Icon name="Zap" className="text-primary mb-4" size={48} />
                <CardTitle className="text-2xl">Динамичный геймплей</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Молниеносные гонки и захватывающие сражения в киберпанк-вселенной
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-secondary/30 glow-cyan hover:scale-105 transition-transform">
              <CardHeader>
                <Icon name="Users" className="text-secondary mb-4" size={48} />
                <CardTitle className="text-2xl">Мультиплеер</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Соревнуйся с друзьями и игроками со всего мира в реальном времени
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-accent/30 glow-magenta hover:scale-105 transition-transform">
              <CardHeader>
                <Icon name="Trophy" className="text-accent mb-4" size={48} />
                <CardTitle className="text-2xl">Достижения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Разблокируй уникальные награды и поднимайся в рейтинге
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="characters" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-glow-magenta">
            Персонажи
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {characters.map((char) => (
              <Card key={char.id} className={`bg-card/50 border-${char.color}/30 hover:scale-105 transition-all group`}>
                <CardHeader>
                  <div className="w-full h-48 rounded-lg mb-4 overflow-hidden relative">
                    <img 
                      src={char.image} 
                      alt={char.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-${char.color}/60 to-transparent`}></div>
                  </div>
                  <CardTitle className="text-2xl">{char.name}</CardTitle>
                  <CardDescription className="text-lg">{char.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Сила</span>
                        <span className="text-sm font-bold">{char.power}/100</span>
                      </div>
                      <Progress value={char.power} className="h-2" />
                    </div>
                    <Badge className={`bg-${char.color}`}>{char.rarity}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-glow-purple">
            Достижения
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className={`bg-card/50 ${achievement.unlocked ? 'border-primary glow-purple' : 'border-muted opacity-70'}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${achievement.unlocked ? 'bg-primary/20' : 'bg-muted/20'}`}>
                      <Icon name={achievement.icon as any} className={achievement.unlocked ? 'text-primary' : 'text-muted-foreground'} size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{achievement.name}</h3>
                        {achievement.unlocked && (
                          <Badge className="bg-primary">Разблокировано</Badge>
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

      <section id="leaderboard" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-glow-cyan">
            Рейтинг игроков
          </h2>
          <Card className="max-w-2xl mx-auto bg-card/50 border-secondary/30 glow-cyan">
            <CardContent className="p-6">
              <div className="space-y-3">
                {leaderboard.map((player) => (
                  <div
                    key={player.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all hover:scale-105 ${
                      player.rank === 1 ? 'bg-primary/20 glow-purple' :
                      player.rank === 2 ? 'bg-secondary/20 glow-cyan' :
                      player.rank === 3 ? 'bg-accent/20 glow-magenta' :
                      'bg-muted/10'
                    }`}
                  >
                    <div className="text-3xl font-black w-12 text-center">
                      {player.rank === 1 && '🥇'}
                      {player.rank === 2 && '🥈'}
                      {player.rank === 3 && '🥉'}
                      {player.rank > 3 && player.rank}
                    </div>
                    <div className="text-4xl">{player.avatar}</div>
                    <div className="flex-1">
                      <div className="font-bold text-lg">{player.username}</div>
                      <div className="text-sm text-muted-foreground">Очки: {player.score.toLocaleString()}</div>
                    </div>
                    <Icon name="ChevronRight" className="text-muted-foreground" size={24} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="download" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-magenta">
            Скачать игру
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Доступно на всех популярных платформах
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Card className="w-64 bg-card/50 border-primary/30 hover:scale-105 transition-transform cursor-pointer">
              <CardHeader>
                <Icon name="Smartphone" className="text-primary mx-auto" size={64} />
                <CardTitle className="text-2xl">iOS</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary glow-purple">
                  <Icon name="Download" className="mr-2" size={20} />
                  App Store
                </Button>
              </CardContent>
            </Card>
            <Card className="w-64 bg-card/50 border-secondary/30 hover:scale-105 transition-transform cursor-pointer">
              <CardHeader>
                <Icon name="Smartphone" className="text-secondary mx-auto" size={64} />
                <CardTitle className="text-2xl">Android</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-secondary glow-cyan">
                  <Icon name="Download" className="mr-2" size={20} />
                  Google Play
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-glow-purple">
            Контакты
          </h2>
          <Card className="max-w-2xl mx-auto bg-card/50 border-primary/30 glow-purple">
            <CardContent className="p-8">
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <Icon name="Mail" className="text-primary" size={32} />
                  <div>
                    <div className="font-bold text-lg">Email</div>
                    <div className="text-muted-foreground">support@neonrush.game</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="MessageCircle" className="text-secondary" size={32} />
                  <div>
                    <div className="font-bold text-lg">Discord</div>
                    <div className="text-muted-foreground">discord.gg/neonrush</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Twitter" className="text-accent" size={32} />
                  <div>
                    <div className="font-bold text-lg">Twitter</div>
                    <div className="text-muted-foreground">@NeonRushGame</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-bold text-xl mb-4">Подписаться на новости</h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="flex-1 px-4 py-2 bg-input rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="bg-primary glow-purple">
                    Подписаться
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border bg-card/30">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Neon Rush. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;