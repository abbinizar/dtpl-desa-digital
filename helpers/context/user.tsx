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

  const [product, setProduct] = useState({
    seller: "",
    image: "",
    avatar: "",
    title: "",
    price: "",
  });

  const state = {
    user,
    setUser,
    product,
    setProduct,
  };
  return (
    <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
  );
};

export default UserData;
