import Heading from "./Heading";
import DashBoardRow from "./DashBoardRow";
import OverviewRow from "./OverviewRow";
import "./style.css";
import React, { useState } from "react";

function App() {
  const body = document.querySelector("body");
  const [colorTheme, setColorTheme] = useState("dark");
  function changeThemeHandler(theme) {
    if (colorTheme === "dark") setColorTheme("light");
    else setColorTheme("dark");
    body.classList.toggle("light");
  }
  return (
    <div className={`wrapper ${colorTheme}`} theme={colorTheme}>
      <section className="dashboard">
        <Heading onChangeTheme={changeThemeHandler}></Heading>
        <DashBoardRow></DashBoardRow>
      </section>
      <section className="overview">
        <h2>Overview-Today</h2>
        <OverviewRow className="overview-row overview-row-1"></OverviewRow>
        <OverviewRow className="overview-row overview-row-2"></OverviewRow>
      </section>
    </div>
  );
}
export default App;
