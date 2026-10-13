export const SITE_URL = "https://diegocoscolla.dev";

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
      "Full-stack software engineer working with TypeScript, React/Next.js, Node.js/NestJS and PostgreSQL. Product features end to end, including LLM features.",
    cv: { label: "Download CV (PDF)", href: "/Diego_Coscolla_CV.pdf" },
    about: {
      title: "About",
      content:
        "Full-stack engineer with 4+ years of professional experience in TypeScript, React and Node.js. I make frontend architecture decisions and build product features end to end, from data and backend services to the UI. I have built browser extensions, including one with LLM features, and introduced Spec-Driven Development so AI-assisted work starts from specs and acceptance criteria. Strongest on the frontend, comfortable with Node.js, NestJS, PostgreSQL and Python.",
    },
    work_experience: {
      title: "Work Experience",
      items: [
        {
          company: "Intermedia IT",
          position: "Software Engineer",
          period: "Sep 2024 - Present",
          bullets: [
            "Made the frontend architecture decisions for an ERP: application structure, a reusable component system and complex business flows in React, Next.js and TypeScript.",
            "Built an analytics platform for livestock-feeding decisions end to end: data processing, business rules, backend services and KPI dashboards.",
            "Designed and integrated APIs and backend services with Node.js, NestJS, PostgreSQL and Redis (relational modelling, persistence, async jobs).",
            "Co-developed WTM, a browser extension with LLM features that captures relevant browsing context, stores it and lets users query it with language models.",
            "Researched models for daily development, helped set up an agent-based engineering workflow and taught the team Spec-Driven Development (SDD).",
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
            "Built solo a Chrome lead-capture extension on top of Nosis APIs, still in production.",
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
        "TypeScript", "React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "Redis",
        "Python", "Tailwind CSS", "Docker", "Azure SQL", "Microsoft Fabric",
        "React Native", "GraphQL", "REST APIs", "LLM features", "Spec-Driven Development",
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
      "Desarrollador full-stack con TypeScript, React/Next.js, Node.js/NestJS y PostgreSQL. Funcionalidades de producto de punta a punta, incluidas con LLM.",
    cv: { label: "Descargar CV (PDF)", href: "/Diego_Coscolla_CV_ES.pdf" },
    about: {
      title: "Sobre mí",
      content:
        "Desarrollador full-stack con más de 4 años en TypeScript, React y Node.js. Tomo decisiones de arquitectura frontend y construyo funcionalidades de producto de punta a punta, desde los datos y los servicios backend hasta la interfaz. Desarrollé extensiones de navegador, incluida una con funcionalidades de LLM, e introduje Spec-Driven Development para que el trabajo asistido por IA parta de specs y criterios de aceptación. Más fuerte en frontend; cómodo con Node.js, NestJS, PostgreSQL y Python.",
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
            "Investigué modelos para el desarrollo diario, ayudé a armar un flujo de trabajo basado en agentes y le enseñé al equipo Spec-Driven Development (SDD).",
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
            "Construí solo una extensión de Chrome de captación de leads sobre las APIs de Nosis, todavía en producción.",
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
        "TypeScript", "React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "Redis",
        "Python", "Tailwind CSS", "Docker", "Azure SQL", "Microsoft Fabric",
        "React Native", "GraphQL", "REST APIs", "Funcionalidades con LLM", "Spec-Driven Development",
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
