import UserHeader from "../../components/organisms/layout/user-header";
import MyLetter from "../../components/templates/account/my-letter";

const MyLetterPage = () => {
  return (
    <UserHeader isLogin>
      <MyLetter />
    </UserHeader>
  );
};

export default MyLetterPage;
