import UserHeader from "../../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../../helpers/context/user";
import Expense from "../../components/templates/village-info/expense";
import ButtonIcon from "../../components/atoms/button/button-icon";
import Plus from "../../components/atoms/icon/plus";

const ExpensePage = () => {
  const { user } = useContext(UserContext);

  return (
    <UserHeader isLogin={user.role !== ""}>
      <div>
        <div className="p-12 space-y-8">
          <div
            className={`w-full flex ${
              user.role === "pegawai" ? "justify-between" : "justify-center"
            }`}
          >
            <h1 className="text-3xl font-bold text-tosca-darkest">
              Informasi Pengeluaran Dana
            </h1>
            {user.role === "pegawai" && (
              <div className="flex justify-end">
                <ButtonIcon
                  className="bg-tosca-darkest"
                  label="Tambahkan Info Pengeluaran"
                  iconPossition="right"
                  withIcon
                  IconComponent={<Plus />}
                  // onClick={() => router.push("/info-desa/buat-kabar")}
                />
              </div>
            )}
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
