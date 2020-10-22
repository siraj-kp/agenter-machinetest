import React from "react";
import "./App.css";
import TaskOne from "./components/TaskOne";
import TaskTwo from "./components/TaskTwo";
import ProfileInfo from "./components/ProfileInfo";
import DisplayName from "./components/DisplayName";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  const userId = 2;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <TaskOne />
            <TaskTwo path="/tasktwo" />
            <DisplayName
              prefix={"Mr"}
              firstName={"Siraj"}
              lastName={"KP"}
              suffix={"payyanur"}
            />
          </Route>
          <Route path="/:userId/profile" exact>
            <ProfileInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
