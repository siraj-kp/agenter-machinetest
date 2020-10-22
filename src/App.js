import React from "react";
import "./App.css";
import TaskOne from "./components/TaskOne";
import TaskTwo from "./components/TaskTwo";
import ProfileInfo from "./components/ProfileInfo";
import DisplayName from "./components/DisplayName";

function App() {
  return (
    <div className="App">
      <TaskOne />
      <TaskTwo />
      <DisplayName
        prefix={"Mr"}
        firstName={"Siraj"}
        lastName={"KP"}
        suffix={"payyanur"}
      />
      <ProfileInfo />
    </div>
  );
}

export default App;
