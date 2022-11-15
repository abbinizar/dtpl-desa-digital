import Button from "../../../atoms/button/button";
import Input from "../../../atoms/input/input";
import { useRouter } from "next/router";

const News = () => {
  const router = useRouter();

  return (
    <div className="space-y-4 m-12 shadow-card p-4">
      <div className="space-y-2">
        <h1 className="font-bold text-lg">Buat Kabar</h1>
        <p className="text-sm">
          Buatlah kabar dengan sebaik mungkin karena tidak dapat diedit maupun
          dihapus kembali.
        </p>
      </div>
      <Input label="Kategori Topik" placeholder="Kategori" />
      <Input label="Judul Berita" placeholder="Masukkan Judul Berita" />
      <Input label="Isi Berita" placeholder="Masukkan Isi Berita" />
      <Input label="Gambar / Video" placeholder="URL Gambar atau video" />
      <Button
        onClick={() => router.push("/info-desa/kabar-desa")}
        isFull
        label="Simpan"
      ></Button>
    </div>
  );
};

export default News;
