import Section from "../section";

export default function ProblemJJa() {
  return (
    <Section title="Problem J" nopadding>
      <Section title="たしざん" color="#78f" nomargin title_underline>
        <p>入力として与えられた整数値の和を求めなさい。</p>
      </Section>
      <Section title="Input" color="#78f" nomargin>
        <p>
          入力は複数のデータセットからなる。各データセットは次の形式で表される。
        </p>
        <pre>
          <code>{`a b`}</code>
        </pre>
        <p>
          各データセットは a と b の 2 つの整数を含む 1 行からなる。いずれも 1
          以上 100 以下である。
        </p>
        <p>入力の終わりは 2 つのゼロを含む行で示す。</p>
        <p>データセットは 100 個以内である。</p>
      </Section>
      <Section title="Output" color="#78f" nomargin>
        <p>各データセットに対して、 a + b の値を 1 行に出力せよ。</p>
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
