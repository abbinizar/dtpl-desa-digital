import type { NextPage } from "next";
import Button from "../components/atoms/button/button";
import { useRouter } from "next/router";
import Header from "../components/organisms/header/header";
import ImageGroup from "../components/organisms/image/image-group";

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
      {/* <h1 className="text-3xl text-slate-800 font-bold underline decoration-pink-500 underline-offset-2">
        Welcome to Desa Digital Manud Jaya
      </h1> */}
    </div>
  );
};

export default Home;
