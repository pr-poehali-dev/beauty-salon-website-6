import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaster, setSelectedMaster] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'Все работы', count: 48 },
    { id: 'hair', name: 'Стрижки', count: 18 },
    { id: 'color', name: 'Окрашивание', count: 15 },
    { id: 'nails', name: 'Маникюр', count: 12 },
    { id: 'lashes', name: 'Ресницы', count: 8 },
    { id: 'bridal', name: 'Свадебные', count: 6 }
  ];

  const masters = [
    { id: 'all', name: 'Все мастера' },
    { id: 'anna', name: 'Анна Петрова' },
    { id: 'maria', name: 'Мария Иванова' },
    { id: 'elena', name: 'Елена Сидорова' },
    { id: 'olga', name: 'Ольга Козлова' },
    { id: 'dmitry', name: 'Дмитрий Волков' },
    { id: 'svetlana', name: 'Светлана Морозова' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Каскадная стрижка с мелированием',
      category: 'hair',
      master: 'anna',
      masterName: 'Анна Петрова',
      image: '/img/gallery-1.jpg',
      beforeImage: '/img/gallery-1-before.jpg',
      description: 'Трансформация длинных волос в стильный каскад с естественным мелированием',
      tags: ['каскад', 'мелирование', 'блонд'],
      likes: 24,
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Сложное окрашивание в технике балаяж',
      category: 'color',
      master: 'maria',
      masterName: 'Мария Иванова',
      image: '/img/gallery-2.jpg',
      beforeImage: '/img/gallery-2-before.jpg',
      description: 'Переход от темных корней к светлым кончикам в натуральной технике',
      tags: ['балаяж', 'омбре', 'карамель'],
      likes: 32,
      date: '2024-01-20'
    },
    {
      id: 3,
      title: 'Французский маникюр с дизайном',
      category: 'nails',
      master: 'elena',
      masterName: 'Елена Сидорова',
      image: '/img/gallery-3.jpg',
      description: 'Классический французский маникюр с нежным цветочным дизайном',
      tags: ['французский', 'дизайн', 'цветы'],
      likes: 18,
      date: '2024-01-25'
    },
    {
      id: 4,
      title: 'Объемное наращивание ресниц',
      category: 'lashes',
      master: 'olga',
      masterName: 'Ольга Козлова',
      image: '/img/gallery-4.jpg',
      beforeImage: '/img/gallery-4-before.jpg',
      description: '2D наращивание для создания естественного объема',
      tags: ['2D', 'объем', 'натуральный'],
      likes: 15,
      date: '2024-02-01'
    },
    {
      id: 5,
      title: 'Мужская стрижка андеркат',
      category: 'hair',
      master: 'dmitry',
      masterName: 'Дмитрий Волков',
      image: '/img/gallery-5.jpg',
      description: 'Стильная мужская стрижка с плавными переходами',
      tags: ['андеркат', 'fade', 'мужская'],
      likes: 27,
      date: '2024-02-05'
    },
    {
      id: 6,
      title: 'Свадебная прическа с локонами',
      category: 'bridal',
      master: 'anna',
      masterName: 'Анна Петрова',
      image: '/img/gallery-6.jpg',
      description: 'Романтичная свадебная укладка с мягкими локонами',
      tags: ['свадебная', 'локоны', 'романтика'],
      likes: 41,
      date: '2024-02-10'
    },
    {
      id: 7,
      title: 'Коррекция цвета из темного в блонд',
      category: 'color',
      master: 'svetlana',
      masterName: 'Светлана Морозова',
      image: '/img/gallery-7.jpg',
      beforeImage: '/img/gallery-7-before.jpg',
      description: 'Сложная работа по осветлению темных волос с восстановлением',
      tags: ['коррекция', 'блонд', 'восстановление'],
      likes: 38,
      date: '2024-02-15'
    },
    {
      id: 8,
      title: 'Градиентный маникюр омбре',
      category: 'nails',
      master: 'elena',
      masterName: 'Елена Сидорова',
      image: '/img/gallery-8.jpg',
      description: 'Плавный переход цветов от розового к белому',
      tags: ['омбре', 'градиент', 'розовый'],
      likes: 22,
      date: '2024-02-20'
    },
    {
      id: 9,
      title: 'Объемные ресницы 3D',
      category: 'lashes',
      master: 'olga',
      masterName: 'Ольга Козлова',
      image: '/img/gallery-9.jpg',
      beforeImage: '/img/gallery-9-before.jpg',
      description: 'Максимальный объем для особых случаев',
      tags: ['3D', 'объем', 'вечерний'],
      likes: 19,
      date: '2024-02-25'
    },
    {
      id: 10,
      title: 'Боб-каре с окрашиванием',
      category: 'hair',
      master: 'anna',
      masterName: 'Анна Петрова',
      image: '/img/gallery-10.jpg',
      beforeImage: '/img/gallery-10-before.jpg',
      description: 'Современная стрижка боб с многотональным окрашиванием',
      tags: ['боб', 'каре', 'многотональность'],
      likes: 35,
      date: '2024-03-01'
    },
    {
      id: 11,
      title: 'Радужное окрашивание',
      category: 'color',
      master: 'maria',
      masterName: 'Мария Иванова',
      image: '/img/gallery-11.jpg',
      beforeImage: '/img/gallery-11-before.jpg',
      description: 'Креативное цветное окрашивание с яркими акцентами',
      tags: ['радуга', 'креатив', 'яркое'],
      likes: 45,
      date: '2024-03-05'
    },
    {
      id: 12,
      title: 'Зимний nail-арт',
      category: 'nails',
      master: 'elena',
      masterName: 'Елена Сидорова',
      image: '/img/gallery-12.jpg',
      description: 'Праздничный дизайн с зимними мотивами и стразами',
      tags: ['зимний', 'стразы', 'праздничный'],
      likes: 28,
      date: '2024-03-10'
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesMaster = selectedMaster === 'all' || item.master === selectedMaster;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesMaster && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero секция */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Галерея <span className="text-primary">работ</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Посмотрите на результаты работы наших мастеров. 
              Каждая работа — это история преображения и радости клиента
            </p>
          </div>
        </div>
      </section>

      {/* Фильтры и поиск */}
      <section className="py-8 bg-white sticky top-0 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {/* Поиск */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск по работам..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Фильтр по категориям */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* Фильтр по мастерам */}
            <div className="flex flex-wrap gap-2 justify-center">
              {masters.map((master) => (
                <Button
                  key={master.id}
                  variant={selectedMaster === master.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedMaster(master.id)}
                >
                  {master.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <Icon name="ImageOff" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-semibold mb-2">Работы не найдены</h3>
              <p className="text-muted-foreground">
                Попробуйте изменить фильтры или поисковый запрос
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <p className="text-muted-foreground">
                  Найдено работ: <span className="font-semibold">{filteredItems.length}</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <div>
                              <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                                {item.title}
                              </h3>
                              <p className="text-xs text-muted-foreground">
                                {item.masterName}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-1">
                              {item.tags.slice(0, 2).map((tag, index) => (
                                <Badge key={index} variant="secondary" className="text-xs px-2 py-0.5">
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Icon name="Heart" size={14} className="text-red-500" />
                                <span>{item.likes}</span>
                              </div>
                              <span>{new Date(item.date).toLocaleDateString('ru-RU')}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <div className="space-y-6">
                        {/* Заголовок */}
                        <div className="space-y-2">
                          <h2 className="text-2xl font-bold">{item.title}</h2>
                          <p className="text-muted-foreground">Мастер: {item.masterName}</p>
                        </div>

                        {/* Изображения */}
                        <div className="grid md:grid-cols-2 gap-4">
                          {item.beforeImage && (
                            <div className="space-y-2">
                              <h4 className="font-semibold">До</h4>
                              <img 
                                src={item.beforeImage} 
                                alt="До" 
                                className="w-full aspect-square object-cover rounded-lg"
                              />
                            </div>
                          )}
                          <div className="space-y-2">
                            <h4 className="font-semibold">
                              {item.beforeImage ? 'После' : 'Результат'}
                            </h4>
                            <img 
                              src={item.image} 
                              alt="После" 
                              className="w-full aspect-square object-cover rounded-lg"
                            />
                          </div>
                        </div>

                        {/* Описание */}
                        <div className="space-y-3">
                          <h4 className="font-semibold">Описание работы</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>

                        {/* Теги */}
                        <div className="space-y-3">
                          <h4 className="font-semibold">Техники и стили</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Статистика */}
                        <div className="flex items-center justify-between py-4 border-t">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Icon name="Heart" size={16} className="text-red-500" />
                              <span className="font-medium">{item.likes} нравится</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="Calendar" size={16} className="text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {new Date(item.date).toLocaleDateString('ru-RU')}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Icon name="Share2" size={16} className="mr-2" />
                              Поделиться
                            </Button>
                            <Button size="sm">
                              <Icon name="Calendar" size={16} className="mr-2" />
                              Записаться к мастеру
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>

              {/* Кнопка загрузить еще */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Загрузить еще работы
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Хотите стать частью нашей галереи?</h2>
          <p className="text-xl mb-8 opacity-90">
            Запишитесь к нашим мастерам и получите результат, которым можно гордиться
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на услугу
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}