import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./TaskOne.scss";

function TaskOne() {
  const [showMenu, setShowMenu] = useState(false);
  const handleDropMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  const userId = 2;

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
      <Link to={`/${userId}/profile`}>
        <button>view profile</button>
      </Link>
    </div>
  );
}

export default TaskOne;
