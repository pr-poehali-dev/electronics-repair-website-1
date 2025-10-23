import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Index() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'Shadow Runner',
      category: 'Action Platformer',
      description: 'Динамичный платформер в стиле киберпанк с уникальной механикой теней',
      image: 'https://cdn.poehali.dev/projects/2739f958-72a8-4f5b-8dfd-cf9c23d69a82/files/71b3f34f-e445-4d8b-b4a6-520a3b75404f.jpg',
      tech: ['Unity', 'C#', 'Pixel Art']
    },
    {
      title: 'Neon Escape',
      category: 'Puzzle Adventure',
      description: 'Атмосферная головоломка с элементами исследования в неоновом мире',
      image: 'https://cdn.poehali.dev/projects/2739f958-72a8-4f5b-8dfd-cf9c23d69a82/files/4ac549e1-6fe3-4377-a0a3-823fb3aa59eb.jpg',
      tech: ['Godot', 'GDScript', '2D Animation']
    },
    {
      title: 'Crimson Blocks',
      category: 'Logic Puzzle',
      description: 'Минималистичная головоломка с геометрическими фигурами и сложными уровнями',
      image: 'https://cdn.poehali.dev/projects/2739f958-72a8-4f5b-8dfd-cf9c23d69a82/files/b7341ae5-35b5-4d9f-aa9f-9237e5446623.jpg',
      tech: ['Unity', 'Shaders', 'Procedural Gen']
    }
  ];

  const skills = [
    { icon: 'Gamepad2', name: 'Game Design', level: 95 },
    { icon: 'Code2', name: 'Programming', level: 90 },
    { icon: 'Palette', name: 'Pixel Art', level: 85 },
    { icon: 'Music', name: 'Sound Design', level: 80 }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-black via-dark-medium to-black opacity-90 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <nav className="relative z-50 border-b border-primary/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <Icon name="Gamepad2" className="text-primary animate-glow-pulse" size={32} />
                <div className="absolute inset-0 blur-xl bg-primary/30 animate-glow-pulse" />
              </div>
              <span className="text-2xl font-heading font-bold tracking-wider">
                DEV<span className="text-primary">GAMES</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
              <a href="#skills" className="hover:text-primary transition-colors">Навыки</a>
              <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>

            <Button className="bg-primary hover:bg-primary-dark text-white font-semibold px-6">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-primary font-semibold">2D Game Developer</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-heading font-black leading-tight">
                Создаю <span className="text-primary relative">
                  игры
                  <div className="absolute -inset-2 bg-primary/20 blur-2xl -z-10" />
                </span>
                <br />которые вдохновляют
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Разрабатываю уникальные 2D игры с акцентом на геймплей, атмосферу и визуальный стиль. 
                От идеи до релиза.
              </p>

              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white font-bold px-8 group">
                  Мои проекты
                  <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                  Скачать резюме
                </Button>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-3xl" />
              <div className="relative aspect-square rounded-2xl border border-primary/30 bg-dark-light overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(220,38,38,.1)_50%,transparent_75%)] bg-[length:250px_250px] animate-[slide_3s_linear_infinite]" />
                <img 
                  src={projects[0].image} 
                  alt="Hero"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold mb-4">
              Последние <span className="text-primary">проекты</span>
            </h2>
            <p className="text-muted-foreground text-lg">Игры, созданные с душой и вниманием к деталям</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setActiveProject(index)}
                className={`group relative cursor-pointer transition-all duration-300 ${
                  activeProject === index ? 'scale-105' : 'hover:scale-105'
                }`}
              >
                <div className={`relative overflow-hidden rounded-xl border-2 transition-all ${
                  activeProject === index 
                    ? 'border-primary shadow-[0_0_30px_rgba(220,38,38,0.3)]' 
                    : 'border-primary/20 hover:border-primary/50'
                }`}>
                  <div className="aspect-video overflow-hidden bg-dark-light">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-heading font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-dark-light/50 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-20 bg-dark-light/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-bold mb-4">
              Мои <span className="text-primary">навыки</span>
            </h2>
            <p className="text-muted-foreground text-lg">Технологии и инструменты, которыми я владею</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Icon name={skill.icon as any} className="text-primary" size={24} />
                    <span className="font-heading font-semibold text-lg">{skill.name}</span>
                  </div>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-dark-medium rounded-full overflow-hidden border border-primary/20">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-dark to-primary transition-all duration-1000 ease-out group-hover:animate-glow-pulse"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-heading font-bold mb-6">
                Обо <span className="text-primary">мне</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Привет! Я независимый разработчик 2D игр с более чем 5-летним опытом создания 
                уникальных игровых миров. Специализируюсь на платформерах, головоломках и 
                атмосферных инди-играх.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мой подход — это сочетание технического мастерства, креативного дизайна и 
                внимания к деталям. Каждая игра — это история, которую я хочу рассказать 
                через геймплей и визуальный стиль.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center p-4 bg-dark-light/50 rounded-lg border border-primary/20">
                  <div className="text-3xl font-heading font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center p-4 bg-dark-light/50 rounded-lg border border-primary/20">
                  <div className="text-3xl font-heading font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center p-4 bg-dark-light/50 rounded-lg border border-primary/20">
                  <div className="text-3xl font-heading font-bold text-primary mb-1">50K+</div>
                  <div className="text-sm text-muted-foreground">Загрузок</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl border-2 border-primary/30 bg-dark-light p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="bg-dark-medium rounded-lg p-4 flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer group">
                    <Icon name="Code2" className="text-primary group-hover:scale-110 transition-transform" size={48} />
                  </div>
                  <div className="bg-dark-medium rounded-lg p-4 flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer group">
                    <Icon name="Palette" className="text-primary group-hover:scale-110 transition-transform" size={48} />
                  </div>
                  <div className="bg-dark-medium rounded-lg p-4 flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer group">
                    <Icon name="Gamepad2" className="text-primary group-hover:scale-110 transition-transform" size={48} />
                  </div>
                  <div className="bg-dark-medium rounded-lg p-4 flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer group">
                    <Icon name="Sparkles" className="text-primary group-hover:scale-110 transition-transform" size={48} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 bg-dark-light/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-heading font-bold mb-6">
              Начнем <span className="text-primary">проект?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Готов обсудить ваши идеи и воплотить их в захватывающую игру
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white font-bold px-8 group">
                <Icon name="Mail" className="mr-2" size={20} />
                Написать письмо
              </Button>
              <div className="flex gap-4">
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                  <Icon name="Github" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                  <Icon name="Linkedin" size={20} />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-dark-medium/50 rounded-lg border border-primary/20">
                <Icon name="Mail" className="text-primary mx-auto mb-3" size={32} />
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <div className="font-semibold">dev@games.com</div>
              </div>
              <div className="p-6 bg-dark-medium/50 rounded-lg border border-primary/20">
                <Icon name="MapPin" className="text-primary mx-auto mb-3" size={32} />
                <div className="text-sm text-muted-foreground mb-1">Локация</div>
                <div className="font-semibold">Москва, Россия</div>
              </div>
              <div className="p-6 bg-dark-medium/50 rounded-lg border border-primary/20">
                <Icon name="Clock" className="text-primary mx-auto mb-3" size={32} />
                <div className="text-sm text-muted-foreground mb-1">Доступность</div>
                <div className="font-semibold">24/7 онлайн</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-primary/20 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Gamepad2" className="text-primary" size={24} />
              <span className="font-heading font-bold">
                DEV<span className="text-primary">GAMES</span>
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 DevGames. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
