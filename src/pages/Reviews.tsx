import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Reviews() {
  const [selectedRating, setSelectedRating] = useState('all');
  const [newReview, setNewReview] = useState({ name: '', service: '', rating: 5, text: '' });

  const ratingFilters = [
    { id: 'all', name: 'Все отзывы', count: 247 },
    { id: '5', name: '5 звезд', count: 198 },
    { id: '4', name: '4 звезды', count: 35 },
    { id: '3', name: '3 звезды', count: 12 },
    { id: '2', name: '2 звезды', count: 2 }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Анна Смирнова',
      rating: 5,
      service: 'Окрашивание балаяж',
      master: 'Мария Иванова',
      date: '2024-03-01',
      text: 'Потрясающий результат! Мария настоящий профессионал своего дела. Цвет получился именно таким, как я хотела. Волосы не пострадали, наоборот, стали более здоровыми благодаря качественным материалам.',
      images: ['/img/review-1.jpg'],
      verified: true
    },
    {
      id: 2,
      name: 'Елена Кузнецова',
      rating: 5,
      service: 'Маникюр с дизайном',
      master: 'Елена Сидорова',
      date: '2024-02-28',
      text: 'Хожу к Елене уже полгода, и каждый раз результат превосходит ожидания. Дизайн всегда уникальный, качество покрытия держится 3 недели без сколов.',
      images: ['/img/review-2.jpg'],
      verified: true
    },
    {
      id: 3,
      name: 'Ольга Петрова',
      rating: 5,
      service: 'Стрижка каскад',
      master: 'Анна Петрова',
      date: '2024-02-25',
      text: 'Анна просто волшебница! Сделала мне стрижку мечты. Очень внимательно выслушала все пожелания, дала профессиональные советы по уходу.',
      verified: true
    },
    {
      id: 4,
      name: 'Мария Волкова',
      rating: 5,
      service: 'Наращивание ресниц 2D',
      master: 'Ольга Козлова',
      date: '2024-02-20',
      text: 'Результат просто восхитительный! Ресницы выглядят очень естественно, держатся отлично. Ольга очень аккуратная мастер, процедура прошла комфортно.',
      images: ['/img/review-4.jpg'],
      verified: true
    }
  ];

  const stats = [
    { label: 'Общий рейтинг', value: '4.9', icon: 'Star' },
    { label: 'Всего отзывов', value: '247', icon: 'MessageCircle' },
    { label: 'Довольных клиентов', value: '98%', icon: 'ThumbsUp' },
    { label: 'Повторных визитов', value: '85%', icon: 'RotateCcw' }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon 
        key={i} 
        name="Star" 
        size={16} 
        className={i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero секция */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Отзывы <span className="text-primary">клиентов</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Узнайте, что говорят о нас наши клиенты. 
              Каждый отзыв — это подтверждение нашего профессионализма
            </p>
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
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {ratingFilters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedRating === filter.id ? 'default' : 'outline'}
                onClick={() => setSelectedRating(filter.id)}
                className="flex items-center gap-2"
              >
                {filter.name}
                <Badge variant="secondary" className="ml-2">
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-lg">{review.name}</h3>
                        {review.verified && (
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Icon name="CheckCircle" size={12} className="text-green-600" />
                            Проверенный отзыв
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(review.date).toLocaleDateString('ru-RU')}
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{review.service}</div>
                      <div>Мастер: {review.master}</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>

                  {review.images && (
                    <div className="flex gap-3">
                      {review.images.map((image, index) => (
                        <img 
                          key={index}
                          src={image} 
                          alt={`Фото к отзыву ${review.name}`}
                          className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 pt-2">
                    <Button variant="ghost" size="sm">
                      <Icon name="ThumbsUp" size={16} className="mr-2" />
                      Полезно (12)
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Ответить
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Форма добавления отзыва */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Оставить отзыв</h2>
              <p className="text-muted-foreground">
                Поделитесь своим опытом посещения нашего салона
              </p>
            </div>

            <Card className="p-6">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Введите имя"
                      value={newReview.name}
                      onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Услуга</label>
                    <Input 
                      placeholder="Какую услугу получали?"
                      value={newReview.service}
                      onChange={(e) => setNewReview(prev => ({ ...prev, service: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Оценка</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setNewReview(prev => ({ ...prev, rating }))}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Icon 
                          name="Star" 
                          size={24} 
                          className={rating <= newReview.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Отзыв</label>
                  <Textarea 
                    placeholder="Расскажите о своих впечатлениях..."
                    value={newReview.text}
                    onChange={(e) => setNewReview(prev => ({ ...prev, text: e.target.value }))}
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить отзыв
                  </Button>
                  <Button variant="outline">
                    <Icon name="ImagePlus" size={16} className="mr-2" />
                    Добавить фото
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Станьте нашим довольным клиентом</h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к сотням довольных клиентов BeautySpace
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            <Icon name="Calendar" size={20} className="mr-2" />
            Записаться на услугу
          </Button>
        </div>
      </section>
    </div>
  );
}