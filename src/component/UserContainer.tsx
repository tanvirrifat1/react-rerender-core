import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import useUserData from "../hooks/useUserData";

const UserContainer = () => {
  const { isLoading, error, data } = useUserData();

  return (
    <div>
      <UserList data={data} error={error} isLoading={isLoading} />
    </div>
  );
};

export default UserContainer;
