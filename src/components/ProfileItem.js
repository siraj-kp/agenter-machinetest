import React from "react";

function ProfileItem(props) {
  console.log(props.user);
  return (
    <div>
      {/* {props.user.map((item) => (
        <div>
          <h3>{item.email}</h3>
        </div>
      ))} */}
    </div>
  );
}

export default ProfileItem;
