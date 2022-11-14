import UserHeader from "../../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../../helpers/context/user";
import ApplicationForm from "../../components/templates/account/my-letter/application";

const PemohonanPage = () => {
  const { user } = useContext(UserContext);

  return (
    <UserHeader isLogin={user.role !== ""}>
      <ApplicationForm />
    </UserHeader>
  );
};

export default PemohonanPage;
