import Link from "next/link";
import { useState } from "react";
import Button from "../../atoms/button/button";
import ButtonIcon from "../../atoms/button/button-icon";
import Dialog from "../../atoms/dialog/dialog";
import Close from "../../atoms/icon/close";
import Plus from "../../atoms/icon/plus";
import Input from "../../atoms/input/input";
import Table, {
  TableBody,
  TableData,
  TableHead,
  TableRow,
} from "../../atoms/table/table";
import FormSearch from "../../molecules/form/form-search";

const header = ["Kategori Forum", "Deskripsi", "Diskusi"];
const data = [
  {
    category: "Pelayanan Kantor Desa",
    desc: "Informasi terkait pelayanan kantor desa",
    diskusi: "5 Diskusi",
  },
  {
    category: "Program Desa",
    desc: "Informasi terkait program desa",
    diskusi: "5 Diskusi",
  },
];
const Forum = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between">
          <FormSearch />
          <ButtonIcon
            className="bg-tosca-darkest"
            label="Ajukan Topik Forum"
            iconPossition="right"
            withIcon
            IconComponent={<Plus />}
            onClick={() => setShow(true)}
          />
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
                  <TableData>
                    <Link href={`/forum/s${e}`}>
                      <a className="cursor-pointer underline text-[#6CACF3]">
                        {e.category}
                      </a>
                    </Link>
                  </TableData>
                  <TableData>{e.desc}</TableData>
                  <TableData>
                    <p className="text-tosca-darkest">{e.diskusi}</p>
                  </TableData>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <Dialog show={show}>
        <div className="relative">
          <div className="space-y-6">
            <h1>Pengajuan Topik Forum</h1>
            <div className="space-y-4">
              <Input
                label="Nama Topik"
                placeholder="Ketikkan nama usulan topik"
              ></Input>
              <Input label="Deskripsi" placeholder="Ketikkan deskripsi"></Input>
            </div>
            <Button
              label="Ajukan Topik"
              isFull
              onClick={() => setShow(false)}
            ></Button>
          </div>
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

export default Forum;
