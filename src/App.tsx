import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/index";
import Top from "./pages/top";

function App() {
  return (
    <div className="App">
      <header className="App-header">Maximum ICPC Practice System</header>
      <div className="container">
        {location.pathname === "%PUBLIC_URL%/" ? (
          <></>
        ) : (
          <section className="App-sidebar">
            <a href="%PUBLIC_URL%/top">Top</a>
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
            <a href="%PUBLIC_URL%/workspace">Workspace</a>
            <br />
            <a href="%PUBLIC_URL%/standings">Standings</a>
            <br />
            <a href="%PUBLIC_URL%/">Log Out</a>
            <br />
            <a href="%PUBLIC_URL%/help">Help</a>
            <br />
            <a href="%PUBLIC_URL%/contact">Contact Info</a>
          </section>
        )}
        <main>
          <Router>
            <Routes>
              <Route path="%PUBLIC_URL%/" element={<Home />} />
              <Route path="%PUBLIC_URL%/top" element={<Top />} />
            </Routes>
          </Router>
        </main>
      </div>
    </div>
  );
}

export default App;
