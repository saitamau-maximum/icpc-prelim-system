export default function Index() {
  return (
    <>
      Team ID:{" "}
      <input type="text" minLength={6} maxLength={6} pattern="[0-9]{6}" />
      <br />
      Password: <input type="password" />
      <br />
      <a href="%PUBLIC_URL%/top">Login</a>
    </>
  );
}
