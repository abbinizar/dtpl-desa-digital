import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";

const FormUMKM = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-lg">Daftar UMKM</h1>
      <Input placeholder="Nama UMKM" label="Ketikkan Nama UMKM" />
      <Input placeholder="Nama Pemilik" label="Ketikkan nama pemilik" />
      <div className="space-y-2">
        <p className="text-sm">Kateori</p>
        <select className="border border-grey-light text-gray-900 text-sm rounded-lg focus:ring-tosca-dark focus:border-blue-500 block w-full p-2.5 outline-none">
          <option selected>Pilih Kategori Produk</option>
          <option>Fashion</option>
          <option>Kuliner</option>
        </select>
      </div>
      <Input placeholder="No. Whatsapp" label="Ketikkan no. whatsapp" />
      <Button isFull label="Kirim Data UMKM"></Button>
    </div>
  );
};

export default FormUMKM;
