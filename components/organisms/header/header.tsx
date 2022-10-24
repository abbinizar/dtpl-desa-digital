import Link from "next/link";
import ChevronDown from "../../atoms/icon/chevron-down";
import ButtonDropdown from "../../molecules/dropdown/button-dropdown";

const Header = () => {
  const information = [
    {
      title: "Tentang Desa",
      href: "/",
    },
    {
      title: "Kabar Desa",
      href: "/",
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
    <header className="z-50 h-16 w-full bg-tosca-darkest sticky top-0 p-4 px-16 flex items-center justify-between">
      <div>
        <p className="text-white font-bold text-2xl">Desa Digital Manud Jaya</p>
      </div>
      <div className="flex space-x-8 items-center">
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
        </Link>
      </div>
    </header>
  );
};

export default Header;
