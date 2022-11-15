import UserHeader from "../../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../../helpers/context/user";
import News from "../../components/templates/village-info/new-info";

const AppointmentPage = () => {
  const { user } = useContext(UserContext);

  return (
    <UserHeader isLogin={user.role !== ""}>
      <News />
    </UserHeader>
  );
};

export default AppointmentPage;
