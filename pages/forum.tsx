import UserHeader from "../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../helpers/context/user";

const ForumPage = () => {
  const { user } = useContext(UserContext);

  return <UserHeader isLogin={user.role !== ""}></UserHeader>;
};

export default ForumPage;
