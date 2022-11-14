import UserHeader from "../../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../../helpers/context/user";
import Expense from "../../components/templates/village-info/expense";

const ExpensePage = () => {
  const { user } = useContext(UserContext);

  return (
    <UserHeader isLogin={user.role !== ""}>
      <div>
        <div className="p-12 space-y-8">
          <div className="w-full flex justify-center">
            <h1 className="text-3xl font-bold text-tosca-darkest">
              Informasi Pengeluaran Dana
            </h1>
          </div>
          <div>
            <Expense />
          </div>
        </div>
      </div>
    </UserHeader>
  );
};

export default ExpensePage;
