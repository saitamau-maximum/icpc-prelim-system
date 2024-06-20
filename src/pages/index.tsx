import { Link } from "react-router-dom";

import "./index.css";
import { resetData } from "../utils/data";

export default function Index() {
  const reset = () => {
    if (window.confirm("本当にリセットしますか？")) {
      resetData();
      window.location.reload();
    }
  };

  return (
    <div className="Login">
      <p>Please input your team ID (number) and the password.</p>
      <table>
        <tbody>
          <tr>
            <td>team ID:</td>
            <td>
              <input type="text" size={5} />
            </td>
          </tr>
          <tr>
            <td>password:</td>
            <td>
              <input type="password" size={10} />
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
      <p>
        <button onClick={reset}>進捗リセット</button>
      </p>
      <p>(適当に入力すれば log in できます)</p>
    </div>
  );
}
