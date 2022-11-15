import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";

const FormPromoProduct = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-lg">Promosikan Produk</h1>
      <Input placeholder="Nama Produk" label="Ketikkan Nama Produk" />
      <Input placeholder="Harga Produk" label="Ketikkan Harga Produk" />
      <div className="space-y-2">
        <p className="text-sm">Keterangan Produk</p>
        <select className="border border-grey-light text-gray-900 text-sm rounded-lg focus:ring-tosca-dark focus:border-blue-500 block w-full p-2.5 outline-none">
          <option selected>Pilih Kategori Produk</option>
          <option>Fashion</option>
          <option>Kuliner</option>
        </select>
      </div>
      <Input placeholder="Deskripsi Produk" label="Ketikkan Deskripsi Produk" />
      <Input placeholder="Foto Produk" label="Foto Produk" />
      <Button isFull label="Promosikan Produk"></Button>
    </div>
  );
};

export default FormPromoProduct;
