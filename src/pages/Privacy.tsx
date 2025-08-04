import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero секция */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Политика <span className="text-primary">конфиденциальности</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Мы серьезно относимся к защите ваших персональных данных
            </p>
          </div>
        </div>
      </section>

      {/* Содержание */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Shield" size={24} className="text-primary" />
                  Общие положения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Настоящая Политика конфиденциальности персональных данных (далее — Политика) 
                  действует в отношении всей информации, размещенной на сайте BeautySpace, 
                  и распространяется на всех пользователей сайта.
                </p>
                <p>
                  Использование услуг сайта означает безоговорочное согласие пользователя 
                  с данной Политикой и указанными в ней условиями обработки персональной информации.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Сбор персональной информации</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Мы собираем следующие виды персональной информации:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Имя и фамилия</li>
                  <li>Номер телефона</li>
                  <li>Адрес электронной почты</li>
                  <li>Предпочтения в услугах</li>
                  <li>История посещений</li>
                </ul>
                <p>
                  Персональная информация собирается при регистрации на сайте, записи на услуги, 
                  оформлении заказов и обратной связи.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Использование информации</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Собранная информация используется для:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Предоставления качественных услуг</li>
                  <li>Связи с клиентами</li>
                  <li>Уведомлений о новых услугах и акциях</li>
                  <li>Улучшения работы сайта</li>
                  <li>Статистического анализа</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Защита информации</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Мы принимаем все необходимые меры для защиты персональных данных от 
                  несанкционированного доступа, изменения, раскрытия или уничтожения.
                </p>
                <p>Меры защиты включают:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Шифрование данных при передаче</li>
                  <li>Ограниченный доступ к информации</li>
                  <li>Регулярные проверки безопасности</li>
                  <li>Обучение персонала</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Права пользователей</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Вы имеете право:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Получать информацию о способах обработки ваших данных</li>
                  <li>Требовать уточнения, изменения или удаления данных</li>
                  <li>Отозвать согласие на обработку данных</li>
                  <li>Обратиться в суд в случае нарушения прав</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Cookies и аналитика</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Наш сайт использует файлы cookie для улучшения пользовательского опыта 
                  и анализа трафика. Вы можете отключить использование cookie в настройках браузера.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  По вопросам, касающимся обработки персональных данных, обращайтесь:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@beautyspace.ru</p>
                  <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
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