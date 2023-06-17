import Stage from "../components/stage";
import Progress from "../components/progress";
import Section from "../components/section";

import init, { greet } from "../wasm/wasm";

export default function Workplace() {
  init().then(() => {
    greet("workplace");
  });
  return (
    <div>
      <Stage />
      <Progress />
      <Section title="Get Data">
        <table>
          <tbody>
            <tr>
              <td>Problem J:</td>
              <td>Data No. x</td>
            </tr>
            <tr>
              <td>Problem K:</td>
              <td>Data No. x</td>
            </tr>
            <tr>
              <td>Problem L:</td>
              <td>Data No. x</td>
            </tr>
            <tr>
              <td>Problem M:</td>
              <td>Data No. x</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="Send Answer">
        <form>
          <table>
            <tbody>
              <tr>
                <td>
                  <u>Problem</u>:
                </td>
                <td>
                  <select>
                    <option value="J">J</option>
                    <option value="K">K</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  Filename of <u>answer</u>:
                </td>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <td>
                  Filename of <u>program</u>:
                </td>
                <td>
                  <input type="file" />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" value="send" />
          <input type="reset" value="reset" />
        </form>
      </Section>
    </div>
  );
}
