import React, { useEffect } from "react";
import DisplayName from "./DisplayName";
import "./ProfileItem.scss";

function ProfileItem(props) {
  console.log(props.user);
  return (
    <div className="profile">
      <h1>Task 4</h1>
      <div className="profile__info">
        <img src={props.avatar} alt="profile" />
        <div>
          <DisplayName
            prefix=""
            firstName={props.firstname}
            lastName={props.lastname}
            suffix=""
          />
          <h3>{props.email}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProfileItem;
