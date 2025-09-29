import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [activeSection, setActiveSection] = useState('home')

  const services = [
    {
      icon: 'Smartphone',
      title: 'Ремонт смартфонов',
      description: 'Замена экранов, батарей, восстановление после воды',
      price: 'от 1 500 ₽',
      features: ['Бесплатная диагностика', 'Гарантия 6 месяцев', 'Оригинальные запчасти']
    },
    {
      icon: 'Laptop',
      title: 'Ремонт ноутбуков',
      description: 'Чистка, замена компонентов, восстановление системы',
      price: 'от 2 000 ₽',
      features: ['Бесплатная диагностика', 'Выезд на дом', 'Профилактика']
    },
    {
      icon: 'Monitor',
      title: 'Ремонт ПК',
      description: 'Диагностика и ремонт настольных компьютеров',
      price: 'от 1 000 ₽',
      features: ['Бесплатная диагностика', 'Апгрейд железа', 'Настройка ПО']
    },
    {
      icon: 'HardDrive',
      title: 'Сборка ПК',
      description: 'Индивидуальная сборка под любой бюджет и задачи',
      price: 'от 3 000 ₽',
      features: ['Консультация по железу', 'Тестирование', 'Гарантия на сборку']
    }
  ]

  const reviews = [
    {
      name: 'Александр М.',
      rating: 5,
      text: 'Быстро и качественно отремонтировали ноутбук. Диагностика действительно бесплатная!',
      service: 'Ремонт ноутбука'
    },
    {
      name: 'Мария К.',
      rating: 5,
      text: 'Собрали игровой ПК под мой бюджет. Все работает отлично, очень доволен результатом.',
      service: 'Сборка ПК'
    },
    {
      name: 'Дмитрий П.',
      rating: 5,
      text: 'Отличный сервис! Починили телефон за день, цены адекватные.',
      service: 'Ремонт телефона'
    }
  ]

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'services', label: 'Услуги', icon: 'Settings' },
    { id: 'reviews', label: 'Отзывы', icon: 'Star' },
    { id: 'repair', label: 'Ремонт', icon: 'Wrench' },
    { id: 'build', label: 'Сборка', icon: 'Cpu' }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-medium via-dark-light to-accent font-open-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur-md border-b border-primary/20 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-montserrat font-bold text-white">
              TechRepair
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary text-white'
                      : 'text-gray-300 hover:text-white hover:bg-primary/20'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary-dark">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary">
                Бесплатная диагностика
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6">
                Ремонт электроники
                <span className="text-primary block">любой сложности</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Профессиональный ремонт смартфонов, ноутбуков, ПК и сборка компьютеров под любой бюджет. 
                Гарантия качества и бесплатная диагностика.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-lg px-8 py-4">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Бесплатная диагностика
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-400">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5 лет</div>
                  <div className="text-gray-400">На рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-400">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="/img/dde78a5c-f352-4216-ba8c-daa6f455196a.jpg"
                alt="Мастерская по ремонту электроники"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию электронной техники
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-dark-light/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-white font-montserrat">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-4 text-center">
                    {service.price}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary-dark">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-dark-medium/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-300">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-dark-light/50 border-primary/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{review.name}</CardTitle>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">"{review.text}"</p>
                  <Badge variant="outline" className="border-primary text-primary">
                    {review.service}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Section */}
      <section id="repair" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
                Экспресс-ремонт
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Быстрый и качественный ремонт с гарантией. Бесплатная диагностика неисправностей.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} className="text-primary" />
                  <span className="text-gray-300">Диагностика за 15 минут</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                  <span className="text-gray-300">Гарантия до 12 месяцев</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Truck" size={24} className="text-primary" />
                  <span className="text-gray-300">Выезд мастера на дом</span>
                </div>
              </div>
            </div>
            <Card className="bg-dark-light/50 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-montserrat">Оставьте заявку</CardTitle>
                <CardDescription className="text-gray-300">
                  Получите бесплатную консультацию
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-3 bg-dark/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  className="w-full p-3 bg-dark/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none"
                />
                <textarea
                  placeholder="Опишите проблему"
                  rows={3}
                  className="w-full p-3 bg-dark/50 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none resize-none"
                />
                <Button className="w-full bg-primary hover:bg-primary-dark">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Build Section */}
      <section id="build" className="py-20 px-4 bg-dark-medium/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
            Сборка ПК под любой бюджет
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            От офисного компьютера до мощной игровой станции. Подберем оптимальную конфигурацию под ваши задачи и бюджет.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-dark-light/50 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-montserrat">Офисный ПК</CardTitle>
                <div className="text-3xl font-bold text-primary">от 25 000 ₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Работа с документами</li>
                  <li>• Интернет и медиа</li>
                  <li>• Тихая работа</li>
                  <li>• Энергоэффективность</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-dark-light/50 border-primary/20 backdrop-blur-sm transform scale-105">
              <CardHeader>
                <Badge className="mb-2 bg-primary text-white">Популярно</Badge>
                <CardTitle className="text-white font-montserrat">Игровой ПК</CardTitle>
                <div className="text-3xl font-bold text-primary">от 60 000 ₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Современные игры</li>
                  <li>• Высокие настройки</li>
                  <li>• Стабильный FPS</li>
                  <li>• Возможность апгрейда</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-dark-light/50 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-montserrat">Рабочая станция</CardTitle>
                <div className="text-3xl font-bold text-primary">от 100 000 ₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Видеомонтаж</li>
                  <li>• 3D-моделирование</li>
                  <li>• Рендеринг</li>
                  <li>• Профессиональные задачи</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-lg px-8 py-4">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-montserrat font-bold text-white mb-4">
                TechRepair
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональный ремонт электроники и сборка ПК с гарантией качества.
              </p>
              <div className="flex space-x-4">
                <Icon name="Phone" size={20} className="text-primary" />
                <span className="text-gray-300">+7 (999) 123-45-67</span>
              </div>
            </div>
            <div>
              <h3 className="text-white font-montserrat font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Ремонт смартфонов</li>
                <li>Ремонт ноутбуков</li>
                <li>Ремонт ПК</li>
                <li>Сборка компьютеров</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-montserrat font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>г. Москва, ул. Примерная, 123</li>
                <li>info@techrepair.ru</li>
                <li>Пн-Вс: 9:00 - 21:00</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-montserrat font-semibold mb-4">Преимущества</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Бесплатная диагностика</li>
                <li>Гарантия до 12 месяцев</li>
                <li>Выезд на дом</li>
                <li>Качественные запчасти</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechRepair. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index