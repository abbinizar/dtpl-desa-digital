import UserHeader from "../../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../../helpers/context/user";
import AduanApplicationForm from "../../components/molecules/form/form-aduan";

const CommplaintPage = () => {
  const { user } = useContext(UserContext);

  return (
    <UserHeader isLogin={user.role !== ""}>
      <AduanApplicationForm />
    </UserHeader>
  );
};

export default CommplaintPage;
