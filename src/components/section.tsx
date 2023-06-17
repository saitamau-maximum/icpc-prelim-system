import "./section.css";

export default function Section({
  children,
  title,
  color = "#33f",
  border = "#aab5df",
  nomargin = false,
  nopadding = false,
  title_underline = false,
}: {
  children: React.ReactNode;
  title: string;
  color?: string;
  border?: string;
  nomargin?: boolean;
  nopadding?: boolean;
  title_underline?: boolean;
}) {
  return (
    <>
      <section style={{ margin: nomargin ? "0" : "0.5rem 0" }}>
        <p className="title" style={{ backgroundColor: color }}>
          {title_underline ? <u>{title}</u> : title}
        </p>
        <div
          style={{ borderColor: border, padding: nopadding ? "0" : "0.5rem" }}
        >
          {children}
        </div>
      </section>
    </>
  );
}
