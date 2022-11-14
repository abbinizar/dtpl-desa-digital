import UserHeader from "../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../helpers/context/user";

const ForumPage = () => {
  const { user } = useContext(UserContext);

  return (
    <UserHeader isLogin={user.role !== ""}>
      <div>
        <div className="p-12 space-y-8">
          <div className="w-full flex justify-center">
            <h1 className="text-3xl font-bold text-tosca-darkest">Forum</h1>
          </div>
        </div>
      </div>
    </UserHeader>
  );
};

export default ForumPage;
