import UserHeader from "../../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../../helpers/context/user";
import Forum from "../../components/templates/forum";
import ForumDetail from "../../components/templates/forum/detail";

const ForumDetailPage = () => {
  const { user } = useContext(UserContext);

  return (
    <UserHeader isLogin={user.role !== ""}>
      <div>
        <div className="p-12 space-y-8">
          <div className="w-full flex justify-center flex-col items-center space-y-6">
            <h1 className="text-3xl font-bold text-tosca-darkest">Forum</h1>
            <p className="text-tosca-darkest text-center w-8/12">
              Forum Desa Manud Jaya digunakan sebagai wadah untuk berbagi
              informasi secara dua arah, warga bisa menyampaikan informasi,
              opini, aspirasi, maupun pengaduan yang terkait dengan desa.
              Silahkan gunakan forum ini dengan bijak ya, Warga!
            </p>
          </div>
          <ForumDetail />
        </div>
      </div>
    </UserHeader>
  );
};

export default ForumDetailPage;
