import "./top.css";

export default function top() {
  return (
    <>
      <p>Team: you</p>
      <p>Contest is running</p>
      <div>
        <table>
          <tbody>
            <tr>
              <td>J</td>
              <td>K</td>
              <td>L</td>
              <td>M</td>
            </tr>
            <tr className="progress">
              <td className="blue"></td>
              <td className="blue"></td>
              <td className="blue"></td>
              <td className="blue"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
