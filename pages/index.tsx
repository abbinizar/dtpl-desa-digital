import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/atoms/button/button";
import { useRouter } from "next/router";
import Header from "../components/organisms/header/header";
import ImageGroup from "../components/organisms/image/image-group";
import Card from "../components/atoms/card/card";
import PlusOutline from "../components/atoms/icon/plus-outline";
import UserHeader from "../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../helpers/context/user";
import { getStatic } from "../helpers";


const data = [
  {
    title: "Kabar Desa Manud Jaya",
  icon: getStatic("kabar.png"),
  },
  {
    title:   "Tentang Desa Manud Jaya",
  icon: getStatic("tentang.png"),
  },
  {
    title: "Info Keuangan Desa",
  icon: getStatic("keuangan.png"),
  },
  {
    title: "Produk UMKM Warga",
  icon: getStatic("umkm.png"),
  },
  {
    title: "Buat Janji Pertemuan",
  icon: getStatic("janji.png"),
  },
  {
    title: "Pengaduan & Aspirasi",
  icon: getStatic("pengaduan.png"),
  },
];

const Home: NextPage = () => {
  const { user } = useContext(UserContext);

  const router = useRouter();

  const handleRoute = (url: string) => {
    router.push(url);
  };

  return (
    <UserHeader isLogin={user.role !== ""}>
      <div className="flex flex-col w-full justify-center bg-white">
        <div className="flex justify-between p-16 h-42 w-full bg-grey-light flex items-center">
          <div className="text-5xl space-y-4 text-tosca-dark flex flex-col items-center">
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
                    {/* <PlusOutline></PlusOutline> */}
                    <Image
                      width={41}
                      height={40}
                      src={e.icon}
                      alt={`card-${i}`}
                    />
                    <p className="text-center">{e.title}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col p-16 justify-center items-center space-y-4 bg-tosca-darkest">
          <h1 className="text-4xl text-white font-normal">
            Maju Bersama <b>Manud Jaya!</b>
          </h1>
          <h2 className="text-lg text-white text-center">
            Mewujudkan Desa Digital <b>Manud Jaya</b> yang Aman, Maju, Sejahtera
            dan Agamis dengan nuansa Gotong Royong
          </h2>
        </div>
      </div>
    </UserHeader>
  );
};

export default Home;
