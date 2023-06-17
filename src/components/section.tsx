import "./section.css";

export default function section({
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
