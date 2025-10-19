type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-12 sm:py-16 bg-gradient-to-b from-[#FFF4E0] to-white ${className}`.trim()}
    >
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#003049]">
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-[#003049]/80 text-sm sm:text-base">
              {description}
            </p>
          )}
        </div>
        {children && <div className="mt-6 sm:mt-8">{children}</div>}
      </div>
    </section>
  );
}
