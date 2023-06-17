import { Link } from "react-router-dom";
import Section from "../components/section";
import { ProblemKey, getData } from "../utils/data";
import "./result.css";

export default function Result() {
  const data = getData();
  const problemid = location.hash.replace("#", "") as ProblemKey;
  if (!"jklm".split("").includes(problemid)) {
    return <div>Bad Request</div>;
  }

  if (data[problemid].completed) {
    return (
      <div>
        <Section title="Result" color="#0f8" border="#60ffb5">
          <p>
            <span className="red">Congratulations!</span>
          </p>
          <p>You have successfully finished this problem.</p>
          <p>
            <Link to="/top" reloadDocument>
              <span className="red">Go Back</span>
            </Link>
          </p>
        </Section>
      </div>
    );
  } else if (data[problemid].firstCleared) {
    if (data[problemid].no > 4) {
      return (
        <div>
          <Section title="Result" color="#f00" border="#ff6060">
            <p>
              <span className="red">
                Correct answer, with a program different from the last one.
              </span>
            </p>
            <p>
              <span className="red">
                BAD NEWS: You can no longer finish this problem,{" "}
              </span>{" "}
              because you would need to answer the next data correctly with the
              same program, yet there are no data left for this problem. Recall
              that to finish a problem, you need to correctly answer two data{" "}
              <i>in a row, with the same program.</i>
            </p>
            <p>
              <Link to="/top" reloadDocument>
                <span className="red">Go Back</span>
              </Link>
            </p>
          </Section>
        </div>
      );
    } else {
      return (
        <div>
          <Section title="Result" color="#88f" border="#b5b5ff">
            <p>
              <span className="red">
                Correct answer
                {data[problemid].differentProgram && (
                  <>, with a program different from the last one.</>
                )}
              </span>
            </p>
            <p>Proceed to the next data.</p>
            {data[problemid].no != 2 && (
              <p>
                Recall that to finish a problem, you need to correctly answer
                two data <i>in a row, with the same program.</i>
              </p>
            )}
            <p>
              <Link to="/top" reloadDocument>
                <span className="red">Go Back</span>
              </Link>
            </p>
          </Section>
        </div>
      );
    }
  } else {
    if (data[problemid].no >= 4) {
      return (
        <div>
          <Section title="Result" color="#f00" border="#ff6060">
            <p>
              <span className="red">Wrong answer.</span>
            </p>
            <p>
              <span className="red">
                BAD NEWS: You can no longer finish this problem,{" "}
              </span>{" "}
              because you would need to answer the next data correctly with the
              same program, yet there are no data left for this problem. Recall
              that to finish a problem, you need to correctly answer two data{" "}
              <i>in a row, with the same program.</i>
            </p>
            <p>
              <Link to="/top" reloadDocument>
                <span className="red">Go Back</span>
              </Link>
            </p>
          </Section>
        </div>
      );
    } else {
      return (
        <div>
          <Section title="Result" color="#ffa500" border="#ffc660">
            <p>
              <span className="red">Wrong answer.</span>
            </p>
            <p>Try again.</p>
            {data[problemid].no != 1 && (
              <p>
                You need to correctly answer <i>two more data.</i> Recall that
                to finish a problem, you need to correctly answer two data{" "}
                <i>in a row, with the same program.</i>
              </p>
            )}
            <p>
              <Link to="/top" reloadDocument>
                <span className="red">Go Back</span>
              </Link>
            </p>
          </Section>
        </div>
      );
    }
  }
}
