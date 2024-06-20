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
            <b>Congratulations!</b>
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
  } else if (data[problemid].dlTime === null) {
    if (data[problemid].no > 4) {
      return (
        <div>
          <Section title="Result" color="#f00" border="#ff6060">
            <p>
              <b>Correct answer.</b>
            </p>
            <p>
              <span className="red">
                BAD NEWS: You can no longer finish this problem,{" "}
              </span>{" "}
              because you would need to answer the next data correctly within
              the time, yet there are no data left for this problem. Recall that
              to finish a problem, you need to correctly answer a data{" "}
              <i>within the time.</i>
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
              <b>Correct answer.</b>
            </p>
            <p>
              However, the time limit has expired. Proceed to the next dataset.
            </p>
            <p>
              To complete the problem, you must submit a correct answer within
              the time.
            </p>
            <p>
              Note that this submission will not incur any additional penalty.
            </p>
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
    return (
      <div>
        <Section title="Result" color="#ffa500" border="#ffc660">
          <p>
            <b>Wrong answer.</b>
          </p>
          <p>
            You still have a chance to complete the problem by submitting a
            correct answer before the submission deadline.
          </p>
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
