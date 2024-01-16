interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="px-1">{children}</div>
    </section>
  );
};
