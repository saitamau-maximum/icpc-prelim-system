import { Link } from "react-router-dom";

import "./top.css";
import Section from "../components/section";

export default function top() {
  return (
    <>
      <Section title="Stage: rehearsal">
        <p>The rehearsal is in progress. The rehearsal will end at xx:xx.</p>
      </Section>
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
