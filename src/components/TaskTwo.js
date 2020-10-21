import React from "react";

const DUMMY_DATA = [
  {
    country: "IN",
    states: ["KA", "KL", "TN", "MH"],
    id: "1",
  },
  {
    country: "US",
    states: ["AL", "DE", "GA"],
    id: "2",
  },
  {
    country: "CA  ",
    states: ["ON", "QC", "BC"],
    id: "3",
  },
];

function TaskTwo() {
  return (
    <div>
      <h1>Task2</h1>
      <select id="" name="" form="">
        <option value="">IN </option>
        <option value="">US </option>
        <option value=""> CA</option>
      </select>
      <select id="" name="" form="">
        <option value="">KA</option>
        <option value="">KL</option>
        <option value="">TN</option>
        <option value="">MH</option>
        <option value="">AL</option>
        <option value="">GA</option>
        <option value="">ON</option>
        <option value="">QC</option>
        <option value="">BC</option>
      </select>
    </div>
  );
}

export default TaskTwo;
