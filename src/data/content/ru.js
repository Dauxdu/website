import AssetsLoader from "../../components/AssetsLoader"

export const ruContent = {
  name: "INCHANGE.DEV",
  tagline: "DevOps-инженер и энтузиаст облачных технологий",
  subtitle: "Создаю надёжную инфраструктуру и автоматизирую пайплайны",
  about:
    "Увлечён автоматизацией инфраструктуры, облачными технологиями и практиками непрерывного развёртывания.",
  experience: "Опыт работы",
  projects: "Избранные проекты",
  viewProjects: "Проекты",
  companies: [
    {
      name: "Flactus",
      description:
        "Поддержка разработки CI/CD пайплайнов и оркестрации контейнеров с Docker, внедрение решений мониторинга и поддержка облачной инфраструктуры",
      years: "Мар 2025 - по н.в.",
      role: "DevOps-инженер",
      logo: AssetsLoader.logo["flactus.svg"],
    },
    {
      name: "INCHANGE.DEV",
      description:
        "Разработка и реализация серверной архитектуры, управление конфигурацией инфраструктуры, настройка и поддержка системы мониторинга",
      years: "Фев 2021 - Ноя 2023",
      role: "DevOps-инженер",
      logo: AssetsLoader.logo["inchange.svg"],
    },
    {
      name: 'ГАПОУ СО "ТИПК"',
      description:
        "Поддержка и обслуживание сетевой инфраструктуры, модернизация отдельных участков сети, аудит информационной безопасности организации",
      years: "Сен 2020 - Июн 2023",
      role: "Сетевой и системный администратор",
      logo: AssetsLoader.logo["tipk.svg"],
    },
  ],
  petProjects: [
    {
      name: "BBB Slide Presentation Downloader",
      description:
        "Позволяет скачивать презентации из BigBlueButton (BBB) в формате PDF. Это удобный инструмент для сохранения слайдов с вебинаров или онлайн-курсов",
      tech: ["Node.js", "Docker", "GitHub Actions"],
      link: "https://github.com/Dauxdu/bbb-spd",
      demo: "https://bbb.inchange.dev",
      logo: AssetsLoader.logo["bbb-spd.svg"],
    },
    {
      name: "Аналитическая панель мониторинга обращений клиентов",
      description:
        "Дипломный проект. Представляет собой веб-приложение для анализа и визуализации обращений клиентов",
      tech: ["Python", "Pandas", "Matplotlib", "Docker", "GitHub Actions"],
      link: "https://github.com/Dauxdu/ca-app",
      demo: "https://ca.inchange.dev",
      logo: AssetsLoader.logo["ca-app.svg"],
    },
    {
      name: "Базовая настройка серверов с Ansible",
      description:
        "Автоматизация базовой настройки серверов на различных дистрибутивах Linux",
      tech: ["Ansible", "Shell", "Jinja"],
      link: "https://github.com/Dauxdu/ansible",
      logo: AssetsLoader.logo["ansible.svg"],
    },
  ],
}
