import { Badge } from "./ui/badge";

interface StudyCardProps {
  institution: string;
  description: string;
  period: string;
}

export const StudyCard: React.FC<StudyCardProps> = ({
  period,
  institution,
  description,
}) => {
  return (
    <div className="flex flex-col gap-2 py-2">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold sm:text-lg line-clamp-1">{institution}</h3>
          <Badge className="text-[10px] px-1 sm:text-xs sm:px-2" variant="outline">{period}</Badge>
        </div>
        <span className="sm:text-sm text-xs text-gray-600">{description}</span>
      </div>
    </div>
  );
};