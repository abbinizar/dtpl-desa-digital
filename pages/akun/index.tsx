import UserHeader from "../../components/organisms/layout/user-header";
import Account from "../../components/templates/account";

const AccountPage = () => {
  return (
    <UserHeader isLogin>
      <Account />
    </UserHeader>
  );
};

export default AccountPage;
