import React, { useEffect, useState } from "react";

const useUserData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const controller = new AbortController();

  const url = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const res = await fetch(url, { signal: controller.signal });
      const data = await res.json();
      setIsLoading(false);
      setData(data);
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getUsers();

    return () => {
      controller.abort();
    };
  }, []);
  return { isLoading, error, data };
};

export default useUserData;
