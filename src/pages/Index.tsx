import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: 'Стрижка и укладка',
      description: 'Профессиональная стрижка с учетом формы лица',
      price: 'от 2500 ₽',
      icon: 'Scissors'
    },
    {
      id: 2,
      title: 'Окрашивание',
      description: 'Современные техники окрашивания волос',
      price: 'от 4500 ₽',
      icon: 'Palette'
    },
    {
      id: 3,
      title: 'Макияж',
      description: 'Дневной и вечерний макияж',
      price: 'от 3000 ₽',
      icon: 'Brush'
    },
    {
      id: 4,
      title: 'Маникюр',
      description: 'Классический и аппаратный маникюр',
      price: 'от 1800 ₽',
      icon: 'Hand'
    },
    {
      id: 5,
      title: 'Педикюр',
      description: 'Медицинский и spa-педикюр',
      price: 'от 2200 ₽',
      icon: 'Heart'
    },
    {
      id: 6,
      title: 'Массаж лица',
      description: 'Омолаживающий массаж и уход',
      price: 'от 2800 ₽',
      icon: 'Sparkles'
    }
  ];

  const masters = [
    {
      name: 'Анна Петрова',
      specialty: 'Стилист-парикмахер',
      experience: '8 лет опыта',
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg'
    },
    {
      name: 'Елена Смирнова',
      specialty: 'Мастер маникюра',
      experience: '6 лет опыта',
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg'
    },
    {
      name: 'Мария Козлова',
      specialty: 'Визажист',
      experience: '10 лет опыта',
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg'
    }
  ];

  const reviews = [
    {
      name: 'Ольга К.',
      rating: 5,
      text: 'Потрясающий салон! Мастера настоящие профессионалы.',
      service: 'Окрашивание'
    },
    {
      name: 'Анна М.',
      rating: 5,
      text: 'Всегда хожу только к вам. Качество на высшем уровне!',
      service: 'Маникюр'
    },
    {
      name: 'Елена В.',
      rating: 5,
      text: 'Очень довольна результатом. Рекомендую всем подругам!',
      service: 'Стрижка'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">BeautySpace</div>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
              <Link to="/services" className="hover:text-primary transition-colors">Услуги</Link>
              <Link to="/about" className="hover:text-primary transition-colors">О нас</Link>
              <Link to="/team" className="hover:text-primary transition-colors">Команда</Link>
              <Link to="/gallery" className="hover:text-primary transition-colors">Галерея</Link>
              <Link to="/blog" className="hover:text-primary transition-colors">Блог</Link>
              <Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link>
              <Link to="/cart" className="hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="ShoppingCart" size={20} />
                Корзина
              </Link>
            </div>
            <Button onClick={() => setIsBookingOpen(true)} className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Твоя красота - наша <span className="text-primary">страсть</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Профессиональные услуги красоты в современном салоне. 
              Создаем неповторимый образ для каждой клиентки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" onClick={() => setIsBookingOpen(true)} className="bg-primary hover:bg-primary/90">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться онлайн
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" className="mr-2" size={20} />
                +7 (999) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр услуг для вашей красоты</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">{service.price}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Мастера */}
      <section id="masters" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши мастера</h2>
            <p className="text-xl text-muted-foreground">Профессионалы с многолетним опытом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {masters.map((master, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={master.image} 
                      alt={master.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{master.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {master.specialty}
                  </CardDescription>
                  <Badge variant="outline">{master.experience}</Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Галерея работ */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Галерея работ</h2>
            <p className="text-xl text-muted-foreground">Примеры наших работ</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <img 
                src="/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg" 
                alt="Работа 1" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Стрижка и укладка</h3>
                  <p className="text-sm">Современная стрижка</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <img 
                src="/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg" 
                alt="Работа 2" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Nail Art</h3>
                  <p className="text-sm">Дизайн ногтей</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <img 
                src="/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg" 
                alt="Работа 3" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Макияж</h3>
                  <p className="text-sm">Вечерний образ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <Badge variant="secondary">{review.service}</Badge>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Программа лояльности */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Программа лояльности</h2>
            <p className="text-xl text-muted-foreground mb-8">Получайте бонусы за каждое посещение</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <Icon name="Gift" size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle>Скидка 10%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>После 5 посещений</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Icon name="Crown" size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle>Скидка 15%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>После 10 посещений</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Icon name="Diamond" size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle>Скидка 20%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>После 20 посещений</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Мы всегда рады вам помочь</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Icon name="MapPin" size={24} className="text-primary" />
                <div>
                  <h3 className="font-semibold">Адрес</h3>
                  <p className="text-muted-foreground">ул. Красоты, 15, Москва</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="Phone" size={24} className="text-primary" />
                <div>
                  <h3 className="font-semibold">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="Clock" size={24} className="text-primary" />
                <div>
                  <h3 className="font-semibold">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="Mail" size={24} className="text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">info@beautyspace.ru</p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Записаться на консультацию</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" />
                <Textarea placeholder="Комментарий" />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Модалка записи */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Онлайн запись</DialogTitle>
            <DialogDescription>
              Выберите услугу и удобное время
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Услуга</label>
              <select className="w-full mt-1 p-2 border rounded-md">
                <option>Выберите услугу</option>
                {services.map(service => (
                  <option key={service.id} value={service.id}>{service.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Мастер</label>
              <select className="w-full mt-1 p-2 border rounded-md">
                <option>Выберите мастера</option>
                {masters.map((master, index) => (
                  <option key={index} value={index}>{master.name}</option>
                ))}
              </select>
            </div>
            <Input placeholder="Ваше имя" />
            <Input placeholder="Телефон" />
            <Input type="date" />
            <Input type="time" />
            <Button className="w-full bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Футер */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">BeautySpace</div>
            <p className="text-muted mb-4">Ваша красота - наша страсть</p>
            <div className="flex justify-center space-x-6">
              <Icon name="Instagram" size={24} className="hover:text-primary cursor-pointer" />
              <Icon name="Facebook" size={24} className="hover:text-primary cursor-pointer" />
              <Icon name="Twitter" size={24} className="hover:text-primary cursor-pointer" />
            </div>
            <div className="mt-6 pt-6 border-t border-muted">
              <p className="text-sm text-muted">© 2024 BeautySpace. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;