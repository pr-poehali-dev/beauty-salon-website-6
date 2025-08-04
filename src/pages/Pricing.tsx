import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Все услуги' },
    { id: 'hair', name: 'Волосы' },
    { id: 'nails', name: 'Ногти' },
    { id: 'lashes', name: 'Ресницы' },
    { id: 'massage', name: 'Массаж' },
    { id: 'cosmetology', name: 'Косметология' }
  ];

  const services = [
    {
      category: 'hair',
      name: 'Женская стрижка',
      description: 'Стрижка любой сложности с укладкой',
      price: 'от 2500 ₽',
      duration: '60 мин',
      popular: true
    },
    {
      category: 'hair',
      name: 'Мужская стрижка',
      description: 'Классическая или современная мужская стрижка',
      price: 'от 1800 ₽',
      duration: '45 мин'
    },
    {
      category: 'hair',
      name: 'Окрашивание волос',
      description: 'Однотонное окрашивание профессиональными красками',
      price: 'от 3500 ₽',
      duration: '120 мин',
      popular: true
    },
    {
      category: 'hair',
      name: 'Мелирование',
      description: 'Классическое мелирование или балаяж',
      price: 'от 4500 ₽',
      duration: '150 мин'
    },
    {
      category: 'hair',
      name: 'Химическая завивка',
      description: 'Долговременная укладка на любую длину волос',
      price: 'от 3000 ₽',
      duration: '90 мин'
    },
    {
      category: 'nails',
      name: 'Маникюр классический',
      description: 'Обрезной маникюр с покрытием',
      price: 'от 1500 ₽',
      duration: '60 мин',
      popular: true
    },
    {
      category: 'nails',
      name: 'Маникюр аппаратный',
      description: 'Современный аппаратный маникюр',
      price: 'от 1800 ₽',
      duration: '45 мин'
    },
    {
      category: 'nails',
      name: 'Педикюр',
      description: 'Полный педикюр с покрытием',
      price: 'от 2200 ₽',
      duration: '90 мин'
    },
    {
      category: 'nails',
      name: 'Наращивание ногтей',
      description: 'Наращивание гелем или акрилом',
      price: 'от 2800 ₽',
      duration: '120 мин'
    },
    {
      category: 'lashes',
      name: 'Наращивание ресниц 2D',
      description: 'Классическое наращивание ресниц',
      price: 'от 2500 ₽',
      duration: '90 мин',
      popular: true
    },
    {
      category: 'lashes',
      name: 'Наращивание ресниц 3D',
      description: 'Объемное наращивание ресниц',
      price: 'от 3200 ₽',
      duration: '120 мин'
    },
    {
      category: 'lashes',
      name: 'Ламинирование ресниц',
      description: 'Процедура укрепления и подкручивания ресниц',
      price: 'от 2000 ₽',
      duration: '60 мин'
    },
    {
      category: 'massage',
      name: 'Массаж лица',
      description: 'Расслабляющий массаж лица и шеи',
      price: 'от 1800 ₽',
      duration: '45 мин'
    },
    {
      category: 'massage',
      name: 'Антицеллюлитный массаж',
      description: 'Корректирующий массаж проблемных зон',
      price: 'от 2500 ₽',
      duration: '60 мин'
    },
    {
      category: 'cosmetology',
      name: 'Чистка лица',
      description: 'Комплексная чистка лица с уходом',
      price: 'от 3000 ₽',
      duration: '90 мин'
    },
    {
      category: 'cosmetology',
      name: 'Пилинг лица',
      description: 'Химический пилинг для обновления кожи',
      price: 'от 2800 ₽',
      duration: '60 мин'
    }
  ];

  const packages = [
    {
      name: 'Базовый уход',
      description: 'Идеально для регулярного ухода',
      price: '5500 ₽',
      originalPrice: '7000 ₽',
      discount: '20%',
      services: ['Стрижка', 'Укладка', 'Маникюр'],
      duration: '3 часа'
    },
    {
      name: 'Полное преображение',
      description: 'Комплексное обновление образа',
      price: '12000 ₽',
      originalPrice: '15000 ₽',
      discount: '20%',
      services: ['Стрижка', 'Окрашивание', 'Маникюр', 'Ресницы'],
      duration: '5 часов',
      popular: true
    },
    {
      name: 'Свадебный пакет',
      description: 'Все для идеального свадебного образа',
      price: '18000 ₽',
      originalPrice: '22000 ₽',
      discount: '18%',
      services: ['Прическа', 'Макияж', 'Маникюр', 'Ресницы', 'Массаж'],
      duration: '6 часов'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero секция */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Прайс-лист</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Прозрачные цены на все услуги. Никаких скрытых доплат
            </p>
          </div>
        </div>
      </section>

      {/* Фильтры и поиск */}
      <section className="py-8 bg-white sticky top-0 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск услуг..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Пакетные предложения */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Пакетные предложения</h2>
            <p className="text-xl text-muted-foreground">
              Сэкономьте до 20% при выборе комплексных программ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-primary shadow-xl' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Популярно
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          {pkg.originalPrice}
                        </span>
                      )}
                    </div>
                    {pkg.discount && (
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Скидка {pkg.discount}
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Включено:</h4>
                    <ul className="space-y-1">
                      {pkg.services.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-green-600" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    Продолжительность: {pkg.duration}
                  </div>

                  <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Записаться на пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Список услуг */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Все услуги</h2>
            <p className="text-xl text-muted-foreground">
              Полный список наших услуг с актуальными ценами
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {filteredServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{service.name}</h3>
                      {service.popular && (
                        <Badge className="bg-orange-100 text-orange-700">
                          Популярно
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3">{service.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary mb-3">
                      {service.price}
                    </div>
                    <Button>
                      <Icon name="Calendar" size={16} className="mr-2" />
                      Записаться
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <Icon name="Search" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-semibold mb-2">Услуги не найдены</h3>
              <p className="text-muted-foreground">
                Попробуйте изменить поисковый запрос или выбрать другую категорию
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Дополнительная информация */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Важная информация</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Info" size={20} className="text-primary" />
                  О ценах
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Цены указаны в рублях и актуальны на текущую дату</li>
                  <li>• Стоимость может варьироваться в зависимости от сложности работ</li>
                  <li>• Точную стоимость уточняйте при записи</li>
                  <li>• Действуют скидки для постоянных клиентов</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Icon name="CreditCard" size={20} className="text-primary" />
                  Оплата
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Принимаем наличные и банковские карты</li>
                  <li>• Возможна оплата через СБП</li>
                  <li>• Работаем с подарочными сертификатами</li>
                  <li>• Предоплата при записи не требуется</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы записаться?</h2>
          <p className="text-xl mb-8 opacity-90">
            Выберите удобное время и подарите себе качественный уход
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться онлайн
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить и уточнить
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}