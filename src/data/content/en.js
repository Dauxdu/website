import AssetsLoader from "../../components/AssetsLoader"

export const enContent = {
  name: "INCHANGE.DEV",
  tagline: "DevOps Engineer & Cloud Enthusiast",
  subtitle: "Building reliable infrastructure and automating pipelines",
  about:
    "Passionate about infrastructure automation, cloud technologies, and continuous deployment practices.",
  experience: "Work Experience",
  projects: "Featured Projects",
  viewProjects: "Projects",
  companies: [
    {
      name: "Flactus",
      description:
        "Supporting the development of CI/CD pipelines and container orchestration with Docker, implementing monitoring solutions, and supporting cloud infrastructure.",
      years: "Mar 2025 - Present",
      role: "DevOps Engineer",
      logo: AssetsLoader.logo["flactus.svg"],
    },
    {
      name: "INCHANGE.DEV",
      description:
        "Developing and implementing server architecture, managing infrastructure configuration, and setting up and supporting monitoring systems.",
      years: "Feb 2021 - Nov 2023",
      role: "DevOps Engineer",
      logo: AssetsLoader.logo["inchange.svg"],
    },
    {
      name: 'ГАПОУ СО "ТИПК"',
      description:
        "Supporting and maintaining network infrastructure, modernizing specific network segments, and auditing the organization's information security.",
      years: "Sep 2020 - Jun 2023",
      role: "Network and System Administrator",
      logo: AssetsLoader.logo["tipk.svg"],
    },
  ],
  petProjects: [
    {
      name: "BBB Slide Presentation Downloader",
      description:
        "Allows downloading presentations from BigBlueButton (BBB) in PDF format.  This is a convenient tool for saving slides from webinars or online courses.",
      tech: ["Node.js", "Docker", "GitHub Actions"],
      link: "https://github.com/Dauxdu/bbb-spd",
      demo: "https://bbb.inchange.dev",
      logo: AssetsLoader.logo["bbb-spd.svg"],
    },
    {
      name: "Client Inquiry Analytics Dashboard",
      description:
        "Diploma project. A web application for analyzing and visualizing client inquiries.",
      tech: ["Python", "Pandas", "Matplotlib", "Docker", "GitHub Actions"],
      link: "https://github.com/Dauxdu/ca-app",
      demo: "https://ca.inchange.dev",
      logo: AssetsLoader.logo["ca-app.svg"],
    },
    {
      name: "Basic Server Setup with Ansible",
      description:
        "Automates the basic setup of servers on various Linux distributions.",
      tech: ["Ansible", "Shell", "Jinja"],
      link: "https://github.com/Dauxdu/ansible",
      logo: AssetsLoader.logo["ansible.svg"],
    },
  ],
}
