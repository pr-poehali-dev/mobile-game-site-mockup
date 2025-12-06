import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Resources {
  energy: number;
  motivation: number;
  experience: number;
  reputation: number;
  money: number;
}

interface Activity {
  id: number;
  name: string;
  description: string;
  energyCost: number;
  motivationCost: number;
  moneyCost: number;
  experienceGain: number;
  reputationGain: number;
  moneyGain: number;
  requiresTransport: boolean;
  requiresSpecialSkills: boolean;
  icon: string;
}

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [day, setDay] = useState(1);
  const [showStats, setShowStats] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);
  
  const [resources, setResources] = useState<Resources>({
    energy: 100,
    motivation: 100,
    experience: 0,
    reputation: 0,
    money: 5000
  });

  const activities: Activity[] = [
    {
      id: 1,
      name: 'Посадка деревьев',
      description: 'Помощь в озеленении городского парка',
      energyCost: 30,
      motivationCost: 20,
      moneyCost: 50,
      experienceGain: 25,
      reputationGain: 30,
      moneyGain: 100,
      requiresTransport: true,
      requiresSpecialSkills: false,
      icon: 'TreePine'
    },
    {
      id: 2,
      name: 'Помощь в приюте для животных',
      description: 'Уход за животными, кормление, уборка вольеров',
      energyCost: 40,
      motivationCost: 25,
      moneyCost: 100,
      experienceGain: 35,
      reputationGain: 40,
      moneyGain: 150,
      requiresTransport: true,
      requiresSpecialSkills: false,
      icon: 'Dog'
    },
    {
      id: 3,
      name: 'Помощь пожилым людям',
      description: 'Покупка продуктов, помощь по хозяйству, общение',
      energyCost: 20,
      motivationCost: 15,
      moneyCost: 80,
      experienceGain: 30,
      reputationGain: 50,
      moneyGain: 120,
      requiresTransport: false,
      requiresSpecialSkills: false,
      icon: 'Users'
    },
    {
      id: 4,
      name: 'Работа в продовольственном банке',
      description: 'Сортировка и упаковка продуктов для нуждающихся',
      energyCost: 25,
      motivationCost: 20,
      moneyCost: 40,
      experienceGain: 20,
      reputationGain: 25,
      moneyGain: 80,
      requiresTransport: true,
      requiresSpecialSkills: false,
      icon: 'ShoppingBag'
    },
    {
      id: 5,
      name: 'Преподавание для детей',
      description: 'Проведение занятий с детьми из малообеспеченных семей',
      energyCost: 35,
      motivationCost: 40,
      moneyCost: 200,
      experienceGain: 50,
      reputationGain: 60,
      moneyGain: 300,
      requiresTransport: false,
      requiresSpecialSkills: true,
      icon: 'GraduationCap'
    },
    {
      id: 6,
      name: 'Уборка пляжа',
      description: 'Экологическая акция по очистке береговой линии',
      energyCost: 45,
      motivationCost: 30,
      moneyCost: 100,
      experienceGain: 40,
      reputationGain: 45,
      moneyGain: 150,
      requiresTransport: true,
      requiresSpecialSkills: false,
      icon: 'Waves'
    },
    {
      id: 7,
      name: 'Волонтёрство в больнице',
      description: 'Помощь медицинскому персоналу, общение с пациентами',
      energyCost: 30,
      motivationCost: 35,
      moneyCost: 150,
      experienceGain: 45,
      reputationGain: 55,
      moneyGain: 250,
      requiresTransport: true,
      requiresSpecialSkills: true,
      icon: 'Heart'
    },
    {
      id: 8,
      name: 'Организация благотворительного мероприятия',
      description: 'Планирование и проведение мероприятия',
      energyCost: 50,
      motivationCost: 60,
      moneyCost: 500,
      experienceGain: 80,
      reputationGain: 100,
      moneyGain: 1000,
      requiresTransport: false,
      requiresSpecialSkills: true,
      icon: 'PartyPopper'
    }
  ];

  const getVolunteerLevel = () => {
    const exp = resources.experience;
    if (exp < 50) return 'Новичок';
    if (exp < 150) return 'Активист';
    if (exp < 300) return 'Опытный волонтёр';
    if (exp < 500) return 'Лидер';
    return 'Мастер волонтёрства';
  };

  const getAchievements = () => {
    const achievements = [];
    if (resources.reputation >= 100) achievements.push('⭐ Начинающий активист');
    if (resources.reputation >= 300) achievements.push('⭐⭐ Опытный волонтёр');
    if (resources.reputation >= 500) achievements.push('⭐⭐⭐ Лидер сообщества');
    if (resources.experience >= 200) achievements.push('🏅 Мастер волонтёрства');
    return achievements;
  };

  const canPerformActivity = (activity: Activity) => {
    if (resources.energy < activity.energyCost) return { can: false, message: 'Недостаточно энергии!' };
    if (resources.motivation < activity.motivationCost) return { can: false, message: 'Недостаточно мотивации!' };
    if (resources.money < activity.moneyCost) return { can: false, message: 'Недостаточно денег!' };
    return { can: true, message: '' };
  };

  const performActivity = (activity: Activity) => {
    const check = canPerformActivity(activity);
    if (!check.can) {
      alert('❌ ' + check.message);
      return;
    }

    setResources(prev => ({
      energy: Math.max(0, prev.energy - activity.energyCost),
      motivation: Math.max(0, prev.motivation - activity.motivationCost),
      experience: prev.experience + activity.experienceGain,
      reputation: prev.reputation + activity.reputationGain,
      money: prev.money - activity.moneyCost + activity.moneyGain
    }));

    nextDay();
  };

  const rest = () => {
    setResources(prev => ({
      ...prev,
      energy: Math.min(100, prev.energy + 30),
      motivation: Math.min(100, prev.motivation + 20),
      money: prev.money - 50
    }));
    nextDay();
  };

  const nextDay = () => {
    setResources(prev => ({
      ...prev,
      energy: Math.min(100, prev.energy + 20),
      motivation: Math.min(100, prev.motivation + 10),
      money: prev.money - 200
    }));
    setDay(prev => prev + 1);
  };

  useEffect(() => {
    if (resources.energy <= 0 || resources.motivation <= 0) {
      setGameOver(true);
    }
    if (resources.money < -500) {
      setGameOver(true);
    }
    if (day > 30) {
      setVictory(true);
      setGameOver(true);
    }
  }, [resources, day]);

  const calculateFinalScore = () => {
    return resources.experience * 2 + resources.reputation * 3 + Math.floor(resources.money / 10) + day * 10;
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setVictory(false);
    setDay(1);
    setResources({
      energy: 100,
      motivation: 100,
      experience: 0,
      reputation: 0,
      money: 5000
    });
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full shadow-auto">
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">🌍</div>
            <CardTitle className="text-4xl mb-4">Путь Волонтёра</CardTitle>
            <p className="text-muted-foreground text-lg">
              Добро пожаловать в игру! Набирайте опыт и репутацию, помогая другим и развивая свои навыки волонтёра.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-bold mb-2">🎯 Цель игры:</h3>
              <p className="text-sm text-muted-foreground">
                Набрать как можно больше опыта и репутации за 30 дней, распределяя ресурсы мудро
              </p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-bold mb-3">📊 Ваши ресурсы:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚡</span>
                  <span><strong>Энергия:</strong> Расходуется на активности</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">💪</span>
                  <span><strong>Мотивация:</strong> Необходима для продолжения</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌟</span>
                  <span><strong>Опыт:</strong> Ваш главный показатель роста</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🏆</span>
                  <span><strong>Репутация:</strong> Признание в обществе</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">💰</span>
                  <span><strong>Деньги:</strong> Нужны для участия в активностях</span>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full text-lg"
              onClick={startGame}
            >
              <Icon name="Play" className="mr-2" size={24} />
              Начать игру
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full shadow-auto">
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">{victory ? '🏆' : '💀'}</div>
            <CardTitle className="text-4xl mb-4">
              {victory ? 'Поздравляем!' : 'Игра окончена'}
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              {victory 
                ? 'Вы прошли 30 дней волонтёрства!'
                : resources.energy <= 0 || resources.motivation <= 0
                  ? 'Вы полностью истощены и больше не можете продолжать.'
                  : 'Вы влезли в большие долги и не можете продолжать.'
              }
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Финальный счёт: {calculateFinalScore()}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>🏅 Уровень волонтёра:</span>
                  <strong>{getVolunteerLevel()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>📅 Всего дней:</span>
                  <strong>{day - 1}</strong>
                </div>
                <div className="flex justify-between">
                  <span>🌟 Накопленный опыт:</span>
                  <strong>{resources.experience}</strong>
                </div>
                <div className="flex justify-between">
                  <span>🏆 Репутация:</span>
                  <strong>{resources.reputation}</strong>
                </div>
                <div className="flex justify-between">
                  <span>💰 Оставшиеся деньги:</span>
                  <strong>{resources.money} ₽</strong>
                </div>
              </div>
            </div>

            {getAchievements().length > 0 && (
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">🎖️ Достижения:</h3>
                <div className="space-y-1">
                  {getAchievements().map((ach, idx) => (
                    <div key={idx} className="text-sm">{ach}</div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-primary/10 p-4 rounded-lg text-center">
              <p className="text-sm">
                <strong>Ваш вклад в общество:</strong><br />
                Вы помогли множеству людей, внесли вклад в экологию и получили бесценный опыт!
              </p>
            </div>

            <Button 
              size="lg" 
              className="w-full text-lg"
              onClick={startGame}
            >
              <Icon name="RotateCcw" className="mr-2" size={20} />
              Играть снова
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Icon name="Heart" className="text-primary" size={32} />
              Путь Волонтёра
            </h1>
            <p className="text-muted-foreground">День {day} из 30</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setShowStats(!showStats)}>
              <Icon name="BarChart3" className="mr-2" size={18} />
              Статистика
            </Button>
            <Button onClick={nextDay}>
              <Icon name="ArrowRight" className="mr-2" size={18} />
              Следующий день
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <span className="text-xl">⚡</span> Энергия
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={resources.energy} className="mb-2" />
              <p className="text-sm text-muted-foreground">{resources.energy}/100</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <span className="text-xl">💪</span> Мотивация
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={resources.motivation} className="mb-2" />
              <p className="text-sm text-muted-foreground">{resources.motivation}/100</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <span className="text-xl">💰</span> Деньги
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{resources.money} ₽</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Опыт</p>
                <p className="text-2xl font-bold">🌟 {resources.experience}</p>
              </div>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {getVolunteerLevel()}
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Репутация</p>
                <p className="text-2xl font-bold">🏆 {resources.reputation}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {showStats && (
          <Card className="mb-6 bg-muted">
            <CardHeader>
              <CardTitle>Статистика игрока</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">День игры</p>
                  <p className="text-xl font-bold">{day}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Общий счёт</p>
                  <p className="text-xl font-bold">{calculateFinalScore()}</p>
                </div>
              </div>
              {getAchievements().length > 0 && (
                <div>
                  <p className="font-bold mb-2">🎯 Достижения:</p>
                  <div className="space-y-1">
                    {getAchievements().map((ach, idx) => (
                      <div key={idx} className="text-sm">{ach}</div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">🌍 Выберите волонтёрскую активность</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {activities.map(activity => (
              <Card key={activity.id} className="hover:shadow-auto transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name={activity.icon as any} size={24} className="text-primary" />
                    {activity.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{activity.description}</p>
                  
                  <div className="flex gap-2 text-xs mb-3 flex-wrap">
                    <Badge variant="outline">⚡ {activity.energyCost}</Badge>
                    <Badge variant="outline">💪 {activity.motivationCost}</Badge>
                    <Badge variant="outline">💰 {activity.moneyCost} ₽</Badge>
                  </div>
                  
                  <div className="flex gap-2 text-xs mb-3 flex-wrap">
                    <Badge variant="secondary">🌟 +{activity.experienceGain}</Badge>
                    <Badge variant="secondary">🏆 +{activity.reputationGain}</Badge>
                    <Badge variant="secondary">💰 +{activity.moneyGain} ₽</Badge>
                  </div>
                  
                  {(activity.requiresTransport || activity.requiresSpecialSkills) && (
                    <div className="mb-3 text-xs space-y-1">
                      {activity.requiresTransport && (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="Car" size={14} />
                          <span>Требуется транспорт</span>
                        </div>
                      )}
                      {activity.requiresSpecialSkills && (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="GraduationCap" size={14} />
                          <span>Требуются специальные навыки</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <Button 
                    className="w-full"
                    onClick={() => performActivity(activity)}
                    disabled={!canPerformActivity(activity).can}
                  >
                    Выполнить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Coffee" size={24} />
              Отдых и восстановление
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Восстановите силы: +30 энергии, +20 мотивации (стоимость: 50 ₽)
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={rest}
              disabled={resources.money < 50}
            >
              <Icon name="Coffee" className="mr-2" size={18} />
              Отдохнуть
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
