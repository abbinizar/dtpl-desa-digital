import React from "react";
import Header from "../header/header";
import Link from "next/link";
import ChevronDown from "../../atoms/icon/chevron-down";
import ButtonDropdown from "../../molecules/dropdown/button-dropdown";
import AvatarDropdown from "../../molecules/dropdown/avatar-dropdown";

interface IUserHeader {
  children?: React.ReactNode;
  isLogin?: boolean;
}

const UserHeader = (props: IUserHeader) => {
  const information = [
    {
      title: "Tentang Desa",
      href: "/",
    },
    {
      title: "Kabar Desa",
      href: "/village-news",
    },
    {
      title: "Jadwal Layanan",
      href: "/",
    },
    {
      title: "Program Desa",
      href: "/",
    },
  ];

  const service = [
    {
      title: "Buat Janji Pertemuan",
      href: "/",
    },
    {
      title: "Buat Permintaan Surat",
      href: "/",
    },
    {
      title: "Buat Aduan",
      href: "/",
    },
  ];

  const user = [
    {
      title: "Akun Warga",
      href: "/akun",
    },
    {
      title: "Surat Saya",
      href: "/akun/surat-saya",
    },
    {
      title: "Logout",
      href: "/",
    },
  ];

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
            <Link href={"/"}>
              <p className="text-base text-white cursor-pointer">Beranda</p>
            </Link>
            <ButtonDropdown
              itemData={information}
              label="Info Desa"
              iconComponent={
                <div className="pl-2">
                  <ChevronDown />
                </div>
              }
            />
            <ButtonDropdown
              itemData={service}
              label="Layanan Desa"
              iconComponent={
                <div className="pl-2">
                  <ChevronDown />
                </div>
              }
            />
            {props.isLogin ? (
              <AvatarDropdown itemData={user}></AvatarDropdown>
            ) : (
              <Link href={"/sign-in"}>
                <p className="text-base text-white cursor-pointer">Login</p>
              </Link>
            )}
          </>
        }
      />
      {props.children}
    </div>
  );
};

export default UserHeader;
