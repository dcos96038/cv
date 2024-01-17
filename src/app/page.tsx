import { CommandMenu } from "@/components/command-menu";
import { ExperienceCard } from "@/components/experience-card";
import { SwitchLanguageButton } from "@/components/language-button";
import { Section } from "@/components/section";
import { StudyCard } from "@/components/study-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { icons } from "@/data/socials";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: `${RESUME_DATA.en.name} | Curriculum Vitae`,
  description: `${RESUME_DATA.en.summary}`,
};

export default function Home({ searchParams }: { searchParams: { language: string } }) {
  const search = searchParams;

  const language = search.language ?? "en";

  if (language !== "en" && language !== "es") throw new Error("Language not found");

  const DATA = RESUME_DATA[language as "en" | "es"];

  return (
    <main className="mx-auto max-w-5xl py-10 sm:py-20 print:py-10 flex flex-col gap-10 overflow-auto print:overflow-visible relative h-full px-8 sm:px-14">
      <div className="flex gap-8 sm:items-center relative sm:flex-row flex-col">
        <Image src={'/profile-picture.jpg'} alt="Diego Coscolla Profile picture" width={128} height={128} className="rounded-md shadow-md" />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">{DATA.name}</h1>
          <div className="flex text-sm gap-1 flex-col text-gray-700">
            <p className="max-w-lg">{DATA.summary}</p>
            <p>🌐 {DATA.location}</p>
          </div>
          <div className="flex gap-2 print:hidden">
            {icons.map((icon, index) => {
              return (
                <Button
                  variant={"outline"}
                  size={"icon"}
                  key={`${icon.name}-${index}`}
                  asChild
                >
                  <a target="_blank" rel="noopener noreferrer" href={icon.href}>
                    {icon.component}
                  </a>
                </Button>
              );
            })}
          </div>
          <div className="hidden print:block">
              <a className="text-sm font-semibold" href={"mailto:diegocoscolla@gmail.com"}>
                diegocoscolla@gmail.com
              </a>
          </div>
        </div>
        <SwitchLanguageButton />
      </div>
      <Section title={DATA.about.title}>
        <p className="text-gray-700 text-xs sm:text-sm">{DATA.about.content}</p>
      </Section>
      <Section title={DATA.work_experience.title}>
        {DATA.work_experience.items.map((experience, index) => {
          return (
            <ExperienceCard
              key={`${experience.company}-${index}`}
              company={experience.company}
              position={experience.position}
              period={experience.period}
              description={experience.description}
            />
          );
        })}
      </Section>
      <Section title={DATA.skills.title}>
        <div className="flex gap-2 flex-wrap">
          {DATA.skills.items.map((skill, index) => {
            return (
              <Badge key={`${skill}-${index}`} variant="outline">
                {skill}
              </Badge>
            );
          })}
        </div>
      </Section>
      <Section title="Education">
        {DATA.education.items.map((study, index) => {
          return (
            <StudyCard
              key={`${study.institution}-${index}`}
              institution={study.institution}
              description={study.description}
              period={study.period}
            />
          );
        })}
      </Section>
      <div className="sm:block hidden"><CommandMenu language={language as "en" | "es"} /></div>
    </main>
  );
}
