import Section from "../section";

export default function ProblemJEn() {
  return (
    <Section title="Problem J" nopadding>
      <Section title="Addition" color="#78f" nomargin title_underline>
        <p>Calculate the sum of 2 integers given as input.</p>
      </Section>
      <Section title="Input" color="#78f" nomargin>
        <p>
          The input consists of multiple data sets, each in the following
          format.
        </p>
        <pre>
          <code>{`a b`}</code>
        </pre>
        <p>
          Each of the datasets consists of one line containing two integers{" "}
          <i>a</i> and <i>b</i>. Both are between 1 and 100, inclusive.
        </p>
        <p>The end of the input is indicated by a line containing for zeros.</p>
        <p>The number of datasets does not exceed 100.</p>
      </Section>
      <Section title="Output" color="#78f" nomargin>
        <p>
          For each of the datasets, output the value of <i>a + b</i>.
        </p>
      </Section>
      <Section title="Sample Input" color="#78f" nomargin>
        <pre>
          <code>{`1 2\n3 4\n5 6\n0 0`}</code>
        </pre>
      </Section>
      <Section title="Output for the Sample Input" color="#78f" nomargin>
        <pre>
          <code>{`3\n7\n11`}</code>
        </pre>
      </Section>
    </Section>
  );
}
