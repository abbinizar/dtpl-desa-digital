import UserHeader from "../../components/organisms/layout/user-header";
import { useContext } from "react";
import { UserContext } from "../../helpers/context/user";
import Image from "next/image";
import { getStatic } from "../../helpers";
import Pagination from "../../components/atoms/pagination/pagination";
import Table, {
  TableBody,
  TableData,
  TableHead,
  TableRow,
} from "../../components/atoms/table/table";

const VillageProgramPage = () => {
  const { user } = useContext(UserContext);
  const header = [
    "Nama Kegiatan",
    "Hari, Tanggal",
    "Waktu",
    "Tempat",
    "Penyelenggara",
    "Status",
  ];
  const data = [
    {
      event: "Vaksinasi Covid-19",
      date: "Sabtu, 17 Maret 2021",
      time: "08.00 - 16.00",
      place: "Lapangan Garuda",
      organizer: "Pemda Manud Jaya ",
      status: "Aktif",
    },
    {
      event: "Vaksinasi Covid-19",
      date: "Sabtu, 17 Maret 2021",
      time: "08.00 - 16.00",
      place: "Lapangan Garuda",
      organizer: "Pemda Manud Jaya ",
      status: "Aktif",
    },
    {
      event: "Vaksinasi Covid-19",
      date: "Sabtu, 17 Maret 2021",
      time: "08.00 - 16.00",
      place: "Lapangan Garuda",
      organizer: "Pemda Manud Jaya ",
      status: "Aktif",
    },
  ];

  return (
    <UserHeader isLogin={user.role !== ""}>
      <div>
        <div className="p-12 space-y-8 flex flex-col justify-center items-center">
          <div className="w-full flex justify-center">
            <h1 className="text-3xl font-bold text-tosca-darkest">
              Info Program Desa
            </h1>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <Image
              src={getStatic("covid.png")}
              width={800}
              height={400}
              alt=""
            />
            <Pagination />
          </div>
          <div>
            <Table withTitle title="Jadwal Program Desa">
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
                      <TableData>{e.event}</TableData>
                      <TableData>{e.date}</TableData>
                      <TableData>{e.time}</TableData>
                      <TableData>{e.place}</TableData>
                      <TableData>{e.organizer}</TableData>
                      <TableData>
                        <p
                          className={
                            e.status === "Aktif"
                              ? "text-tosca-dark"
                              : "text-red"
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
      </div>
    </UserHeader>
  );
};

export default VillageProgramPage;
