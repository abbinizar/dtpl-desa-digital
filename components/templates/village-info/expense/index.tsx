import Table, {
  TableBody,
  TableData,
  TableHead,
  TableRow,
} from "../../../atoms/table/table";
import FormFilter from "../../../molecules/form/form-filter";
import Chart from "../../../organisms/chart/chart";

const Expense = () => {
  const header = [
    "Uraian",
    "Anggaran",
    "Realisasi",
    "Lebih/Kurang",
    "Persentase",
  ];
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

  return (
    <div className="space-y-6">
      <Chart />
      <FormFilter />
      <Table
        withButton
        withTitle
        title="Pendapatan Juli - Desember 2022"
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
            <p className="font-bold p-4">Pendapatan Asli Desa</p>
          </TableRow>
          {data.map((e, i) => {
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
            <p className="font-bold p-4">Pendapatan Transfer</p>
          </TableRow>
          {data.map((e, i) => {
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
              <b>TOTAL Pendapatan </b>
            </TableData>
            <TableData>Rp 1.000.000.000,00</TableData>
            <TableData>Rp 1.000.000.000</TableData>
            <TableData>Rp 0</TableData>
            <TableData>100%</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Expense;
