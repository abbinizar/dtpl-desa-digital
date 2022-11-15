import Image from "next/image";

interface IProps {
  src?: string;
  price?: string;
  title?: string;
  avatar?: string;
  seller?: string;
  onClick?: () => void;
}
const CardProduct = (props: IProps) => {
  return (
    <div
      onClick={props.onClick}
      className="cursor-pointer shadow-product rounded-lg overflow-hidden w-[240px]"
    >
      <Image
        width={240}
        height={240}
        src={props.src as string}
        alt={props.src}
      />
      <div className="space-y-2 p-3">
        <p className="text-sm">{props.price}</p>
        <p className="text-base font-bold">{props.title}</p>
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center">
            <Image
              width={24}
              height={24}
              src={props.avatar as string}
              alt={props.avatar}
            />
          </div>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
