import React, { useState } from "react";
import "./TaskOne.scss";

function TaskOne() {
  const [showMenu, setShowMenu] = useState(false);
  const handleDropMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  return (
    <div>
      <h1>Task1</h1>
      <div className="dropdown-menu">
        <button onClick={handleDropMenu}>More Actions</button>

        {showMenu ? (
          <ul className="dropdown-content">
            <li href="#">View</li>
            <li href="#">Edit</li>
            <li href="#">Send</li>
            <li href="#">Delete</li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default TaskOne;
