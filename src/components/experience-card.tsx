import { Badge } from "./ui/badge";

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  bullets: string[];
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ position, period, bullets, company }) => {
  return (
    <div className="flex flex-col gap-2 py-2 print:break-inside-avoid">
      <div className="flex flex-col">
        <div className="flex justify-between items-center gap-2">
          <h3 className="font-semibold sm:text-lg">{company}</h3>
          <Badge className="text-[10px] px-1 sm:text-xs sm:px-2 shrink-0" variant="outline">{period}</Badge>
        </div>
        <span className="sm:text-sm text-xs text-gray-600">{position}</span>
      </div>
      <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm text-gray-800 leading-relaxed">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
};
