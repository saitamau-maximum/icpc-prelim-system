import Section from "../section";

export default function ProblemKJa() {
  return (
    <Section title="Problem K" nopadding>
      <Section title="最大の整数" color="#78f" nomargin>
        <p>入力として与えられた整数値の最大値を求めなさい。</p>
      </Section>
      <Section title="Input" color="#78f" nomargin>
        <p>
          改行で区切られた 1
          つ以上の整数が入力として与えられる。すべての整数は正で、 10,000
          以下である。
        </p>
        <p>入力の終わりは 0 で示される。</p>
      </Section>
      <Section title="Output" color="#78f" nomargin>
        <p>最大値を出力しなさい。</p>
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
