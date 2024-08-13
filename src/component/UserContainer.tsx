import React, { useEffect, useState } from "react";
import UserList from "./UserList";

const UserContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any[]>([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setIsLoading(false);
      setData(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <UserList data={data} error={error} isLoading={isLoading} />
    </div>
  );
};

export default UserContainer;
