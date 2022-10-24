import type { NextPage } from "next";
import Button from "../components/atoms/button/button";
import { useRouter } from "next/router";
import Header from "../components/organisms/header/header";
import ImageGroup from "../components/organisms/image/image-group";
import Card from "../components/atoms/card/card";
import PlusOutline from "../components/atoms/icon/plus-outline";

const data = [
  "Kabar Desa Manud Jaya",
  "Tentang Desa Manud Jaya",
  "Info Keuangan Desa",
  "Pembuatan Dokumen",
  "Buat Janti Pertemuan",
  "Pengaduan & Aspirasi",
];

const Home: NextPage = () => {
  const router = useRouter();

  const handleRoute = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col w-full justify-center bg-white">
      <Header />
      <div className="flex justify-between p-16 h-42 w-full bg-grey-light flex items-center">
        <div className="text-5xl space-y-4 text-tosca-dark">
          <p>Selamat datang, Warga! </p>
          <p>
            Desa Digital <b className="text-slate-800">Manud Jaya</b>
          </p>
        </div>
        <div>
          <ImageGroup />
        </div>
      </div>
      <div className="p-16 w-full space-y-16">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="text-4xl text-slate-800 font-semibold">
            Satu platform, untuk banyak keperluan{" "}
          </h1>
          <h2 className="text-xl text-slate-800">
            Berbagai layanan tersedia untuk berbagai keperluan warga.
          </h2>
        </div>
        <div className="p-4 flex justify-between">
          {data.map((e, i) => {
            return (
              <Card key={i}>
                <div className="w-32 flex flex-col items-center space-y-4">
                  <PlusOutline></PlusOutline>
                  <p className="text-center">{e}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col p-16 justify-center items-center space-y-4 bg-tosca-darkest">
        <h1 className="text-4xl text-white font-semibold">
          Maju Bersama Manud Jaya!
        </h1>
        <h2 className="text-lg text-white text-center">
          Helping patients achieve good dental health & beautiful smile is a
          privilege & responsibility. For over 30 years, we proudly provided the
          best dental experience in New York. Our comfort-first approach is
          designed to meet the needs of you & your entire family.
        </h2>
      </div>
    </div>
  );
};

export default Home;
