import Progress from "../components/progress";
import Stage from "../components/stage";

import ProblemJEn from "../components/problems/j-en";
import ProblemJJa from "../components/problems/j-ja";
import ProblemKEn from "../components/problems/k-en";
import ProblemKJa from "../components/problems/k-ja";
import ProblemLEn from "../components/problems/l-en";
import ProblemLJa from "../components/problems/l-ja";
import ProblemMEn from "../components/problems/m-en";
import ProblemMJa from "../components/problems/m-ja";

export default function Problem() {
  const queries = new URLSearchParams(window.location.search);
  let problem = queries.get("problem");
  const lang = queries.get("lang");

  if (problem !== null && !"jklm".includes(problem)) {
    return <div>Bad Request</div>;
  }

  return (
    <div>
      <Stage />
      <Progress />
      {lang === "en" ? (
        <>
          {problem === "j" && <ProblemJEn />}
          {problem === "k" && <ProblemKEn />}
          {problem === "l" && <ProblemLEn />}
          {problem === "m" && <ProblemMEn />}
          {problem === null && (
            <>
              <ProblemJEn />
              <ProblemKEn />
              <ProblemLEn />
              <ProblemMEn />
            </>
          )}
        </>
      ) : (
        <>
          {problem === "j" && <ProblemJJa />}
          {problem === "k" && <ProblemKJa />}
          {problem === "l" && <ProblemLJa />}
          {problem === "m" && <ProblemMJa />}
          {problem === null && (
            <>
              <ProblemJJa />
              <ProblemKJa />
              <ProblemLJa />
              <ProblemMJa />
            </>
          )}
        </>
      )}
    </div>
  );
}
