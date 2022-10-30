import React from "react";
import Header from "../header/header";
import Link from "next/link";
import Image from "next/image";
import { getStatic } from "../../../helpers";

interface IUserLogin {
  children?: React.ReactNode;
}
const UserLogin = (props: IUserLogin) => {
  return (
    <div>
      <Header
        leftComponent={
          <p className="text-white font-bold text-2xl">
            Desa Digital Manud Jaya
          </p>
        }
        rightComponent={
          <>
            <Link href={"/beranda"}>
              <p className="text-base text-white cursor-pointer">Beranda</p>
            </Link>
            <Link href={"/"}>
              <p className="text-base text-white cursor-pointer">Info Desa</p>
            </Link>
            <Link href={"/"}>
              <p className="text-base text-white cursor-pointer">
                Tentang Desa
              </p>
            </Link>
            <Link href={"/"}>
              <p className="text-base text-white cursor-pointer">
                Keuangan Desa
              </p>
            </Link>
            <Link href={"/account"}>
              <div className="rounded-full cursor-pointer">
                <Image
                  className="w-10 h-10 rounded-full"
                  width={40}
                  height={40}
                  src={getStatic("grandma.png")}
                />
              </div>
            </Link>
          </>
        }
      />
      {props.children}
    </div>
  );
};

export default UserLogin;
