import Image from "next/image";
import Button from "../../atoms/button/button";
import Close from "../../atoms/icon/close";

interface IContent {
  image?: string;
  title?: string;
  price?: string;
  avatar?: string;
  seller?: string;
  onClose?: () => void;
}
const ContentProduct = (props: IContent) => {
  return (
    <div className="flex space-x-4 relative">
      <div className="min-w-[240px]">
        <Image
          className="rounded-lg"
          height={240}
          width={240}
          src={props.image as string}
          alt=""
        />
        <div className="flex space-x-2 items-center">
          <div>
            <Image
              className="rounded"
              height={48}
              width={48}
              src={props.image as string}
              alt=""
            />
          </div>
          <div>
            <Image
              className="rounded"
              height={40}
              width={40}
              src={props.image as string}
              alt=""
            />
          </div>
          <div>
            <Image
              className="rounded"
              height={40}
              width={40}
              src={props.image as string}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="font-bold text-base">{props.title}</h1>
          <h1 className="text-normal text-sm">{props.price}</h1>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-bold">Deskripsi Produk</p>
          <p className="text-sm ">
            Dessert box oreo adalah hidangan penutup yang terbuat dari bahan
            dasar biskuit oreo. Tersedua Ukuran: Small, Medium, Large Pre-Order
            : H-1 Silakan hubungi nomor whatsapp yang tertera utk pemesanan!
          </p>
        </div>
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
        <div className="flex space-x-4 items-center">
          <Button label="Bagikan" variant="secondary" />
          <Button isFull label="Pesan Melalui Whatsapp" variant="primary" />
        </div>
      </div>
      <div
        className="cursor-pointer absolute right-0 top-0"
        onClick={props.onClose}
      >
        <Close />
      </div>
    </div>
  );
};

export default ContentProduct;
