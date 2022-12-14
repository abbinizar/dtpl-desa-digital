import UserHeader from "../../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../../helpers/context/user";
import Image from "next/image";
import { getStatic } from "../../helpers";

const AboutVillagePage = () => {
  const { user } = useContext(UserContext);

  return (
    <UserHeader isLogin={user.role !== ""}>
      <div>
        <div className="p-12 space-y-8 flex flex-col justify-center items-center">
          <div className="w-full flex justify-center">
            <h1 className="text-3xl font-bold text-tosca-darkest">
              Tentang Desa Manud Jaya
            </h1>
          </div>
          <div>
            <Image src={getStatic("about.png")} width={800} height={900} />
          </div>
        </div>
      </div>
    </UserHeader>
  );
};

export default AboutVillagePage;
