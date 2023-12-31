import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { convertPath } from "./utils/path";
import "./App.css";

import Home from "./pages/index";
import Top from "./pages/top";
import Workplace from "./pages/workplace";
import Standings from "./pages/standings";
import Help from "./pages/help";
import Contact from "./pages/contact";
import List from "./pages/list";
import Result from "./pages/result";
import Problem from "./pages/problem";

function App() {
  // URL 正規化
  if (location.pathname.includes("//")) {
    location.pathname = location.pathname.replace(/\/+/g, "/");
    return;
  }
  if (location.pathname === convertPath("/").slice(0, -1)) {
    location.pathname = convertPath("/");
    return;
  }
  if (
    location.pathname.endsWith("/") &&
    location.pathname !== convertPath("/")
  ) {
    location.pathname = location.pathname.slice(0, -1);
    return;
  }

  let loggedIn = true;
  if (location.pathname === convertPath("/")) loggedIn = false;
  if (location.pathname === convertPath("/list")) loggedIn = false;

  return (
    <div className="App">
      <header className="App-header">Maximum ICPC Practice System</header>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container">
          {!loggedIn ? (
            <></>
          ) : (
            <section className="App-sidebar">
              {/* システムの再現のため、 reloadDocument する */}
              <Link to="/top" reloadDocument>
                Top
              </Link>
              <br />
              Problems:
              <table>
                <tbody>
                  <tr>
                    <td>ALL:</td>
                    <td>
                      <Link to="/problem?lang=en" reloadDocument>
                        En
                      </Link>
                    </td>
                    <td>/</td>
                    <td>
                      <Link to="/problem" reloadDocument>
                        Ja
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>J:</td>
                    <td>
                      <Link to="/problem?lang=en&problem=j" reloadDocument>
                        En
                      </Link>
                    </td>
                    <td>/</td>
                    <td>
                      <Link to="/problem?problem=j" reloadDocument>
                        Ja
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>K:</td>
                    <td>
                      <Link to="/problem?lang=en&problem=k" reloadDocument>
                        En
                      </Link>
                    </td>
                    <td>/</td>
                    <td>
                      <Link to="/problem?problem=k" reloadDocument>
                        Ja
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>L:</td>
                    <td>
                      <Link to="/problem?lang=en&problem=l" reloadDocument>
                        En
                      </Link>
                    </td>
                    <td>/</td>
                    <td>
                      <Link to="/problem?problem=l" reloadDocument>
                        Ja
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>M:</td>
                    <td>
                      <Link to="/problem?lang=en&problem=m" reloadDocument>
                        En
                      </Link>
                    </td>
                    <td>/</td>
                    <td>
                      <Link to="/problem?problem=m" reloadDocument>
                        Ja
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Link to="/workplace" reloadDocument>
                Workplace
              </Link>
              <br />
              <Link to="/standings" reloadDocument>
                Standings
              </Link>
              <br />
              <Link to="/" reloadDocument>
                Log Out
              </Link>
              <br />
              <Link to="/help" reloadDocument>
                Help
              </Link>
              <br />
              <Link to="/contact" reloadDocument>
                Contact Info
              </Link>
            </section>
          )}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/top" element={<Top />} />
              <Route path="/workplace" element={<Workplace />} />
              <Route path="/standings" element={<Standings />} />
              <Route path="/help" element={<Help />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/list" element={<List />} />
              <Route path="/result" element={<Result />} />
              <Route path="/problem" element={<Problem />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
