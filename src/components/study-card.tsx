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
          <h3 className="font-semibold text-lg">{institution}</h3>
          <Badge variant="outline">{period}</Badge>
        </div>
        <span className="text-sm text-gray-600">{description}</span>
      </div>
    </div>
  );
};