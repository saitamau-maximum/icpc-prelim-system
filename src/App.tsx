import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="App">
      <header className="App-header">Maximum ICPC Practice System</header>
      <div className="container">
        <section className="App-sidebar">
          <a href="/top">Top</a>
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
          <a href="/workspace">Workspace</a>
          <br />
          <a href="/standings">Standings</a>
          <br />
          <a href="/logout">Log Out</a>
          <br />
          <a href="/help">Help</a>
          <br />
          <a href="/contact">Contact Info</a>
        </section>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default App;
