import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Careers() {
  const vacancies = [
    {
      id: 1,
      title: 'Парикмахер-универсал',
      department: 'Парикмахерские услуги',
      type: 'Полная занятость',
      experience: 'От 2 лет',
      salary: 'от 80 000 ₽',
      description: 'Ищем опытного парикмахера для работы в дружном коллективе',
      requirements: [
        'Опыт работы парикмахером от 2 лет',
        'Знание современных техник стрижки',
        'Умение работать с различными типами волос',
        'Коммуникабельность и стрессоустойчивость'
      ],
      benefits: [
        'Официальное трудоустройство',
        'Гибкий график работы',
        'Премии и бонусы',
        'Обучение за счет компании'
      ],
      urgent: true
    },
    {
      id: 2,
      title: 'Мастер маникюра',
      department: 'Nail-сервис',
      type: 'Полная занятость',
      experience: 'От 1 года',
      salary: 'от 60 000 ₽',
      description: 'Приглашаем талантливого nail-мастера в нашу команду',
      requirements: [
        'Опыт работы мастером маникюра от 1 года',
        'Знание техник наращивания и дизайна',
        'Аккуратность и внимание к деталям',
        'Желание развиваться в профессии'
      ],
      benefits: [
        'Современное оборудование',
        'Качественные материалы',
        'Постоянный поток клиентов',
        'Дружный коллектив'
      ]
    },
    {
      id: 3,
      title: 'Администратор салона',
      department: 'Администрация',
      type: 'Полная занятость',
      experience: 'Без опыта',
      salary: 'от 45 000 ₽',
      description: 'Ищем приветливого администратора для работы с клиентами',
      requirements: [
        'Грамотная речь и приятный голос',
        'Умение работать с компьютером',
        'Стрессоустойчивость',
        'Желание работать в сфере красоты'
      ],
      benefits: [
        'Обучение с первого дня',
        'Скидки на услуги салона',
        'Карьерный рост',
        'Стабильная зарплата'
      ]
    }
  ];

  const benefits = [
    {
      icon: 'DollarSign',
      title: 'Достойная зарплата',
      description: 'Конкурентная оплата труда + премии и бонусы'
    },
    {
      icon: 'GraduationCap',
      title: 'Обучение и развитие',
      description: 'Регулярные тренинги и курсы повышения квалификации'
    },
    {
      icon: 'Users',
      title: 'Дружный коллектив',
      description: 'Работа в команде профессионалов и единомышленников'
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Возможность выбора удобного рабочего графика'
    },
    {
      icon: 'Award',
      title: 'Карьерный рост',
      description: 'Возможности для профессионального и карьерного развития'
    },
    {
      icon: 'Gift',
      title: 'Льготы и скидки',
      description: 'Скидки на услуги салона для сотрудников и их семей'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero секция */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Карьера</span> в BeautySpace
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйтесь к команде профессионалов и развивайтесь вместе с нами
            </p>
          </div>
        </div>
      </section>

      {/* Преимущества работы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">
              Мы создаем лучшие условия для работы и развития наших сотрудников
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <Icon name={benefit.icon as any} size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Открытые вакансии */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Открытые вакансии</h2>
            <p className="text-xl text-muted-foreground">
              Найдите свою идеальную позицию в нашей команде
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {vacancies.map((vacancy) => (
              <Card key={vacancy.id} className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-semibold">{vacancy.title}</h3>
                          {vacancy.urgent && (
                            <Badge className="bg-red-100 text-red-700">
                              Срочно
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground">{vacancy.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3">Требования:</h4>
                        <ul className="space-y-2">
                          {vacancy.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Мы предлагаем:</h4>
                        <ul className="space-y-2">
                          {vacancy.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <Icon name="Star" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="lg:w-64 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Briefcase" size={16} className="text-muted-foreground" />
                        <span>{vacancy.department}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Clock" size={16} className="text-muted-foreground" />
                        <span>{vacancy.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="TrendingUp" size={16} className="text-muted-foreground" />
                        <span>Опыт: {vacancy.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="DollarSign" size={16} className="text-muted-foreground" />
                        <span className="font-semibold text-primary">{vacancy.salary}</span>
                      </div>
                    </div>

                    <Button className="w-full">
                      <Icon name="Send" size={16} className="mr-2" />
                      Откликнуться
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Форма отклика */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Отправить резюме</h2>
              <p className="text-xl text-muted-foreground">
                Не нашли подходящую вакансию? Отправьте нам свое резюме!
              </p>
            </div>

            <Card className="p-6">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя и фамилия</label>
                    <Input placeholder="Ваше полное имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input placeholder="your@email.com" type="email" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Желаемая позиция</label>
                  <Input placeholder="На какую позицию претендуете?" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">О себе</label>
                  <Textarea 
                    placeholder="Расскажите о своем опыте работы, навыках и достижениях..."
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Резюме</label>
                  <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
                    <Icon name="Upload" size={32} className="mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground mb-2">
                      Перетащите файл сюда или нажмите для выбора
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Поддерживаются форматы: PDF, DOC, DOCX (до 5 МБ)
                    </p>
                    <Button variant="outline" className="mt-4">
                      Выбрать файл
                    </Button>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить резюме
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Мы свяжемся с вами в течение 3 рабочих дней
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы присоединиться к нам?</h2>
          <p className="text-xl mb-8 opacity-90">
            Станьте частью команды, которая создает красоту каждый день
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Icon name="Send" size={20} className="mr-2" />
              Отправить резюме
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить HR
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}