import React, { useState } from "react";

export const UserContext = React.createContext<any>(null);

interface IUserData {
  children: React.ReactNode;
}
const UserData = (props: IUserData) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "",
  });

  const state = {
    user,
    setUser,
  };
  return (
    <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
  );
};

export default UserData;
