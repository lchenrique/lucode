import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

const pt = {
  "translation": {
    "hero.hello": "Olá, me chamo",
    "role.ref1": "Desenvolvedor.",
    "role.ref2": "Engenheiro Front-End.",
    "contact.me": "Contato",
    "download.cv": "Baixar currículo",
    "about.me": "Eu sou especializado em desenvolvimento front-end, focando na criação de interfaces de usuário bonitas e intuitivas. Com um profundo conhecimento de frameworks modernos de JavaScript e um olhar atento para o design, busco sempre entregar experiências de usuário excepcionais.",
    "section.home": "Inicio",
    "section.services": "Serviços",
    "section.skills": "Habilidades",
    "section.projects": "Projetos",
    "services.webdev.title": "Desenvolvimento Web",
    "services.webdev.description": "Crie um site moderno, responsivo e amigável para dispositivos móveis que fortalecerá sua presença online e impulsionará suas estratégias de marketing. Utilizando as últimas tecnologias e as melhores práticas de design, garantirei que seu site não apenas tenha uma aparência visual atraente, mas também ofereça uma experiência de usuário suave e intuitiva.",
    "services.mobiledev.title": "Desenvolvimento Mobile",
    "services.mobiledev.description": "Desenvolvo aplicativos móveis eficientes e intuitivos para Android e iOS que ajudarão a promover sua marca e alcançar seus objetivos de negócio. Usando frameworks como React Native e tecnologias modernas, criarei apps que proporcionem uma experiência de usuário excepcional e atendam às necessidades específicas de seus usuários.",
    "services.desktopdev.title": "Desenvolvimento Desktop",
    "services.desktopdev.description": "Desenvolvo aplicações desktop multiplataforma usando Electron, oferecendo uma solução eficiente e integrada para suas necessidades. Ao combinar tecnologias web familiares como HTML, CSS e JavaScript com recursos nativos do sistema operacional, posso criar aplicações desktop robustas e poderosas que funcionam no Windows, macOS e Linux.",
    "projects.reallagos.description": `O Sistema oferece uma solução abrangente para gerenciar tarefas contábeis e financeiras. O sistema facilita o controle de balanços, relatórios financeiros, lançamentos contábeis e outras operações essenciais.`,
    "projects.sofconta.description": `O sistema foi criado para atender às necessidades de contadores modernos. Com ele, é possível eliminar totalmente a dependência de planilhas e outras ferramentas manuais.`,
    "projects.medtime.description": "É um sistema web desenvolvido para ajudar usuários a lembrar de tomar seus medicamentos na hora certa. Com uma interface intuitiva e notificações automáticas.",
    "projects.magicpanel.description": "Biblioteca React criada para facilitar o uso de modais e drawers em suas aplicações web.",
    "system.for.accountants": "Sistema para contadores",
    "lib.for.react": "Biblioteca React",
    "under.development": "Em desenvolvimento",
  }
}
const en = {
  "translation": {
    "hero.hello": "Hi, I’m",
    "role.ref1": "Developer.",
    "role.ref2": "Front-End Engineer.",
    "contact.me": "Contact me",
    "download.cv": "Download cv",
    "about.me": "I specialize in front-end development, focusing on crafting beautiful and intuitive user interfaces. With a deep understanding of modern JavaScript frameworks and a keen eye for design, I consistently strive to deliver exceptional user experiences.",
    "section.home": "Home",
    "section.services": "Services",
    "section.skills": "Skills",
    "section.projects": "Projects",
    "services.webdev.title": "Web Development",
    "services.webdev.description": "Create a modern, responsive, and mobile-friendly website that will strengthen your online presence and boost your marketing strategies. By utilizing the latest technologies and best design practices, I will ensure that your website not only looks visually appealing but also provides a smooth and intuitive user experience.",
    "services.mobiledev.title": "Mobile Development",
    "services.mobiledev.description": "I develop efficient and intuitive mobile applications for Android and iOS that will help promote your brand and achieve your business goals. Using frameworks like React Native and modern technologies, I will create apps that deliver an exceptional user experience and meet the specific needs of your users.",
    "services.desktopdev.title": "Desktop Development",
    "services.desktopdev.description": "I develop cross-platform desktop applications using Electron, providing an efficient and integrated solution for your needs. By combining familiar web technologies like HTML, CSS, and JavaScript with native operating system features, I can create robust and powerful desktop applications that work on Windows, macOS, and Linux.",
    "projects.reallagos.description": "The system offers a comprehensive solution for managing accounting and financial tasks. It facilitates the control of balance sheets, financial reports, accounting entries, and other essential operations.",
    "projects.sofconta.description": "The system was created to meet the needs of modern accountants. With it, it is possible to completely eliminate the reliance on spreadsheets and other manual tools.",
    "projects.medtime.description":"Is a web system designed to help users remember to take their medications on time. With an intuitive interface and automatic notifications.",
    "projects.magicpanel.description":"React library created to facilitate the use of modals and drawers in your web applications.",
    "system.for.accountants":"System for accountants",
    "lib.for.react": "React library",
    "under.development": "Under development",
  }
}

export const resources = {
  pt,
  en,
} as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    // lng: "en",
    fallbackLng: 'en',
    debug: true,
  });


export default i18n;