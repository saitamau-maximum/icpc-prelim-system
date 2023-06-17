import { Link } from "react-router-dom";

import Section from "../components/section";
import Stage from "../components/stage";
import Progress from "../components/progress";

export default function Top() {
  return (
    <div>
      <Stage />
      <Progress />
      <Section title="Problems">
        <table>
          <tbody>
            <tr>
              <td>All Problems:</td>
              <td>
                <Link to="/problem?lang=en" reloadDocument>
                  English
                </Link>
              </td>
              <td>/</td>
              <td>
                <Link to="/problem" reloadDocument>
                  Japanese
                </Link>
              </td>
            </tr>
            <tr>
              <td>Problem J:</td>
              <td>
                <Link to="/problem?lang=en&problem=j" reloadDocument>
                  English
                </Link>
              </td>
              <td>/</td>
              <td>
                <Link to="/problem?problem=j" reloadDocument>
                  Japanese
                </Link>
              </td>
            </tr>
            <tr>
              <td>Problem K:</td>
              <td>
                <Link to="/problem?lang=en&problem=k" reloadDocument>
                  English
                </Link>
              </td>
              <td>/</td>
              <td>
                <Link to="/problem?problem=k" reloadDocument>
                  Japanese
                </Link>
              </td>
            </tr>
            <tr>
              <td>Problem L:</td>
              <td>
                <Link to="/problem?lang=en&problem=l" reloadDocument>
                  English
                </Link>
              </td>
              <td>/</td>
              <td>
                <Link to="/problem?problem=l" reloadDocument>
                  Japanese
                </Link>
              </td>
            </tr>
            <tr>
              <td>Problem M:</td>
              <td>
                <Link to="/problem?lang=en&problem=m" reloadDocument>
                  English
                </Link>
              </td>
              <td>/</td>
              <td>
                <Link to="/problem?problem=m" reloadDocument>
                  Japanese
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="Workplace">
        <p>
          Get data and send answer{" "}
          <Link to="/workplace" reloadDocument>
            here
          </Link>
        </p>
      </Section>
    </div>
  );
}
