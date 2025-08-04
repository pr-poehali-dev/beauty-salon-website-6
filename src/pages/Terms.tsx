import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero секция */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Пользовательское <span className="text-primary">соглашение</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Условия использования наших услуг и сайта
            </p>
          </div>
        </div>
      </section>

      {/* Содержание */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" size={24} className="text-primary" />
                  Общие условия
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Настоящее Пользовательское соглашение регулирует отношения между 
                  салоном красоты BeautySpace и пользователями сайта.
                </p>
                <p>
                  Использование сайта означает полное согласие с условиями данного соглашения.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Правила записи и отмены</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Запись на услуги осуществляется по телефону, через сайт или лично в салоне</li>
                  <li>Отмена записи должна быть сделана не позднее чем за 2 часа до процедуры</li>
                  <li>При отмене менее чем за 2 часа взимается штраф 50% от стоимости услуги</li>
                  <li>Неявка без предупреждения влечет взимание полной стоимости услуги</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Оплата услуг</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Оплата производится после оказания услуги</li>
                  <li>Принимаются наличные, банковские карты, переводы по СБП</li>
                  <li>Цены могут изменяться без предварительного уведомления</li>
                  <li>Действующие цены размещены на сайте и в прайс-листе салона</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>  
                <CardTitle>Гарантии и ответственность</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Салон гарантирует:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Использование качественных материалов и оборудования</li>
                  <li>Профессиональное выполнение услуг</li>
                  <li>Соблюдение санитарных норм</li>
                  <li>Конфиденциальность персональных данных</li>
                </ul>
                <p className="mt-4">
                  Салон не несет ответственности за результат услуг в случае 
                  несоблюдения клиентом рекомендаций мастера.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Права и обязанности клиента</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Клиент имеет право:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Получать качественные услуги</li>
                  <li>Выбирать мастера</li>
                  <li>Получать информацию об услугах</li>
                  <li>Подавать жалобы и предложения</li>
                </ul>
                
                <p>Клиент обязан:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Соблюдать правила салона</li>
                  <li>Предоставлять достоверную информацию</li>
                  <li>Своевременно оплачивать услуги</li>
                  <li>Уважительно относиться к персоналу</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Контакты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>По всем вопросам обращайтесь:</p>
                <div className="space-y-2">
                  <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
                  <p><strong>Email:</strong> info@beautyspace.ru</p>
                  <p><strong>Адрес:</strong> г. Москва, ул. Пушкина, 15</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}