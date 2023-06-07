import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/zeinab-zeinali-164400260"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Zeinab Zeinali
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/wecodeschool/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
