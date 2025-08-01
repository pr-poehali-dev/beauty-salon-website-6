import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const ServiceDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, comment: '' });

  // Данные услуги (в реальном приложении загружались бы по ID)
  const service = {
    id: parseInt(id || '1'),
    title: 'Окрашивание волос',
    description: 'Профессиональное окрашивание волос любой сложности с использованием премиальных красителей',
    fullDescription: 'Наши мастера-колористы создадут для вас идеальный цвет волос, учитывая особенности вашего цветотипа, структуру волос и личные пожелания. Используем только профессиональные красители ведущих мировых брендов, которые обеспечивают стойкий результат и минимальное повреждение волос.',
    price: 4500,
    originalPrice: 5500,
    duration: 180,
    category: 'hair',
    rating: 4.9,
    reviewCount: 156,
    popular: true,
    images: [
      '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg'
    ],
    features: [
      'Консультация колориста',
      'Тест на аллергию',
      'Премиальные красители',
      'Уход после окрашивания',
      'Гарантия результата'
    ],
    additionalInfo: {
      preparation: 'Не мойте голову 1-2 дня перед процедурой',
      aftercare: 'Используйте специальный шампунь для окрашенных волос',
      contraindications: 'Беременность, период лактации, повреждения кожи головы'
    }
  };

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      date: '2024-01-15',
      comment: 'Потрясающий результат! Цвет получился именно таким, как я хотела. Мастер очень профессиональный.',
      helpful: 12
    },
    {
      id: 2,
      name: 'Мария Сидорова',
      rating: 5,
      date: '2024-01-10',
      comment: 'Уже третий раз крашусь здесь. Качество всегда на высоте, волосы остаются здоровыми.',
      helpful: 8
    },
    {
      id: 3,
      name: 'Елена Козлова',
      rating: 4,
      date: '2024-01-05',
      comment: 'Хороший результат, но процедура заняла больше времени, чем планировалось.',
      helpful: 3
    }
  ];

  const similarServices = [
    {
      id: 2,
      title: 'Мелирование',
      price: 3800,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      rating: 4.7
    },
    {
      id: 3,
      title: 'Тонирование',
      price: 2500,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      rating: 4.6
    },
    {
      id: 4,
      title: 'Балаяж',
      price: 6000,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      rating: 4.8
    }
  ];

  const addToCart = () => {
    console.log('Added to cart:', { service, quantity });
  };

  const submitReview = () => {
    console.log('Review submitted:', reviewForm);
    setReviewForm({ name: '', rating: 5, comment: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">BeautySpace</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
              <Link to="/services" className="hover:text-primary transition-colors">Услуги</Link>
              <Link to="/cart" className="hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="ShoppingCart" size={20} />
                Корзина
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Хлебные крошки */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Главная</Link>
          <Icon name="ChevronRight" size={16} />
          <Link to="/services" className="hover:text-primary">Услуги</Link>
          <Icon name="ChevronRight" size={16} />
          <span>{service.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Галерея изображений */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src={service.images[selectedImage]} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {service.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${service.title} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Информация об услуге */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold">{service.title}</h1>
                {service.popular && <Badge className="bg-primary">Популярное</Badge>}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Icon name="Star" size={20} className="text-yellow-400 fill-current" />
                  <span className="font-medium">{service.rating}</span>
                  <span className="text-muted-foreground">({service.reviewCount} отзывов)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={20} className="text-muted-foreground" />
                  <span className="text-muted-foreground">{service.duration} минут</span>
                </div>
              </div>
              <p className="text-muted-foreground text-lg">{service.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-primary">{service.price} ₽</div>
                {service.originalPrice && (
                  <div className="text-xl text-muted-foreground line-through">{service.originalPrice} ₽</div>
                )}
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Icon name="Minus" size={16} />
                  </Button>
                  <span className="px-4 py-2 min-w-[50px] text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Icon name="Plus" size={16} />
                  </Button>
                </div>
                <Button onClick={addToCart} size="lg" className="flex-1 bg-primary hover:bg-primary/90">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Добавить в корзину
                </Button>
              </div>

              <Button variant="outline" size="lg" className="w-full">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться сейчас
              </Button>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Что входит в услугу:</h3>
              <ul className="space-y-1">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Табы с подробной информацией */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="additional">Доп. информация</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы ({reviews.length})</TabsTrigger>
            <TabsTrigger value="write-review">Написать отзыв</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">{service.fullDescription}</p>
            </div>
          </TabsContent>

          <TabsContent value="additional" className="mt-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Подготовка к процедуре</h3>
                <p className="text-muted-foreground">{service.additionalInfo.preparation}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Уход после процедуры</h3>
                <p className="text-muted-foreground">{service.additionalInfo.aftercare}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Противопоказания</h3>
                <p className="text-muted-foreground">{service.additionalInfo.contraindications}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{review.name}</div>
                          <div className="text-sm text-muted-foreground">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="Star" 
                            size={16} 
                            className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{review.comment}</p>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Icon name="ThumbsUp" size={16} className="mr-1" />
                        Полезно ({review.helpful})
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="write-review" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Оставить отзыв</CardTitle>
                <CardDescription>Поделитесь своим опытом с другими клиентами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})}
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Оценка</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setReviewForm({...reviewForm, rating: star})}
                        className="text-2xl hover:scale-110 transition-transform"
                      >
                        <Icon 
                          name="Star" 
                          size={24} 
                          className={star <= reviewForm.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий</label>
                  <Textarea 
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({...reviewForm, comment: e.target.value})}
                    placeholder="Расскажите о своем опыте..."
                    rows={4}
                  />
                </div>
                <Button onClick={submitReview} className="bg-primary hover:bg-primary/90">
                  Отправить отзыв
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Похожие услуги */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Похожие услуги</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {similarServices.map((similarService) => (
              <Card key={similarService.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={similarService.image} 
                    alt={similarService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{similarService.title}</CardTitle>
                    <div className="text-lg font-bold text-primary">{similarService.price} ₽</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm">{similarService.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild className="w-full">
                    <Link to={`/service/${similarService.id}`}>
                      Подробнее
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;