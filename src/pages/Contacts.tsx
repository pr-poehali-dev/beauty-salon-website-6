import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  const contacts = [
    {
      title: 'Основной салон',
      address: 'ул. Пушкина, 15, Москва',
      phone: '+7 (495) 123-45-67',
      email: 'info@beautyspace.ru',
      hours: {
        weekdays: '9:00 - 21:00',
        weekend: '10:00 - 20:00'
      },
      coordinates: { lat: 55.7558, lng: 37.6176 }
    },
    {
      title: 'Филиал на Арбате',
      address: 'Арбатская ул., 28, Москва',
      phone: '+7 (495) 234-56-78',
      email: 'arbat@beautyspace.ru',
      hours: {
        weekdays: '10:00 - 22:00',
        weekend: '10:00 - 21:00'
      },
      coordinates: { lat: 55.7539, lng: 37.6208 }
    }
  ];

  const socialMedia = [
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/beautyspace', followers: '15K' },
    { name: 'ВКонтакте', icon: 'Users', url: 'https://vk.com/beautyspace', followers: '8K' },
    { name: 'Telegram', icon: 'Send', url: 'https://t.me/beautyspace', followers: '3K' },
    { name: 'WhatsApp', icon: 'MessageCircle', url: 'https://wa.me/79151234567', followers: 'Чат' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero секция */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Контакты</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь с нами удобным способом. Мы всегда рады ответить на ваши вопросы
            </p>
          </div>
        </div>
      </section>

      {/* Быстрые контакты */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <Icon name="Phone" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-primary font-medium">+7 (495) 123-45-67</p>
            </Card>
            
            <Card className="text-center p-6">
              <Icon name="Mail" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-primary font-medium">info@beautyspace.ru</p>
            </Card>
            
            <Card className="text-center p-6">
              <Icon name="MapPin" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">ул. Пушкина, 15</p>
            </Card>
            
            <Card className="text-center p-6">
              <Icon name="Clock" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Режим работы</h3>
              <p className="text-muted-foreground">Пн-Пт: 9:00-21:00</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Наши салоны */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Наши салоны</h2>
            <p className="text-xl text-muted-foreground">
              Два удобных местоположения в центре Москвы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contacts.map((salon, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-2xl">{salon.title}</CardTitle>
                  <CardDescription className="text-lg">{salon.address}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={20} className="text-primary" />
                      <span className="font-medium">{salon.phone}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" size={20} className="text-primary" />
                      <span className="font-medium">{salon.email}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <div>
                        <div>Пн-Пт: {salon.hours.weekdays}</div>
                        <div>Сб-Вс: {salon.hours.weekend}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex gap-3">
                      <Button className="flex-1">
                        <Icon name="Phone" size={16} className="mr-2" />
                        Позвонить
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Icon name="Navigation" size={16} className="mr-2" />
                        Маршрут
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Карта */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Как нас найти</h2>
            <p className="text-xl text-muted-foreground">
              Удобное расположение в центре города с отличной транспортной доступностью
            </p>
          </div>

          <div className="bg-muted/20 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" size={64} className="mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-2">Интерактивная карта</h3>
              <p className="text-muted-foreground mb-4">
                Здесь будет интегрирована карта с нашими салонами
              </p>
              <Button>
                <Icon name="ExternalLink" size={16} className="mr-2" />
                Открыть в Яндекс.Картах
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Форма связи */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Напишите нам</h2>
              <p className="text-xl text-muted-foreground">
                Есть вопросы? Заполните форму и мы свяжемся с вами в течение часа
              </p>
            </div>

            <Card className="p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Введите имя" />
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
                  <label className="block text-sm font-medium mb-2">Тема обращения</label>
                  <Input placeholder="О чем хотите спросить?" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите подробнее о вашем вопросе..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                  <Button variant="outline" size="lg">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Перезвоните мне
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  Обычно отвечаем в течение 1 часа в рабочее время
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Социальные сети */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Мы в социальных сетях</h2>
            <p className="text-xl text-muted-foreground">
              Следите за новостями, акциями и работами наших мастеров
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {socialMedia.map((social, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <Icon name={social.icon as any} size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{social.name}</h3>
                <p className="text-muted-foreground mb-4">{social.followers} подписчиков</p>
                <Button variant="outline" className="w-full">
                  Подписаться
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Часто задаваемые вопросы</h2>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Как записаться к мастеру?</h3>
                <p className="text-muted-foreground">
                  Вы можете записаться по телефону, через сайт или лично в салоне. 
                  Рекомендуем звонить заранее, так как популярные мастера записаны на несколько дней вперед.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-3">Можно ли отменить или перенести запись?</h3>
                <p className="text-muted-foreground">
                  Да, но просим предупреждать не менее чем за 2 часа до назначенного времени. 
                  Это позволит другим клиентам записаться на освободившееся время.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-3">Какие способы оплаты вы принимаете?</h3>
                <p className="text-muted-foreground">
                  Мы принимаем наличные, банковские карты, переводы по СБП. 
                  Также работаем с подарочными сертификатами.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы к преображению?</h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами любым удобным способом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться онлайн
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}