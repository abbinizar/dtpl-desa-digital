import Table, {
  TableBody,
  TableData,
  TableHead,
  TableRow,
} from "../../components/atoms/table/table";
import UserHeader from "../../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../../helpers/context/user";

const header = ["Hari, tanggal", "Waktu (WIB)", "Ruangan", "Petugas", "Status"];
const data = [
  {
    date: "Senin, 3 Februari 2021",
    time: "08.00 - 16.00",
    room: "RK. 02",
    petugas: "Rina Rustama",
    status: "Aktif",
  },
  {
    date: "Selasa, 4 Februari 2021",
    time: "08.00 - 16.00",
    room: "RK. 02",
    petugas: "Rina Rustama",
    status: "Aktif",
  },
  {
    date: "Rabu, 5 Februari 2021",
    time: "08.00 - 16.00",
    room: "RK. 02",
    petugas: "Rina Rustama",
    status: "Libur",
  },
];
const ServiceSchedulePage = () => {
  const { user } = useContext(UserContext);

  return (
    <UserHeader isLogin={user.role !== ""}>
      <div>
        <div className="p-12 space-y-8">
          <div className="w-full flex justify-center">
            <h1 className="text-3xl font-bold text-tosca-darkest">
              Jadwal Layanan
            </h1>
          </div>
          <Table
            withButton
            withTitle
            title="Layanan Pembuatan KK, KTP, Akta Kelahiran, Akta Kematian"
            labelButton="Buat  Permintaan Surat"
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
                    <TableData>{e.room}</TableData>
                    <TableData>{e.petugas}</TableData>
                    <TableData>
                      <p
                        className={
                          e.status === "Aktif" ? "text-tosca-dark" : "text-red"
                        }
                      >
                        {e.status}
                      </p>
                    </TableData>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </UserHeader>
  );
};

export default ServiceSchedulePage;
