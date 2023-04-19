import React, { useEffect, useState } from "react";
import { getUser } from "../../services/authService";

const Welcome = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getUser();
      setUser(data);
    }
    fetchData();
  }, [user]);

  return (
    <div className="bg-gray color- mt-[120px] text-[15px] align-middle text-center">
      Hello <h1>{user.email}</h1>
    </div>
  );
};

export default Welcome;
