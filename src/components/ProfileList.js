import React from "react";
import ProfileItem from "./ProfileItem";

function ProfileList(props) {
  return (
    <div>
      <ProfileItem
        id={props.user.data.id}
        email={props.user.data.email}
        firstname={props.user.data.first_name}
        lastname={props.user.data.last_name}
        avatar={props.user.data.avatar}
      />
    </div>
  );
}

export default ProfileList;
