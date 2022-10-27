import Image from "next/image";
import Card from "../../atoms/card/card";
import { getStatic } from "../../../helpers";

interface ICardNews {
  category?: string;
  title?: string;
  description?: string;
  image?: string;
}

const CardNews = (props: ICardNews) => {
  return (
    <Card>
      <div className="p-2 space-y-6">
        <h1 className="font-semibold text-slate-800 text-2xl">
          {props.category}
        </h1>
        <div className="flex justify-between w-full space-x-8">
          <div className="space-y-4">
            <h2 className="font-bold text-slate-800 text-2xl">{props.title}</h2>
            <p className="text-slate-800 text-base">{props.description}</p>
          </div>
          <div className="min-w-[240px] h-[240px] flex">
            <Image
              width={240}
              height={240}
              src={getStatic(props.image as any)}
              alt={props.title}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardNews;
