import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DisplayName from "./DisplayName";
import { useHttpClient } from "./http-hook";
import ProfileItem from "./ProfileItem";

function ProfileInfo() {
  const [loadedUser, setLoadedUser] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(`https://reqres.in/api/users/2`);
        setLoadedUser(responseData);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest]);

  return (
    <div>{!isLoading && loadedUser && <ProfileItem user={loadedUser} />}</div>
  );
}

export default ProfileInfo;
