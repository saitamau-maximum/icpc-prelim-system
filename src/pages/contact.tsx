import Progress from "../components/progress";
import Section from "../components/section";
import Stage from "../components/stage";

export default function Contact() {
  return (
    <div>
      <Stage />
      <Progress />
      <Section title="Contact Information of Judges">
        <table>
          <tbody>
            <tr>
              <td>Email:</td>
              <td>Unknown</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>Unknown</td>
            </tr>
          </tbody>
        </table>
      </Section>
    </div>
  );
}
