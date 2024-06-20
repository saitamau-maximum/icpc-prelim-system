import dayjs from "dayjs";

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

      const now = dayjs();
      const state = getData();
      const testnum = state[problemid].no;

      if (state[problemid].dlTime === null) {
        state[problemid].dlTime = now.valueOf();
        setData(state);
      }

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
      const now = dayjs();

      if (!wasmLoaded) {
        await sleep(1000);
      }

      const problemid = (e.target as any).problem.value as ProblemKey;
      const ansfile = (e.target as any).ansfile.files[0];
      const anssource = await ansfile.text();

      const state = getData();
      const testnum = state[problemid].no;

      if (state[problemid].dlTime === null) {
        alert("You need to download the data first.");
        return;
      }

      const res = validate_testcase(problemid, testnum, anssource);
      if (res) {
        if (now.diff(dayjs(state[problemid].dlTime), "minute", true) < 6) {
          state[problemid].completed = true;
        } else {
          state[problemid].dlTime = null;
          state[problemid].no++;
        }
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
        <p style={{ textAlign: "right" }}>
          <i>Server Time: {dayjs().format("HH:mm:ss")}</i>
        </p>
        <p>
          The <b>6-minutes</b> countdown will start when you click the download
          links below. To complete the problem, you need to submit a correct
          answer within the time. You can still submit after the countdown is
          over.
        </p>
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
