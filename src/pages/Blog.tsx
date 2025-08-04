import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Все статьи', count: 24 },
    { id: 'hair-care', name: 'Уход за волосами', count: 8 },
    { id: 'nail-care', name: 'Уход за ногтями', count: 6 },
    { id: 'skin-care', name: 'Уход за кожей', count: 7 },
    { id: 'trends', name: 'Тренды', count: 5 },
    { id: 'tips', name: 'Советы', count: 4 }
  ];

  const articles = [
    {
      id: 1,
      title: 'Как правильно ухаживать за окрашенными волосами',
      excerpt: 'Секреты сохранения яркости цвета и здоровья волос после окрашивания. Рекомендации от профессиональных колористов.',
      category: 'hair-care',
      categoryName: 'Уход за волосами',
      author: 'Мария Иванова',
      date: '2024-03-01',
      readTime: '5 мин',
      image: '/img/blog-1.jpg',
      tags: ['окрашивание', 'уход', 'волосы'],
      popular: true
    },
    {
      id: 2,
      title: 'Тренды маникюра весна-лето 2024',
      excerpt: 'Обзор самых актуальных трендов в мире nail-арта: от минималистичных дизайнов до ярких экспериментов.',
      category: 'trends',
      categoryName: 'Тренды',
      author: 'Елена Сидорова',
      date: '2024-02-28',
      readTime: '7 мин',
      image: '/img/blog-2.jpg',
      tags: ['маникюр', 'тренды', 'весна-2024']
    },
    {
      id: 3,
      title: 'Домашний уход за кожей: основы',
      excerpt: 'Пошаговое руководство по созданию эффективной программы ухода за кожей в домашних условиях.',
      category: 'skin-care',
      categoryName: 'Уход за кожей',
      author: 'Анна Петрова',
      date: '2024-02-25',
      readTime: '8 мин',
      image: '/img/blog-3.jpg',
      tags: ['уход', 'кожа', 'домашний уход']
    },
    {
      id: 4,
      title: 'Как выбрать стрижку по форме лица',
      excerpt: 'Гид по выбору идеальной стрижки с учетом особенностей формы лица. Советы от топ-стилистов.',
      category: 'tips',
      categoryName: 'Советы',
      author: 'Светлана Морозова',
      date: '2024-02-20',
      readTime: '6 мин',
      image: '/img/blog-4.jpg',
      tags: ['стрижка', 'форма лица', 'советы']
    },
    {
      id: 5,
      title: 'Секреты долговечного маникюра',
      excerpt: 'Профессиональные хитрости, которые помогут вашему маникюру продержаться максимально долго.',
      category: 'nail-care',
      categoryName: 'Уход за ногтями',
      author: 'Елена Сидорова',
      date: '2024-02-18',
      readTime: '4 мин',
      image: '/img/blog-5.jpg',
      tags: ['маникюр', 'долговечность', 'советы'],
      popular: true
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero секция */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Блог</span> о красоте
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Полезные советы, последние тренды и секреты красоты от наших экспертов
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
                  placeholder="Поиск статей..."
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
                  className="flex items-center gap-2"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Статьи */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <Icon name="BookOpen" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-semibold mb-2">Статьи не найдены</h3>
              <p className="text-muted-foreground">
                Попробуйте изменить поисковый запрос или выбрать другую категорию
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.categoryName}</Badge>
                      {article.popular && (
                        <Badge className="bg-orange-100 text-orange-700">
                          Популярно
                        </Badge>
                      )}
                    </div>
                    
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    
                    <CardDescription className="line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Icon name="User" size={16} />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Icon name="Calendar" size={16} />
                            <span>{new Date(article.date).toLocaleDateString('ru-RU')}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Clock" size={16} />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>

                      <Link to={`/blog/${article.id}`}>
                        <Button className="w-full group-hover:bg-primary/90">
                          <Icon name="ArrowRight" size={16} className="mr-2" />
                          Читать статью
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Кнопка загрузить еще */}
          {filteredArticles.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                <Icon name="Plus" size={20} className="mr-2" />
                Загрузить еще статьи
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Подписка на блог */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Подпишитесь на наш блог</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Получайте новые статьи о красоте и уходе прямо на почту
            </p>
            
            <Card className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  placeholder="Ваш email" 
                  type="email"
                  className="flex-1"
                />
                <Button className="sm:w-auto">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Подписаться
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Никакого спама, только полезная информация. Отписаться можно в любой момент.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Популярные теги */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Популярные темы</h2>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {['уход за волосами', 'маникюр', 'тренды 2024', 'домашний уход', 'окрашивание', 'стрижки', 'nail-арт', 'косметология', 'массаж', 'ресницы'].map((tag, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Хотите персональную консультацию?</h2>
          <p className="text-xl mb-8 opacity-90">
            Наши эксперты ответят на все ваши вопросы и подберут идеальный уход
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>
    </div>
  );
}