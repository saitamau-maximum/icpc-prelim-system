import Progress from "../components/progress";
import Section from "../components/section";
import Stage from "../components/stage";

export default function Standings() {
  return (
    <div>
      <Stage />
      <Progress />
      <Section title="Standings">Not shown</Section>
    </div>
  );
}
