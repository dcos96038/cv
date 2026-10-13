export const SITE_URL = "https://cv.diegocoscolla.dev";

/** Profile links shown in the visible link row and in the desktop command palette. */
export const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/diego-cos/" },
  { label: "GitHub", href: "https://github.com/dcos96038" },
  { label: "X", href: "https://twitter.com/diego_cos96" },
  { label: "Email", href: "mailto:diegocoscolla@gmail.com" },
];

export type Experience = {
  company: string;
  position: string;
  period: string;
  bullets: string[];
  tech?: string;
};

export const RESUME_DATA = {
  en: {
    name: "Diego Coscolla",
    location: "Tucumán, Argentina · Remote (UTC-3)",
    position: "Full-Stack Software Engineer",
    summary:
      "Full-stack software engineer building product features end to end with TypeScript, React, Next.js, Node.js, NestJS and PostgreSQL, including LLM integrations.",
    cv: { label: "Download CV (PDF)", href: "/Diego_Coscolla_CV.pdf" },
    about: {
      title: "About",
      content:
        "Full-stack software engineer with 4+ years of professional experience in TypeScript, React and Node.js. I build product features end to end: data modelling, APIs and backend services, and the UI on top. My strongest side is the frontend, where I have made architecture decisions for large business applications. On the backend I work with Node.js, NestJS, PostgreSQL and Python. I also build LLM integrations and use AI-assisted development day to day, starting from specs and acceptance criteria (Spec-Driven Development) so the output stays reviewable.",
    },
    work_experience: {
      title: "Work Experience",
      items: [
        {
          company: "Intermedia IT",
          position: "Software Engineer",
          period: "Sep 2024 - Present",
          bullets: [
            "Made the frontend architecture decisions for an ERP: application structure, a reusable component system and complex business flows, built with React, Next.js and TypeScript.",
            "Built an analytics platform for livestock-feeding decisions end to end: data processing, business rules, backend services and KPI dashboards.",
            "Designed and integrated APIs and backend services with Node.js, NestJS, PostgreSQL and Redis (relational modelling, persistence, async jobs).",
            "Co-developed WTM, a browser extension with LLM features that captures relevant browsing context, stores it and lets users query it with language models.",
            "Researched models for daily development, helped set up an agent-based engineering workflow and introduced Spec-Driven Development (SDD) to the team, so specs and acceptance criteria guide AI-assisted implementation.",
            "Master Enrichment: Microsoft Fabric pipelines and notebooks to consolidate and enrich a debtor master database, integrated with Azure SQL and SharePoint via Microsoft Graph.",
            "BISA: internal stock transfers and orders module between warehouses. Python API (Alembic, pytest), TypeScript frontend (Vitest) and async ERP integration with stock reservations and hexagonal design.",
          ],
        },
        {
          company: "Qualita & freelance contracts",
          position: "Full-Stack Software Engineer",
          period: "Jan 2022 - Aug 2024",
          bullets: [
            "Qualita: frontend features and API integrations for a private courier's e-commerce platform and a last-mile delivery mobile app, in React, Next.js and TypeScript.",
            "Freelance: full-stack features (TypeScript, React, Next.js, Node.js, SQL) for a gamified financial-education app, a live-event platform and a financial-alerts platform built on public US market data.",
          ],
        },
        {
          company: "Nosis (contract)",
          position: "Frontend Engineer",
          period: "Jan 2023 - Jul 2023",
          bullets: [
            "Built a Chrome lead-capture extension on my own on top of Nosis APIs; it is still in production.",
            "Migrated React apps from JavaScript to TypeScript.",
          ],
        },
        {
          company: "White Project (contract)",
          position: "React Native Engineer",
          period: "Sep 2022 - Jan 2023",
          bullets: [
            "Helped build from scratch a React Native / Expo app for construction projects: UI, navigation, state, API integration and early architecture.",
          ],
        },
        {
          company: "Practia Global",
          position: "RPA Developer",
          period: "Sep 2021 - Sep 2022",
          bullets: ["Automated operational processes for OSDE with Blue Prism."],
        },
      ] as Experience[],
    },
    skills: {
      title: "Skills",
      items: [
        // Languages
        "TypeScript", "JavaScript", "Python", "SQL",
        // Frontend
        "React", "Next.js", "React Native", "Expo", "Tailwind CSS",
        // Backend & data
        "Node.js", "NestJS", "REST APIs", "GraphQL", "PostgreSQL", "Redis", "Azure SQL", "Microsoft Fabric",
        // AI
        "LLM integrations", "AI-assisted development", "Agent-based workflows", "Spec-Driven Development (SDD)",
        // Tooling
        "Docker", "CI/CD", "Git", "Monorepos (Turborepo)",
      ],
    },
    languages: {
      title: "Languages",
      items: ["Spanish (native)", "English (B2+, professional working proficiency)"],
    },
    education: {
      title: "Education",
      items: [
        {
          institution: "Universidad Tecnológica Nacional (UTN)",
          description: "Information Systems Engineering coursework (3 years completed)",
          period: "2019",
        },
      ],
    },
  },
  es: {
    name: "Diego Coscolla",
    location: "Tucumán, Argentina · Remoto (UTC-3)",
    position: "Desarrollador Full-Stack",
    summary:
      "Desarrollador full-stack. Construyo funcionalidades de producto de punta a punta con TypeScript, React, Next.js, Node.js, NestJS y PostgreSQL, incluidas integraciones con LLMs.",
    cv: { label: "Descargar CV (PDF)", href: "/Diego_Coscolla_CV_ES.pdf" },
    about: {
      title: "Sobre mí",
      content:
        "Desarrollador full-stack con más de 4 años de experiencia profesional en TypeScript, React y Node.js. Construyo funcionalidades de producto de punta a punta: modelado de datos, APIs y servicios backend, y la interfaz. Mi fuerte es el frontend, donde tomé decisiones de arquitectura en aplicaciones de negocio grandes. En backend trabajo con Node.js, NestJS, PostgreSQL y Python. También desarrollo integraciones con LLMs y uso desarrollo asistido por IA en el día a día, partiendo de specs y criterios de aceptación (Spec-Driven Development) para que el resultado se pueda revisar.",
    },
    work_experience: {
      title: "Experiencia",
      items: [
        {
          company: "Intermedia IT",
          position: "Software Engineer",
          period: "Sep 2024 - Actualidad",
          bullets: [
            "Tomé las decisiones de arquitectura frontend de un ERP: estructura de la aplicación, sistema de componentes reutilizables y flujos de negocio complejos en React, Next.js y TypeScript.",
            "Plataforma de analítica de punta a punta para decisiones de alimentación de ganado: procesamiento de datos, reglas de negocio, servicios backend y dashboards de KPIs.",
            "Diseño e integración de APIs y servicios backend con Node.js, NestJS, PostgreSQL y Redis (modelado relacional, persistencia, jobs asincrónicos).",
            "Co-desarrollé WTM, una extensión de navegador con funcionalidades de LLM: captura contexto relevante de la navegación, lo guarda y permite consultarlo con modelos de lenguaje.",
            "Investigué modelos para el desarrollo diario, ayudé a armar un flujo de trabajo basado en agentes e introduje Spec-Driven Development (SDD) en el equipo, para que las specs y los criterios de aceptación guíen la implementación asistida por IA.",
            "Master Enrichment: pipelines y notebooks en Microsoft Fabric para consolidar y enriquecer una base maestra de deudores, con integración a Azure SQL y SharePoint vía Microsoft Graph.",
            "BISA: módulo de traslados y pedidos internos de stock entre depósitos. API en Python (Alembic, pytest), frontend en TypeScript (Vitest) e integración asíncrona con el ERP, con reservas de stock y diseño hexagonal.",
          ],
        },
        {
          company: "Qualita y contratos freelance",
          position: "Full-Stack Software Engineer",
          period: "Ene 2022 - Ago 2024",
          bullets: [
            "Qualita: funcionalidades frontend e integración de APIs para la plataforma de e-commerce de un courier privado y una app móvil de última milla, en React, Next.js y TypeScript.",
            "Freelance: funcionalidades full-stack (TypeScript, React, Next.js, Node.js, SQL) para una app de educación financiera gamificada, una plataforma de eventos en vivo y una plataforma de alertas financieras sobre datos públicos del mercado de EE.UU.",
          ],
        },
        {
          company: "Nosis (contrato)",
          position: "Frontend Engineer",
          period: "Ene 2023 - Jul 2023",
          bullets: [
            "Construí por mi cuenta una extensión de Chrome de captación de leads sobre las APIs de Nosis, que sigue en producción.",
            "Migré apps React de JavaScript a TypeScript.",
          ],
        },
        {
          company: "White Project (contrato)",
          position: "React Native Engineer",
          period: "Sep 2022 - Ene 2023",
          bullets: [
            "Participé en construir desde cero una app React Native / Expo para proyectos de construcción: UI, navegación, estado, integración de APIs y arquitectura inicial.",
          ],
        },
        {
          company: "Practia Global",
          position: "Desarrollador RPA",
          period: "Sep 2021 - Sep 2022",
          bullets: ["Automaticé procesos operativos de OSDE con Blue Prism."],
        },
      ] as Experience[],
    },
    skills: {
      title: "Habilidades",
      items: [
        // Lenguajes
        "TypeScript", "JavaScript", "Python", "SQL",
        // Frontend
        "React", "Next.js", "React Native", "Expo", "Tailwind CSS",
        // Backend y datos
        "Node.js", "NestJS", "REST APIs", "GraphQL", "PostgreSQL", "Redis", "Azure SQL", "Microsoft Fabric",
        // IA
        "Integraciones con LLMs", "Desarrollo asistido por IA", "Flujos con agentes", "Spec-Driven Development (SDD)",
        // Herramientas
        "Docker", "CI/CD", "Git", "Monorepos (Turborepo)",
      ],
    },
    languages: {
      title: "Idiomas",
      items: ["Español (nativo)", "Inglés (B2+, competencia profesional de trabajo)"],
    },
    education: {
      title: "Educación",
      items: [
        {
          institution: "Universidad Tecnológica Nacional (UTN)",
          description: "Cursada de Ingeniería en Sistemas de Información (3 años completados)",
          period: "2019",
        },
      ],
    },
  },
};
