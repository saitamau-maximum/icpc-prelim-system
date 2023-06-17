import "./section.css";

export default function Section({
  children,
  title,
  color = "#33f",
  border = "#aab5df",
}: {
  children: React.ReactNode;
  title: string;
  color?: string;
  border?: string;
}) {
  return (
    <>
      <section>
        <p className="title" style={{ backgroundColor: color }}>
          {title}
        </p>
        <div style={{ borderColor: border }}>{children}</div>
      </section>
    </>
  );
}
