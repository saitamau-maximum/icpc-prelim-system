import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { convertPath } from "./utils/path";
import "./App.css";

import Home from "./pages/index";
import Top from "./pages/top";

function App() {
  // URL 正規化
  if (location.pathname.includes("//")) {
    location.pathname = location.pathname.replace(/\/+/g, "/");
    return;
  }
  if (!location.pathname.endsWith("/")) {
    location.pathname += "/";
    return;
  }

  return (
    <div className="App">
      <header className="App-header">Maximum ICPC Practice System</header>
      <div className="container">
        {location.pathname === convertPath("/") ? (
          <></>
        ) : (
          <section className="App-sidebar">
            <a href={convertPath("/top/")}>Top</a>
            <br />
            Problems:
            <table>
              <tbody>
                <tr>
                  <td>ALL:</td>
                  <td>En</td>
                  <td>/</td>
                  <td>Ja</td>
                </tr>
                <tr>
                  <td>J:</td>
                  <td>En</td>
                  <td>/</td>
                  <td>Ja</td>
                </tr>
                <tr>
                  <td>K:</td>
                  <td>En</td>
                  <td>/</td>
                  <td>Ja</td>
                </tr>
                <tr>
                  <td>L:</td>
                  <td>En</td>
                  <td>/</td>
                  <td>Ja</td>
                </tr>
                <tr>
                  <td>M:</td>
                  <td>En</td>
                  <td>/</td>
                  <td>Ja</td>
                </tr>
              </tbody>
            </table>
            <a href={convertPath("/workspace/")}>Workspace</a>
            <br />
            <a href={convertPath("/standings/")}>Standings</a>
            <br />
            <a href={convertPath("/")}>Log Out</a>
            <br />
            <a href={convertPath("/help/")}>Help</a>
            <br />
            <a href={convertPath("/contact/")}>Contact Info</a>
          </section>
        )}
        <main>
          <Router>
            <Routes>
              <Route path={convertPath("/")} element={<Home />} />
              <Route path={convertPath("/top/")} element={<Top />} />
            </Routes>
          </Router>
        </main>
      </div>
    </div>
  );
}

export default App;
