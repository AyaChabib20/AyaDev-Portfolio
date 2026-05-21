import {NavLink, Project, Service, EducationItem } from './types';
import { Code, Layout, Smartphone, Database,Atom } from 'lucide-react';

export const TEXTS: Translations = {
  nav_home: { fr: "Accueil"},
  nav_about: { fr: "À propos"},
  nav_education: { fr: "Éducation"},
  nav_services: { fr: "Services"},
  nav_projects: { fr: "Projets"},
  nav_contact: { fr: "Contact", en: "Contact" },
  btn_contact: { fr: "Me Contacter", en: "Contact Me" },
  
  hero_greeting: { fr: "Bonjour, je suis", en: "Hello, I am" },
  hero_role: { fr: "Développeuse Full Stack", en: "Full Stack Developer" },
  hero_desc: { fr: "Je conçois et développe des expériences numériques modernes, performantes et accessibles.", en: "I design and build modern, performant, and accessible digital experiences." },
  hero_btn_projects: { fr: "Voir mes projets", en: "View My Projects" },
  
  // --- About Section (The Full Stack Architect) ---
  about_headline: { fr: " Développeuse Web Full Stack – Créatrice d’expériences digitales uniques", en: "The Full Stack Architect" },
  
  about_story_title: { fr: "< Parcours & Réalisations />", en: "< Engineering Experiences />" },
  about_story_text: {
    fr: "Passionnée par le développement web, je conçois des solutions complètes, du front-end au back-end, en alliant design élégant et architecture robuste. Avec une expertise Laravel & React, je transforme des idées complexes en applications fluides, performantes et scalables. Mon parcours à l'ONMT m'a permis d'optimiser des performances, sécuriser des systèmes et orchestrer des projets digitaux de A à Z.",
    en: "Specialized in the Laravel & React ecosystem, I don't just code, I build scalable architectures. From rigorous modeling (UML/Merise) to performance optimization during my time at ONMT, my goal remains the same: transforming complex ideas into fluid and performant digital solutions. My Full Stack approach combines the robustness of Laravel 12 with the elegance of React."
  },

  about_status_badge: { fr: "Ouverte aux nouvelles opportunités", en: "Open to New Opportunities" },
  about_status_title: { fr: "Expertise Complète", en: "Double Expertise" },
  about_status_subtitle: { fr: "Frontend & Backend", en: "Frontend & Backend" },
  about_focus: { fr: "Passion Clean Code & Résolution de Problèmes", en: "Clean Code Advocate & Problem Solver" },

  // Tech Stack Columns
  tech_col_1: { fr: "Frontend Modernes", en: "Frontend Force" },
  tech_col_2: { fr: "Backend Puissant", en: "Backend Power" },
  tech_col_3: { fr: "Qualité & Méthodologie", en: "Quality & Workflow" },
  
  // Toolkit
  toolkit_title: { fr: "Mes Outils Préférés", en: "My Toolkit" },

  // Tech Tooltips
  tooltip_laravel: { fr: "Architecture robuste & API Rest", en: "Robust Architecture & Rest API" },
  tooltip_react: { fr: "Interfaces réactives & Modernes", en: "Reactive & Modern Interfaces" },
  tooltip_db: { fr: "Modélisation UML & Performance", en: "UML Modeling & Performance" },
  tooltip_tools: { fr: "CI/CD & Code Quality", en: "CI/CD & Code Quality" },

  // Terminal Content
  term_cmd: { fr: "$ aya.init_system()", en: "$ aya.init_system()" },
  term_name: { fr: "> Utilisateur : Aya Chabib [Architecte Full Stack]", en: "> User: Aya Chabib [Architect]" },
  term_edu: { fr: "> Éducation : DTS Web Full Stack ", en: "> Education: DTS Web Full Stack (Major)" },
  term_lang: { fr: "> Langues : Ar (Professionnel), Fr (Native), En (Native)", en: "> Langs: Fr (Native), Ar (Native), En (Pro)" },
  term_soft: { fr: "> Compétences : Leadership, Résolution de problèmes, Collaboration", en: "> Soft Skills: Problem Solving, Team Lead" },
  term_goal: { fr: "> Statut : Prête à développer des applications scalables.", en: "> Status: Ready to deploy scalable apps." },

  services_title: { fr: "Mes Services", en: "My Services" },
  
  // UPDATED SERVICES
  service_web_title: { fr: "Développement Web Full Stack", en: "Full Stack Web Development" },
  service_web_desc: { fr: "Conception d'applications robustes et évolutives, de la base de données à l'interface.", en: "Designing robust and scalable applications, from database to interface." },
  
  service_ui_title: { fr: "UI/UX Design & Prototypage", en: "UI/UX Design & Prototyping" },
  service_ui_desc: { fr: "Création de maquettes interactives et design centré utilisateur pour une expérience mémorable.", en: "Creating interactive mockups and user-centered design for a memorable experience." },
  
  service_perf_title: { fr: "Qualité & Performance", en: "Quality & Performance" },
  service_perf_desc: { fr: "Audit de code, optimisation des performances et sécurisation des accès.", en: "Code audit, performance optimization, and access security." },

  services_cta: { fr: "Besoin d'une architecture spécifique ? Parlons-en.", en: "Need a specific architecture? Let's talk." },
  services_cta_btn: { fr: "Discutons de votre projet", en: "Let's discuss your project" },

  // --- EDUCATION SECTION ---
  edu_title: { fr: "Parcours Académique", en: "Academic Journey" },
  edu_subtitle: { fr: "Un parcours d'apprentissage et de croissance professionnelle.", en: "A journey of learning and professional growth." },
  edu_badge: { fr: "DIPLÔMES", en: "DEGREES" },
  
  edu_ts_title: { fr: "Technicien Spécialisé en Développement Digital Option Web Full Stack", en: "Specialized Technician in Digital Development Full Stack Option" },
  edu_ts_inst: { fr: "Institut Spécialisé en Technologies Appliquées - Témara", en: "Specialized Institute of Management and Informatics, Casablanca" },
  
  edu_bac_title: { fr: "Baccalauréat en Sciences Physiques", en: "Baccalaureate in Physical Sciences" },
  edu_bac_inst: { fr: "Lycée Mohamed Abed Al-Jabri - Témara", en: "IBNO HANI High School, Casablanca" },

  // --- PROJECTS SECTION ---
  projects_title: { fr: "Projets", en: "Portfolio / Projects" },
  
  // Project 1: K-Secret
  proj_ksecret_title: { fr: "K-Secret – Plateforme e-commerce de cosmétiques coréens .", en: "K-Secret (E-Commerce)" },
  proj_ksecret_desc: { fr: "Développement d’une plateforme e-commerce spécialisée dans la vente de cosmétiques coréens pour le visage, avec un catalogue complet, filtrage avancé, gestion du panier et des favoris, et un back-office performant pour l’administration et le suivi des commandes.", en: "Reactive interface developed with React, robust backend with Laravel. Advanced filtering and Stripe payment." },
  proj_ksecret_goal: { fr: "Créer une expérience d’achat fluide et intuitive, avec gestion complète des produits, commandes et interactions utilisateurs.", en: "Create a seamless shopping experience with a complete back-office for inventory management." },
  proj_ksecret_chal: { fr: "Optimisation des requêtes SQL pour un filtrage rapide et sécurisé, et sécurisation des transactions Stripe.", en: "Optimizing SQL queries for complex filtering and securing Stripe transactions." },

  // Project 2: Innov-Platform (PFE)
  proj_pfe_title: { fr: "InnovHub - plateforme web d’accompagnement des projets innovants", en: "Innov-Platform (PFE)" },
  proj_pfe_desc: { fr: "Conception et Développement full-stack d’une plateforme web pour l’accompagnement de projets innovants, réalisée avec Laravel 12, CSS et JavaScript. Conception centrée sur l’expérience utilisateur (UX) et l’ergonomie, avec une gestion complète des projets depuis la soumission jusqu’au suivi des retours. ", en: "Full Stack design with Laravel 12, focusing on ergonomics (UX) and project management." },
  proj_pfe_goal: { fr: "Centraliser la communication entre porteurs de projets et mentors via un dashboard interactif.", en: "Centralize communication between project holders and mentors via an interactive dashboard." },
  proj_pfe_chal: { fr: "InnovHub – Plateforme web full-stack pour l’accompagnement des projets innovants, avec gestion des rôles/permissions (ACL), notifications en temps réel, soumission et suivi des projets, validation par l’équipe encadrante et statistiques pour un pilotage efficace.", en: "Role/permission management (ACL) and real-time notification system." },

  // Project 3: IT-Manager (ONMT)
  proj_intel_title: { fr: "INTELLCAP – Site Web Corporate", en: "Portfolio / Projects" },
  proj_intel_desc: { fr: "Conception et développement d’un site web corporate pour l’entreprise Intelkap, réalisé avec React et Tailwind CSS. Le site met en valeur la vision, les services et les objectifs stratégiques de l’entreprise à travers une interface moderne, responsive et orientée expérience utilisateur.", en: "Portfolio / Projects" },
  proj_intel_goal: { fr:  "Renforcer la présence digitale d’Intelkap en présentant clairement ses services, sa mission et ses valeurs via une plateforme professionnelle et performante.", en: "Portfolio / Projects"  },
  proj_intel_chal: { fr: "Création d’une interface dynamique et responsive avec React, optimisation de l’UX, structuration claire du contenu et design moderne avec Tailwind CSS.", en: "Portfolio / Projects" },

  // Project 4: Space Innovation Day (Workshop)

  proj_space_title: { fr: "Space Innovation Day – Workshop Web Platform", en: "Portfolio / Projects" },
  proj_space_desc: { fr: "Participation au développement du site web “Space Innovation Day” dans le cadre d’un workshop, avec React pour le front-end et Express.js pour le back-end. Le projet assure une intégration fluide entre l’interface utilisateur et la logique métier, offrant une expérience moderne et interactive." , en: "Portfolio / Projects" },
  proj_space_goal: { fr: "Concevoir une plateforme événementielle performante permettant de présenter le programme, les intervenants et les activités du Space Innovation Day à travers une interface dynamique et intuitive." , en: "Portfolio / Projects"},
  proj_space_chal: { fr: "Assurer la communication efficace entre React et l’API Express.js, structurer une architecture claire côté back-end, gérer les routes et optimiser la performance et la réactivité de l’interface utilisateur." , en: "Portfolio / Projects" },
  
// Screenshot Labels
  ss_landing: { fr: "Page d'Accueil", en: "Landing Page" },
  ss_dashboard: { fr: "Dashboard Admin", en: "Admin Dashboard" },
  ss_filter: { fr: "Système de Filtrage", en: "Filtering System" },
  ss_forms: { fr: "Formulaires Dynamiques", en: "Dynamic Forms" },
  ss_infra: { fr: "Infrastructure Serveur", en: "Server Infrastructure" },
  ss_assets: { fr: "Gestion de Parc", en: "Asset Management" },
  ss_products: { fr: "Liste des produits", en: "product Liste" },
  ss_routines: { fr: "Liste des routines", en: "routine Liste" },
  ss_offres: { fr: "Liste des offres", en: "Offre Liste" },
  ss_paniers: { fr: "Gestion du panier", en: "Offre panier" },
  ss_favorie: { fr: "Gestion du favorie", en: "Offre favorie" },
  ss_gestion_produits: { fr: "Gestion du produits", en: "CRUD products" },
  ss_gestion_routines: { fr: "Gestion du routines", en: "CRUD routines" },
  ss_gestion_offres: { fr: "Gestion du offres", en: "CRUD offre" },





  // Project General Text
  proj_btn_details: { fr: "Détails Techniques", en: "Technical Details" },
  proj_modal_stack: { fr: "Stack Technique", en: "Tech Stack" },
  proj_modal_chal: { fr: "Défis & Solutions", en: "Challenges & Solutions" },
  proj_modal_goal: { fr: "Objectifs", en: "Goals" },

  // --- CONTACT SECTION ---
  contact_title: { fr: "Construisons quelque chose de grand.", en: "Let's build something great." },
  contact_subtitle: { fr: "Un projet ? Une idée ? Ou simplement envie de discuter ? Mon inbox est toujours ouverte.", en: "A project? An idea? Or just want to chat? My inbox is always open." },
  contact_email_copied: { fr: "Email copié !", en: "Email copied!" },
  contact_name_placeholder: { fr: "Votre Nom", en: "Your Name" },
  contact_email_placeholder: { fr: "Votre Email", en: "Your Email" },
  contact_msg_placeholder: { fr: "Votre Message...", en: "Your Message..." },
  contact_btn_send: { fr: "Envoyer le Message", en: "Send Message" },
  contact_btn_sending: { fr: "Envoi en cours...", en: "Sending..." },
  contact_btn_success: { fr: "Message Envoyé !", en: "Message Sent!" },
  contact_whatsapp: { fr: "WhatsApp Direct", en: "Quick WhatsApp" },

 // --- FOOTER SECTION --- (TOUS EN FRANÇAIS)
footer_tagline: { 
  fr: "Architecte de solutions digitales Full Stack. Spécialisée dans la création d'écosystèmes performants avec Laravel 12 et React.", 
  en: "Architecte de solutions digitales Full Stack. Spécialisée dans la création d'écosystèmes performants avec Laravel 12 et React." 
},
footer_newsletter_title: { 
  fr: "Restez à l'affût.",   en: "Restez à l'affût." 
},
footer_newsletter_text: { 
  fr: "Abonnez-vous pour recevoir mes dernières études de cas techniques et optimisations Full Stack.", en: "Abonnez-vous pour recevoir mes dernières études de cas techniques et optimisations Full Stack." 
},
footer_input_placeholder: { 
  fr: "Votre adresse email...",  en: "Votre adresse email..." 
},
footer_btn_subscribe: {  fr: "S'abonner",   en: "S'abonner" 
},
footer_subscribed: { 
  fr: "Bienvenue dans la stack ! Vérifiez votre boîte de réception.", en: "Bienvenue dans la stack ! Vérifiez votre boîte de réception." 
},
footer_cv_text: { 
  fr: "Télécharger CV Complet",   en: "Télécharger CV Complet" 
},
footer_links_title: { 
  fr: "Navigation",   en: "Navigation" 
},
footer_social_title: { 
  fr: "Réseaux sociaux",   en: "Réseaux sociaux" 
},
footer_status: { 
  fr: "Prête pour de nouveaux challenges.",   en: "Prête pour de nouveaux challenges." 
},
footer_rights: { 
  fr: "Tous droits réservés © 2026.",   en: "Tous droits réservés © 2026." 
},

};

export const NAV_LINKS: NavLink[] = [
  { key: 'nav_home', href: '#home' },
  { key: 'nav_about', href: '#about' },
  { key: 'nav_education', href: '#education' },
  { key: 'nav_services', href: '#services' },
  { key: 'nav_projects', href: '#projects' },
  { key: 'nav_contact', href: '#contact' },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 1,
    year: "2023 - 2025",
    titleKey: "edu_ts_title",
    institutionKey: "edu_ts_inst",
    iconType: "school"
  },
  {
    id: 2,
    year: "2021 - 2022",
    titleKey: "edu_bac_title",
    institutionKey: "edu_bac_inst",
    iconType: "certificate"
  }
];

export const SERVICES_DATA: Service[] = [
  { 
    id: 1, 
    titleKey: 'service_web_title', 
    descKey: 'service_web_desc', 
    iconName: 'Code',
    tags: ['Laravel 12', 'React', 'PHP', 'Tailwind CSS']
  },
  { 
    id: 2, 
    titleKey: 'service_ui_title', 
    descKey: 'service_ui_desc', 
    iconName: 'Layout',
    tags: ['Figma', 'Canva', 'Responsive Design']
  },
  { 
    id: 3, 
    titleKey: 'service_perf_title', 
    descKey: 'service_perf_desc', 
    iconName: 'ShieldCheck',
    tags: ['SonarQube', 'PHPUnit', 'Agile (Scrum)']
  },
];

// --- UPDATED PROJECT DATA ---
export const PROJECTS_DATA: Project[] = [
  { 
    id: 1, 
    titleKey: 'proj_ksecret_title', 
    descKey: 'proj_ksecret_desc', 
    tags: ['React', 'Laravel','CSS', 'MySQL','Stockit'], 
    qualityGrade: 'A+',
    color: '#ff4757', // Pink/Red
    screenshots: [
        { url: 'public/assets/cosmetique/1.png', labelKey: 'ss_landing', techBadge: 'React Components' },
        { url: 'public/assets/cosmetique/2.png', labelKey: 'ss_landing', techBadge: 'State Management' },
        { url: 'public/assets/cosmetique/3.png', labelKey: 'ss_landing', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/4.png', labelKey: 'ss_landing', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/5.png', labelKey: 'ss_landing', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/6.png', labelKey: 'ss_landing', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/7.png', labelKey: 'ss_filter', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/8.png', labelKey: 'ss_products', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/9.png', labelKey: 'ss_products', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/10.png', labelKey: 'ss_products', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/11.png', labelKey: 'ss_routines', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/12.png', labelKey: 'ss_routines', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/13.png', labelKey: 'ss_offres', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/14.png', labelKey: 'ss_favorie', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/15.png', labelKey: 'ss_paniers', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/16.png', labelKey: 'ss_forms', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/17.png', labelKey: 'ss_dashboard', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/18.png', labelKey: 'ss_gestion_produits', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/19.png', labelKey: 'ss_gestion_routines', techBadge: 'Laravel API Logic' },
        { url: 'public/assets/cosmetique/20.png', labelKey: 'ss_gestion_offres', techBadge: 'Laravel API Logic' },
    ],
    details: {
      goalKey: 'proj_ksecret_goal',
      challengesKey: 'proj_ksecret_chal',
      fullStack: ['React JS', 'CSS', 'Laravel 12 API', 'MySQL', 'JWT Auth','Stockit']
    }
  },
  { 
    id: 2, 
    titleKey: 'proj_pfe_title', 
    descKey: 'proj_pfe_desc', 
    tags: ['Laravel 12', 'JavaScript', 'CSS', 'UX'], 
    qualityGrade: 'A',
    color: '#3b82f6', // Blue
    screenshots: [
        { url: 'public/assets/pfe/1.png', labelKey: 'ss_landing', techBadge: 'Blade Templates' },
        { url: 'public/assets/pfe/2.png', labelKey: 'ss_landing', techBadge: 'Interactive Forms' },
        { url: 'public/assets/pfe/3.png', labelKey: 'ss_landing', techBadge: 'Interactive Forms' },
        { url: 'public/assets/pfe/4.png', labelKey: 'ss_forms', techBadge: 'Interactive Forms' },
        { url: 'public/assets/pfe/5.png', labelKey: 'ss_landing', techBadge: 'Interactive Forms' },
        { url: 'public/assets/pfe/6.png', labelKey: 'ss_forms', techBadge: 'Interactive Forms' },
        { url: 'public/assets/pfe/7.png', labelKey: 'ss_forms', techBadge: 'Interactive Forms' },
        { url: 'public/assets/pfe/8.png', labelKey: 'ss_landing', techBadge: 'Interactive Forms' },
        { url: 'public/assets/pfe/9.png', labelKey: 'ss_landing', techBadge: 'Interactive Forms' },
        { url: 'public/assets/pfe/10.png', labelKey: 'ss_landing', techBadge: 'Interactive Forms' },
        { url: 'public/assets/pfe/11.png', labelKey: 'ss_filter', techBadge: 'Interactive Forms' },
        { url: 'public/assets/pfe/12.png', labelKey: 'ss_dashboard', techBadge: 'Interactive Forms' },
        { url: 'public/assets/pfe/13.png', labelKey: 'ss_dashboard', techBadge: 'Interactive Forms' },
    ],
    details: {
      goalKey: 'proj_pfe_goal',
      challengesKey: 'proj_pfe_chal',
      fullStack: ['Laravel Blade', 'CSS', 'JavaScript']
    }
  },{ 
  id: 3, 
  titleKey: 'proj_intel_title', 
  descKey: 'proj_intel_desc', 
  tags: ['React', 'Tailwind CSS', 'Responsive Design'], 
  qualityGrade: 'A',
  color: '#6366f1', 
  screenshots: [
      { url: 'public/assets/pr/1.png', labelKey: 'ss_landing', techBadge: 'React Components' },
      { url: 'public/assets/pr/2.png', labelKey: 'ss_landing', techBadge: 'React Components' },
      { url: 'public/assets/pr/3.png', labelKey: 'ss_landing', techBadge: 'React Components' },
      { url: 'public/assets/pr/4.png', labelKey: 'ss_landing', techBadge: 'React Components' },
      { url: 'public/assets/pr/5.png', labelKey: 'ss_landing', techBadge: 'React Components' },
      { url: 'public/assets/pr/6.png', labelKey: 'ss_landing', techBadge: 'React Components' },
      { url: 'public/assets/pr/7.png', labelKey: 'ss_forms', techBadge: 'React Components' },
      { url: 'public/assets/pr/9.png', labelKey: 'ss_landing', techBadge: 'React Components' },
      { url: 'public/assets/pr/10.png', labelKey: 'ss_landing', techBadge: 'React Components' },
      { url: 'public/assets/pr/8.png', labelKey: 'ss_landing', techBadge: 'React Components' },
  ],
  details: {
    goalKey: 'proj_intel_goal',
    challengesKey: 'proj_intel_chal',
    fullStack: ['React JS', 'Tailwind CSS']
  }
},
{ 
  id: 4, 
  titleKey: 'proj_space_title', 
  descKey: 'proj_space_desc', 
  tags: ['React', 'CSS','Express.js', 'Responsive Design'], 
  qualityGrade: 'A',
  color: '#6366f1', 
  screenshots: [
      { url: 'public/assets/innov/1.png', labelKey: 'ss_landing', techBadge: 'React Components' },
      { url: 'public/assets/innov/2.png', labelKey: 'ss_landing', techBadge: 'Responsive UI' },
      { url: 'public/assets/innov/3.png', labelKey: 'ss_landing', techBadge: 'Responsive UI' },
      { url: 'public/assets/innov/4.png', labelKey: 'ss_landing', techBadge: 'Responsive UI' },
      { url: 'public/assets/innov/5.png', labelKey: 'ss_landing', techBadge: 'Responsive UI' },
      { url: 'public/assets/innov/6.png', labelKey: 'ss_landing', techBadge: 'Responsive UI' },
      { url: 'public/assets/innov/7.png', labelKey: 'ss_landing', techBadge: 'Responsive UI' },
      { url: 'public/assets/innov/8.png', labelKey: 'ss_landing', techBadge: 'Responsive UI' },
      { url: 'public/assets/innov/9.png', labelKey: 'ss_landing', techBadge: 'Responsive UI' },
      { url: 'public/assets/innov/10.png', labelKey: 'ss_landing', techBadge: 'Responsive UI' },
      { url: 'public/assets/innov/11.png', labelKey: 'ss_landing', techBadge: 'Responsive UI' },
       
       
  ],
  details: {
    goalKey: 'proj_space_goal',
    challengesKey: 'proj_space_chal',
    fullStack: ['React JS','express.js','Tailwind CSS']
  }
},
];

// Tech Stack Data Structure for the About Component
export const TECH_STACK = {
  frontend: [
    { name: 'React', tooltipKey: 'tooltip_react', icon: 'Atom' }, // Atom looks like React
    { name: 'JS (ES6+)', tooltipKey: 'tooltip_react', icon: 'FileCode' },
    { name: 'Tailwind', tooltipKey: 'tooltip_react', icon: 'Wind' },
  ],
  backend: [
    { name: 'Laravel 12', tooltipKey: 'tooltip_laravel', icon: 'Server' },
    { name: 'PHP 8.2', tooltipKey: 'tooltip_laravel', icon: 'Code2' },
    { name: 'MySQL', tooltipKey: 'tooltip_db', icon: 'Database' },
  ],
  quality: [
    { name: 'SonarQube', tooltipKey: 'tooltip_tools', icon: 'ScanSearch' },
    { name: 'PHPUnit', tooltipKey: 'tooltip_tools', icon: 'TestTube2' },
    { name: 'Agile', tooltipKey: 'tooltip_tools', icon: 'Kanban' },
  ],
  toolkit: [
    { name: 'Figma', icon: 'PenTool' },
    { name: 'Git', icon: 'GitBranch' },
    { name: 'Postman', icon: 'Send' },
    { name: 'VS Code', icon: 'TerminalSquare' },
  ]
};