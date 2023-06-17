import { Link } from "react-router-dom";

import Section from "../components/section";
import Stage from "../components/stage";
import Progress from "../components/progress";

export default function top() {
  return (
    <>
      <Stage />
      <Progress />
      <Section title="Problems">
        <table>
          <tbody>
            <tr>
              <td>All Problems:</td>
              <td>English</td>
              <td>/</td>
              <td>Japanese</td>
            </tr>
            <tr>
              <td>Problem J:</td>
              <td>English</td>
              <td>/</td>
              <td>Japanese</td>
            </tr>
            <tr>
              <td>Problem K:</td>
              <td>English</td>
              <td>/</td>
              <td>Japanese</td>
            </tr>
            <tr>
              <td>Problem L:</td>
              <td>English</td>
              <td>/</td>
              <td>Japanese</td>
            </tr>
            <tr>
              <td>Problem M:</td>
              <td>English</td>
              <td>/</td>
              <td>Japanese</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="Workplace">
        <p>
          Get data and send answer <Link to="/workplace">here</Link>
        </p>
      </Section>
    </>
  );
}
