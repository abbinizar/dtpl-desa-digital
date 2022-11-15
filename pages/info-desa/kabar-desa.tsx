import CardNews from "../../components/molecules/cards/card-news";
import UserHeader from "../../components/organisms/layout/user-header";
import { newsData } from "../../helpers/metadata/data";
import { useContext, useState } from "react";
import { UserContext } from "../../helpers/context/user";
import ButtonIcon from "../../components/atoms/button/button-icon";
import Plus from "../../components/atoms/icon/plus";
import { useRouter } from "next/router";

const VillageNews = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();

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
              Kabar Desa
            </h1>
            {user.role === "pegawai" && (
              <div className="flex justify-end">
                <ButtonIcon
                  className="bg-tosca-darkest"
                  label="Buat Kabar Desa"
                  iconPossition="right"
                  withIcon
                  IconComponent={<Plus />}
                  onClick={() => router.push("/info-desa/buat-kabar")}
                />
              </div>
            )}
          </div>
          {newsData.map((e, i) => {
            return (
              <CardNews
                key={i}
                title={e.title}
                image={e.image}
                description={e.description}
                category={e.category}
              />
            );
          })}
        </div>
      </div>
    </UserHeader>
  );
};

export default VillageNews;
