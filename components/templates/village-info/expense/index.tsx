import Table, {
  TableBody,
  TableData,
  TableHead,
  TableRow,
} from "../../../atoms/table/table";
import FormFilter from "../../../molecules/form/form-filter";
import Chart from "../../../organisms/chart/chart";
import { useContext, useState } from "react";
import { UserContext } from "../../../../helpers/context/user";
import Dialog from "../../../atoms/dialog/dialog";
import Button from "../../../atoms/button/button";
import { useRouter } from "next/router";



const data = [
  {
    uraian: "Hasil Usaha Desa",
    anggaran: "Rp 10.000.000,00",
    realisasi: "Rp 10.000.000",
    harga: "Rp 0",
    presentase: "100%",
  },
  {
    uraian: "Hasil Usaha Desa",
    anggaran: "Rp 10.000.000,00",
    realisasi: "Rp 10.000.000",
    harga: "Rp 0",
    presentase: "100%",
  },
  {
    uraian: "Hasil Usaha Desa",
    anggaran: "Rp 10.000.000,00",
    realisasi: "Rp 10.000.000",
    harga: "Rp 0",
    presentase: "100%",
  },
];

const dataDihapus = [
  {
    uraian: "Hasil Usaha Desa",
    anggaran: "",
    realisasi: "",
    harga: "",
    presentase: "",
  },
  {
    uraian: "Hasil Usaha Desa",
    anggaran: "",
    realisasi: "",
    harga: "",
    presentase: "",
  },
  {
    uraian: "Hasil Usaha Desa",
    anggaran: "",
    realisasi: "",
    harga: "",
    presentase: "",
  },
];


const Expense = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const [tableData, setTableData] = useState(data);
  const [tableHapus, setTableHapus] = useState(false);
  const [show, setShow] = useState(false);

  const header = [
    "Uraian",
    "Anggaran",
    "Realisasi",
    "Lebih/Kurang",
    "Persentase",
  ];

  const hapusData = () => {
    setTableData(dataDihapus)
    setTableHapus(true)
    setShow(false)
  }

  
  return (
    <div>
    <div className="space-y-6">
      <Chart />
      <FormFilter />
      {user.role === "pegawai" ? 
      (<Table
        withTitle
        title="Pengeluaran Juli - Desember 2022"
        isPegawai
        labelButtonHapus="Hapus"
        onClickHapus={() => setShow(true)}
        labelButtonEdit="Edit"
        onClickEdit={()=> router.push("/info-desa/form-edit-pengeluaran")}
        labelButtonDownload="Download"
        // onClickDownload
      >
        
        <TableHead>
          <TableRow>
            {header.map((e, i) => {
              return <TableData key={i}>{e}</TableData>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <p className="font-bold p-4">Pengeluaran Asli Desa</p>
          </TableRow>
          {tableData.map((e, i) => {
            return (
              <TableRow key={i}>
                <TableData>{e.uraian}</TableData>
                <TableData>{e.anggaran}</TableData>
                <TableData>{e.realisasi}</TableData>
                <TableData>{e.harga}</TableData>
                <TableData>{e.presentase}</TableData>
              </TableRow>
            );
          })}
          <TableRow>
            <p className="font-bold p-4">Pengeluaran Transfer</p>
          </TableRow>
          {tableData.map((e, i) => {
            return (
              <TableRow key={i}>
                <TableData>{e.uraian}</TableData>
                <TableData>{e.anggaran}</TableData>
                <TableData>{e.realisasi}</TableData>
                <TableData>{e.harga}</TableData>
                <TableData>{e.presentase}</TableData>
              </TableRow>
            );
          })}
          <TableRow>
            <TableData>
              <b>TOTAL Pengeluaran </b>
            </TableData>
            <TableData>{tableHapus ? "Rp 0" : "Rp 1.000.000.000,00"}</TableData>
            <TableData>{tableHapus ? "Rp 0" : "Rp 1.000.000.000,00"}</TableData>
            <TableData>Rp 0</TableData>
            <TableData>{tableHapus ? "0" : "100%"}</TableData>
          </TableRow>
        </TableBody>
      </Table>):(
        <Table
        withButton
        withTitle
        title="Pengeluaran Juli - Desember 2022"
        labelButton="Export ke Excel"
      >
        
        <TableHead>
          <TableRow>
            {header.map((e, i) => {
              return <TableData key={i}>{e}</TableData>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <p className="font-bold p-4">Pengeluaran Asli Desa</p>
          </TableRow>
          {tableData.map((e, i) => {
            return (
              <TableRow key={i}>
                <TableData>{e.uraian}</TableData>
                <TableData>{e.anggaran}</TableData>
                <TableData>{e.realisasi}</TableData>
                <TableData>{e.harga}</TableData>
                <TableData>{e.presentase}</TableData>
              </TableRow>
            );
          })}
          <TableRow>
            <p className="font-bold p-4">Pengeluaran Transfer</p>
          </TableRow>
          {tableData.map((e, i) => {
            return (
              <TableRow key={i}>
                <TableData>{e.uraian}</TableData>
                <TableData>{e.anggaran}</TableData>
                <TableData>{e.realisasi}</TableData>
                <TableData>{e.harga}</TableData>
                <TableData>{e.presentase}</TableData>
              </TableRow>
            );
          })}
          <TableRow>
            <TableData>
              <b>TOTAL Pengeluaran </b>
            </TableData>
            <TableData>{tableHapus ? "Rp 0" : "Rp 1.000.000.000,00"}</TableData>
            <TableData>{tableHapus ? "Rp 0" : "Rp 1.000.000.000,00"}</TableData>
            <TableData>Rp 0</TableData>
            <TableData>{tableHapus ? "0" : "100%"}</TableData>
          </TableRow>
        </TableBody>
      </Table>)}
    </div>
    {user.role === "pegawai" && (<Dialog show={show}>
        <div className="px-8 space-y-4 flex flex-col items-center">
          <h1 className="text-center font-bold">Hapus Informasi Pendapatan</h1>
          <p className="text-center text-sm">
          Apakah anda yakin ingin menghapus informasi pendapatan Juli - Desember 2022?
          </p>
          <div className="w-6/12 flex justify-center gap-3">
            <Button variant="secondary" onClick={() => setShow(false)} isFull label="Batal"></Button>
            <Button onClick={() => hapusData()} isFull label="Hapus"></Button>
          </div>
        </div>
      </Dialog>)}

    </div>
  );
};

export default Expense;
