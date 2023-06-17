import "./section.css";

export default function Section({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <section>
        <p className="title">{title}</p>
        <div>{children}</div>
      </section>
    </>
  );
}
