import React from "react";
import Header from "../header/header";
import Link from "next/link";
import ChevronDown from "../../atoms/icon/chevron-down";
import ButtonDropdown from "../../molecules/dropdown/button-dropdown";
import AvatarDropdown from "../../molecules/dropdown/avatar-dropdown";
import { useContext } from "react";
import { UserContext } from "../../../helpers/context/user";
interface IUserHeader {
  children?: React.ReactNode;
  isLogin?: boolean;
}

const UserHeader = (props: IUserHeader) => {
  const { setUser } = useContext(UserContext);

  const logout = () => {
    setUser({
      username: "",
      password: "",
      role: "",
    });
  };

  const information = [
    {
      title: "Tentang Desa",
      href: "/info-desa/tentang-desa",
    },
    {
      title: "Kabar Desa",
      href: "/info-desa/kabar-desa",
    },
    {
      title: "Jadwal Layanan",
      href: "/info-desa/jadwal-layanan",
    },
    {
      title: "Program Desa",
      href: "/info-desa/program-desa",
    },
  ];

  const service = [
    {
      title: "Buat Janji Pertemuan",
      href: "/layanan-desa/janji-pertemuan",
    },
    {
      title: "Buat Permintaan Surat",
      href: "/layanan-desa/permintaan-surat",
    },
    {
      title: "Buat Aduan",
      href: "/layanan-desa/aduan",
    },
  ];

  const users = [
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
      onClick: logout,
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
              <AvatarDropdown itemData={users}></AvatarDropdown>
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
