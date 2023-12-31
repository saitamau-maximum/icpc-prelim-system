import Stage from "../components/stage";
import Progress from "../components/progress";
import Section from "../components/section";

import init, { generate_testcase, validate_testcase } from "../wasm/wasm";
import sleep from "../utils/sleep";
import { Problem, ProblemKey, getData, setData } from "../utils/data";

export default function Workplace() {
  let wasmLoaded = false;
  init().then(() => {
    wasmLoaded = true;
  });

  const inDLHandler = (problemid: ProblemKey) => {
    (async () => {
      if (!wasmLoaded) {
        await sleep(1000);
      }

      const state = getData();
      const testnum = state[problemid].no;

      const testcase = generate_testcase(problemid, testnum);

      const blob = new Blob([testcase], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${problemid.toUpperCase()}.txt`;
      a.click();

      return false;
    })();
  };

  const sendHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (async () => {
      if (!wasmLoaded) {
        await sleep(1000);
      }

      const problemid = (e.target as any).problem.value as ProblemKey;
      const ansfile = (e.target as any).ansfile.files[0];
      const progfile = (e.target as any).progfile.files[0];
      const anssource = await ansfile.text();
      const progsource = await progfile.text();

      const state = getData();
      const testnum = state[problemid].no;

      if (
        state[problemid].code !== progsource &&
        state[problemid].firstCleared
      ) {
        state[problemid].differentProgram = true;
      } else {
        state[problemid].differentProgram = false;
      }
      state[problemid].code = progsource;

      const res = validate_testcase(problemid, testnum, anssource);
      if (res) {
        if (
          state[problemid].firstCleared &&
          !state[problemid].differentProgram
        ) {
          state[problemid].completed = true;
        }
        state[problemid].no++;
        state[problemid].firstCleared = true;
      } else {
        state[problemid].firstCleared = false;
      }

      setData(state);
      location.href = `result#${problemid}`;
    })();
  };

  const data = getData();
  const problemAvailable = (problem: Problem) => {
    return !problem.completed && problem.no < 5;
  };

  return (
    <div>
      <Stage />
      <Progress />
      <Section title="Get Data">
        <table>
          <tbody>
            <tr>
              <td>Problem J:</td>
              <td>
                {problemAvailable(data.j) ? (
                  <a href="#" onClick={() => inDLHandler("j")}>
                    Data No.{data.j.no}
                  </a>
                ) : (
                  <>No data available</>
                )}
              </td>
            </tr>
            <tr>
              <td>Problem K:</td>
              <td>
                {problemAvailable(data.k) ? (
                  <a href="#" onClick={() => inDLHandler("k")}>
                    Data No.{data.k.no}
                  </a>
                ) : (
                  <>No data available</>
                )}
              </td>
            </tr>
            <tr>
              <td>Problem L:</td>
              <td>
                {problemAvailable(data.l) ? (
                  <a href="#" onClick={() => inDLHandler("l")}>
                    Data No.{data.l.no}
                  </a>
                ) : (
                  <>No data available</>
                )}
              </td>
            </tr>
            <tr>
              <td>Problem M:</td>
              <td>
                {problemAvailable(data.m) ? (
                  <a href="#" onClick={() => inDLHandler("m")}>
                    Data No.{data.m.no}
                  </a>
                ) : (
                  <>No data available</>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="Send Answer">
        <form onSubmit={sendHandler}>
          <table>
            <tbody>
              <tr>
                <td>
                  <u>Problem</u>:
                </td>
                <td>
                  <select name="problem" required>
                    <option value="">Select a problem</option>
                    {problemAvailable(data.j) && <option value="j">J</option>}
                    {problemAvailable(data.k) && <option value="k">K</option>}
                    {problemAvailable(data.l) && <option value="l">L</option>}
                    {problemAvailable(data.m) && <option value="m">M</option>}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  Filename of <u>answer</u>:
                </td>
                <td>
                  <input type="file" name="ansfile" required />
                </td>
              </tr>
              <tr>
                <td>
                  Filename of <u>program</u>:
                </td>
                <td>
                  <input type="file" name="progfile" required />
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
