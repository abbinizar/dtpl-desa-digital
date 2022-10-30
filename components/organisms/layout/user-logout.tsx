import React from "react"
import Header from "../header/header"
import Link from "next/link";
import ChevronDown from "../../atoms/icon/chevron-down";
import ButtonDropdown from "../../molecules/dropdown/button-dropdown";

interface IUserLogout {
  children?: React.ReactNode
}

const UserLogout = (props:IUserLogout) => {
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
      title: "Layanan KTP",
      href: "/",
    },
    {
      title: "Layanan KK",
      href: "/",
    },
    {
      title: "Layanan Akta",
      href: "/",
    },
  ];
  return (
    <div>
      <Header 
      leftComponent={
        <p className="text-white font-bold text-2xl">Desa Digital Manud Jaya</p>
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
        <Link href={"/sign-in"}>
          <p className="text-base text-white cursor-pointer">Login</p>
        </Link></>
      } />
      {props.children}
    </div>
  )
}

export default UserLogout