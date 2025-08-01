import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Окрашивание волос',
      price: 4500,
      quantity: 1,
      duration: 180,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      master: 'Анна Петрова',
      date: '2024-02-15',
      time: '14:00'
    },
    {
      id: 2,
      title: 'Маникюр',
      price: 1800,
      quantity: 1,
      duration: 90,
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      master: 'Елена Смирнова',
      date: '2024-02-15', 
      time: '16:30'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [viewMode, setViewMode] = useState('detailed'); // detailed | compact | list
  const [sortBy, setSortBy] = useState('default');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    comment: ''
  });

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const applyPromoCode = () => {
    const promoCodes = {
      'BEAUTY20': { discount: 20, type: 'percent' },
      'FIRST500': { discount: 500, type: 'fixed' },
      'WELCOME10': { discount: 10, type: 'percent' }
    };
    
    const promo = promoCodes[promoCode as keyof typeof promoCodes];
    if (promo) {
      setAppliedPromo({ code: promoCode, ...promo });
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoCode('');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalDuration = cartItems.reduce((sum, item) => sum + (item.duration * item.quantity), 0);
  
  let discount = 0;
  if (appliedPromo) {
    discount = appliedPromo.type === 'percent' 
      ? subtotal * (appliedPromo.discount / 100)
      : appliedPromo.discount;
  }
  
  const total = subtotal - discount;

  const sortedItems = [...cartItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'duration': return a.duration - b.duration;
      case 'alphabetical': return a.title.localeCompare(b.title);
      default: return 0;
    }
  });

  const handleCheckout = () => {
    if (checkoutStep === 3) {
      console.log('Order placed:', { cartItems, customerInfo, total });
      setCartItems([]);
      setIsCheckoutOpen(false);
      setCheckoutStep(1);
    } else {
      setCheckoutStep(checkoutStep + 1);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold text-primary">BeautySpace</Link>
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
                <Link to="/services" className="hover:text-primary transition-colors">Услуги</Link>
                <Link to="/cart" className="text-primary font-medium">Корзина</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <Icon name="ShoppingCart" size={64} className="text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">Корзина пуста</h1>
            <p className="text-muted-foreground mb-6">Добавьте услуги в корзину, чтобы оформить заказ</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/services">
                <Icon name="Plus" size={20} className="mr-2" />
                Выбрать услуги
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
              <Link to="/cart" className="text-primary font-medium flex items-center gap-2">
                <Icon name="ShoppingCart" size={20} />
                Корзина ({cartItems.length})
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Корзина</h1>
            <p className="text-muted-foreground">{cartItems.length} услуг в корзине</p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Сортировка */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">По умолчанию</SelectItem>
                <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                <SelectItem value="duration">По времени</SelectItem>
                <SelectItem value="alphabetical">По алфавиту</SelectItem>
              </SelectContent>
            </Select>

            {/* Режим отображения */}
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === 'detailed' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('detailed')}
              >
                <Icon name="Grid3X3" size={16} />
              </Button>
              <Button
                variant={viewMode === 'compact' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('compact')}
              >
                <Icon name="Grid2X2" size={16} />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <Icon name="List" size={16} />
              </Button>
            </div>

            <Button variant="outline" onClick={clearCart}>
              <Icon name="Trash2" size={16} className="mr-2" />
              Очистить
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Список услуг */}
          <div className="lg:col-span-2 space-y-4">
            {viewMode === 'detailed' && (
              <div className="space-y-4">
                {sortedItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="flex">
                      <div className="w-32 h-32 flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">Мастер: {item.master}</p>
                            <p className="text-sm text-muted-foreground">{item.date} в {item.time}</p>
                            <Badge variant="outline" className="mt-2">{item.duration} мин</Badge>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeItem(item.id)}
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center border rounded-lg">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Icon name="Minus" size={16} />
                            </Button>
                            <span className="px-4 py-2 min-w-[50px] text-center">{item.quantity}</span>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Icon name="Plus" size={16} />
                            </Button>
                          </div>
                          <div className="text-xl font-bold text-primary">
                            {(item.price * item.quantity).toLocaleString()} ₽
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {viewMode === 'compact' && (
              <div className="grid md:grid-cols-2 gap-4">
                {sortedItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="aspect-video">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => removeItem(item.id)}
                        >
                          <Icon name="X" size={16} />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{item.master}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border rounded">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Icon name="Minus" size={14} />
                          </Button>
                          <span className="px-2 text-sm">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Icon name="Plus" size={14} />
                          </Button>
                        </div>
                        <div className="font-bold text-primary">
                          {(item.price * item.quantity).toLocaleString()} ₽
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {viewMode === 'list' && (
              <div className="space-y-2">
                {sortedItems.map((item) => (
                  <Card key={item.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.master}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Icon name="Minus" size={14} />
                          </Button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Icon name="Plus" size={14} />
                          </Button>
                        </div>
                        <div className="font-bold text-primary min-w-[100px] text-right">
                          {(item.price * item.quantity).toLocaleString()} ₽
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => removeItem(item.id)}
                        >
                          <Icon name="X" size={16} />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Итоги заказа */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Итоги заказа</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Услуги ({cartItems.length})</span>
                  <span>{subtotal.toLocaleString()} ₽</span>
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Общее время</span>
                  <span>{Math.floor(totalDuration / 60)}ч {totalDuration % 60}мин</span>
                </div>

                {appliedPromo && (
                  <div className="flex justify-between text-green-600">
                    <span>Скидка ({appliedPromo.code})</span>
                    <span>-{discount.toLocaleString()} ₽</span>
                  </div>
                )}

                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Итого</span>
                  <span>{total.toLocaleString()} ₽</span>
                </div>

                <div className="space-y-2">
                  {!appliedPromo ? (
                    <div className="flex gap-2">
                      <Input 
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Промокод"
                        className="flex-1"
                      />
                      <Button variant="outline" onClick={applyPromoCode}>
                        Применить
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                      <span className="text-green-700 text-sm">Промокод {appliedPromo.code} применен</span>
                      <Button variant="ghost" size="sm" onClick={removePromoCode}>
                        <Icon name="X" size={14} />
                      </Button>
                    </div>
                  )}
                </div>

                <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Оформить заказ
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Оформление заказа</DialogTitle>
                      <DialogDescription>
                        Шаг {checkoutStep} из 3
                      </DialogDescription>
                    </DialogHeader>

                    {checkoutStep === 1 && (
                      <div className="space-y-4">
                        <h3 className="font-semibold">Ваши данные</h3>
                        <Input 
                          placeholder="Имя"
                          value={customerInfo.name}
                          onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        />
                        <Input 
                          placeholder="Телефон"
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                        />
                        <Input 
                          placeholder="Email"
                          value={customerInfo.email}
                          onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                        />
                        <Textarea 
                          placeholder="Комментарий к заказу"
                          value={customerInfo.comment}
                          onChange={(e) => setCustomerInfo({...customerInfo, comment: e.target.value})}
                        />
                      </div>
                    )}

                    {checkoutStep === 2 && (
                      <div className="space-y-4">
                        <h3 className="font-semibold">Подтверждение заказа</h3>
                        <div className="space-y-2">
                          {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between text-sm">
                              <span>{item.title} x{item.quantity}</span>
                              <span>{(item.price * item.quantity).toLocaleString()} ₽</span>
                            </div>
                          ))}
                        </div>
                        <Separator />
                        <div className="flex justify-between font-bold">
                          <span>Итого</span>
                          <span>{total.toLocaleString()} ₽</span>
                        </div>
                        <Alert>
                          <Icon name="Info" size={16} />
                          <AlertDescription>
                            Мы свяжемся с вами для подтверждения времени записи
                          </AlertDescription>
                        </Alert>
                      </div>
                    )}

                    {checkoutStep === 3 && (
                      <div className="text-center space-y-4">
                        <Icon name="CheckCircle" size={64} className="text-green-500 mx-auto" />
                        <h3 className="text-xl font-semibold">Заказ оформлен!</h3>
                        <p className="text-muted-foreground">
                          Мы свяжемся с вами в ближайшее время для подтверждения записи
                        </p>
                      </div>
                    )}

                    <div className="flex justify-between">
                      {checkoutStep > 1 && checkoutStep < 3 && (
                        <Button variant="outline" onClick={() => setCheckoutStep(checkoutStep - 1)}>
                          Назад
                        </Button>
                      )}
                      <Button 
                        onClick={handleCheckout}
                        className="bg-primary hover:bg-primary/90 ml-auto"
                      >
                        {checkoutStep === 3 ? 'Закрыть' : checkoutStep === 2 ? 'Оформить' : 'Далее'}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Нужна помощь?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <span className="text-sm">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} className="text-primary" />
                  <span className="text-sm">Онлайн-консультант</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <span className="text-sm">info@beautyspace.ru</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;