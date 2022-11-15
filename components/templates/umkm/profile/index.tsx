import { useState } from "react";
import ButtonIcon from "../../../atoms/button/button-icon";
import Dialog from "../../../atoms/dialog/dialog";
import Close from "../../../atoms/icon/close";
import Plus from "../../../atoms/icon/plus";
import Table, {
  TableBody,
  TableData,
  TableHead,
  TableRow,
} from "../../../atoms/table/table";
import FormUMKM from "../../../molecules/form/form-umkm";

const ProfileUmkm = () => {
  const header = [
    "Nama UMKM",
    "Nama Pemilik",
    "Kategori",
    "No. Whatsapp",
    "Status",
  ];
  const data = [
    {
      name: "Desert Box Bu Ida",
      owner: "Ida",
      category: "Kuliner",
      number: "081234567890",
      status: "Aktif",
    },
    {
      name: "Desert Box Bu Ida",
      owner: "Ida",
      category: "Kuliner",
      number: "081234567890",
      status: "Aktif",
    },
    {
      name: "Desert Box Bu Ida",
      owner: "Ida",
      category: "Kuliner",
      number: "081234567890",
      status: "Aktif",
    },
  ];
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="w-full p-12 space-y-12">
        <div className="flex justify-between w-full">
          <div></div>
          <h1 className="text-3xl font-bold text-tosca-dark capitalize">
            Profil UMKM
          </h1>
          <div className="flex items-end">
            <ButtonIcon
              className="bg-tosca-darkest"
              label="Daftar UMKM"
              iconPossition="right"
              withIcon
              IconComponent={<Plus />}
              onClick={() => setShow(true)}
            />
          </div>
        </div>
        <Table>
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
                  <TableData>{e.name}</TableData>
                  <TableData>{e.owner}</TableData>
                  <TableData>{e.category}</TableData>
                  <TableData>{e.number}</TableData>
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
      <Dialog show={show}>
        <div className="relative">
          <FormUMKM />
          <div
            className="cursor-pointer absolute right-0 top-0"
            onClick={() => setShow(false)}
          >
            <Close />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProfileUmkm;
