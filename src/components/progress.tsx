import Section from "./section";
import "./progress.css";

export default function progress() {
  return (
    <Section title="Team 0: You">
      <table>
        <tbody>
          <tr>
            <td>J</td>
            <td>K</td>
            <td>L</td>
            <td>M</td>
          </tr>
          <tr className="progress">
            <td className="blue"></td>
            <td className="blue"></td>
            <td className="blue"></td>
            <td className="blue"></td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}
