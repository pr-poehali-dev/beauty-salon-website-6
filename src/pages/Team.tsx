import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

export default function Team() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedMaster, setSelectedMaster] = useState<any>(null);

  const specialties = [
    { id: 'all', name: 'Все специалисты', count: 15 },
    { id: 'hair', name: 'Парикмахеры', count: 6 },
    { id: 'colorist', name: 'Колористы', count: 4 },
    { id: 'nails', name: 'Мастера маникюра', count: 3 },
    { id: 'lashes', name: 'Lash-мастера', count: 2 }
  ];

  const masters = [
    {
      id: 1,
      name: 'Анна Петрова',
      specialty: 'hair',
      position: 'Топ-стилист',
      experience: '8 лет',
      rating: 4.9,
      reviews: 247,
      price: 'от 3500 ₽',
      image: '/img/master-1.jpg',
      skills: ['Стрижки', 'Укладки', 'Свадебные прически'],
      bio: 'Анна — ведущий стилист салона с 8-летним опытом. Специализируется на создании индивидуального образа для каждого клиента.',
      education: ['Академия красоты "Невские берега"', 'Курсы повышения квалификации в Лондоне'],
      awards: ['Лучший стилист года 2023', 'Мастер высшей категории'],
      socialMedia: {
        instagram: '@anna_hair_magic',
        vk: 'anna.petrova'
      },
      schedule: {
        monday: '9:00 - 18:00',
        tuesday: '9:00 - 18:00',
        wednesday: 'Выходной',
        thursday: '10:00 - 19:00',
        friday: '9:00 - 18:00',
        saturday: '10:00 - 17:00',
        sunday: '10:00 - 16:00'
      }
    },
    {
      id: 2,
      name: 'Мария Иванова',
      specialty: 'colorist',
      position: 'Колорист',
      experience: '6 лет',
      rating: 4.8,
      reviews: 189,
      price: 'от 4000 ₽',
      image: '/img/master-2.jpg',
      skills: ['Окрашивание', 'Мелирование', 'Балаяж', 'Омбре'],
      bio: 'Мария — настоящий художник в мире окрашивания. Создает уникальные цветовые решения.',
      education: ['Международная школа колористики', 'Сертификат Wella Professionals'],
      awards: ['Колорист года 2022', 'Эксперт по окрашиванию'],
      socialMedia: {
        instagram: '@maria_color_expert',
        vk: 'maria.colorist'
      },
      schedule: {
        monday: '10:00 - 19:00',
        tuesday: '10:00 - 19:00',
        wednesday: '10:00 - 19:00',
        thursday: 'Выходной',
        friday: '10:00 - 19:00',
        saturday: '9:00 - 18:00',
        sunday: '10:00 - 17:00'
      }
    },
    {
      id: 3,
      name: 'Елена Сидорова',
      specialty: 'nails',
      position: 'Мастер маникюра',
      experience: '5 лет',
      rating: 4.9,
      reviews: 324,
      price: 'от 2500 ₽',
      image: '/img/master-3.jpg',
      skills: ['Маникюр', 'Педикюр', 'Наращивание', 'Дизайн'],
      bio: 'Елена специализируется на создании изысканного nail-арта и качественном уходе за ногтями.',
      education: ['Школа ногтевого сервиса "NailPro"', 'Курсы дизайна ногтей'],
      awards: ['Nail-мастер года 2023', 'Лучший дизайн ногтей'],
      socialMedia: {
        instagram: '@elena_nails_art',
        vk: 'elena.nails'
      },
      schedule: {
        monday: '9:00 - 18:00',
        tuesday: '9:00 - 18:00',
        wednesday: '9:00 - 18:00',
        thursday: '9:00 - 18:00',
        friday: 'Выходной',
        saturday: '10:00 - 19:00',
        sunday: '10:00 - 18:00'
      }
    },
    {
      id: 4,
      name: 'Ольга Козлова',
      specialty: 'lashes',
      position: 'Lash-мастер',
      experience: '4 года',
      rating: 4.7,
      reviews: 156,
      price: 'от 3000 ₽',
      image: '/img/master-4.jpg',
      skills: ['Наращивание ресниц', 'Ламинирование', 'Ботокс ресниц'],
      bio: 'Ольга создает естественный и выразительный взгляд, подбирая идеальную форму ресниц.',
      education: ['Академия красоты "Lash Academy"', 'Курсы ламинирования ресниц'],
      awards: ['Lash-мастер месяца', 'Сертификат качества'],
      socialMedia: {
        instagram: '@olga_lash_master',
        vk: 'olga.lashes'
      },
      schedule: {
        monday: '10:00 - 19:00',
        tuesday: 'Выходной',
        wednesday: '10:00 - 19:00',
        thursday: '10:00 - 19:00',
        friday: '10:00 - 19:00',
        saturday: '9:00 - 18:00',
        sunday: '10:00 - 17:00'
      }
    },
    {
      id: 5,
      name: 'Дмитрий Волков',
      specialty: 'hair',
      position: 'Барбер',
      experience: '7 лет',
      rating: 4.8,
      reviews: 298,
      price: 'от 2000 ₽',
      image: '/img/master-5.jpg',
      skills: ['Мужские стрижки', 'Бритье', 'Моделирование бороды'],
      bio: 'Дмитрий — профессиональный барбер, создающий стильные мужские образы.',
      education: ['Барбер-школа "Men Style"', 'Курсы классического бритья'],
      awards: ['Лучший барбер города', 'Мастер классического бритья'],
      socialMedia: {
        instagram: '@dmitry_barber_pro',
        vk: 'dmitry.barber'
      },
      schedule: {
        monday: '10:00 - 20:00',
        tuesday: '10:00 - 20:00',
        wednesday: '10:00 - 20:00',
        thursday: '10:00 - 20:00',
        friday: '10:00 - 20:00',
        saturday: '9:00 - 19:00',
        sunday: 'Выходной'
      }
    },
    {
      id: 6,
      name: 'Светлана Морозова',
      specialty: 'colorist',
      position: 'Технолог',
      experience: '10 лет',
      rating: 4.9,
      reviews: 412,
      price: 'от 5000 ₽',
      image: '/img/master-6.jpg',
      skills: ['Сложное окрашивание', 'Восстановление волос', 'Кератин'],
      bio: 'Светлана — ведущий технолог салона, эксперт по сложным окрашиваниям и восстановлению.',
      education: ['Институт красоты', 'Международные курсы Schwarzkopf'],
      awards: ['Технолог года 2023', 'Эксперт по восстановлению волос'],
      socialMedia: {
        instagram: '@svetlana_hair_tech',
        vk: 'svetlana.tech'
      },
      schedule: {
        monday: '9:00 - 18:00',
        tuesday: '9:00 - 18:00',
        wednesday: '9:00 - 18:00',
        thursday: '9:00 - 18:00',
        friday: '9:00 - 18:00',
        saturday: 'Выходной',
        sunday: 'Выходной'
      }
    }
  ];

  const filteredMasters = selectedSpecialty === 'all' 
    ? masters 
    : masters.filter(master => master.specialty === selectedSpecialty);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero секция */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Наша <span className="text-primary">команда</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональные мастера с многолетним опытом готовы воплотить 
              ваши мечты о красоте в реальность
            </p>
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="py-8 bg-white sticky top-0 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {specialties.map((specialty) => (
              <Button
                key={specialty.id}
                variant={selectedSpecialty === specialty.id ? 'default' : 'outline'}
                onClick={() => setSelectedSpecialty(specialty.id)}
                className="flex items-center gap-2"
              >
                {specialty.name}
                <Badge variant="secondary" className="ml-2">
                  {specialty.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Список мастеров */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMasters.map((master) => (
              <Card key={master.id} className="group hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={master.image} 
                    alt={master.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{master.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {master.position}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                        <span className="font-semibold">{master.rating}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {master.reviews} отзывов
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Icon name="Calendar" size={16} className="text-muted-foreground" />
                        <span>{master.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Ruble" size={16} className="text-muted-foreground" />
                        <span>{master.price}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {master.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="flex-1"
                            onClick={() => setSelectedMaster(master)}
                          >
                            <Icon name="User" size={16} className="mr-2" />
                            Подробнее
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{master.name}</DialogTitle>
                            <DialogDescription>
                              {master.position} • {master.experience} опыта
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-6">
                            <div className="flex items-center gap-6">
                              <img 
                                src={master.image} 
                                alt={master.name}
                                className="w-24 h-24 rounded-full object-cover"
                              />
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                                  <span className="font-semibold">{master.rating}</span>
                                  <span className="text-muted-foreground">({master.reviews} отзывов)</span>
                                </div>
                                <div className="text-lg font-semibold text-primary">
                                  {master.price}
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">О мастере</h4>
                              <p className="text-muted-foreground">{master.bio}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Специализация</h4>
                              <div className="flex flex-wrap gap-2">
                                {master.skills.map((skill, index) => (
                                  <Badge key={index} variant="secondary">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Образование</h4>
                              <ul className="space-y-1">
                                {master.education.map((edu, index) => (
                                  <li key={index} className="text-muted-foreground flex items-start gap-2">
                                    <Icon name="GraduationCap" size={16} className="mt-0.5 text-primary" />
                                    {edu}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Награды</h4>
                              <ul className="space-y-1">
                                {master.awards.map((award, index) => (
                                  <li key={index} className="text-muted-foreground flex items-start gap-2">
                                    <Icon name="Award" size={16} className="mt-0.5 text-primary" />
                                    {award}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-3">Расписание работы</h4>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div className="flex justify-between">
                                  <span>Понедельник:</span>
                                  <span className="font-medium">{master.schedule.monday}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Вторник:</span>
                                  <span className="font-medium">{master.schedule.tuesday}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Среда:</span>
                                  <span className="font-medium">{master.schedule.wednesday}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Четверг:</span>
                                  <span className="font-medium">{master.schedule.thursday}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Пятница:</span>
                                  <span className="font-medium">{master.schedule.friday}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Суббота:</span>
                                  <span className="font-medium">{master.schedule.saturday}</span>
                                </div>
                                <div className="flex justify-between col-span-2">
                                  <span>Воскресенье:</span>
                                  <span className="font-medium">{master.schedule.sunday}</span>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Социальные сети</h4>
                              <div className="flex gap-4">
                                <a 
                                  href={`https://instagram.com/${master.socialMedia.instagram.replace('@', '')}`}
                                  className="flex items-center gap-2 text-primary hover:underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Icon name="Instagram" size={16} />
                                  {master.socialMedia.instagram}
                                </a>
                                <a 
                                  href={`https://vk.com/${master.socialMedia.vk}`}
                                  className="flex items-center gap-2 text-primary hover:underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Icon name="User" size={16} />
                                  VK: {master.socialMedia.vk}
                                </a>
                              </div>
                            </div>

                            <div className="flex gap-3 pt-4">
                              <Button className="flex-1">
                                <Icon name="Calendar" size={16} className="mr-2" />
                                Записаться к мастеру
                              </Button>
                              <Button variant="outline">
                                <Icon name="MessageCircle" size={16} className="mr-2" />
                                Написать
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Button className="flex-1">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        Записаться
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Хотите присоединиться к нашей команде?</h2>
          <p className="text-xl mb-8 opacity-90">
            Мы всегда ищем талантливых мастеров для работы в дружном коллективе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Icon name="Briefcase" size={20} className="mr-2" />
                Смотреть вакансии
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Send" size={20} className="mr-2" />
              Отправить резюме
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}