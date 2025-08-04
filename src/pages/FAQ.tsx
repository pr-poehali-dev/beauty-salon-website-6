import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'booking', name: 'Запись и отмена', icon: 'Calendar' },
    { id: 'services', name: 'Услуги', icon: 'Scissors' },
    { id: 'payment', name: 'Оплата', icon: 'CreditCard' },
    { id: 'care', name: 'Уход после процедур', icon: 'Heart' },
    { id: 'general', name: 'Общие вопросы', icon: 'HelpCircle' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'booking',
      question: 'Как записаться на прием?',
      answer: 'Записаться можно несколькими способами: позвонить по телефону +7 (495) 123-45-67, написать в WhatsApp, забронировать время через сайт или лично в салоне. Рекомендуем записываться заранее, особенно к популярным мастерам.'
    },
    {
      id: 2,
      category: 'booking',
      question: 'Можно ли отменить или перенести запись?',
      answer: 'Да, но просим предупреждать не менее чем за 2 часа до назначенного времени. При отмене менее чем за 2 часа взимается штраф 50% от стоимости услуги. Это позволяет другим клиентам записаться на освободившееся время.'
    },
    {
      id: 3,
      category: 'booking',
      question: 'Что делать, если опаздываю?',
      answer: 'Обязательно предупредите о задержке по телефону. При опоздании более чем на 15 минут время процедуры может быть сокращено или запись перенесена на другое время, в зависимости от загрузки мастера.'
    },
    {
      id: 4,
      category: 'services',
      question: 'Сколько времени занимает окрашивание волос?',
      answer: 'Время зависит от сложности окрашивания: однотонное окрашивание занимает 1.5-2 часа, мелирование или сложные техники (балаяж, омбре) — 2.5-4 часа. Точное время мастер определит на консультации.'
    },
    {
      id: 5,
      category: 'services',
      question: 'Нужна ли консультация перед процедурой?',
      answer: 'Консультация обязательна для окрашивания, химической завивки и восстановительных процедур. Для стрижек и маникюра консультация проводится непосредственно перед процедурой. Консультация бесплатна.'
    },
    {
      id: 6,
      category: 'services',
      question: 'Какие материалы вы используете?',
      answer: 'Мы работаем только с профессиональными брендами: Wella, L\'Oreal Professionnel, Schwarzkopf для волос; CND, OPI для ногтей. Все материалы сертифицированы и безопасны.'
    },
    {
      id: 7,
      category: 'payment',
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Принимаем наличные, банковские карты всех систем, переводы по СБП. Также работаем с подарочными сертификатами. Предоплата при записи не требуется.'
    },
    {
      id: 8,
      category: 'payment',
      question: 'Можно ли оплатить услуги в рассрочку?',
      answer: 'Для дорогостоящих процедур (от 10 000 рублей) возможна рассрочка на 2-3 месяца. Подробности уточняйте у администратора при записи.'
    },
    {
      id: 9,
      category: 'care',
      question: 'Как ухаживать за волосами после окрашивания?',
      answer: 'Первые 48 часов не мойте голову. Используйте шампуни и кондиционеры для окрашенных волос. Избегайте горячей воды и частого мытья. Делайте питательные маски 1-2 раза в неделю.'
    },
    {
      id: 10,
      category: 'care',
      question: 'Как долго держится маникюр?',
      answer: 'Гель-лак держится 2-3 недели, обычный лак — 5-7 дней. Долговечность зависит от типа работы, ухода за руками и индивидуальных особенностей ногтей.'
    },
    {
      id: 11,
      category: 'general',
      question: 'Есть ли у вас парковка?',
      answer: 'Рядом с салоном есть платная парковка. Также можно припарковаться на соседних улицах бесплатно. До салона легко добраться на общественном транспорте.'
    },
    {
      id: 12,
      category: 'general',
      question: 'Работаете ли вы с детьми?',
      answer: 'Да, принимаем детей с 3 лет в сопровождении родителей. Для детских стрижек рекомендуем записываться в первой половине дня, когда дети более спокойны.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero секция */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Частые <span className="text-primary">вопросы</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ответы на самые популярные вопросы о наших услугах
            </p>
          </div>
        </div>
      </section>

      {/* Поиск */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск по вопросам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-lg py-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {categories.map((category) => (
              <Card key={category.id} className="text-center p-4 cursor-pointer hover:shadow-lg transition-shadow">
                <Icon name={category.icon as any} size={32} className="mx-auto mb-2 text-primary" />
                <h3 className="font-semibold text-sm">{category.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16">
                <Icon name="Search" size={64} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-2xl font-semibold mb-2">Вопросы не найдены</h3>
                <p className="text-muted-foreground">
                  Попробуйте изменить поисковый запрос или задайте вопрос нам напрямую
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <Card key={faq.id} className="overflow-hidden">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                        <Icon 
                          name={openFaq === faq.id ? "ChevronUp" : "ChevronDown"} 
                          size={24} 
                          className="text-primary flex-shrink-0"
                        />
                      </div>
                    </button>
                    
                    {openFaq === faq.id && (
                      <div className="px-6 pb-6 border-t bg-muted/20">
                        <p className="text-muted-foreground leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Не нашли ответ */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Не нашли ответ на свой вопрос?</h2>
              <p className="text-xl text-muted-foreground">
                Напишите нам, и мы ответим в течение часа
              </p>
            </div>

            <Card className="p-6">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Введите имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон или Email</label>
                    <Input placeholder="Для связи с вами" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Ваш вопрос</label>
                  <Textarea 
                    placeholder="Опишите ваш вопрос подробно..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить вопрос
                  </Button>
                  <Button variant="outline">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Позвонить
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Быстрые контакты */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Выберите удобный способ связи
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <Icon name="Phone" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground text-sm mb-3">Звоните с 9:00 до 21:00</p>
              <Button variant="outline" size="sm" className="w-full">
                +7 (495) 123-45-67
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <Icon name="MessageCircle" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground text-sm mb-3">Быстрые ответы в чате</p>
              <Button variant="outline" size="sm" className="w-full">
                Написать
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <Icon name="Mail" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm mb-3">Ответим в течение часа</p>
              <Button variant="outline" size="sm" className="w-full">
                info@beautyspace.ru
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <Icon name="MapPin" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground text-sm mb-3">Приходите в салон</p>
              <Button variant="outline" size="sm" className="w-full">
                ул. Пушкина, 15
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Остались вопросы?</h2>
          <p className="text-xl mb-8 opacity-90">
            Наши консультанты с радостью помогут вам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}