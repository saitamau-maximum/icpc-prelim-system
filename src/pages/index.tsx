import { Link } from "react-router-dom";

import "./index.css";

export default function Index() {
  return (
    <div className="Login">
      <p>Please input your team ID (number) and the password.</p>
      <table>
        <tbody>
          <tr>
            <td>team ID:</td>
            <td>
              <input type="text" width={10} />
            </td>
          </tr>
          <tr>
            <td>password:</td>
            <td>
              <input type="password" />
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/top" reloadDocument>
        <button type="submit">log in</button>
      </Link>
      <Link to="/" reloadDocument>
        <button type="reset">reset</button>
      </Link>
      <p>
        <Link to="/list" reloadDocument>
          List of teams
        </Link>
      </p>
    </div>
  );
}
