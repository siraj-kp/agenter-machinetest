import React from "react";

function TaskThree(props) {
  return (
    <div>
      <h1>Task3</h1>
      <div>
        <h3>
          {" "}
          {props.prefix +
            " " +
            props.firstName +
            " " +
            props.lastName +
            " " +
            props.suffix}
        </h3>
      </div>
    </div>
  );
}

export default TaskThree;
