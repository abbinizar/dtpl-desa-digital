import CardNews from "../components/molecules/cards/card-news";
import Header from "../components/organisms/header/header";
import { newsData } from "../helpers/metadata/data";

const VillageNews = () => {
  return (
    <div>
      <Header />
      <div className="p-12 space-y-8">
        <div className="w-full flex justify-center">
          <h1 className="text-3xl font-bold text-tosca-darkest">Kabar Desa</h1>
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
  );
};

export default VillageNews;
