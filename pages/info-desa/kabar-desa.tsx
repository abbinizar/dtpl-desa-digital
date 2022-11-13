import CardNews from "../../components/molecules/cards/card-news";
import UserHeader from "../../components/organisms/layout/user-header";
import { newsData } from "../../helpers/metadata/data";
import { useContext } from "react";
import { UserContext } from "../../helpers/context/user";

const VillageNews = () => {
  const { user } = useContext(UserContext);

  return (
    <UserHeader isLogin={user.role !== ""}>
      <div>
        <div className="p-12 space-y-8">
          <div className="w-full flex justify-center">
            <h1 className="text-3xl font-bold text-tosca-darkest">
              Kabar Desa
            </h1>
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
