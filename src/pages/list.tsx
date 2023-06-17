import { Link } from "react-router-dom";

export default function List() {
  return (
    <div>
      <Link to="/" reloadDocument>
        Back
      </Link>
      <table border={1}>
        <tbody>
          <tr>
            <th>Team ID</th>
            <th>Nickname</th>
            <th>Team ID</th>
            <th>Nickname</th>
          </tr>
          <tr>
            <td>0</td>
            <td>Team 0</td>
            <td>1</td>
            <td>Team 1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Team 2</td>
            <td>3</td>
            <td>Team 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
