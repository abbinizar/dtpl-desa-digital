import UserHeader from "../../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../../helpers/context/user";
import ProfileUmkm from "../../components/templates/umkm/profile";

const UmkmProfilPage = () => {
  const { user } = useContext(UserContext);

  return (
    <UserHeader isLogin={user.role !== ""}>
      <ProfileUmkm />
    </UserHeader>
  );
};

export default UmkmProfilPage;
