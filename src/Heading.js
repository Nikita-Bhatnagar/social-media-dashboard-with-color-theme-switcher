import { useState } from "react";
function Heading(props) {
  const changeTheme = function () {
    if (props.theme === "dark") props.onChangeTheme("light");
    else props.onChangeTheme("dark");
  };

  return (
    <div className="heading-row">
      <div className="heading">
        <h1>Social Media Dashboard</h1>
        <h5>Total Followers: 23,004</h5>
      </div>
      <div className="theme-toggle">
        <span className="mode">Dark Mode</span>
        <div className="theme-toggler" onClick={changeTheme}>
          <div className="toggle-circle"></div>
        </div>
      </div>
    </div>
  );
}
export default Heading;
