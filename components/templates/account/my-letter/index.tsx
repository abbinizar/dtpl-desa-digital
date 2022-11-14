import { useRouter } from "next/router";
import ButtonIcon from "../../../atoms/button/button-icon";
import Plus from "../../../atoms/icon/plus";
import Save from "../../../atoms/icon/save";
import Table, {
  TableBody,
  TableData,
  TableHead,
  TableRow,
} from "../../../atoms/table/table";

const header = [
  "Hari, tanggal Pengajuan",
  "Waktu pengajuan",
  "Tujuan",
  "Petugas 1",
  "Status",
  "Action",
];

const data = [
  {
    date: "Selasa, 1 Nov 2022",
    time: "19.30",
    title: "Pembuatan KTP",
    petugas: "Rina Rustama",
    status: "Diproses",
  },
  {
    date: "Selasa, 1 Nov 2022",
    time: "19.30",
    title: "Pembuatan KTP",
    petugas: "Rina Rustama",
    status: "Dibatalkan",
  },
  {
    date: "Selasa, 1 Nov 2022",
    time: "19.30",
    title: "Pembuatan KTP",
    petugas: "Rina Rustama",
    status: "Ditolak",
  },
  {
    date: "Selasa, 1 Nov 2022",
    time: "19.30",
    title: "Pembuatan KTP",
    petugas: "Rina Rustama",
    status: "Selesai",
  },
];
const MyLetter = () => {
  const router = useRouter();
  return (
    <div className="w-full p-12 space-y-12">
      <div className="flex justify-between w-full">
        <div></div>
        <h1 className="text-3xl font-bold text-tosca-dark capitalize">
          surat saya
        </h1>
        <div className="flex items-end">
          <ButtonIcon
            className="bg-tosca-darkest"
            label="Buat Permohonan"
            iconPossition="right"
            withIcon
            IconComponent={<Plus />}
            onClick={() => router.push("/akun/permohonan")}
          />
        </div>
      </div>
      <Table
        withButton
        withTitle
        title="Layanan Pembuatan KK, KTP, Akta Kelahiran, Akta Kematian"
        labelButton="Buat  Permohonan Baru"
      >
        <TableHead>
          <TableRow>
            {header.map((e, i) => {
              return <TableData key={i}>{e}</TableData>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e, i) => {
            return (
              <TableRow key={i}>
                <TableData>{e.date}</TableData>
                <TableData>{e.time}</TableData>
                <TableData>{e.title}</TableData>
                <TableData>{e.petugas}</TableData>
                <TableData>{e.status}</TableData>
                <TableData>
                  <>
                    {e.status === "Diproses" && (
                      <div className="flex space-x-4 items-center">
                        <ButtonIcon
                          variant="secondary"
                          className="text-tosca-darker border-tosca-darker"
                          label="Edit"
                          iconPossition="right"
                          withIcon
                          IconComponent={<Save type="green" />}
                        />
                        <ButtonIcon
                          variant="secondary"
                          className="text-[#E34F4F] border-red"
                          label="Delete"
                          iconPossition="right"
                          withIcon
                          IconComponent={<Save type="red" />}
                        />
                      </div>
                    )}
                    {e.status === "Selesai" && (
                      <ButtonIcon
                        variant="secondary"
                        className="text-tosca-darker border-tosca-darker"
                        label="Unduh"
                        iconPossition="right"
                        withIcon
                        IconComponent={<Save type="green" />}
                      />
                    )}
                  </>
                </TableData>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Table
        withButton
        withTitle
        title="Layanan Pelaporan, Aspirasi, dan Peyuratan Lainnya"
        labelButton="Buat  Permohonan Baru"
      >
        <div className="flex w-full justify-center h-40 items-center">
          <p className="text-xl text-slate-300 font-bold">Belum ada surat</p>
        </div>
      </Table>
    </div>
  );
};

export default MyLetter;
