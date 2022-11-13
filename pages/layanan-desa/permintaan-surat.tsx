import UserHeader from "../../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../../helpers/context/user";

const LetterRequestPage = () => {
  const { user } = useContext(UserContext);

  return <UserHeader isLogin={user.role !== ""} />;
};

export default LetterRequestPage;
