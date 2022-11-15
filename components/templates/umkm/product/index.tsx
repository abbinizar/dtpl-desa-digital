import { useContext, useState } from "react";
import { getStatic } from "../../../../helpers";
import { UserContext } from "../../../../helpers/context/user";
import ButtonIcon from "../../../atoms/button/button-icon";
import Dialog from "../../../atoms/dialog/dialog";
import Close from "../../../atoms/icon/close";
import Plus from "../../../atoms/icon/plus";
import CardProduct from "../../../molecules/cards/card-product";
import FormPromoProduct from "../../../molecules/form/form-promo-product";
import FormSearch from "../../../molecules/form/form-search";
import ContentProduct from "../../../organisms/content/content-product";

const ProductUmkm = () => {
  const kuliner = [
    {
      price: "Rp 25.000",
      avatar: "umkm/avatar1.png",
      seller: "Desert Box Bu Ida",
      src: "umkm/desert.png",
      tittle: "Desert Box Oreo",
    },
    {
      price: "Rp 25.000",
      avatar: "umkm/avatar1.png",
      seller: "Desert Box Bu Ida",
      src: "umkm/desert.png",
      tittle: "Desert Box Oreo",
    },
    {
      price: "Rp 25.000",
      avatar: "umkm/avatar1.png",
      seller: "Desert Box Bu Ida",
      src: "umkm/desert.png",
      tittle: "Desert Box Oreo",
    },
    {
      price: "Rp 25.000",
      avatar: "umkm/avatar1.png",
      seller: "Desert Box Bu Ida",
      src: "umkm/desert.png",
      tittle: "Desert Box Oreo",
    },
  ];
  const fashion = [
    {
      price: "Rp 35.000",
      avatar: "umkm/avatar2.png",
      seller: "Grosir Fashion",
      src: "umkm/dress.png",
      tittle: "Dress Anak",
    },
    {
      price: "Rp 35.000",
      avatar: "umkm/avatar2.png",
      seller: "Grosir Fashion",
      src: "umkm/dress.png",
      tittle: "Dress Anak",
    },
    {
      price: "Rp 35.000",
      avatar: "umkm/avatar2.png",
      seller: "Grosir Fashion",
      src: "umkm/dress.png",
      tittle: "Dress Anak",
    },
    {
      price: "Rp 35.000",
      avatar: "umkm/avatar2.png",
      seller: "Grosir Fashion",
      src: "umkm/dress.png",
      tittle: "Dress Anak",
    },
  ];

  const { product, setProduct } = useContext(UserContext);

  const [show, setShow] = useState(false);
  const [showPromote, setShowPromote] = useState(false);

  const handleProduct = (e: any) => {
    setShow(true);
    setProduct({
      seller: e.seller,
      image: e.src,
      avatar: e.avatar,
      title: e.tittle,
      price: e.price,
    });
  };
  return (
    <>
      <div className="w-full p-12 space-y-12">
        <div className="flex justify-between w-full">
          <div></div>
          <h1 className="text-3xl font-bold text-tosca-dark capitalize">
            Produk UMKM
          </h1>
          <div className="flex items-end">
            <ButtonIcon
              className="bg-tosca-darkest"
              label="Promosikan Produk"
              iconPossition="right"
              withIcon
              IconComponent={<Plus />}
              onClick={() => setShowPromote(true)}
            />
          </div>
        </div>
        <div className="w-1/2">
          <FormSearch />
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-center">Kuliner</h3>
          <div className="flex justify-between">
            {kuliner.map((e, i) => {
              return (
                <CardProduct
                  key={i}
                  avatar={getStatic(e.avatar)}
                  src={getStatic(e.src)}
                  seller={e.seller}
                  title={e.tittle}
                  price={e.price}
                  onClick={() => handleProduct(e)}
                />
              );
            })}
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-center">Fashion</h3>
          <div className="flex justify-between">
            {fashion.map((e, i) => {
              return (
                <CardProduct
                  key={i}
                  avatar={getStatic(e.avatar)}
                  src={getStatic(e.src)}
                  seller={e.seller}
                  title={e.tittle}
                  price={e.price}
                  onClick={() => handleProduct(e)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Dialog show={show}>
        <ContentProduct
          image={getStatic(product.image)}
          avatar={getStatic(product.avatar)}
          seller={product.seller}
          title={product.title}
          price={product.price}
          onClose={() => setShow(false)}
        />
      </Dialog>
      <Dialog show={showPromote}>
        <div className="relative">
          <FormPromoProduct />
          <div
            className="cursor-pointer absolute right-0 top-0"
            onClick={() => setShowPromote(false)}
          >
            <Close />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductUmkm;
