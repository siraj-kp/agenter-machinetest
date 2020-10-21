import React from "react";
import "./App.css";
import TaskOne from "./components/TaskOne";
import TaskThree from "./components/TaskThree";
import TaskTwo from "./components/TaskTwo";

function App() {
  return (
    <div className="App">
      <TaskOne />
      <TaskTwo />
      <TaskThree
        prefix={"Mr"}
        firstName={"Siraj"}
        lastName={"KP"}
        suffix={"payyanur"}
      />
    </div>
  );
}

export default App;
