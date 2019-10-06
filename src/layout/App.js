import React from "react";
import "../sass/main.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <Router>
      <div className="app">
        <header className="header">{<Header />}</header>
        <main className="content">{<Content />}</main>
        <footer className="footer">{<Footer />}</footer>
      </div>
    </Router>
  );
}

export default App;
