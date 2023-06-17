import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      Team ID:{" "}
      <input type="text" minLength={6} maxLength={6} pattern="[0-9]{6}" />
      <br />
      Password: <input type="password" />
      <br />
      <Link to="/top" reloadDocument>
        Login
      </Link>
    </>
  );
}
