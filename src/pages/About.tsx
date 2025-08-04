import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function About() {
  const stats = [
    { number: '10+', label: 'Лет на рынке', icon: 'Calendar' },
    { number: '5000+', label: 'Довольных клиентов', icon: 'Users' },
    { number: '15', label: 'Опытных мастеров', icon: 'Star' },
    { number: '50+', label: 'Видов услуг', icon: 'Scissors' }
  ];

  const values = [
    {
      icon: 'Heart',
      title: 'Индивидуальный подход',
      description: 'Каждый клиент уникален, и мы находим персональное решение для каждого'
    },
    {
      icon: 'Award',
      title: 'Высокое качество',
      description: 'Используем только премиальные материалы и новейшие технологии'
    },
    {
      icon: 'Clock',
      title: 'Пунктуальность',
      description: 'Ценим ваше время и всегда соблюдаем договоренности'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Строго соблюдаем все санитарные нормы и стандарты'
    }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Основание салона',
      description: 'Открыли первый салон в центре города с командой из 3 мастеров'
    },
    {
      year: '2016',
      title: 'Расширение команды',
      description: 'Присоединились 5 новых специалистов, добавили услуги маникюра'
    },
    {
      year: '2018',
      title: 'Новое оборудование',
      description: 'Обновили все оборудование, внедрили современные технологии'
    },
    {
      year: '2020',
      title: 'Онлайн-запись',
      description: 'Запустили удобную систему онлайн-записи к мастерам'
    },
    {
      year: '2022',
      title: 'Второй филиал',
      description: 'Открыли второй салон в новом районе города'
    },
    {
      year: '2024',
      title: 'Премиальные услуги',
      description: 'Добавили VIP-зону и эксклюзивные процедуры'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero секция */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              О <span className="text-primary">BeautySpace</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Мы создаем не просто красоту — мы дарим уверенность в себе. 
              Более 10 лет помогаем нашим клиентам выглядеть и чувствовать себя лучше.
            </p>
            <div className="flex justify-center">
              <img 
                src="/img/salon-interior.jpg" 
                alt="Интерьер салона" 
                className="rounded-2xl shadow-2xl max-w-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="pt-6">
                  <Icon name={stat.icon as any} size={40} className="mx-auto mb-4 text-primary" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Наша миссия */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Наша миссия</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Мы верим, что красота — это гармония внешнего и внутреннего состояния. 
                Наша цель — помочь каждому клиенту обрести уверенность и подчеркнуть индивидуальность.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Почему выбирают нас?</h3>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name={value.icon as any} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{value.title}</h4>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/img/team-photo.jpg" 
                  alt="Команда салона" 
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* История развития */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">История развития</h2>
              <p className="text-xl text-muted-foreground">
                От небольшого салона до ведущей сети красоты в городе
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              
              <div className="space-y-8">
                {timeline.map((event, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <Card className="border-l-4 border-l-primary">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Badge variant="secondary" className="text-lg px-3 py-1">
                            {event.year}
                          </Badge>
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Награды и сертификаты */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Награды и сертификаты</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Icon name="Award" size={60} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Лучший салон 2023</h3>
                  <p className="text-muted-foreground">По версии городского рейтинга</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Icon name="Certificate" size={60} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">ISO 9001</h3>
                  <p className="text-muted-foreground">Сертификат качества услуг</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Icon name="Trophy" size={60} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Выбор клиентов</h3>
                  <p className="text-muted-foreground">5 лет подряд - народный рейтинг</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы стать частью нашей истории?</h2>
          <p className="text-xl mb-8 opacity-90">
            Запишитесь на консультацию и узнайте, как мы можем подчеркнуть вашу красоту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}