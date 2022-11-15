import UserHeader from "../../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../../helpers/context/user";
import JanjiApplicationForm from "../../components/molecules/form/form-janji";

const AppointmentPage = () => {
  const { user } = useContext(UserContext);

  return (
    <UserHeader isLogin={user.role !== ""}>
      <JanjiApplicationForm />
    </UserHeader>
  );
};

export default AppointmentPage;
