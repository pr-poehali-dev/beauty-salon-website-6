import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Promotions() {
  const promotions = [
    {
      id: 1,
      title: 'Первый визит со скидкой 20%',
      description: 'Специальное предложение для новых клиентов на любую услугу',
      discount: '20%',
      validUntil: '2024-04-30',
      services: ['Все услуги'],
      conditions: 'Только для новых клиентов. Не суммируется с другими акциями.',
      image: '/img/promo-1.jpg',
      popular: true,
      color: 'bg-green-500'
    },
    {
      id: 2,
      title: 'Комплекс "Красота и здоровье"',
      description: 'Стрижка + окрашивание + маникюр по специальной цене',
      discount: '25%',
      originalPrice: '12000 ₽',
      salePrice: '9000 ₽',
      validUntil: '2024-03-31',
      services: ['Стрижка', 'Окрашивание', 'Маникюр'],
      conditions: 'Услуги должны быть выполнены в один день',
      image: '/img/promo-2.jpg',
      color: 'bg-purple-500'
    },
    {
      id: 3,
      title: 'Счастливые часы',
      description: 'Скидка 30% на все услуги с понедельника по среду с 10:00 до 14:00',
      discount: '30%',
      validUntil: '2024-12-31',
      services: ['Все услуги'],
      conditions: 'Действует только в указанные дни и часы',
      image: '/img/promo-3.jpg',
      color: 'bg-blue-500'
    },
    {
      id: 4,
      title: 'Приведи подругу',
      description: 'Вы и ваша подруга получаете скидку 15% на любые услуги',
      discount: '15%',
      validUntil: '2024-06-30',
      services: ['Все услуги'],
      conditions: 'Подруга должна быть новым клиентом салона',
      image: '/img/promo-4.jpg',
      color: 'bg-pink-500'
    },
    {
      id: 5,
      title: 'Студенческая скидка',
      description: 'Постоянная скидка 10% для студентов при предъявлении студенческого',
      discount: '10%',
      validUntil: 'Постоянно',
      services: ['Все услуги кроме VIP'],
      conditions: 'При предъявлении действующего студенческого билета',
      image: '/img/promo-5.jpg',
      color: 'bg-orange-500'
    },
    {
      id: 6,
      title: 'Свадебный пакет',
      description: 'Полный комплекс услуг для невесты и подружек со скидкой',
      discount: '35%',
      originalPrice: '25000 ₽',
      salePrice: '16250 ₽',
      validUntil: '2024-09-30',
      services: ['Прическа', 'Макияж', 'Маникюр', 'Ресницы'],
      conditions: 'Минимум 3 человека, за 2 недели до свадьбы',
      image: '/img/promo-6.jpg',
      color: 'bg-rose-500',
      popular: true
    }
  ];

  const loyaltyProgram = {
    title: 'Программа лояльности "Beauty Stars"',
    description: 'Копите баллы за каждый визит и получайте скидки',
    levels: [
      {
        name: 'Звезда',
        spending: 'от 0 ₽',
        discount: '5%',
        benefits: ['Скидка 5%', 'Уведомления об акциях']
      },
      {
        name: 'Суперзвезда',
        spending: 'от 30 000 ₽',
        discount: '10%',
        benefits: ['Скидка 10%', 'Приоритетная запись', 'Подарок на день рождения']
      },
      {
        name: 'VIP-звезда',
        spending: 'от 100 000 ₽',
        discount: '15%',
        benefits: ['Скидка 15%', 'Персональный менеджер', 'Эксклюзивные предложения']
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero секция */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Акции</span> и скидки
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Выгодные предложения и специальные цены на услуги красоты
            </p>
          </div>
        </div>
      </section>

      {/* Текущие акции */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Текущие акции</h2>
            <p className="text-xl text-muted-foreground">
              Не упустите возможность сэкономить на любимых процедурах
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promo) => (
              <Card key={promo.id} className={`relative overflow-hidden ${promo.popular ? 'border-primary shadow-xl' : ''}`}>
                {promo.popular && (
                  <Badge className="absolute -top-2 -right-2 z-10 rotate-12">
                    Популярно
                  </Badge>
                )}

                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={promo.image} 
                    alt={promo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 left-4 ${promo.color} text-white px-3 py-1 rounded-full font-bold`}>
                    -{promo.discount}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{promo.title}</CardTitle>
                  <CardDescription>{promo.description}</CardDescription>
                  
                  {promo.salePrice && (
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-primary">{promo.salePrice}</span>
                      {promo.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          {promo.originalPrice}
                        </span>
                      )}
                    </div>
                  )}
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Услуги:</h4>
                    <div className="flex flex-wrap gap-2">
                      {promo.services.map((service, index) => (
                        <Badge key={index} variant="secondary">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span>Действует до: {new Date(promo.validUntil).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Info" size={16} className="text-muted-foreground mt-0.5" />
                      <span className="text-muted-foreground">{promo.conditions}</span>
                    </div>
                  </div>

                  <Button className="w-full">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Записаться по акции
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Программа лояльности */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">{loyaltyProgram.title}</h2>
              <p className="text-xl text-muted-foreground">
                {loyaltyProgram.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {loyaltyProgram.levels.map((level, index) => (
                <Card key={index} className={`text-center relative ${index === 1 ? 'border-primary shadow-xl scale-105' : ''}`}>
                  {index === 1 && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Популярный
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <div className="mb-4">
                      <Icon name="Star" size={48} className="mx-auto text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{level.name}</CardTitle>
                    <CardDescription>{level.spending}</CardDescription>
                    <div className="text-3xl font-bold text-primary">{level.discount}</div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      {level.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-green-600" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg">
                <Icon name="Gift" size={20} className="mr-2" />
                Присоединиться к программе
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Подарочные сертификаты */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Подарочные сертификаты</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Идеальный подарок для ваших близких
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <Icon name="Gift" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">На сумму</h3>
                <p className="text-muted-foreground mb-4">
                  Сертификат на любую сумму от 1000 ₽
                </p>
                <Button variant="outline" className="w-full">
                  Купить
                </Button>
              </Card>

              <Card className="p-6 border-primary shadow-lg">
                <Icon name="Sparkles" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">На услугу</h3>
                <p className="text-muted-foreground mb-4">
                  Сертификат на конкретную услугу
                </p>
                <Button className="w-full">
                  Выбрать услугу
                </Button>
              </Card>

              <Card className="p-6">
                <Icon name="Heart" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Пакет услуг</h3>
                <p className="text-muted-foreground mb-4">
                  Готовый пакет из нескольких услуг
                </p>
                <Button variant="outline" className="w-full">
                  Посмотреть пакеты
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Специальные предложения */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Специальные предложения</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <Icon name="Users" size={40} className="text-primary" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Корпоративные скидки</h3>
                    <p className="text-muted-foreground">
                      Специальные цены для сотрудников компаний от 10% до 20%
                    </p>
                  </div>
                  <Button variant="outline">
                    Подробнее
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <Icon name="Calendar" size={40} className="text-primary" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Абонементы</h3>
                    <p className="text-muted-foreground">
                      Экономьте до 25% при покупке абонемента на несколько посещений
                    </p>
                  </div>
                  <Button variant="outline">
                    Выбрать абонемент
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <Icon name="Cake" size={40} className="text-primary" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Скидка в день рождения</h3>
                    <p className="text-muted-foreground">
                      Получите скидку 20% в день рождения и неделю после
                    </p>
                  </div>
                  <Button variant="outline">
                    Узнать больше
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Не упустите выгодные предложения!</h2>
          <p className="text-xl mb-8 opacity-90">
            Подпишитесь на рассылку и первыми узнавайте о новых акциях
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email"
              className="px-4 py-3 rounded-lg text-gray-900 flex-1"
            />
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Icon name="Bell" size={20} className="mr-2" />
              Подписаться
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}