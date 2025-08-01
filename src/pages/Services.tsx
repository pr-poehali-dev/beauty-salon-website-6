import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import Icon from '@/components/ui/icon';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const allServices = [
    {
      id: 1,
      title: 'Женская стрижка',
      description: 'Современная стрижка с учетом формы лица и типа волос',
      price: 2500,
      duration: 60,
      category: 'hair',
      rating: 4.9,
      reviewCount: 124,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      popular: true
    },
    {
      id: 2,
      title: 'Мужская стрижка',
      description: 'Классические и современные мужские стрижки',
      price: 1800,
      duration: 45,
      category: 'hair',
      rating: 4.8,
      reviewCount: 98,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg'
    },
    {
      id: 3,
      title: 'Окрашивание',
      description: 'Профессиональное окрашивание волос любой сложности',
      price: 4500,
      duration: 180,
      category: 'hair',
      rating: 4.9,
      reviewCount: 156,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      popular: true
    },
    {
      id: 4,
      title: 'Мелирование',
      description: 'Классическое и современное мелирование',
      price: 3800,
      duration: 150,
      category: 'hair',
      rating: 4.7,
      reviewCount: 89,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg'
    },
    {
      id: 5,
      title: 'Укладка',
      description: 'Праздничная и повседневная укладка волос',
      price: 1200,
      duration: 30,
      category: 'hair',
      rating: 4.6,
      reviewCount: 67,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg'
    },
    {
      id: 6,
      title: 'Классический маникюр',
      description: 'Обрезной маникюр с покрытием гель-лаком',
      price: 1800,
      duration: 90,
      category: 'nails',
      rating: 4.8,
      reviewCount: 134,
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      popular: true
    },
    {
      id: 7,
      title: 'Аппаратный маникюр',
      description: 'Безопасный маникюр с использованием фрезы',
      price: 2000,
      duration: 90,
      category: 'nails',
      rating: 4.9,
      reviewCount: 178,
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg'
    },
    {
      id: 8,
      title: 'Nail Art',
      description: 'Художественная роспись и дизайн ногтей',
      price: 2500,
      duration: 120,
      category: 'nails',
      rating: 4.9,
      reviewCount: 92,
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg'
    },
    {
      id: 9,
      title: 'Педикюр',
      description: 'Классический и медицинский педикюр',
      price: 2200,
      duration: 90,
      category: 'nails',
      rating: 4.7,
      reviewCount: 76,
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg'
    },
    {
      id: 10,
      title: 'Дневной макияж',
      description: 'Естественный макияж для повседневной жизни',
      price: 2000,
      duration: 45,
      category: 'makeup',
      rating: 4.8,
      reviewCount: 103,
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg'
    },
    {
      id: 11,
      title: 'Вечерний макияж',
      description: 'Яркий макияж для особых случаев',
      price: 3000,
      duration: 60,
      category: 'makeup',
      rating: 4.9,
      reviewCount: 145,
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      popular: true
    },
    {
      id: 12,
      title: 'Свадебный макияж',
      description: 'Идеальный образ для самого важного дня',
      price: 5000,
      duration: 90,
      category: 'makeup',
      rating: 5.0,
      reviewCount: 87,
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg'
    },
    {
      id: 13,
      title: 'Коррекция бровей',
      description: 'Придание идеальной формы бровям',
      price: 800,
      duration: 30,
      category: 'brows',
      rating: 4.7,
      reviewCount: 89,
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg'
    },
    {
      id: 14,
      title: 'Окрашивание бровей',
      description: 'Придание насыщенного цвета бровям',
      price: 600,
      duration: 20,
      category: 'brows',
      rating: 4.6,
      reviewCount: 54,
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg'
    },
    {
      id: 15,
      title: 'Ламинирование бровей',
      description: 'Долговременная укладка бровей',
      price: 1500,
      duration: 45,
      category: 'brows',
      rating: 4.8,
      reviewCount: 67,
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg'
    }
  ];

  const categories = [
    { value: 'all', label: 'Все услуги' },
    { value: 'hair', label: 'Волосы' },
    { value: 'nails', label: 'Ногти' },
    { value: 'makeup', label: 'Макияж' },
    { value: 'brows', label: 'Брови' }
  ];

  const priceRanges = [
    { value: 'all', label: 'Любая цена' },
    { value: '0-1000', label: 'До 1 000 ₽' },
    { value: '1000-2500', label: '1 000 - 2 500 ₽' },
    { value: '2500-4000', label: '2 500 - 4 000 ₽' },
    { value: '4000+', label: 'От 4 000 ₽' }
  ];

  const sortOptions = [
    { value: 'name', label: 'По названию' },
    { value: 'price-asc', label: 'Цена: по возрастанию' },
    { value: 'price-desc', label: 'Цена: по убыванию' },
    { value: 'rating', label: 'По рейтингу' },
    { value: 'popular', label: 'Популярные' }
  ];

  const filteredAndSortedServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
      
      const matchesPrice = priceFilter === 'all' || (() => {
        if (priceFilter === '0-1000') return service.price <= 1000;
        if (priceFilter === '1000-2500') return service.price > 1000 && service.price <= 2500;
        if (priceFilter === '2500-4000') return service.price > 2500 && service.price <= 4000;
        if (priceFilter === '4000+') return service.price > 4000;
        return true;
      })();

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Сортировка
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'popular':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, categoryFilter, priceFilter, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedServices.length / itemsPerPage);
  const currentServices = filteredAndSortedServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const addToCart = (service: any) => {
    // Логика добавления в корзину
    console.log('Added to cart:', service);
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
              <Link to="/services" className="text-primary font-medium">Услуги</Link>
              <Link to="/cart" className="hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="ShoppingCart" size={20} />
                Корзина
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Каталог услуг</h1>
          <p className="text-xl text-muted-foreground">Найдите идеальную услугу для себя</p>
        </div>

        {/* Фильтры и поиск */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="relative">
            <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Поиск услуг..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={priceFilter} onValueChange={setPriceFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Цена" />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map(range => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Сортировка" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Результаты */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Найдено {filteredAndSortedServices.length} услуг
          </p>
          <div className="flex items-center gap-2">
            <Icon name="Grid3X3" size={20} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Сетка</span>
          </div>
        </div>

        {/* Сетка услуг */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {service.popular && (
                  <Badge className="absolute top-2 left-2 bg-primary">
                    Популярное
                  </Badge>
                )}
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">{service.price} ₽</div>
                    <div className="text-sm text-muted-foreground">{service.duration} мин</div>
                  </div>
                </div>
                <CardDescription className="text-sm">{service.description}</CardDescription>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({service.reviewCount} отзывов)</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex gap-2">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="flex-1"
                  >
                    <Link to={`/service/${service.id}`}>
                      Подробнее
                    </Link>
                  </Button>
                  <Button 
                    onClick={() => addToCart(service)}
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <Icon name="Plus" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Пагинация */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                />
              </PaginationItem>
              
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                    className="cursor-pointer"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default Services;