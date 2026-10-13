import { TopActions } from "@/components/kbar";
import { RESUME_DATA, SITE_URL } from "@/data/resume-data";
import { Metadata } from "next";

type Props = { searchParams: Promise<{ language?: string }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { language } = await searchParams;
  const lang = language === "es" ? "es" : "en";
  const D = RESUME_DATA[lang];
  return {
    title: `${D.name} | ${D.position}`,
    description: D.summary,
    alternates: { canonical: "/", languages: { en: "/", es: "/?language=es" } },
    openGraph: {
      title: `${D.name} | ${D.position}`,
      description: D.summary,
      url: lang === "es" ? `${SITE_URL}/?language=es` : SITE_URL,
      siteName: D.name,
      locale: lang === "es" ? "es_AR" : "en_US",
      type: "profile",
      images: [{ url: "/profile-picture.jpg", alt: D.name }],
    },
    twitter: { card: "summary", title: `${D.name} | ${D.position}`, description: D.summary, images: ["/profile-picture.jpg"] },
  };
}

export default async function Home({ searchParams }: Props) {
  const { language: raw } = await searchParams;
  const language = raw === "es" ? "es" : "en";
  const D = RESUME_DATA[language];
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/diego-cos/" },
    { label: "GitHub", href: "https://github.com/dcos96038" },
    { label: "X", href: "https://twitter.com/diego_cos96" },
    { label: "Email", href: "mailto:diegocoscolla@gmail.com" },
  ];
  const n = (i: number) => String(i).padStart(2, "0");

  return (
    <div className="ed" lang={language}>
      <main>
        <div className="top">
          <span>{D.location}</span>
          <TopActions language={language} links={links} />
        </div>
        <h1>{D.name}</h1>
        <div className="role">{D.position}</div>
        <p className="sum">{D.summary}</p>
        <div className="soc np">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
          ))}
          <a href={D.cv.href} download>{D.cv.label}</a>
        </div>
        <p className="print-only">diegocoscolla@gmail.com · linkedin.com/in/diego-cos · github.com/dcos96038 · {SITE_URL.replace("https://", "")}</p>

        <h2><span>{n(1)}</span>{D.about.title}</h2>
        <p>{D.about.content}</p>

        <h2><span>{n(2)}</span>{D.work_experience.title}</h2>
        {D.work_experience.items.map((j) => (
          <div className="job" key={j.company}>
            <div className="p">{j.period}</div>
            <div>
              <h3>{j.company}</h3>
              <em>{j.position}</em>
              <ul>{j.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
            </div>
          </div>
        ))}

        <h2><span>{n(3)}</span>{D.skills.title}</h2>
        <div className="sk">{D.skills.items.join(" · ")}</div>

        <h2><span>{n(4)}</span>{D.languages.title}</h2>
        <p>{D.languages.items.join(" · ")}</p>

        <h2><span>{n(5)}</span>{D.education.title}</h2>
        {D.education.items.map((e) => (
          <div className="job" key={e.institution}>
            <div className="p">{e.period}</div>
            <div><h3>{e.institution}</h3><p>{e.description}</p></div>
          </div>
        ))}
      </main>
    </div>
  );
}
