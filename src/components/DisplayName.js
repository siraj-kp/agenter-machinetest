import React from "react";

function DisplayName(props) {
  return (
    <div>
      <h3>
        {props.prefix +
          " " +
          props.firstName +
          " " +
          props.lastName +
          " " +
          props.suffix}
      </h3>
    </div>
  );
}

export default DisplayName;
