import Image from "next/image";
import { getStatic } from "../../../helpers";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import FormSearch from "../../molecules/form/form-search";

const ForumDetail = () => {
  return (
    <div className="space-y-8">
      <div className="w-4/12 space-y-4">
        <h2 className="text-tosca-darkest font-bold text-lg">
          Pelayanan Kantor Desa
        </h2>
        <FormSearch />
      </div>

      <div className="border rounded-xl p-4 flex flex-col">
        <div className="flex space-x-4">
          <div className="min-w-[44px]">
            <Image
              width={44}
              height={44}
              src={getStatic("avatar.png")}
              alt=""
              className="rounded-full"
            ></Image>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold text-base">
                Libur Nasional Kantor Desa
              </h3>
              <p className="text-xs">
                {" "}
                Sekretaris Desa, 09 Juni 2022, 18.30 WIB
              </p>
            </div>
            <div className="space-y-1 text-sm0">
              <p>Selamat sore, warga desa!</p>
              Selamat sore, warga desa! Menginfokan bahwa pada tanggal 12-15
              Desember 2022, kantor pelayanan Desa Manud Jaya tutup dikarenakan
              hari libur nasional Cuti Bersama. Untuk mengajukan permohonan
              berkas, silahkan ajukan secara online. Harap menjadi perhatian dan
              mohon maaf atas ketidaknyamanannya.
              <p>Salam Jaya</p>
            </div>
          </div>
        </div>

        <div className="w-full justify-end flex">
          <p className="text-sm text-[#6CACF3] underline">Reply</p>
        </div>
        {/* reply */}

        <div className="space-y-4">
          <div className="w-full pl-16">
            <div className="flex space-x-4">
              <div className="min-w-[44px]">
                <Image
                  width={44}
                  height={44}
                  src={getStatic("avaforum.png")}
                  alt=""
                  className="rounded-full"
                ></Image>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-base">Pak Mumun</h3>
                  <p className="text-xs"> 09 Juni 2022, 18.30 WIB</p>
                </div>
                <div className="space-y-1 text-sm0">
                  <p>Terima kasih atas informasinya. Salam Jaya</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b ml-16"></div>
          <div className="w-full pl-16">
            <div className="flex space-x-4">
              <div className="min-w-[44px]">
                <Image
                  width={44}
                  height={44}
                  src={getStatic("avaforum1.png")}
                  alt=""
                  className="rounded-full"
                ></Image>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-base">Bu Yati</h3>
                  <p className="text-xs"> 09 Juni 2022, 18.30 WIB</p>
                </div>
                <div className="space-y-1 text-sm0">
                  <p>
                    Berkas saya sejak 3 minggu lalu belum selesai diproses,
                    mohon segera ya!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b ml-16"></div>
          <div className="flex space-x-4">
            <Input placeholder="Tulis Balasan" />
            <Button label="Kirim"></Button>
          </div>
        </div>
      </div>

      {/* other */}
      <div className="border rounded-xl p-4 flex flex-col">
        <div className="flex space-x-4">
          <div className="min-w-[44px]">
            <Image
              width={44}
              height={44}
              src={getStatic("avatar.png")}
              alt=""
              className="rounded-full"
            ></Image>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold text-base">
                Jam Operasional Kantor Desa
              </h3>
              <p className="text-xs">
                {" "}
                Sekretaris Desa, 09 Juni 2022, 7.30 WIB
              </p>
            </div>
            <div className="space-y-1 text-sm w-full">
              <p>Selamat sore, warga desa!</p>
              Mulai tanggal 10 Juni 2022, kantor pelayanan desa akan dibuka
              untuk umum dari jam 09.00 - 18.00 WIB.
              <p>Salam Jaya</p>
            </div>
          </div>
        </div>
        <div className="w-full justify-end flex">
          <p className="text-sm text-[#6CACF3] underline">Reply</p>
        </div>
      </div>
    </div>
  );
};

export default ForumDetail;
