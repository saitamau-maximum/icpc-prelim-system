import Section from "../section";

export default function ProblemKEn() {
  return (
    <Section title="Problem K" nopadding>
      <Section title="The Largest Integer" color="#78f" nomargin>
        <p>
          Your job is to write a program that finds the largest integer among
          the integers given as input.
        </p>
      </Section>
      <Section title="Input" color="#78f" nomargin>
        <p>
          The input is a sequence of one or more lines each containing a single
          integer. All the integer numbers are positive and less than or equal
          to 10,000.
        </p>
        <p>The end of the input is indicated by a zero</p>
      </Section>
      <Section title="Output" color="#78f" nomargin>
        <p>The largest integer among the integers should be printed.</p>
      </Section>
      <Section title="Sample Input" color="#78f" nomargin>
        <pre>
          <code>{`1\n10\n100\n35\n0`}</code>
        </pre>
      </Section>
      <Section title="Output for the Sample Input" color="#78f" nomargin>
        <pre>
          <code>{`100`}</code>
        </pre>
      </Section>
    </Section>
  );
}
