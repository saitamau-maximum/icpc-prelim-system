import Section from "./section";
import "./progress.css";
import { getData, type Problem } from "../utils/data";

const data2progress = (data: Problem): string => {
  if (data.no > 4) return "red";
  if (data.completed) return "green";
  if (data.firstCleared) return "yellow";
  return "blue";
};

export default function Progress() {
  const data = getData();

  return (
    <Section title="Team 0: You">
      <table>
        <tbody>
          <tr>
            <td>J</td>
            <td>K</td>
            <td>L</td>
            <td>M</td>
          </tr>
          <tr className="progress">
            <td className={data2progress(data.j)}></td>
            <td className={data2progress(data.k)}></td>
            <td className={data2progress(data.l)}></td>
            <td className={data2progress(data.m)}></td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}
