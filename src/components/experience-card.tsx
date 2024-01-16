import { Badge } from "./ui/badge";

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  position,
  period,
  description,
  company,
}) => {
  return (
    <div className="flex flex-col gap-2 py-2">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold sm:text-lg">{company}</h3>
          <Badge className="text-[10px] px-1 sm:text-xs sm:px-2" variant="outline">{period}</Badge>
        </div>
        <span className="sm:text-sm text-xs text-gray-600">{position}</span>
      </div>
      <p className="text-xs text-gray-800">{description}</p>
    </div>
  );
};